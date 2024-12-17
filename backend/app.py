from flask import Flask, request, jsonify
import os
from werkzeug.utils import secure_filename
import json

import generate_qp

app = Flask(__name__)

# Configuration
UPLOAD_FOLDER = "uploads"  # Directory where uploaded files are saved
ALLOWED_EXTENSIONS = {'pdf', 'txt'}
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

# Ensure the upload folder exists
os.makedirs(UPLOAD_FOLDER, exist_ok=True)

def allowed_file(filename):
    return '.' in filename and filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS


# Route: /status (Health check)
@app.route('/status', methods=['GET'])
def status():
    return jsonify({'status': 'running', 'message': 'Server is healthy'}), 200

# Route: /generate_qp (Accept file and JSON data)
@app.route('/generate_qp', methods=['POST'])
def generate_qp():
    if 'file' not in request.files:
        return jsonify({'error': 'No file part in the request'}), 400

    file = request.files['file']
    json_data = request.form.get('data')
    
    if file.filename == '':
        return jsonify({'error': 'No file selected'}), 400
    if not json_data:
        return jsonify({'error': 'No JSON data provided'}), 400

    # Parse the JSON data
    try:
        data = json.loads(json_data)  # Alternatively use json.loads for safe parsing
    except Exception as e:
        return jsonify({'error': 'Invalid JSON data', 'details': str(e)}), 400

    # Validate file type
    if not allowed_file(file.filename):
        return jsonify({'error': 'File type not allowed. Only PDF or TXT allowed'}), 400

    # Save the uploaded file
    filename = secure_filename(file.filename)
    file_path = os.path.join(app.config['UPLOAD_FOLDER'], filename)
    file.save(file_path)

    # Call the appropriate function based on file type
    file_extension = filename.rsplit('.', 1)[1].lower()
    if file_extension == 'txt':
        response = generate_qp.generate_from_txt(data, file_path)
    elif file_extension == 'pdf':
        response = generate_qp.generate_from_pdf(data, file_path)
    else:
        return jsonify({'error': 'Unsupported file type'}), 400

    return jsonify(response), 200

if __name__ == '__main__':
    app.run(port=8500, debug=True)

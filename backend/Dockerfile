# Use a slim Python base image
FROM python:3.11-slim

# Set environment variables for consistent behavior
ENV PYTHONUNBUFFERED=1 \
    PYTHONDONTWRITEBYTECODE=1 \
    PIP_NO_CACHE_DIR=1

# Install system dependencies (Tesseract for OCR)
RUN apt-get update && apt-get install -y \
    tesseract-ocr \
    && apt-get clean

# Set the working directory inside the container
WORKDIR /app

# Copy only the backend folder files into the container
COPY . .

# Install Python dependencies from the requirements file
RUN pip install --no-cache-dir -r setup/requirements.txt

# Expose port 5000 (used by your app)
EXPOSE 5000

# Define the command to start the app
CMD ["gunicorn", "app:app", "--bind", "0.0.0.0:5000"]

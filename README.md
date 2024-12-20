# QPGen - Custom Question Paper Generator 📄💡

Welcome to **QPGen**, your ultimate tool for creating custom question papers effortlessly! Designed with educators in mind, QPGen simplifies the process of generating tailored question papers for any subject. Whether you're preparing for an exam, a quiz, or a test, QPGen has got you covered.

### What Can QPGen Do for You?

- ✉️ **Upload chapter content**: Provide input in `.txt` or `.pdf` formats containing chapter details or study material.
- ✨ **Generate unique questions**: Automatically create a variety of questions tailored to the provided content, ensuring relevancy and diversity.
- 📄 **Export your question paper**: Seamlessly download the generated question paper in Word (`.docx`) format for easy editing and sharing.
- 🚀 **Intuitive interface**: Enjoy a simple, user-friendly design that makes question-paper creation accessible even for non-technical users.

With QPGen, educators can save countless hours while maintaining high-quality standards for their question papers. Experience the convenience of automation with the personalized touch you need.

---

## 🌐 Live Demo

Try out QPGen directly on our live site: [qp-gen.netlify.app](https://qp-gen.netlify.app/)

---

## 🔧 How to Set Up QPGen Locally

QPGen is organized as a **monorepo**, containing both the frontend and backend components:

- **`/frontend`**: The React.js frontend that provides the web interface.
- **`/backend`**: The Python Flask backend that powers the question generation logic.

Setting up QPGen locally is straightforward. Follow the step-by-step guide below to get started:

### ⚙️ Prerequisites

#### Frontend Requirements:
- 💡 **Node.js** (>=16.x)
- 🔧 **npm** or **yarn**

#### Backend Requirements:
- 💡 **Python** (>=3.8)
- 🌀 Virtual environment (recommended for Python)

---

### 📃 Step-by-Step Setup

1. **Clone the Repository 🔗**:
   ```bash
   git clone https://github.com/Swayamkh02/QPGen.git
   cd QPGen
   ```

2. **Set Up the Frontend 🎨**:
   - Navigate to the `frontend` directory:
     ```bash
     cd frontend
     ```
   - Install dependencies:
     ```bash
     npm install
     # or
     yarn install
     ```
   - Start the development server:
     ```bash
     npm start
     # or
     yarn start
     ```
   - The frontend will run on `http://localhost:3000/` by default.

3. **Set Up the Backend 🔧**:
   - Navigate to the `backend` directory:
     ```bash
     cd ../backend
     ```
   - Create a virtual environment:
     ```bash
     python -m venv venv
     ```
   - Activate the virtual environment:
     - On Linux/Mac:
       ```bash
       source venv/bin/activate
       ```
     - On Windows:
       ```bash
       venv\Scripts\activate
       ```
   - Install dependencies:
     ```bash
     pip install -r setup/requirements.txt
     ```
   - Start the Flask server:
     ```bash
     python app.py
     ```
   - The backend will run on `http://localhost:5000/` by default.

4. **Connect Frontend and Backend 🔄**:
   - Ensure the backend URL is correctly configured in the frontend project (e.g., in `.env` or an API configuration file).
   - Example: Update the API URL to `http://localhost:5000/` in the frontend's configuration file.

5. **Run the Full Application 🎉**:
   - Access the application at `http://localhost:3000/`.
   - Upload chapter content, generate custom questions, and download them as Word files!

---

## 💡 Tips for Best Experience

- Use clear and structured chapter content for better question generation.
- Ensure Python and Node.js dependencies are up to date.
- Run both the frontend and backend simultaneously to experience the full functionality.

---

## 📚 Contributions

We welcome contributions to improve QPGen! Here are some ways you can contribute:

- 🔒 **Report issues**: Found a bug or have a feature request? Open an issue on the [GitHub repository](https://github.com/Swayamkh02/QPGen).
- 🔧 **Submit pull requests**: Share your improvements with the community.
- 🎨 **Suggest ideas**: Have an idea to make QPGen better? Let us know!

---

## 🔧 Author

Created with passion by **Swayam Khandelwal** ([GitHub Profile](https://github.com/Swayamkh02)).

---

🙏 Thank you for choosing QPGen! We hope this tool makes question-paper creation a breeze. If you have feedback or suggestions, don’t hesitate to reach out. Happy teaching! 🎓

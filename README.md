# Interactive Reading Card Generator

A web application that converts PDFs, Word documents, and text files into interactive reading cards for enhanced learning and comprehension.

## Features

- **Document Processing**: Upload and process PDF, Word (.docx), and text files
- **Interactive Cards**: Automatically generate reading cards from document content
- **Study Mode**: Toggle between reading and study modes for better retention
- **Note Taking**: Add notes to specific cards for personalized learning
- **Highlighting**: Highlight important content within cards
- **Progress Tracking**: Track which cards you've already learned

## Technology Stack

- Python Flask for backend processing
- Bootstrap for responsive UI
- NLTK for natural language processing
- PyMuPDF for PDF parsing
- docx2txt for Word document parsing

## Deployment Options

### Option 1: Standard Deployment (Backend + Frontend)

This approach deploys both the backend processing and frontend as a single application.

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/interactive-reading-cards.git
   cd interactive-reading-cards
   ```

2. Install dependencies:
   ```
   pip install -r requirements.txt
   ```

3. Run the application:
   ```
   python app.py
   ```

4. Access the application at `http://localhost:5000`

### Option 2: Static Frontend with Separate Backend Service

This approach deploys the frontend as a static site and the backend as a separate service.

#### Backend Deployment:

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/interactive-reading-cards.git
   cd interactive-reading-cards
   ```

2. Configure for API service:
   ```
   # Edit app.py to ensure CORS is properly configured
   # Add to the top of app.py:
   from flask_cors import CORS
   # Then add after app creation:
   CORS(app)
   ```

3. Deploy the backend to a hosting service like Heroku, AWS, or Google Cloud.

#### Frontend Deployment:

1. Create a static version of the frontend:
   ```
   mkdir -p static_site/css static_site/js
   cp static/css/style.css static_site/css/
   cp static/js/script.js static_site/js/
   ```

2. Update the frontend code to call your backend API instead of direct form submission.
   Create an `index.html` file in the `static_site` directory that points to your backend API.

3. Deploy the static site to services like GitHub Pages, Netlify, or Vercel:
   ```
   # For GitHub Pages
   git subtree push --prefix static_site origin gh-pages
   ```

### Option 3: Docker Deployment

1. Build the Docker image:
   ```
   docker build -t reading-cards-app .
   ```

2. Run the container:
   ```
   docker run -p 5000:5000 reading-cards-app
   ```

3. Access the application at `http://localhost:5000`

## Git Repository Setup

1. Initialize a Git repository:
   ```
   git init
   ```

2. Create a `.gitignore` file:
   ```
   echo "uploads/
   cards/
   __pycache__/
   *.pyc
   venv/
   .env" > .gitignore
   ```

3. Add files to the repository:
   ```
   git add .
   git commit -m "Initial commit"
   ```

4. Create a repository on GitHub or GitLab and push your code:
   ```
   git remote add origin https://github.com/yourusername/interactive-reading-cards.git
   git push -u origin main
   ```

## Continuous Integration/Deployment (CI/CD)

You can set up automated deployment with GitHub Actions or GitLab CI:

### GitHub Actions

Create a file `.github/workflows/deploy.yml`:

```yaml
name: Deploy Application

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v2
    - name: Set up Python
      uses: actions/setup-python@v2
      with:
        python-version: '3.9'
    - name: Install dependencies
      run: |
        python -m pip install --upgrade pip
        pip install -r requirements.txt
    - name: Run tests
      run: |
        pytest
    - name: Deploy to Heroku
      uses: akhileshns/heroku-deploy@v3.12.12
      with:
        heroku_api_key: ${{ secrets.HEROKU_API_KEY }}
        heroku_app_name: "your-heroku-app-name"
        heroku_email: "your-email@example.com"
```

## Project Structure

```
interactive-reading-cards/
├── app.py                  # Main Flask application
├── requirements.txt        # Python dependencies
├── Dockerfile              # Docker configuration
├── static/                 # Static assets
│   ├── css/
│   │   └── style.css       # Custom styles
│   └── js/
│       └── script.js       # Custom JavaScript
├── templates/              # HTML templates
│   ├── base.html           # Base template
│   ├── index.html          # Homepage
│   └── cards.html          # Cards view
├── uploads/                # Directory for uploaded files
└── cards/                  # Directory for generated cards
```

## License

MIT License

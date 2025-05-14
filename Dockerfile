# Interactive Reading Card Generator - Dockerfile

FROM python:3.9-slim

WORKDIR /app

COPY requirements.txt .

RUN apt-get update && \
    apt-get install -y --no-install-recommends \
    build-essential \
    python3-dev \
    libmupdf-dev \
    && pip install --no-cache-dir -r requirements.txt \
    && apt-get purge -y --auto-remove build-essential python3-dev \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*

COPY . .

# Create necessary directories
RUN mkdir -p uploads cards static/css static/js

# Copy static files
COPY static/css/style.css static/css/
COPY static/js/script.js static/js/

# Make the uploads directory writable
RUN chmod 777 uploads cards

EXPOSE 5000

CMD ["gunicorn", "--bind", "0.0.0.0:5000", "app:app"]

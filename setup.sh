#!/bin/bash

# Install dependencies
npm install

# Create .env file if not exists
if [ ! -f .env ]; then
    echo "MONGODB_URI=mongodb://127.0.0.1:27017" >> .env
    echo "ADMIN_KEY=Basic YWxhZGRpbjpvcGVuc2VzYW1l" >> .env
    echo "JWT_SECRET=09f26e402586e2faa8da4c98a35f1b20d6b033c6097befa8be3486a829587fe2f90a832bd3ff9d42710a4da095a2ce285b009f0c3730cd9b8e1af3eb84df6611" >> .env
    echo "PORT=3000" >> .env
    echo ".env file created successfully"
fi

echo "Setup complete"

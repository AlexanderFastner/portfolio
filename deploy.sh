#!/bin/bash
# Bash deployment script for Next.js portfolio
# Builds the static site and deploys to Firebase Hosting

set -e

echo "Building Next.js static site..."
npm run build

if [ $? -ne 0 ]; then
    echo "Build failed!"
    exit 1
fi

echo "Deploying to Firebase Hosting..."
firebase deploy --only hosting

if [ $? -ne 0 ]; then
    echo "Deployment failed!"
    exit 1
fi

echo "Deployment completed successfully!"


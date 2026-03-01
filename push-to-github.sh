#!/bin/bash
# Run this script from the project root to push to GitHub.
# Usage: chmod +x push-to-github.sh && ./push-to-github.sh

set -e
cd "$(dirname "$0")"

REMOTE="https://github.com/dubaiexpat/DubaiExpat.git"

echo "Initialising git..."
git init
git add .
git commit -m "Initial Dubai Expat site" || true

echo "Setting remote and branch..."
git branch -M main
git remote remove origin 2>/dev/null || true
git remote add origin "$REMOTE"

echo "Pushing to GitHub..."
git push -u origin main

echo "Done. Your project is at $REMOTE"

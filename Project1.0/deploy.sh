#!/bin/bash

# ProjetVNET Deployment Script
echo "🚀 Deploying ProjetVNET..."

# Check if git is available
if ! command -v git &> /dev/null; then
    echo "❌ Git is not installed. Please install Git first."
    exit 1
fi

# Check if we're in a git repository
if [ ! -d ".git" ]; then
    echo "📦 Initializing Git repository..."
    git init
    git add .
    git commit -m "Initial commit: ProjetVNET v1.0.0"
fi

# Add all files to git
echo "📝 Adding files to Git..."
git add .

# Commit changes
echo "💾 Committing changes..."
git commit -m "Deploy ProjetVNET v1.0.0 - $(date)"

# Check if remote origin exists
if git remote get-url origin &> /dev/null; then
    echo "🌐 Pushing to remote repository..."
    git push origin main
else
    echo "⚠️  No remote repository configured."
    echo "To deploy to GitHub Pages:"
    echo "1. Create a new repository on GitHub"
    echo "2. Run: git remote add origin https://github.com/yourusername/your-repo.git"
    echo "3. Run: git push -u origin main"
    echo "4. Enable GitHub Pages in repository settings"
fi

echo "✅ Deployment preparation complete!"
echo ""
echo "🎯 Deployment Options:"
echo "1. GitHub Pages: Push to GitHub and enable Pages"
echo "2. Netlify: Drag & drop this folder to netlify.com"
echo "3. Vercel: Run 'vercel' command"
echo "4. Firebase: Run 'firebase deploy'"
echo ""
echo "📚 See README.md for detailed deployment instructions."

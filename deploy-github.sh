#!/bin/bash

# ProjetVNET GitHub Deployment Script
echo "🚀 Deploying ProjetVNET to GitHub Pages..."

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Check if git is available
if ! command -v git &> /dev/null; then
    echo -e "${RED}❌ Git is not installed. Please install Git first.${NC}"
    exit 1
fi

# Check if we're in a git repository
if [ ! -d ".git" ]; then
    echo -e "${YELLOW}📦 Initializing Git repository...${NC}"
    git init
    git add .
    git commit -m "Initial commit: ProjetVNET v1.0.0"
fi

# Add all files to git
echo -e "${BLUE}📝 Adding files to Git...${NC}"
git add .

# Commit changes
echo -e "${BLUE}💾 Committing changes...${NC}"
git commit -m "Deploy ProjetVNET v1.0.0 - $(date)"

# Check if remote origin exists
if git remote get-url origin &> /dev/null; then
    echo -e "${BLUE}🌐 Pushing to remote repository...${NC}"
    git push origin main
else
    echo -e "${YELLOW}⚠️  No remote repository configured.${NC}"
    echo -e "${YELLOW}To deploy to GitHub Pages:${NC}"
    echo -e "${YELLOW}1. Create a new repository on GitHub${NC}"
    echo -e "${YELLOW}2. Run: git remote add origin https://github.com/yourusername/your-repo.git${NC}"
    echo -e "${YELLOW}3. Run: git push -u origin main${NC}"
    echo -e "${YELLOW}4. Enable GitHub Pages in repository settings${NC}"
    echo ""
    echo -e "${GREEN}🎯 GitHub Pages Setup Instructions:${NC}"
    echo -e "${GREEN}1. Go to your repository on GitHub${NC}"
    echo -e "${GREEN}2. Click on 'Settings' tab${NC}"
    echo -e "${GREEN}3. Scroll down to 'Pages' section${NC}"
    echo -e "${GREEN}4. Under 'Source', select 'Deploy from a branch'${NC}"
    echo -e "${GREEN}5. Select 'main' branch and '/ (root)' folder${NC}"
    echo -e "${GREEN}6. Click 'Save'${NC}"
    echo -e "${GREEN}7. Your site will be available at: https://yourusername.github.io/your-repo${NC}"
fi

echo -e "${GREEN}✅ Deployment preparation complete!${NC}"
echo ""
echo -e "${GREEN}🎯 Next Steps:${NC}"
echo -e "${GREEN}1. Push your code to GitHub${NC}"
echo -e "${GREEN}2. Enable GitHub Pages in repository settings${NC}"
echo -e "${GREEN}3. Wait 5-10 minutes for deployment${NC}"
echo -e "${GREEN}4. Visit your live site!${NC}"
echo ""
echo -e "${BLUE}📚 See README-GitHub.md for detailed instructions.${NC}"

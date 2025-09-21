@echo off
echo 🚀 Deploying ProjetVNET to GitHub Pages...

REM Check if git is available
git --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ Git is not installed. Please install Git first.
    pause
    exit /b 1
)

REM Check if we're in a git repository
if not exist ".git" (
    echo 📦 Initializing Git repository...
    git init
    git add .
    git commit -m "Initial commit: ProjetVNET v1.0.0"
)

REM Add all files to git
echo 📝 Adding files to Git...
git add .

REM Commit changes
echo 💾 Committing changes...
git commit -m "Deploy ProjetVNET v1.0.0 - %date% %time%"

REM Check if remote origin exists
git remote get-url origin >nul 2>&1
if %errorlevel% equ 0 (
    echo 🌐 Pushing to remote repository...
    git push origin main
) else (
    echo ⚠️  No remote repository configured.
    echo To deploy to GitHub Pages:
    echo 1. Create a new repository on GitHub
    echo 2. Run: git remote add origin https://github.com/yourusername/your-repo.git
    echo 3. Run: git push -u origin main
    echo 4. Enable GitHub Pages in repository settings
    echo.
    echo 🎯 GitHub Pages Setup Instructions:
    echo 1. Go to your repository on GitHub
    echo 2. Click on 'Settings' tab
    echo 3. Scroll down to 'Pages' section
    echo 4. Under 'Source', select 'Deploy from a branch'
    echo 5. Select 'main' branch and '/ (root)' folder
    echo 6. Click 'Save'
    echo 7. Your site will be available at: https://yourusername.github.io/your-repo
)

echo ✅ Deployment preparation complete!
echo.
echo 🎯 Next Steps:
echo 1. Push your code to GitHub
echo 2. Enable GitHub Pages in repository settings
echo 3. Wait 5-10 minutes for deployment
echo 4. Visit your live site!
echo.
echo 📚 See README-GitHub.md for detailed instructions.
pause

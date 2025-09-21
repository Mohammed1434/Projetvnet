# ProjetVNET - Interactive Web Development Learning Platform

![ProjetVNET Logo](https://img.shields.io/badge/ProjetVNET-v1.0.0-green?style=for-the-badge&logo=code&logoColor=white)

A modern, interactive web development learning platform featuring a VS Code-like editor, comprehensive courses, and real-time code execution.

## 🚀 Features

### 🎯 Core Features
- **Interactive Code Editor**: VS Code-like interface with syntax highlighting
- **Real-time Preview**: Live code execution with desktop and mobile views
- **Course Management**: Structured learning paths for HTML, CSS, and JavaScript
- **Quiz System**: Interactive quizzes with instant feedback
- **Progress Tracking**: Save and track your learning progress
- **Responsive Design**: Works perfectly on all devices

### 🎨 Customization
- **Multiple Themes**: Choose from Green, Blue, Pink, or Black accent colors
- **Privacy Controls**: Granular privacy settings for your profile and data
- **Personalization**: Customizable user preferences and settings

### 🔧 Technical Features
- **Modern UI/UX**: Beautiful dark theme with neon accents
- **Smooth Animations**: Engaging micro-interactions and transitions
- **Local Storage**: Persistent settings and progress tracking
- **Cross-browser Compatible**: Works on all modern browsers

## 📁 Project Structure

```
projetvnet/
├── index.html              # Landing page
├── dashboard.html          # Main dashboard
├── code-editor.html        # Interactive code editor
├── course.html            # Course selection page
├── lesson.html            # Individual lesson page
├── settings.html          # User settings and preferences
├── profile.html           # User profile page
├── login.html             # Login page
├── signup.html            # Registration page
├── welcome.html           # Welcome page
├── user-home.html         # User home page
├── style.css              # Main stylesheet
├── theme.css              # Theme variables and base styles
├── auth.css               # Authentication styles
├── auth.js                # Authentication logic
├── images/                # Image assets
│   ├── card1.png
│   ├── card2.png
│   └── card3.png
├── package.json           # Project configuration
└── README.md              # This file
```

## 🛠️ Installation & Setup

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- Node.js (optional, for local development server)

### Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/projetvnet.git
   cd projetvnet
   ```

2. **Install dependencies (optional)**
   ```bash
   npm install
   ```

3. **Start local server (optional)**
   ```bash
   npm start
   ```
   This will start a local server at `http://localhost:3000`

4. **Or simply open `index.html` in your browser**

## 🚀 Deployment

### GitHub Pages (Recommended)

**Quick GitHub Pages Setup:**

1. **Fork this repository** or create a new one
2. **Upload all files** to your repository
3. **Enable GitHub Pages:**
   - Go to repository Settings
   - Scroll to "Pages" section
   - Select "Deploy from a branch"
   - Choose "main" branch
   - Click "Save"
4. **Your site will be live at:** `https://yourusername.github.io/repository-name`

**Automated Deployment:**
```bash
# Use our GitHub deployment script
./deploy-github.sh    # Linux/Mac
deploy-github.bat     # Windows
```

### Other Static Hosting Options

The project is ready for deployment to any static hosting service:

#### Netlify
1. Drag and drop the project folder to [Netlify](https://netlify.com)
2. Or connect your GitHub repository for automatic deployments

#### Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel` in the project directory
3. Follow the prompts

#### Firebase Hosting
1. Install Firebase CLI: `npm install -g firebase-tools`
2. Run `firebase init hosting`
3. Run `firebase deploy`

### Traditional Web Hosting
Simply upload all files to your web server's public directory.

## 🎯 Usage

### Getting Started
1. **Visit the Landing Page**: Open `index.html` to see the main page
2. **Sign Up/Login**: Create an account or login to access features
3. **Explore Courses**: Browse available web development courses
4. **Start Coding**: Use the interactive code editor to practice
5. **Track Progress**: Monitor your learning journey in the dashboard

### Code Editor Features
- **Syntax Highlighting**: VS Code-like syntax highlighting
- **Live Preview**: Real-time code execution
- **Device Preview**: Switch between desktop and mobile views
- **Task Panel**: Floating task guidance panel
- **Save/Load**: Download your code or load examples

### Settings & Customization
- **Theme Colors**: Choose from 4 accent color themes
- **Privacy Settings**: Control profile visibility and data sharing
- **Account Security**: Change password and manage account settings
- **Preferences**: Toggle animations, notifications, and other features

## 🎨 Customization

### Adding New Themes
1. Open `settings.html`
2. Add new theme option in the theme grid
3. Update the `setAccentTheme()` function with new colors
4. Add corresponding CSS classes

### Adding New Courses
1. Update course data in `course.html`
2. Add lesson content in the respective lesson files
3. Update progress tracking logic

### Styling Changes
- **Main Styles**: Edit `style.css`
- **Theme Variables**: Modify `theme.css`
- **Component Styles**: Update individual HTML files

## 🔧 Technical Details

### Technologies Used
- **HTML5**: Semantic markup and modern features
- **CSS3**: Flexbox, Grid, animations, and custom properties
- **JavaScript (ES6+)**: Modern JavaScript features
- **CodeMirror**: Code editor with syntax highlighting
- **Font Awesome**: Icon library
- **Google Fonts**: Typography (Poppins, Fira Code)

### Browser Support
- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

### Performance Optimizations
- **Lazy Loading**: Images and resources loaded on demand
- **CSS Optimization**: Minified and optimized stylesheets
- **JavaScript Optimization**: Efficient event handling and DOM manipulation
- **Local Storage**: Efficient data persistence

## 🤝 Contributing

We welcome contributions! Here's how you can help:

1. **Fork the repository**
2. **Create a feature branch**: `git checkout -b feature/amazing-feature`
3. **Commit your changes**: `git commit -m 'Add amazing feature'`
4. **Push to the branch**: `git push origin feature/amazing-feature`
5. **Open a Pull Request**

### Development Guidelines
- Follow existing code style and conventions
- Test your changes across different browsers
- Update documentation for new features
- Ensure responsive design compatibility

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **CodeMirror**: For the excellent code editor
- **Font Awesome**: For the beautiful icons
- **Google Fonts**: For the typography
- **Community**: For feedback and suggestions

## 📞 Support

- **Issues**: [GitHub Issues](https://github.com/yourusername/projetvnet/issues)
- **Discussions**: [GitHub Discussions](https://github.com/yourusername/projetvnet/discussions)
- **Email**: support@projetvnet.com

## 🗺️ Roadmap

### Version 1.1 (Coming Soon)
- [ ] User authentication system
- [ ] Course progress synchronization
- [ ] Social features (sharing, comments)
- [ ] Advanced code editor features

### Version 1.2 (Future)
- [ ] Mobile app
- [ ] Offline support
- [ ] Advanced analytics
- [ ] AI-powered code suggestions

---

**Made with ❤️ by the ProjetVNET Team**

*Empowering developers, one line of code at a time.*

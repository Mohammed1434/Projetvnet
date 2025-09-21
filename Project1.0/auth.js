// Authentication JavaScript

// Local storage keys
const USERS_KEY = 'projetvnet_users';
const CURRENT_USER_KEY = 'projetvnet_current_user';

// Initialize users array if it doesn't exist
function initializeUsers() {
    if (!localStorage.getItem(USERS_KEY)) {
        localStorage.setItem(USERS_KEY, JSON.stringify([]));
    }
}

// Get all users from localStorage
function getUsers() {
    return JSON.parse(localStorage.getItem(USERS_KEY) || '[]');
}

// Save users to localStorage
function saveUsers(users) {
    localStorage.setItem(USERS_KEY, JSON.stringify(users));
}

// Generate unique username from email
function generateUsernameFromEmail(email) {
    const emailPrefix = email.split('@')[0];
    const timestamp = Date.now().toString().slice(-4);
    return `${emailPrefix}${timestamp}`;
}

// Check if username is taken
function isUsernameTaken(username) {
    const users = getUsers();
    return users.some(user => user.username === username);
}

// Check if email is already registered
function isEmailRegistered(email) {
    const users = getUsers();
    return users.some(user => user.email === email);
}

// Password validation
function validatePassword(password) {
    const requirements = {
        length: password.length >= 8,
        capital: /[A-Z]/.test(password),
        number: /\d/.test(password),
        special: /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password)
    };
    
    return requirements;
}

// Update password requirements UI
function updatePasswordRequirements(password) {
    const requirements = validatePassword(password);
    
    const lengthReq = document.getElementById('lengthReq');
    const capitalReq = document.getElementById('capitalReq');
    const numberReq = document.getElementById('numberReq');
    const specialReq = document.getElementById('specialReq');
    
    if (lengthReq) {
        lengthReq.classList.toggle('valid', requirements.length);
        const icon = lengthReq.querySelector('i');
        icon.className = requirements.length ? 'fas fa-check' : 'fas fa-times';
    }
    
    if (capitalReq) {
        capitalReq.classList.toggle('valid', requirements.capital);
        const icon = capitalReq.querySelector('i');
        icon.className = requirements.capital ? 'fas fa-check' : 'fas fa-times';
    }
    
    if (numberReq) {
        numberReq.classList.toggle('valid', requirements.number);
        const icon = numberReq.querySelector('i');
        icon.className = requirements.number ? 'fas fa-check' : 'fas fa-times';
    }
    
    if (specialReq) {
        specialReq.classList.toggle('valid', requirements.special);
        const icon = specialReq.querySelector('i');
        icon.className = requirements.special ? 'fas fa-check' : 'fas fa-times';
    }
    
    return Object.values(requirements).every(req => req);
}

// Show error message
function showError(elementId, message) {
    const errorElement = document.getElementById(elementId);
    if (errorElement) {
        errorElement.textContent = message;
        errorElement.classList.add('show');
    }
}

// Hide error message
function hideError(elementId) {
    const errorElement = document.getElementById(elementId);
    if (errorElement) {
        errorElement.classList.remove('show');
    }
}

// Toggle password visibility
function togglePassword(inputId) {
    const input = document.getElementById(inputId);
    const button = input.parentElement.querySelector('.toggle-password');
    const icon = button.querySelector('i');
    
    if (input.type === 'password') {
        input.type = 'text';
        icon.className = 'fas fa-eye-slash';
    } else {
        input.type = 'password';
        icon.className = 'fas fa-eye';
    }
}


// Initialize authentication
document.addEventListener('DOMContentLoaded', function() {
    initializeUsers();
    
    // Password validation for signup
    const signupPassword = document.getElementById('signupPassword');
    if (signupPassword) {
        signupPassword.addEventListener('input', function() {
            updatePasswordRequirements(this.value);
        });
    }
    
    // Email validation for signup
    const signupEmail = document.getElementById('signupEmail');
    if (signupEmail) {
        signupEmail.addEventListener('blur', function() {
            const email = this.value.trim();
            if (email && isEmailRegistered(email)) {
                showError('emailError', 'You are already a user! Want help logging in?');
            } else {
                hideError('emailError');
            }
        });
    }
    
    // Confirm password validation
    const confirmPassword = document.getElementById('confirmPassword');
    if (confirmPassword) {
        confirmPassword.addEventListener('input', function() {
            const password = document.getElementById('signupPassword').value;
            if (this.value !== password) {
                showError('confirmError', 'Passwords do not match');
            } else {
                hideError('confirmError');
            }
        });
    }
    
    // Login form submission
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const identifier = document.getElementById('loginIdentifier').value.trim();
            const password = document.getElementById('loginPassword').value;
            
            // Clear previous errors
            hideError('loginIdentifierError');
            hideError('loginPasswordError');
            
            if (!identifier || !password) {
                if (!identifier) {
                    showError('loginIdentifierError', 'Please enter your email or username');
                }
                if (!password) {
                    showError('loginPasswordError', 'Please enter your password');
                }
                return;
            }
            
            const users = getUsers();
            const user = users.find(u => 
                u.email === identifier || u.username === identifier
            );
            
            if (!user) {
                // User doesn't exist
                showError('loginIdentifierError', 'Email or username doesn\'t exist');
                return;
            }
            
            if (user.password !== password) {
                // Wrong password
                showError('loginPasswordError', 'Password doesn\'t match');
                return;
            }
            
            // Login successful
            localStorage.setItem(CURRENT_USER_KEY, JSON.stringify({
                id: user.id,
                email: user.email,
                username: user.username
            }));
            
            // Show success message briefly before redirect
            const submitBtn = document.querySelector('#loginForm .auth-btn');
            submitBtn.innerHTML = '<span>Welcome back, ' + user.username + '!</span>';
            submitBtn.style.background = 'linear-gradient(45deg, #00cc6a, #1eff00)';
            
            setTimeout(() => {
                // Check if there's a redirect URL
                const redirectUrl = localStorage.getItem('redirectAfterLogin') || 'index.html';
                localStorage.removeItem('redirectAfterLogin');
                window.location.href = redirectUrl;
            }, 1000);
        });
    }
    
    // Signup form submission
    const signupForm = document.getElementById('signupForm');
    if (signupForm) {
        signupForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const email = document.getElementById('signupEmail').value.trim();
            const password = document.getElementById('signupPassword').value;
            const confirmPassword = document.getElementById('confirmPassword').value;
            const agreeTerms = document.getElementById('agreeTerms').checked;
            
            // Generate username from email
            const username = generateUsernameFromEmail(email);
            
            // Clear previous errors
            hideError('emailError');
            hideError('confirmError');
            
            // Validation
            if (!email || !password || !confirmPassword) {
                if (!email) showError('emailError', 'Please enter your email address');
                if (!password) showError('signupPassword', 'Please enter a password');
                if (!confirmPassword) showError('confirmError', 'Please confirm your password');
                return;
            }
            
            if (!agreeTerms) {
                showError('emailError', 'Please agree to the Terms of Service and Privacy Policy');
                return;
            }
            
            if (isEmailRegistered(email)) {
                showError('emailError', 'You are already a user! Want help logging in?');
                return;
            }
            
            if (password !== confirmPassword) {
                showError('confirmError', 'Passwords do not match');
                return;
            }
            
            const passwordValid = updatePasswordRequirements(password);
            if (!passwordValid) {
                alert('Password does not meet all requirements');
                return;
            }
            
            // Create new user
            const users = getUsers();
            const newUser = {
                id: Date.now(),
                email: email,
                username: username,
                password: password,
                createdAt: new Date().toISOString()
            };
            
            users.push(newUser);
            saveUsers(users);
            
            // Store current user
            localStorage.setItem(CURRENT_USER_KEY, JSON.stringify({
                id: newUser.id,
                email: newUser.email,
                username: newUser.username
            }));
            
            // Show success message briefly before redirect
            const submitBtn = document.querySelector('#signupForm .auth-btn');
            submitBtn.innerHTML = '<span>Welcome to VNET, ' + username + '!</span>';
            submitBtn.style.background = 'linear-gradient(45deg, #00cc6a, #1eff00)';
            
            setTimeout(() => {
                // Check if there's a redirect URL
                const redirectUrl = localStorage.getItem('redirectAfterLogin') || 'index.html';
                localStorage.removeItem('redirectAfterLogin');
                window.location.href = redirectUrl;
            }, 1000);
        });
    }
});

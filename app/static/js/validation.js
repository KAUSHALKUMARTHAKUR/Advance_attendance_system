document.addEventListener('DOMContentLoaded', function() {
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirm_password');
    const passwordError = document.getElementById('passwordError');
    const registerBtn = document.getElementById('registerBtn');
    const registrationForm = document.getElementById('registrationForm');
    
    // Password validation
    if (confirmPasswordInput && passwordInput) {
        function validatePasswords() {
            if (passwordInput.value !== confirmPasswordInput.value) {
                passwordError.classList.remove('d-none');
                return false;
            } else {
                passwordError.classList.add('d-none');
                return true;
            }
        }
        
        confirmPasswordInput.addEventListener('input', validatePasswords);
        passwordInput.addEventListener('input', validatePasswords);
    }
    
    // Form validation
    if (registrationForm) {
        registrationForm.addEventListener('submit', function(event) {
            // Check if passwords match
            if (confirmPasswordInput && passwordInput) {
                if (!validatePasswords()) {
                    event.preventDefault();
                    return false;
                }
            }
            
            // Check if face image is captured
            const faceImageInput = document.getElementById('face_image');
            if (!faceImageInput.value) {
                event.preventDefault();
                alert('Please capture your face image before registering.');
                return false;
            }
            
            return true;
        });
    }
    
    // Login form toggle
    const credentialOption = document.getElementById('credentialOption');
    const faceOption = document.getElementById('faceOption');
    const credentialLoginForm = document.getElementById('credentialLoginForm');
    const faceLoginForm = document.getElementById('faceLoginForm');
    
    if (credentialOption && faceOption) {
        credentialOption.addEventListener('click', function() {
            credentialOption.classList.add('active');
            faceOption.classList.remove('active');
            credentialLoginForm.classList.remove('d-none');
            faceLoginForm.classList.add('d-none');
        });
        
        faceOption.addEventListener('click', function() {
            faceOption.classList.add('active');
            credentialOption.classList.remove('active');
            faceLoginForm.classList.remove('d-none');
            credentialLoginForm.classList.add('d-none');
        });
    }
});

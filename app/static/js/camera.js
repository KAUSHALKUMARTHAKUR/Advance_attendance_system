document.addEventListener('DOMContentLoaded', function() {
    const video = document.getElementById('video');
    const canvas = document.getElementById('canvas');
    const startCameraBtn = document.getElementById('startCamera');
    const captureImageBtn = document.getElementById('captureImage');
    const retakeImageBtn = document.getElementById('retakeImage');
    const faceImageInput = document.getElementById('face_image');
    const cameraOverlay = document.getElementById('cameraOverlay');
    const registerBtn = document.getElementById('registerBtn');
    const faceLoginBtn = document.getElementById('faceLoginBtn');
    
    let stream = null;
    
    // Start camera
    if (startCameraBtn) {
        startCameraBtn.addEventListener('click', async function() {
            try {
                stream = await navigator.mediaDevices.getUserMedia({ video: true });
                video.srcObject = stream;
                
                startCameraBtn.classList.add('d-none');
                captureImageBtn.classList.remove('d-none');
                
            } catch (err) {
                console.error('Error accessing camera:', err);
                alert('Could not access the camera. Please make sure it is connected and permissions are granted.');
            }
        });
    }
    
    // Capture image
    if (captureImageBtn) {
        captureImageBtn.addEventListener('click', function() {
            // Set canvas dimensions to match video
            canvas.width = video.videoWidth;
            canvas.height = video.videoHeight;
            
            // Draw video frame to canvas
            const context = canvas.getContext('2d');
            context.drawImage(video, 0, 0, canvas.width, canvas.height);
            
            // Convert canvas to base64 image
            const imageDataUrl = canvas.toDataURL('image/jpeg');
            faceImageInput.value = imageDataUrl;
            
            // Stop camera stream
            if (stream) {
                stream.getTracks().forEach(track => track.stop());
            }
            
            // Update UI
            video.classList.add('d-none');
            canvas.classList.remove('d-none');
            captureImageBtn.classList.add('d-none');
            retakeImageBtn.classList.remove('d-none');
            cameraOverlay.classList.remove('d-none');
            
            // Enable register/login button
            if (registerBtn) registerBtn.disabled = false;
            if (faceLoginBtn) faceLoginBtn.disabled = false;
        });
    }
    
    // Retake image
    if (retakeImageBtn) {
        retakeImageBtn.addEventListener('click', async function() {
            try {
                // Restart camera
                stream = await navigator.mediaDevices.getUserMedia({ video: true });
                video.srcObject = stream;
                
                // Update UI
                video.classList.remove('d-none');
                canvas.classList.add('d-none');
                captureImageBtn.classList.remove('d-none');
                retakeImageBtn.classList.add('d-none');
                cameraOverlay.classList.add('d-none');
                
                // Clear face image input
                faceImageInput.value = '';
                
                // Disable register/login button
                if (registerBtn) registerBtn.disabled = true;
                if (faceLoginBtn) faceLoginBtn.disabled = true;
                
            } catch (err) {
                console.error('Error accessing camera:', err);
                alert('Could not access the camera. Please make sure it is connected and permissions are granted.');
            }
        });
    }
});

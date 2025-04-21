from flask import Flask, render_template, request, redirect, url_for, flash, session
import os

app = Flask(__name__, 
            static_folder='app/static',
            template_folder='app/templates')

app.secret_key = os.urandom(24)  # For session management

@app.route('/')
def index():
    return render_template('login.html')

@app.route('/register.html')
def register_page():
    return render_template('register.html')

@app.route('/login.html')
def login_page():
    return render_template('login.html')

@app.route('/register', methods=['POST'])
def register():
    # This is a placeholder for the actual registration logic
    # You would implement database storage here
    if request.method == 'POST':
        student_id = request.form.get('student_id')
        name = request.form.get('name')
        face_image = request.form.get('face_image')
        
        # For demonstration, just print the data
        print(f"Registering student: {name} (ID: {student_id})")
        print(f"Face image captured: {'Yes' if face_image else 'No'}")
        
        # In a real application, you would:
        # 1. Process the face image
        # 2. Extract face encodings
        # 3. Store student data and face encodings in MongoDB
        
        # Redirect to login page with a success message
        flash('Registration successful! You can now login.', 'success')
        return redirect('/login.html')
    
    return redirect('/register.html')

@app.route('/login', methods=['POST'])
def login():
    # This is a placeholder for the actual login logic
    if request.method == 'POST':
        student_id = request.form.get('student_id')
        password = request.form.get('password')
        
        # For demonstration, just print the data
        print(f"Login attempt for student ID: {student_id}")
        
        # In a real application, you would:
        # 1. Verify credentials against MongoDB
        # 2. Set session variables
        
        # For demo purposes, always succeed
        session['logged_in'] = True
        session['student_id'] = student_id
        session['name'] = "Demo Student"
        
        flash('Login successful!', 'success')
        return redirect('/dashboard')
    
    return redirect('/login.html')

@app.route('/face-login', methods=['POST'])
def face_login():
    # This is a placeholder for the actual face login logic
    if request.method == 'POST':
        face_image = request.form.get('face_image')
        
        # For demonstration, just print the data
        print(f"Face login attempt: {'Image received' if face_image else 'No image'}")
        
        # In a real application, you would:
        # 1. Process the face image
        # 2. Extract face encodings
        # 3. Compare with stored encodings in MongoDB
        # 4. Mark attendance if match found
        
        # For demo purposes, always succeed
        session['logged_in'] = True
        session['student_id'] = "DEMO123"
        session['name'] = "Face Login Demo"
        
        flash('Face login successful!', 'success')
        return redirect('/dashboard')
    
    return redirect('/login.html')

@app.route('/dashboard')
def dashboard():
    # Check if user is logged in
    if not session.get('logged_in'):
        flash('Please login first', 'danger')
        return redirect('/login.html')
    
    # In a real application, you would fetch attendance records
    return f"<h1>Welcome to your dashboard, {session.get('name')}!</h1><p>This is a placeholder for the student dashboard.</p><a href='/logout'>Logout</a>"

@app.route('/logout')
def logout():
    session.clear()
    flash('You have been logged out', 'success')
    return redirect('/login.html')

if __name__ == '__main__':
    app.run(debug=True)

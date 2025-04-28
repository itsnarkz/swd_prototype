import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import StudentController from '../controller/StudentController';
import ProctorController from '../controller/ProctorController';
import '../styles/Login.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [examCode, setExamCode] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    
    // Try to authenticate as student
    const student = StudentController.authenticateStudent(email, password);
    if (student) {
      const isAuthorized = StudentController.isStudentAuthorizedForExam(email, examCode);
      if (isAuthorized) {
        const exam = StudentController.getExamByCode(examCode);
        if (exam) {
          navigate('/student', { state: { student, examCode } });
        } else {
          alert('Exam session not found');
        }
      } else {
        alert('You are not authorized for this exam session');
      }
      return;
    }
    
    // Try to authenticate as proctor
    const proctor = ProctorController.authenticateProctor(email, password);
    if (proctor) {
      const isAuthorized = ProctorController.isProctorAuthorizedForExam(email, examCode);
      if (isAuthorized) {
        navigate('/proctor', { state: { proctor, examCode } });
      } else {
        alert('You are not authorized to proctor this exam session');
      }
      return;
    }
    
    // Authentication failed
    alert('Invalid credentials');
  };

  return (
    <div className="login-container">
      <h1>NEOS Exam System</h1>
      <h1>SWD392</h1>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Exam Code"
          value={examCode}
          onChange={(e) => setExamCode(e.target.value)}
          required
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
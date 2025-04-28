import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import StudentController from '../controller/StudentController';
import './StudentDashboard.css';

function StudentDashboard() {
  const location = useLocation();
  const { student, examCode } = location.state;
  const [examSession, setExamSession] = useState(null);
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState({});
  const [timeLeft, setTimeLeft] = useState(0);

  useEffect(() => {
    // Fetch exam session data
    const session = StudentController.getExamByCode(examCode);
    if (session) {
      setExamSession(session);
      setQuestions(session.getQuestions());
      setTimeLeft(session.getTimeLimit() * 60); // Convert minutes to seconds
    }
  }, [examCode]);

  useEffect(() => {
    // Timer countdown
    if (timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0 && examSession) {
      // Auto-submit when time is up
      handleSubmit(true);
    }
  }, [timeLeft, examSession]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  };

  const handleAnswerChange = (questionId, value) => {
    setAnswers({ ...answers, [questionId]: value });
  };

  const handleSubmit = (isAutoSubmit = false) => {
    console.log('Submitting exam, isAutoSubmit:', isAutoSubmit);
    
    if (Object.keys(answers).length === 0 && !isAutoSubmit) {
      alert('Please answer at least one question before submitting.');
      return;
    }
    
    const result = StudentController.submitAnswers(student.rollNumber, examCode, answers);
    if (result) {
      if (isAutoSubmit) {
        alert('Time is up! Your answers have been automatically submitted.');
      } else {
        alert('Answers submitted successfully!');
      }
    } else {
      alert('Failed to submit answers. Please try again.');
    }
  };

  if (!examSession) {
    return <div className="student-dashboard">Loading exam session...</div>;
  }

  return (
    <div className="student-dashboard">
      <div className="header">
        <h1>Welcome, {student.name}</h1>
        <div className="timer">Time Remaining: {formatTime(timeLeft)}</div>
      </div>
      
      <div className="exam-info">
        <h2>Exam Session: {examCode}</h2>
        <p>Answer all questions and submit before the time expires.</p>
      </div>
      
      <div className="questions-container">
        {questions.map((question) => (
          <div key={question.id} className="question-card">
            <p className="question-text">Question {question.id}: {question.content}</p>
            <div className="options">
              {question.getOptions().map((option, index) => (
                <label key={index} className="option">
                  <input
                    type="radio"
                    name={`question-${question.id}`}
                    value={option}
                    onChange={(e) => handleAnswerChange(question.id, e.target.value)}
                    checked={answers[question.id] === option}
                  />
                  {option}
                </label>
              ))}
            </div>
          </div>
        ))}
      </div>
      
      <button onClick={() => handleSubmit(false)} className="submit-button">
        Submit Exam
      </button>
    </div>
  );
}

export default StudentDashboard;
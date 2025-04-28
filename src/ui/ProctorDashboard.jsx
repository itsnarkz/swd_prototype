import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import ProctorController from '../controller/ProctorController';
import '../styles/ProctorDashboard.css';

function ProctorDashboard() {
  const location = useLocation();
  const navigate = useNavigate();
  const { proctor, examCode } = location.state;
  const [students, setStudents] = useState([]);
  const [cheatingAlerts, setCheatingAlerts] = useState([]);
  const [examSession, setExamSession] = useState(null);
  const [timeLeft, setTimeLeft] = useState(0);
  const [examEnded, setExamEnded] = useState(false);

  // Generate fake submission statuses for demo purposes
  const submissionStatuses = ['Not Started', 'In Progress', 'Submitted'];
  
  const getRandomSubmissionStatus = () => {
    return submissionStatuses[Math.floor(Math.random() * submissionStatuses.length)];
  };
  
  useEffect(() => {
    // Load exam session data
    const session = ProctorController.getStudentsByExamCode(examCode);
    if (session && session.length > 0) {
      // Add submission status to each student
      const studentsWithStatus = session.map(student => ({
        ...student,
        submissionStatus: getRandomSubmissionStatus(),
        progress: Math.floor(Math.random() * 100) + '%'
      }));
      setStudents(studentsWithStatus);
    }

    // Get exam session details including time limit
    const examSessionData = ProctorController.getExamByCode(examCode);
    if (examSessionData) {
      setExamSession(examSessionData);
      setTimeLeft(examSessionData.timeLimit * 60); // Convert minutes to seconds
    }
    
    // Load cheating alerts
    const alerts = ProctorController.getCheatingAlerts().filter(
      alert => alert.examSessionCode === examCode
    );
    setCheatingAlerts(alerts);
  }, [examCode]);

  // Timer countdown
  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0 && !examEnded && examSession) {
      setExamEnded(true);
      alert('Exam time has ended! All remaining answers will be automatically submitted.');
    }
  }, [timeLeft, examSession, examEnded]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  };

  const handleReassignStudent = (student) => {
    // Set the student's submission status to "Not Started" and reset progress
    const updatedStudents = students.map(s => {
      if (s.rollNumber === student.rollNumber) {
        return {
          ...s,
          submissionStatus: 'Not Started',
          progress: '0%'
        };
      }
      return s;
    });
    setStudents(updatedStudents);
    
    ProctorController.reassignStudent(student);
    alert(`Student ${student.name} has been reassigned successfully.`);
  };

  const handleResolveAlert = (alertId) => {
    const success = ProctorController.resolveCheatingAlert(alertId);
    if (success) {
      // Update the alerts list
      setCheatingAlerts(cheatingAlerts.filter(alert => alert.alertId !== alertId));
      alert('Cheating alert resolved successfully.');
    }
  };

  const getSubmissionStatusClass = (status) => {
    switch (status) {
      case 'Submitted':
        return 'status-submitted';
      case 'In Progress':
        return 'status-in-progress';
      default:
        return 'status-not-started';
    }
  };

  const handleLogout = () => {
    // You could add any cleanup or logout logic here if needed
    navigate('/');
  };

  return (
    <div className="proctor-dashboard">
      <header className="dashboard-header">
        <div className="header-main">
          <h1>Proctor Dashboard</h1>
          <div className="proctor-info">
            <h2>Welcome, {proctor.name}</h2>
            <p>Exam Session: {examCode}</p>
          </div>
        </div>
        <div className="exam-timer-container">
          <p className="timer-label">Exam Time Remaining:</p>
          <div className={`timer ${timeLeft < 300 ? 'timer-warning' : ''}`}>
            {examEnded ? "Exam Ended" : formatTime(timeLeft)}
          </div>
          <button onClick={handleLogout} className="logout-button">
            Logout
          </button>
        </div>
      </header>

      <div className="dashboard-container">
        <div className="students-section">
          <h3>Students in Exam Session</h3>
          {students.length > 0 ? (
            <table className="students-table">
              <thead>
                <tr>
                  <th>Roll Number</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Submission Status</th>
                  <th>Progress</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {students.map(student => (
                  <tr key={student.rollNumber}>
                    <td>{student.rollNumber}</td>
                    <td className="student-name">{student.name}</td>
                    <td className="student-email">{student.email}</td>
                    <td>
                      <span className={`status-badge ${getSubmissionStatusClass(student.submissionStatus)}`}>
                        {student.submissionStatus}
                      </span>
                    </td>
                    <td>
                      <div className="progress-bar">
                        <div 
                          className="progress-fill" 
                          style={{width: student.progress}}
                        ></div>
                      </div>
                    </td>
                    <td>
                      <button 
                        onClick={() => handleReassignStudent(student)}
                        className="action-button reassign"
                      >
                        Reassign
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p>No students are currently enrolled in this exam session.</p>
          )}
        </div>

        <div className="alerts-section">
          <h3>Cheating Alerts</h3>
          {cheatingAlerts.length > 0 ? (
            <table className="alerts-table">
              <thead>
                <tr>
                  <th>Alert ID</th>
                  <th>Student</th>
                  <th>Description</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {cheatingAlerts.map(alert => (
                  <tr key={alert.alertId}>
                    <td>{alert.alertId}</td>
                    <td>{alert.studentRollNumber}</td>
                    <td>{alert.content}</td>
                    <td>
                      <button 
                        onClick={() => handleResolveAlert(alert.alertId)}
                        className="action-button resolve"
                      >
                        Resolve
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p>No cheating alerts detected.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProctorDashboard;
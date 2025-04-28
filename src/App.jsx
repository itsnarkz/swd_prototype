import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './ui/Login';
import StudentDashboard from './ui/StudentDashboard';
import ProctorDashboard from './ui/ProctorDashboard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/student" element={<StudentDashboard />} />
        <Route path="/proctor" element={<ProctorDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;

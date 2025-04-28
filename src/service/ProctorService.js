import NeosServer from './NeosServer';

class ProctorService {
  static authenticateProctor(email, password) {
    // Find proctor with matching credentials
    for (let session of NeosServer.examSessions) {
      const authorizedProctor = session.getProctors().find(
        (proctor) => proctor.email === email && proctor.password === password
      );
      if (authorizedProctor) {
        return authorizedProctor;
      }
    }
    return null;
  }

  static getProctorData(email) {
    for (let session of NeosServer.examSessions) {
      const proctor = session.getProctors().find(
        (proctor) => proctor.email === email
      );
      if (proctor) {
        return proctor;
      }
    }
    return null;
  }

  static getStudentsByExamCode(examCode) {
    const session = NeosServer.examSessions.find(
      (session) => session.examCode === examCode
    );
    return session ? session.getStudents() : [];
  }

  static isProctorAuthorizedForExam(proctorEmail, examCode) {
    const session = NeosServer.examSessions.find(
      (session) => session.examCode === examCode
    );
    if (!session) return false;
    
    return session.getProctors().some(
      (proctor) => proctor.email === proctorEmail
    );
  }

  static getCheatingAlerts() {
    return NeosServer.cheatingAlerts;
  }

  static reassignStudent(student) {
    console.log(`Reassigning student: ${student.name}`);
    return true;
  }

  static resolveCheatingAlert(alertId) {
    NeosServer.cheatingAlerts = NeosServer.cheatingAlerts.filter(
      (alert) => alert.alertId !== alertId
    );
    return true;
  }

  static getExamByCode(examCode) {
    return NeosServer.examSessions.find(session => session.examCode === examCode);
  }
}

export default ProctorService;
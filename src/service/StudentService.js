import NeosServer from './NeosServer';

class StudentService {
  static authenticateStudent(email, password) {
    // Find student with matching credentials
    for (let session of NeosServer.examSessions) {
      const authorizedStudent = session.getStudents().find(
        (student) => student.email === email && student.password === password
      );
      if (authorizedStudent) {
        return authorizedStudent;
      }
    }
    return null;
  }

  static getStudentData(email) {
    for (let session of NeosServer.examSessions) {
      const student = session.getStudents().find(
        (student) => student.email === email
      );
      if (student) {
        return student;
      }
    }
    return null;
  }

  static getExamByCode(examCode) {
    const session = NeosServer.examSessions.find(
      (session) => session.examCode === examCode
    );
    return session;
  }

  static getExamQuestions(examCode) {
    const session = this.getExamByCode(examCode);
    return session ? session.getQuestions() : [];
  }

  static isStudentAuthorizedForExam(studentEmail, examCode) {
    const session = this.getExamByCode(examCode);
    if (!session) return false;
    
    return session.getStudents().some(
      (student) => student.email === studentEmail
    );
  }

  static submitAnswers(studentId, examCode, answers) {
    console.log(`Student ${studentId} submitted answers for Exam ${examCode}:`, answers);
    return true;
  }
}

export default StudentService;
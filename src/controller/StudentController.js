import StudentService from '../service/StudentService';

class StudentController {
  static authenticateStudent(email, password) {
    return StudentService.authenticateStudent(email, password);
  }

  static fetchStudentData(email) {
    return StudentService.getStudentData(email);
  }

  static getExamByCode(examCode) {
    return StudentService.getExamByCode(examCode);
  }

  static getExamQuestions(examCode) {
    return StudentService.getExamQuestions(examCode);
  }

  static isStudentAuthorizedForExam(studentEmail, examCode) {
    return StudentService.isStudentAuthorizedForExam(studentEmail, examCode);
  }

  static submitAnswers(studentId, examCode, answers) {
    return StudentService.submitAnswers(studentId, examCode, answers);
  }
}

export default StudentController;
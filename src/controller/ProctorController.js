import ProctorService from '../service/ProctorService';

class ProctorController {
  static authenticateProctor(email, password) {
    return ProctorService.authenticateProctor(email, password);
  }

  static fetchProctorData(email) {
    return ProctorService.getProctorData(email);
  }

  static getStudentsByExamCode(examCode) {
    return ProctorService.getStudentsByExamCode(examCode);
  }

  static isProctorAuthorizedForExam(proctorEmail, examCode) {
    return ProctorService.isProctorAuthorizedForExam(proctorEmail, examCode);
  }

  static getCheatingAlerts() {
    return ProctorService.getCheatingAlerts();
  }

  static reassignStudent(student) {
    return ProctorService.reassignStudent(student);
  }

  static getExamByCode(examCode) {
    return ProctorService.getExamByCode(examCode);
  }

  static resolveCheatingAlert(alertId) {
    return ProctorService.resolveCheatingAlert(alertId);
  }
}

export default ProctorController;
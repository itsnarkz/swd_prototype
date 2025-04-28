class CheatingAlert {
  constructor(alertId, examSessionCode, studentRollNumber, proctorEmail, content) {
    this.alertId = alertId;
    this.examSessionCode = examSessionCode;
    this.studentRollNumber = studentRollNumber;
    this.proctorEmail = proctorEmail;
    this.content = content;
  }

  getAlertId() {
    return this.alertId;
  }

  getExamSessionCode() {
    return this.examSessionCode;
  }

  getStudentRollNumber() {
    return this.studentRollNumber;
  }

  getProctorEmail() {
    return this.proctorEmail;
  }

  getContent() {
    return this.content;
  }
}

export default CheatingAlert;
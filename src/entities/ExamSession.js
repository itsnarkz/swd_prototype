class ExamSession {
  constructor(examCode, questions, timeLimit, authorizedProctors, authorizedStudents) {
    this.examCode = examCode;
    this.questions = questions;
    this.timeLimit = timeLimit;
    this.authorizedProctors = authorizedProctors;
    this.authorizedStudents = authorizedStudents;
  }

  getExamCode() {
    return this.examCode;
  }

  getQuestions() {
    return this.questions;
  }

  getTimeLimit() {
    return this.timeLimit;
  }

  getProctors() {
    return this.authorizedProctors;
  }

  getStudents() {
    return this.authorizedStudents;
  }
}

export default ExamSession;
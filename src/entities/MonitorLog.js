class MonitorLog {
  constructor(logId, content, time, studentRollNumber, examSessionCode) {
    this.logId = logId;
    this.content = content;
    this.time = time;
    this.studentRollNumber = studentRollNumber;
    this.examSessionCode = examSessionCode;
  }

  getLogId() {
    return this.logId;
  }

  getContent() {
    return this.content;
  }

  getTime() {
    return this.time;
  }

  getStudentRollNumber() {
    return this.studentRollNumber;
  }

  getExamSessionCode() {
    return this.examSessionCode;
  }
}

export default MonitorLog;
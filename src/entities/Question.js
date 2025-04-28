class Question {
  constructor(id, content, correctAnswer) {
    this.id = id;
    this.content = content;
    this.correctAnswer = correctAnswer;
  }

  getOptions() {
    return ['A', 'B', 'C', 'D'];
  }
}

export default Question;
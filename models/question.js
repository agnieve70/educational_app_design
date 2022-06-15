class Question {
  constructor(id, category_id, question, choices, answer) {
    this.id = id;
    this.category_id = category_id;
    this.question = question;
    this.choices = choices;
    this.answer = answer;
  }
}

export default Question;

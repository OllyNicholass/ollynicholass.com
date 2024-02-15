import { type IQuestion } from './IQuestion';

export class QuestionText implements IQuestion {
  question: string;
  inputType: 'text';
  constructor(question: string) {
    this.question = question;
    this.inputType = 'text';
  }
}
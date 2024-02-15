import { type IQuestion } from './IQuestion';
import { Option } from './Option';

export class QuestionRadio implements IQuestion {
  question: string;
  inputType: 'radio';
  options: Option[];
  next?: Record<string, number>;
  constructor(question: string, options: Option[], next?: Record<string, number>) {
    this.question = question;
    this.inputType = 'radio';
    this.options = options;
    this.next = next;
  }
}
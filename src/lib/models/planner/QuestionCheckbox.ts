import { type IQuestion } from './IQuestion';
import { Option } from './Option';

export class QuestionCheckbox implements IQuestion {
  question: string;
  inputType: 'checkbox';
  options: Option[];
  next?: Record<string, number>;
  constructor(question: string, options: Option[], next?: Record<string, number>) {
    this.question = question;
    this.inputType = 'checkbox';
    this.options = options;
    this.next = next;
  }
}
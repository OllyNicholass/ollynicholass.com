import { Option } from './Option';

export interface IQuestion {
  question: string;
  inputType: 'radio' | 'checkbox' | 'text';
  options?: Option[];
  next?: Record<string, number>;
}
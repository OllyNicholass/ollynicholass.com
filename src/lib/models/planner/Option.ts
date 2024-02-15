export class Option {
  text: string;
  description?: string;
  icon?: string;
  constructor(text: string, description?: string, icon?: string) {
    this.text = text;
    this.description = description;
    this.icon = icon;
  }
}
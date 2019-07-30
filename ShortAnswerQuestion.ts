import { Question } from "./question";

export class ShortAnswerQuestion extends Question {
    private _answer!: string;
    get answer(): string {
        return this._answer;

    }
    set answer(_answer: string) {
        this._answer = _answer;
    }
    constructor(qText: string, _answer: string) {
        super(qText);
        this.answer = _answer;
    }
    getCorrectAnswer():string {
        return this.answer;
    }
    addCorrectAnswer(answer: string) {
        this.answer = answer;
    }
}

import { Question } from "./question";

export class MultipleChoiceQuestion extends Question {
    _answers!: string[];
    numberOfAnswers: number;
    correctAnswerIndex: number;
    constructor(qText: string, _answers: string[], numberOfAnswers: number, correctAnswerIndex: number) {
        super(qText);
        this._answers = _answers;
        this.numberOfAnswers = numberOfAnswers;
        this.correctAnswerIndex = correctAnswerIndex;
    }
    toString(): string {
        let _questAndAnswers = this.qText;
        for (let i = 0; i < this._answers.length; i++) {
            _questAndAnswers += '/n' + this._answers[i];
        }
        return _questAndAnswers;
    }
    getCorrectAnswer(): string {
        return this._answers[this.correctAnswerIndex];
    }
    addCorrectAnswer(answer: string) {
        if (this._answers.length < 7) {
            this._answers.push(answer);
            this.correctAnswerIndex = this._answers.length - 1;
        }

    }
    public addAnswer(answer: string): void {
        if (this._answers.length < 7) {
            this._answers.push(answer);
        }
    }
}
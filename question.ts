
export abstract class Question {
    private _qText!: string;
    get qText(): string {
        return this._qText;

    }
    set qText(_qText: string) {
        this._qText = _qText;
    }
    constructor(_qText: string) {
        this.qText = _qText;
    }
    toString() {
        return this.qText;
    }
    public abstract getCorrectAnswer(): string;
    public abstract addCorrectAnswer(answer: string): void;
}








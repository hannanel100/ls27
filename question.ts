
//שאלה 1
abstract class Question {
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

class ShortAnswerQuestion extends Question {
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
    getCorrectAnswer() {
        return this.answer;
    }
    addCorrectAnswer(answer: string) {
        this.answer = answer;
    }
}

class MultipleChoiceQuestion extends Question {
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
//שאלה 2
class QuestionsCatalog {
    questions: Question[];
    readonly questionsLength = 20;
    currentQuestions: number;
    public static SHORT:number = 1;
    public static MULTIPLE:number = 2;
    public static BOTH:number = 3;
    constructor(){
        this.questions = [];
        this.currentQuestions = 0; 
    }
    public addQuestion(q: Question):void {
        if(this.questions.length<this.questionsLength){
            this.questions.push(q);
        }
    }
    public generateQuestionnaire(num: number, type: number):Question[]{
        let questionnaire: Question[] = [];
        let indexesUsed: number[] = [];
        if(type === 1){//short
            for(let i = 0; i < num; i++){
                indexesUsed.push(Math.floor(Math.random()*num));
                //questionnaire.push(this.questions[]);
            }
            
        }
        else if( type ===2){//multiple{

        }
        else if(type === 3){//both

        }
        return questionnaire;
    }
}

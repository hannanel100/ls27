import { ShortAnswerQuestion } from './ShortAnswerQuestion';
import { MultipleChoiceQuestion } from './MultipleChoiceQuestion';
import { Question } from './question';

export class QuestionsCatalog {
    public questions: Question[];
    readonly questionsLength: number = 20;
    public currentQuestions: number;
    public static SHORT: number = 1;
    public static MULTIPLE: number = 2;
    public static BOTH: number = 3;
    constructor() {
        this.questions = [];
        this.currentQuestions = 0;
    }
    public addQuestion(q: Question): void {
        if (this.questions.length < this.questionsLength) {
            this.questions.push(q);
        }
    }
    public generateQuestionnaire(num: number, type: number): Question[] {
        let questionnaire: Question[] = [];
        let indexesUsed: number[] = [];
        if (type === 1) {//short
            for (let i = 0; i < num; i++) {
                indexesUsed.push(Math.floor(Math.random() * num));
                if (this.questions[i] instanceof ShortAnswerQuestion) {
                    questionnaire.push(this.questions[i]);
                }

            }

        }
        else if (type === 2) {//multiple{
            for (let i = 0; i < num; i++) {
                indexesUsed.push(Math.floor(Math.random() * num));
                if (this.questions[i] instanceof MultipleChoiceQuestion) {
                    questionnaire.push(this.questions[i]);
                }
            }
        }
        else if (type === 3) {//both
            for (let i = 0; i < num; i++) {
                indexesUsed.push(Math.floor(Math.random() * num));
                questionnaire.push(this.questions[i]);
            }
        }
        return questionnaire;

    }
}
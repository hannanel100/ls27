import { QuestionsCatalog } from "./QuestionsCatalog";
import { Question } from "./question";

export class Questionnaire{
    type: number;
    num: number;
    cat: QuestionsCatalog;

    constructor(type: number, num: number, cat: QuestionsCatalog) {
        this.type = type;
        this.num = num;
        this.cat = cat;
    }
    public  hasNext():boolean{
        if(this.cat.currentQuestions<this.cat.questions.length){
            return true;
        }
        else{
            return false;
        }
        
    }
    public getNext():Question{
        return this.cat.questions[++this.cat.currentQuestions];
    }
    public  checkAnswer(answer:string):void {

    }
    public getTotalQuestions():number {
        return this.cat.questions.length;
    }
    public getCorrectAnswers():number{
        return ;
    } 
}



import { Questions } from "./questions-model";

export class QuizModel {

    idQuiz!: string;

    title!: string;

    questions!: Questions[];

    difficulty!: string;

    price!: number;
}

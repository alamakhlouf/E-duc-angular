
export interface Forum {
  imageUrl?:string;
  idNews: number;
  title: string;
  description: string;
  dateCreation: Date;
  postedBy: string;
  likeCount: number;
  viewCount: number;
  answer: Answer[];
  
}

export interface Answer {
  idAnswer: number;
  answerDescription: string;
  userProfile: {
    username: string;
  };
}

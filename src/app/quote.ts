export class Quote {
  upvote: number;
  downvote: number;
  showDescription: boolean;
  constructor(public id: number, public creator: string,public name: string, public description: string, public date: Date){
    this.showDescription = false;
    this.upvote = 0;
    this.downvote = 0;
  }
}

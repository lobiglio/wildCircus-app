export class Artist {
  public id: number;
  public name: string;
  public description: string;
  public imgUrl: string;
  public videoUrl: string;
  public nbVote: number;

  constructor(input?: Artist) {
    if (input != null) {
      Object.assign(this, input);
    }
  }
}

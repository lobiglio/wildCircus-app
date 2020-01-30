export class Petition {
  public id: number;
  public firstName: string;
  public lastName: string;

  constructor(input?: Petition) {
    if (input != null) {
      Object.assign(this, input);
    }
  }
}

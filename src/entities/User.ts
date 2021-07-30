
export class User {

  public readonly uuid?: string;
  public name: string;
  public email: string;
  public password: string;

  constructor(props: User) {
    Object.assign(this, props);
  }
}

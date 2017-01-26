export class Project {
  public $key: string;
  constructor(
    public title: string,
    public manager: string,
    public description: string,
    public goal: number) { }
}

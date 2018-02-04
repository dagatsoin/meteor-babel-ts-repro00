function observable(target: any, key: string) {}

export class Character {
  @observable private _title: string = "";
}
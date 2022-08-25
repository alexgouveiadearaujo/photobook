export interface IComment {
  date: Date;
  text: string;
  userName: string;
}

export type IComments = Array<IComment>;

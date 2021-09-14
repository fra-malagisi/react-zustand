export interface ITodo {
  id?: string;
  title: string;
  description: string;
  type: string;
}

export interface ITodoType {
  id?: string;
  name: string;
  todos?: ITodo[];
}
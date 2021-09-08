export interface ITodo {
  id?: string;
  title: string;
  type?: ITodoType;
  description: string; 
}

export interface ITodoType {
  value: string;
  label: string;
}
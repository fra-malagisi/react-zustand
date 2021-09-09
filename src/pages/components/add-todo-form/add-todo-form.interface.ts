import {ITodoType} from '../../../interfaces/todo.interface';

export interface IAddTodoFormProps {
  todoTypes: ITodoType[];
  handleAddTypeButton: () => void;
}
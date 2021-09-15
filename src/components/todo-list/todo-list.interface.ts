import { ITodo } from '../../interfaces/todo.interface'

export interface ITodoListProps {
  todoList: ITodo[],
  handleClickDelete: (todo: ITodo) => void
}
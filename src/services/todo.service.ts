import { apiTodo } from "../constants/api.constants";
import { ITodo, ITodoType } from "../interfaces/todo.interface";
import { ApiService } from "./api.service";
import { v4 as uuidv4 } from 'uuid';

export class TodoService {

  static getTodo = (): Promise<ITodo[]> =>
    ApiService.get<ITodo[]>(apiTodo.GET_ALL);

  static addTodo = (todo: ITodo): Promise<ITodo> => {
    todo.id = uuidv4();
    return ApiService.post<ITodo>(apiTodo.ADD, todo);
  }

  static deleteTodo = (todo: ITodo): Promise<ITodo> => {
    if (!todo.id) {
      throw new Error('id is undefined');
    }
    return ApiService.delete(apiTodo.DELETE(todo?.id));
  }

  static getTodoTypes = (): Promise<ITodoType[]> =>  ApiService.get<ITodoType[]>(apiTodo.GET_TYPES);
}

import create from 'zustand';
import { devtools } from 'zustand/middleware'
import { ITodo, ITodoType } from '../interfaces/todo.interface';
import {TodoService} from '../services/todo.service';

export interface ITodoState {
  todoList: ITodo[],
  todoTypes: ITodoType[],
  getAllTodo: () => void,
  getAllTypes: () => void,
  addTodo: (todo: ITodo) => void,
  addTodoType: (todoType: ITodoType) => void,
  deleteTodo: (id: string, idType: string) => void,
}

export const useTodoStore = create<ITodoState>(devtools((set, get) => ({
  todoList: [],
  todoTypes: [],
  getAllTodo: async () => set({todoList: await TodoService.getTodo()}),
  getAllTypes: async () => {
    const todoTypes = await TodoService.getTodoTypes();
    console.log(todoTypes);
    todoTypes.forEach((type: ITodoType) => type.todos = get().todoList.filter((todo: ITodo) => todo.type === type.id));
    set({todoTypes})
  },
  addTodo: (todo: ITodo) => set(state => (
    {
      ...state, 
      todoList: [...state.todoList, todo],
      todoTypes: state.todoTypes.map((type: ITodoType) => {
        if (todo.type === type.id) {
          if (!type.todos) {
            type.todos = [];
          }
          type.todos = [...type.todos, todo]
        }
        return type;
      })
    })),
  addTodoType: (todoType: ITodoType) => set(state => ({...state, todoTypes: [...state.todoTypes, todoType]})),
  deleteTodo: (id: string, idType: string) => set(state => (
    {
      ...state, 
      todoList: state.todoList.filter(todo => todo.id !== id),
      todoTypes: state.todoTypes.map((type: ITodoType) => {
        if (idType === type.id) {
          type.todos = type.todos?.filter((todo: ITodo) => todo.id !== id);
        }
        return type;
      })
    }
    ))
})));
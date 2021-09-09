import create from 'zustand';
import { ITodo, ITodoType } from '../interfaces/todo.interface';
import {TodoService} from '../services/todo.service';

export interface ITodoState {
  todoList: ITodo[],
  todoTypes: ITodoType[],
  getAllTodo: () => void,
  getAllTypes: () => void,
  addTodo: (todo: ITodo) => void,
  addTodoType: (todoType: ITodoType) => void,
  deleteTodo: (id: string) => void
}

export const useTodoStore = create<ITodoState>((set) => ({
  todoList: [],
  todoTypes: [],
  getAllTodo: async () => set({todoList: await TodoService.getTodo()}),
  addTodo: (todo: ITodo) => set(state => ({...state, todoList: [...state.todoList, todo]})),
  deleteTodo: (id: string) => set(state => ({...state, todoList: state.todoList.filter(todo => todo.id !== id)})),
  getAllTypes: async () => set({todoTypes: await TodoService.getTodoTypes()}),
  addTodoType: (todoType: ITodoType) => set(state => ({...state, todoTypes: [...state.todoTypes, todoType]}))
}));
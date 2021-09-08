import { FC, useEffect } from 'react';
import { Layout } from 'antd';
import { Content, Header } from 'antd/lib/layout/layout';
import AddTodoForm from './components/add-todo-form/add-todo-form.component';
import TodoList from './components/todo-list/todo-list.component';
import { useTodoStore } from './stores/todo.store';

import './App.scss';

const App: FC = () => {
 
  const {getAllTodo, getAllTypes, todoList, todoTypes} = useTodoStore();

  useEffect(() => {
    getAllTodo();
    getAllTypes();
  }, [])

  useEffect(() => {
    console.log(todoList);
  }, [todoList])

  return (
    <Layout className="layout">
      <Header className="header">
        Todo List
      </Header>
      <Content className="content">
        <AddTodoForm todoTypes={todoTypes}></AddTodoForm>
        <TodoList todoList={todoList}></TodoList>
      </Content>
    </Layout>
  );
}

export default App;

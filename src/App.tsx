import { FC, useEffect } from 'react';
import { Layout } from 'antd';
import { Content, Header } from 'antd/lib/layout/layout';
import TodoList from './components/todo-list/todo-list.component';
import { useTodoStore } from './stores/todo.store';
import AddTodoPage from './pages/add-todo.page';

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
        <AddTodoPage></AddTodoPage>
        <TodoList todoList={todoList}></TodoList>
      </Content>
    </Layout>
  );
}

export default App;

import { FC, useEffect } from 'react';
import { Layout, Tabs, Divider, Empty } from 'antd';
import { Content, Header } from 'antd/lib/layout/layout';
import TodoList from './components/todo-list/todo-list.component';
import { useTodoStore } from './stores/todo.store';
import AddTodoPage from './pages/add-todo.page';
import { ITodo, ITodoType } from './interfaces/todo.interface';

import './App.scss';
import { TodoService } from './services/todo.service';

const { TabPane } = Tabs;



const App = (): JSX.Element => {
 
  const {getAllTodo, getAllTypes, deleteTodo, todoList, todoTypes} = useTodoStore();

  useEffect(() => {
    getAllTodo();
  }, [])

  useEffect(() => {
    if (todoTypes.length === 0) {
      getAllTypes();
    }
  }, [todoList, todoTypes])

  const handleClickDelete = (todo: ITodo) => {
    if (!todo.id) {
      throw new Error('id is undefined');
    }
    TodoService.deleteTodo(todo);
    deleteTodo(todo?.id, todo.type);
  }

  return (
    <Layout className="layout">
      <Header className="header">
        Todo List
      </Header>
      <Content className="content">
        <AddTodoPage></AddTodoPage>
        {
          todoTypes && 
          <>
            <Divider />
            <div className="tabs-container">
              {
                todoTypes.length > 0 && 
              <Tabs defaultActiveKey="1">
                {
                  todoTypes.filter((type: ITodoType) => type.todos && type.todos.length > 0)
                  .map((type: ITodoType, i: number) => (
                    <TabPane tab={type.name} key={i + 1}>
                      {
                        type.todos &&
                        <TodoList todoList={type.todos} handleClickDelete={handleClickDelete}></TodoList>
                      }
                    </TabPane>
                  ))
                }
              </Tabs>
              }
              {
                !todoList || todoList.length === 0 && <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
              }
            </div>
          </>
        }
      </Content>
    </Layout>
  );
}

export default App;

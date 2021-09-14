import { FC, useEffect } from 'react';
import { Layout, Tabs, Divider, Empty } from 'antd';
import { Content, Header } from 'antd/lib/layout/layout';
import TodoList from './components/todo-list/todo-list.component';
import { useTodoStore } from './stores/todo.store';
import AddTodoPage from './pages/add-todo.page';
import { ITodoType } from './interfaces/todo.interface';

import './App.scss';

const { TabPane } = Tabs;



const App: FC = () => {
 
  const {getAllTodo, getAllTypes, todoList, todoTypes} = useTodoStore();

  useEffect(() => {
    getAllTodo();
  }, [])

  useEffect(() => {
    if (todoTypes.length === 0) {
      getAllTypes();
    }
  }, [todoList, todoTypes])

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
                        <TodoList todoList={type.todos}></TodoList>
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

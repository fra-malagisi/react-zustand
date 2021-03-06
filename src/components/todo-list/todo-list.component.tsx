import { List, Card, Button } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import { ITodoListProps } from './todo-list.interface';
import { ITodo } from '../../interfaces/todo.interface';

import './todo-list.component.scss';

const TodoList = ({todoList, handleClickDelete}: ITodoListProps): JSX.Element => {

  console.log(todoList)

  return (
    <List
    itemLayout="vertical"
    dataSource={todoList}
    renderItem={(item: ITodo) => (
        <List.Item>
            <Card 
              title={
                <div className="todo-list__card-header">
                  <span>{item.title}</span>
                  <Button 
                    type="primary"
                    shape="circle" icon={<DeleteOutlined />} 
                    danger
                    onClick={() => handleClickDelete(item)}
                  />
                </div>}>{item.description}
            </Card>
        </List.Item>
    )}
  />
  );
}

export default TodoList;
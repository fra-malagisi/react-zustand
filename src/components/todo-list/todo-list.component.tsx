import { FC } from 'react';
import { List, Card, Button } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import { ITodoListProps } from './todo-list.interface';
import { ITodo } from '../../interfaces/todo.interface';
import { TodoService } from '../../services/todo.service';
import { useTodoStore } from '../../stores/todo.store';

import './todo-list.component.scss';

const TodoList: FC<ITodoListProps> = ({todoList}: ITodoListProps) => {

  const {deleteTodo} = useTodoStore();

  const onDeleteClick = (todo: ITodo) => {
    TodoService.deleteTodo(todo);
    if (!todo.id) {
      throw new Error('id is undefined');
    }
    deleteTodo(todo?.id);
  }

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
                    onClick={() => onDeleteClick(item)}
                  />
                </div>}>{item.description}
            </Card>
        </List.Item>
    )}
  />
  );
}

export default TodoList;
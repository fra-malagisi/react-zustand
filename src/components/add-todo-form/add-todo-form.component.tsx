import { FC, useRef } from 'react';
import { Card, Input, Form, Button, Select, Row, Col} from 'antd';
import { useForm } from 'antd/lib/form/Form';
import { ITodo, ITodoType } from '../../interfaces/todo.interface';
import { TodoService } from '../../services/todo.service';
import { useTodoStore } from '../../stores/todo.store';
import { FormInstance } from 'antd/es/form';
import { IAddTodoFormProps } from '../add-todo-form/add-todo-form.interface'

import './add-todo-form.component.scss';

const { TextArea } = Input;
const { Option } = Select;

const AddTodoForm: FC<IAddTodoFormProps> = ({todoTypes}: IAddTodoFormProps) => {

  const formRef = useRef<FormInstance>(null)

  const [form] = useForm();

  const {addTodo} = useTodoStore();

  const onFinish = async (todo: ITodo) => {
    const todoCreated = await TodoService.addTodo(todo);
    addTodo(todoCreated);
    onReset();
  }

  const onReset = () => {
    formRef.current!.resetFields();
  }

  const onTypeChange = () => {
    console.log('prova');
  }

  return (
    <Card title="Add ToDo" bordered={false}>
      <Form 
      layout="vertical"
      onFinish={onFinish}
      ref={formRef}
      form={form}>
        <Form.Item 
          name="title" 
          label="Title"
          rules={[{required: true}]}>
          <Input
            placeholder="Insert a title"/>
        </Form.Item>
        <Row>
          <Col span={8}>
            <Form.Item name="type" label="Type" rules={[{ required: true }]}>
              <Select
                placeholder="Select a type"
                onChange={onTypeChange}
                allowClear
              >
                {todoTypes.map((type: ITodoType) => <Option value={type.value}>{type.label}</Option>)}
              </Select>
            </Form.Item>
          </Col>
        </Row>
        <Form.Item name="description" label="Description" rules={[{required: true}]}>
          <TextArea rows={4} 
            placeholder="Insert a description"/>
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">Submit</Button>
      </Form.Item>
      </Form>
    </Card>
    /*

     */
  );
}

export default AddTodoForm;
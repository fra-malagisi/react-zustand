import { FC, useRef } from 'react';
import {Input, Form, Button, Select, Row, Col} from 'antd';
import { useForm } from 'antd/lib/form/Form';
import { ITodo, ITodoType } from '../../../interfaces/todo.interface';
import { TodoService } from '../../../services/todo.service';
import { useTodoStore } from '../../../stores/todo.store';
import { FormInstance } from 'antd/es/form';
import { IAddTodoFormProps } from './add-todo-form.interface'
import { PlusOutlined } from '@ant-design/icons';

import './add-todo-form.component.scss';

const { TextArea } = Input;
const { Option } = Select;

const AddTodoForm: FC<IAddTodoFormProps> = ({todoTypes, handleAddTypeButton}: IAddTodoFormProps) => {

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

  return (
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
            <Row>
            <Col span={8} style={{"marginRight": '10px'}}>
              <Select
                placeholder="Select a type"
                allowClear
              >
                {todoTypes.map((type: ITodoType) => <Option value={type.id || ''}>{type.name}</Option>)}
              </Select>
            </Col>
            <Col span={6}>
              <Button onClick={handleAddTypeButton} icon={<PlusOutlined />}>Add type</Button>
            </Col>
            </Row>
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
  );
}

export default AddTodoForm;
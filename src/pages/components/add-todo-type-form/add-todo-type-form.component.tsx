import { Form, Input, Button, Row, Col } from 'antd';
import { useForm } from 'antd/lib/form/Form';
import { PlusOutlined } from '@ant-design/icons';
import { ITodoType } from '../../../interfaces/todo.interface';
import { TodoService } from '../../../services/todo.service';
import { useTodoStore } from '../../../stores/todo.store';
import { IAddTodoTypeFormProps } from './add-todo-type-form.interface';

const AddTodoTypeForm = ({handleSubmit}: IAddTodoTypeFormProps): JSX.Element => {

  const [form] = useForm();

  const {addTodoType} = useTodoStore();

  const onFinish = async (todoType: ITodoType) => {
    const todoTypeAdded = await TodoService.addTodoType(todoType);
    addTodoType(todoTypeAdded);
    handleSubmit();
  }

  return (
    <Form
      layout='horizontal'
      onFinish={onFinish}
    >
      <Row gutter={10}>
        <Col span={21}>
          <Form.Item 
            name="name" 
            label="Name"
            rules={[{required: true}]}>
            <Input
              placeholder="Insert a type name"/>
          </Form.Item>
        </Col>
        <Col span={3}>
          <Form.Item >
              <Button type="primary" icon={<PlusOutlined />} shape="circle" htmlType="submit"></Button>
          </Form.Item>
        </Col>
      </Row>
    </Form>
  );
}

export default AddTodoTypeForm;
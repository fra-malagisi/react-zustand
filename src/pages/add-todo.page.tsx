import { FC, useState } from 'react';
import { Card, Modal } from 'antd';
import { useTodoStore } from '../stores/todo.store';
import AddTodoForm from './components/add-todo-form/add-todo-form.component';
import AddTodoTypeForm from './components/add-todo-type-form/add-todo-type-form.component'

const AddTodoPage: FC = () => {

  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);

  const { todoTypes } = useTodoStore();

  const closeModal = () => {
    setIsModalVisible(false);
  }

  const openAddTypeModal = () => {
    setIsModalVisible(true);
  }

  return (
    <>
      <Card title="Add ToDo" bordered={false}>
        <AddTodoForm todoTypes={todoTypes} handleAddTypeButton={openAddTypeModal}></AddTodoForm>
      </Card>
      <Modal title="Add type" visible={isModalVisible} footer={null} onCancel={closeModal}>
        <AddTodoTypeForm handleSubmit={closeModal}></AddTodoTypeForm>
      </Modal>
    </>
  )
}

export default AddTodoPage;
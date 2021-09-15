
import React from 'react';
import { mount } from '@cypress/react';
import TodoList from './todo-list.component';
import '../../index.scss'

describe('todoList Component', () => {
  let todoList = [
    {
      "title": "item 1",
      "type": "1dc01228-d161-419c-946e-6c27d2d79038",
      "description": "item descr 1",
      "id": "da7f9d42-6a1a-4953-a484-79c65e1ec8dc"
    },
    {
      "title": "item 2",
      "type": "1dc01228-d161-419c-946e-6c27d2d79038",
      "description": "item descr 2",
      "id": "da7f9d42-6a1a-4953-a484-79c65e1ec8de"
    }
  ];

  it('renders todo list', () => {

    const callback = cy.stub()
    mount(<TodoList todoList={todoList} handleClickDelete={callback}/>);
  
    cy.get('.ant-list-items > li').should(($lis) => {
      expect($lis).length(2)
      expect($lis.eq(0).find('.todo-list__card-header').text()).contain('item 1')
      expect($lis.eq(1).find('.ant-card-body').text()).contain('item descr 2')
    })

    cy.get('.ant-btn:first').click();
  });

  it('callback is called on button click', () => {
    const callback = cy.stub()
    mount(<TodoList todoList={todoList} handleClickDelete={callback}/>);
    cy.get('.ant-btn:first')
      .click()
      .then(() => {
        expect(callback).to.have.been.calledOnce
      })
  })
});

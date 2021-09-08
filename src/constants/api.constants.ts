const apiRoot = 'http://localhost:3002';

const apiControllers = {
  TODO: `${apiRoot}/todos`,
  TYPES: `${apiRoot}/types`,
};

export const apiTodo = {
  GET_ALL: `${apiControllers.TODO}`,
  ADD: `${apiControllers.TODO}`,
  DELETE: (id: string) => `${apiControllers.TODO}/${id}`,
  GET_TYPES: `${apiControllers.TYPES}`,
};

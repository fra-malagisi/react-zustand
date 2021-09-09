const apiRoot = 'http://localhost:3002';

const apiControllers = {
  TODO: `${apiRoot}/todos`,
  TYPES: `${apiRoot}/types`,
};

export const apiTodo = {
  GET_ALL_TODO: `${apiControllers.TODO}`,
  ADD_TODO: `${apiControllers.TODO}`,
  DELETE_TODO: (id: string) => `${apiControllers.TODO}/${id}`,
  GET_TYPES: `${apiControllers.TYPES}`,
  ADD_TYPE: `${apiControllers.TYPES}`
};

import { ToDoResponse } from '../types/responses';

export const apiResponse: ToDoResponse = {
  status: 'ok',
  result: [
    {
      description: 'Todo Item 1',
    },
    {
      description: 'Todo Item 2',
    },
    {},
    {
      description: '',
    },
  ],
};

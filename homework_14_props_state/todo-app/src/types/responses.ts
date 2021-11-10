interface CommonResponse {
  status: 'ok' | 'error';
}

export interface ToDoType {
  id: number;
  description?: string;
  completed?: boolean;
}

export interface ToDoResponse extends CommonResponse {
  result: Array<ToDoType>;
}

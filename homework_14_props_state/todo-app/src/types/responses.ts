interface CommonResponse {
  status: 'ok' | 'error';
}

export interface ToDoResponse extends CommonResponse {
  result: Array<ToDoType>;
}

export interface ToDoType {
  description?: string;
}

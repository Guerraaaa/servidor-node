//Definindo um tipo do Response
import { Response } from 'express'

// MockReponse vai pegar tudo referente ao TResult, esse TResult tem props referentes ao Response
type MockResponse<TResult> = Response & {
  state: {
    status?: number;
    json?: TResult | unknown;
  };
};

// Precisamos passar como uma função tradicional e precisamos definir o tipo de mockReponse como TResult
export function MockResponse<TResult>() {
  const response = {
    state: {},
  } as MockResponse<TResult>;

  response.status = (status: number) => {
    response.state.status = status;
    return response;
  };

  response.json = (json: TResult) => {
    response.state.json = json;
    return response;
  };

  return response;
}

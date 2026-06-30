export interface IHttpResponse {
  statusCode: number;
  body: any;
}

export const Ok = async (data: any): Promise<IHttpResponse> => {
  return { statusCode: 200, body: data };
};

export const NoContent = async (): Promise<IHttpResponse> => {
  return { statusCode: 204, body: null };
};

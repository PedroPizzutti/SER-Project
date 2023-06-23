export interface ISuccessResponse {
  success: string;
}

export interface IErrorResponse {
  error: string;
}

export type IPaginationResponse<T = {}> = {
  docs: T[];
  total: number;
  page: number;
  pages: number;
  limit: number;
};

export type IPaginationRequest<T = {}> = T & {
  limit?: number;
  page?: number;
};

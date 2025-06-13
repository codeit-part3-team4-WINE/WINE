//커스텀 에러 클래스
export class CustomError extends Error {
  statusCode: number;

  constructor(message: string, statusCode = 400) {
    super(message);
    this.name = 'CustomError';
    this.statusCode = statusCode;
  }
}

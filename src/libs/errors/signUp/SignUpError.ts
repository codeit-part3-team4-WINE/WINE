//회원가입 관련 에러클래스 정의

import { CustomError } from '../CustomError';

export class InvalidCredentialsError extends CustomError {
  constructor(message = '이메일 또는 비밀번호가 올바르지 않습니다.') {
    super(message, 401);
  }
}

export class ValidationError extends CustomError {
  constructor(message = '입력값이 올바르지 않습니다.') {
    super(message, 422);
  }
}

export class DuplicateEmailError extends CustomError {
  constructor(message = '이미 등록된 이메일입니다.') {
    super(message, 400);
  }
}

export class PasswordMismatchError extends CustomError {
  constructor(message = '비밀번호가 일치하지 않습니다.') {
    super(message, 400);
  }
}

export class PasswordValidateError extends CustomError {
  constructor(message = '비밀번호는 8자 이상이여야합니다.') {
    super(message, 400);
  }
}

export class ResourceNotFoundError extends CustomError {
  constructor(message = '요청한 자원을 찾을 수 없습니다.') {
    super(message, 404);
  }
}

export class InternalServerError extends CustomError {
  constructor(
    message = '서버에 문제가 발생하였거나 이미 등록된 닉네임입니다.',
  ) {
    super(message, 500);
  }
}

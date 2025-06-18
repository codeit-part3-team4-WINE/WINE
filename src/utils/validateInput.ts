//인풋입력값 검증용 함수

const validateEmail = (value: string) => {
  if (!value) return '이메일은 필수 입력입니다.';
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!regex.test(value)) return '이메일 형식으로 작성해 주세요.';
  return '';
};

const validateNickname = (value: string) => {
  if (!value) return '닉네임은 필수 입력입니다.';
  if (value.length > 20) return '닉네임은 최대 20자까지 가능합니다.';
  return '';
};

const validatePassword = (value: string) => {
  if (!value) return '비밀번호는 필수 입력입니다.';
  if (value.length < 8) return '비밀번호는 최소 8자 이상입니다.';
  const regex = /^[A-Za-z0-9!@#$%^&*]+$/;
  if (!regex.test(value))
    return '비밀번호는 숫자, 영문, 특수문자로만 가능합니다.';
  return '';
};

const validatePasswordConfirmation = (value: string, password: string) => {
  if (!value) return '비밀번호 확인을 입력해주세요.';
  if (value !== password) return '비밀번호가 일치하지 않습니다.';
  return '';
};

export {
  validateEmail,
  validateNickname,
  validatePassword,
  validatePasswordConfirmation,
};

// API 요청 유지 시간: 5초
const API_TIMEOUT = 5000;

// Content Type: application/json, form-data
const API_HEADERS = {
  JSON: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
  FORM_DATA: {
    'Content-Type': 'multipart/form-data',
  },
};

export { API_HEADERS, API_TIMEOUT };

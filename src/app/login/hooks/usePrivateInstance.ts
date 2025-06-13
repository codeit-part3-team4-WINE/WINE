// import { useEffect } from 'react';

// import { privateInstance } from '@/apis/privateInstance';

// import useRefresh from './useRefresh';

// // 요청 시 액세스 토큰이 만료되었으면 자동으로 새 토큰을 받아 재요청하는 기능
// const usePrivateInstance = () => {
//   const refresh = useRefresh(); //refresh함수 가져오기

//   useEffect(() => {
//     // 응답 인터셉터
//     const responseInterceptor = privateInstance.interceptors.response.use(
//       (response) => response, // 정상 응답은 그대로 반환

//       async (error) => {
//         const originalRequest = error.config; // 실패한 원래 요청 정보

//         // 401 에러거나 재요청 플래그가 없을 경우에만 재시도함 (무한 루프 방지)
//         if (error.response?.status === 401 && !originalRequest._retry) {
//           originalRequest._retry = true; // 재시도 여부를 설정해서 무한 요청 방지

//           try {
//             const newAccessToken = await refresh(); // refreshToken으로 새로운 accessToken 요청

//             if (newAccessToken) {
//               // 새 토큰을 헤더에 넣어서 요청을 다시 보냄
//               originalRequest.headers = {
//                 ...originalRequest.headers,
//                 Authorization: `Bearer ${newAccessToken}`,
//               };

//               return privateInstance(originalRequest); // 요청을 재시도
//             }
//           } catch (refreshError) {
//             // 새 토큰 발급 실패 시 에러 반환
//             return Promise.reject(refreshError);
//           }
//         }

//         return Promise.reject(error); // 기타 에러는 그냥 에러
//       },
//     );

//     //  클린업펑션으로 컴포넌트 언마운트 시 인터셉터 제거
//     return () => {
//       privateInstance.interceptors.response.eject(responseInterceptor);
//     };
//   }, [refresh]); // refresh 함수가 바뀔 때만 재등록
// };

// export default usePrivateInstance;

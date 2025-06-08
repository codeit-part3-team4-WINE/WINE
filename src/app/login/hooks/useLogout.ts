import useUserStore from '@/stores/Auth-store/authStore';

const useLogout = () => {
  const clearUser = useUserStore((state) => state.clearUser);

  const logout = () => {
    clearUser();

    document.cookie =
      'accessToken=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    document.cookie =
      'refreshToken=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT;';

    window.location.reload();

    // router.push('/login')
  };

  return logout;
};

export default useLogout;

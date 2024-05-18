import { useSelector } from 'react-redux';
import { RootState } from '../store';

export const useAuth = () => {
  const { user, token } = useSelector((state: RootState) => state.auth);
  return { isAuthenticated: !!user, user, token };
};

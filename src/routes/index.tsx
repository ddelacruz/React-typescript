import { Button } from '@mui/material';
import { Routes, Route, Navigate} from 'react-router-dom';
import { useAppThemeContext } from '../shared/contexts';

export const AppRoutes = () => {
  const { toggleTheme } = useAppThemeContext();
  return (
    <Routes>
      <Route path='/login' element={
        <Button variant='contained' color='primary' onClick={toggleTheme}>
          change Theme
        </Button>
        }>
      </Route>

      <Route path='*' element={<Navigate to='/login' />}></Route>
    </Routes>
  );
}
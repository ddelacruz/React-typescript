import { Button } from '@mui/material';
import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDrawerContext } from '../shared/contexts';

export const AppRoutes = () => {
  const { toggleDrawerOpen, setDrawerOptions } = useDrawerContext();

  useEffect(() => {
    setDrawerOptions([
      {
        label: 'Inicio',
        path: 'login',
        icon: 'home'
      },
      {
        label: 'Usuarios',
        path: 'users',
        icon: 'person'
      }
    ]);
  }, []);
  return (
    <Routes>
      <Route
        path="/login"
        element={
          <Button variant="contained" color="primary" onClick={toggleDrawerOpen}>
            change Drawer
          </Button>
        }
      ></Route>

      {/* <Route path="*" element={<Navigate to="/login" />}></Route> */}
    </Routes>
  );
};

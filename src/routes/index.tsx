import { Button } from '@mui/material';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useDrawerContext } from '../shared/contexts';

export const AppRoutes = () => {
  const { toggleDrawerOpen } = useDrawerContext();
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

      <Route path="*" element={<Navigate to="/login" />}></Route>
    </Routes>
  );
};

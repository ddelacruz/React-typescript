
import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from './routes';
import { Sidebard } from './shared/components';
import { AppThemeProvider, DrawerProvider } from './shared/contexts';


export const App = () => {
  return (
    <AppThemeProvider>
      <DrawerProvider>
        <BrowserRouter>
          <Sidebard>
            <AppRoutes />
          </Sidebard>
        </BrowserRouter>
      </DrawerProvider>
    </AppThemeProvider>
  );
};



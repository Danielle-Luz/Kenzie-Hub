import { Routes } from './Routes';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { UserProvider } from './providers/UserContext';

export function App () {
  return (
    <>
      <ToastContainer autoClose={3000} />
      <UserProvider>
        <Routes />
      </UserProvider>
    </>
  );
}

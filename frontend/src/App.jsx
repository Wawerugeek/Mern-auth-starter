import Header from "./components/header";
import { Container } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <>
      <Header />
      <ToastContainer />
      <Container className="my-2">
        <Outlet />
      </Container>
    </>
  );
};

export default App;

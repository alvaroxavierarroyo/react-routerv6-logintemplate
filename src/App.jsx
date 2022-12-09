import { BrowserRouter, Routes, Route } from "react-router-dom";
{
  /*Layout*/
}
import AuthLayout from "./layouts/auth/AuthLayout";

{
  /*Pages*/
}
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import ForgetPassword from "./pages/auth/ForgetPassword";
import ChangePassword from "./pages/auth/ChangePassword";
import Error from "./pages/404";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AuthLayout />}>
          <Route index element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="forgetpassword" element={<ForgetPassword />} />
          <Route path="changepassword/:token" element={<ChangePassword />} />
        </Route>
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

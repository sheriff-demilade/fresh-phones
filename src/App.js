import { Route, Routes } from "react-router-dom";
import Header from "./routes/header.component";
import Home from "./routes/home.component";
import Shop from "./routes/shop.component";
import Checkout from "./routes/checkout.component";
import Login from "./routes/login.component";
import SignUp from "./routes/sign-up.component";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route index element={<Home />} />
        <Route path="shop/*" element={<Shop />} />
        <Route path="checkout" element={<Checkout />} />
        <Route path="login" element={<Login />} />
        <Route path="Sign-up" element={<SignUp />} />
      </Route>
    </Routes>
  );
};

export default App;

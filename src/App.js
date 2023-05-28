import { Route, Routes } from "react-router-dom";
import Header from "./routes/header.component";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route
          index
          element={<h1 className="text-5xl text-center">Fresh Phones</h1>}
        />
      </Route>
    </Routes>
  );
};

export default App;

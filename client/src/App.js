import { Route, Routes } from "react-router-dom";
import Navbar from "./component/navbar/navbar.component";
import Home from "./router/home.component";

function App() {

  return (
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;

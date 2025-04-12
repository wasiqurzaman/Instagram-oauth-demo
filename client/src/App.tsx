import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./pages/Home";
import AuthRedirect from "./pages/AuthRedirect";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/auth/redirect" element={<AuthRedirect />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./pages/Home";
import AuthRedirect from "./pages/AuthRedirect";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/auth/redirect" element={<AuthRedirect />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

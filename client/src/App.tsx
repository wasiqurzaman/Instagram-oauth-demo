import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./pages/Home";
import AuthRedirect from "./pages/AuthRedirect";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import PrivateRoute from "./components/PrivateRoute";
import AppLayout from "./components/AppLayout";
import Media from "./pages/Media";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000, // 60s
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools />
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/auth/redirect" element={<AuthRedirect />} />

          <Route
            path="/"
            element={
              <PrivateRoute>
                <AppLayout />
              </PrivateRoute>
            }
          >
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/feed" element={<Media />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;

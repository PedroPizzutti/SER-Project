import { BrowserRouter } from "react-router-dom";
import { Routes } from "./routes";
import { QueryClient, QueryClientProvider } from "react-query";
import { AuthProvider } from "./stores/hook/useAuth";
import { ToastProvider } from "./hook/useToast";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
      <ToastProvider>
        <AuthProvider>
          <Routes />
        </AuthProvider>
        </ToastProvider>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;

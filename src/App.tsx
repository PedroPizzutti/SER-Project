import { BrowserRouter } from "react-router-dom";
import { Routes } from "./routes";
import { QueryClient, QueryClientProvider } from "react-query";
import { AuthProvider } from "./stores/hook/useAuth";
import { ToastProvider } from "./hook/useToast";
import { ThemeProvider } from "styled-components";
import theme from "./global/styles/theme";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <ToastProvider>
            <AuthProvider>
              <Routes />
            </AuthProvider>
          </ToastProvider>
        </ThemeProvider>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;

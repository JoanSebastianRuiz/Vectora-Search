import { ThemeProvider } from "next-themes";
import { useRoutes } from "react-router-dom";
import routes from "./routes";
import { Toaster } from "./components/ui/sonner";

const App = () => {
  const content = useRoutes(routes);
  return (
    <ThemeProvider attribute="class" defaultTheme="dark">
      {content}
      <Toaster />
    </ThemeProvider>
  );
};

export default App;

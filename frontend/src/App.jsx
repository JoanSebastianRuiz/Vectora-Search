import { ThemeProvider } from "next-themes";
import { useRoutes } from "react-router-dom";
import routes from "./routes";

const App = () => {
  const content = useRoutes(routes);
  return (
    <ThemeProvider attribute="class" defaultTheme="dark">
      {content}
    </ThemeProvider>
  );
};

export default App;

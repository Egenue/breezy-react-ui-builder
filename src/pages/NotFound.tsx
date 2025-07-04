import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center fade-in">
        <h1 className="text-6xl font-bold mb-4 bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
          404
        </h1>
        <p className="text-xl text-muted-foreground mb-6">Oops! Page not found</p>
        <a href="/" className="text-primary hover:text-primary-glow underline text-lg transition-colors">
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;

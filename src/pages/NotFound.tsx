import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div>
        <h1 className="text-8xl md:text-9xl font-black uppercase tracking-tighter text-foreground">404</h1>
        <div className="mt-4 mb-4 h-[3px] w-16 bg-primary" />
        <p className="text-sm text-muted-foreground mb-6">Page not found</p>
        <a
          href="/"
          className="text-xs font-bold tracking-[0.15em] uppercase text-foreground underline underline-offset-4 decoration-2"
        >
          Return Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;

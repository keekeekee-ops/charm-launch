import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { BetaDialog } from "./BetaDialog";
import { Heart } from "lucide-react";

export const Header = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 backdrop-blur-md bg-background/80">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <Link to="/" className="flex items-center gap-2 text-xl font-bold">
              <Heart className="w-6 h-6 fill-primary text-primary" />
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Lovable
              </span>
            </Link>

            <nav className="flex items-center gap-1">
              <Link to="/">
                <Button
                  variant="ghost"
                  className={isActive("/") ? "text-primary" : "text-muted-foreground hover:text-foreground"}
                >
                  Project
                </Button>
              </Link>
              <Link to="/about">
                <Button
                  variant="ghost"
                  className={isActive("/about") ? "text-primary" : "text-muted-foreground hover:text-foreground"}
                >
                  About Us
                </Button>
              </Link>
            </nav>
          </div>

          <Button
            onClick={() => setIsDialogOpen(true)}
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium px-6"
          >
            Join Beta
          </Button>
        </div>
      </header>

      <BetaDialog open={isDialogOpen} onOpenChange={setIsDialogOpen} />
    </>
  );
};

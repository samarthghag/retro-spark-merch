import { Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="border-t border-border/50 mt-24">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="w-6 h-6 text-primary" />
              <span className="text-2xl font-bold text-gradient">RetroMerch</span>
            </div>
            <p className="text-muted-foreground max-w-md">
              Turn retro posters into wearable merch with AI. Vintage meets future.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4">Shop</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/products" className="text-muted-foreground hover:text-primary transition-colors">
                  All Products
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-muted-foreground hover:text-primary transition-colors">
                  Featured
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Account</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/login" className="text-muted-foreground hover:text-primary transition-colors">
                  Login
                </Link>
              </li>
              <li>
                <Link to="/signup" className="text-muted-foreground hover:text-primary transition-colors">
                  Sign Up
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border/50 pt-8 text-center text-muted-foreground text-sm">
          <p>© 2025 RetroMerch. Built with ❤️</p>
        </div>
      </div>
    </footer>
  );
}

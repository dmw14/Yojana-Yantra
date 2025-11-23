
import { Search, Menu, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import type { User } from "@supabase/supabase-js";

const Header = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    // Set up auth state listener
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (event, session) => {
        setUser(session?.user ?? null);
      }
    );

    // Check for existing session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, []);
  
  return (
    <header className="bg-white shadow-sm border-b">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center">
              <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                <div className="w-4 h-4 bg-blue-900 rounded-full"></div>
              </div>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-blue-900">Yojana Yantra</h1>
              <p className="text-xs text-gray-600">Government Schemes Portal</p>
            </div>
          </div>

          {/* Search Bar - Hidden on mobile */}
          <div className="hidden md:flex items-center space-x-2 flex-1 max-w-md mx-8">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input 
                placeholder="Search government schemes..." 
                className="pl-10 bg-gray-50 border-gray-200"
              />
            </div>
          </div>

          {/* User Actions */}
          <div className="flex items-center space-x-4">
            <Button 
              variant="outline" 
              className="hidden md:flex items-center gap-2" 
              onClick={() => navigate("/chatbot")}
            >
              <MessageCircle className="w-4 h-4" />
              CHATBOT
            </Button>
            <Button variant="outline" className="hidden md:flex" onClick={() => navigate("/login")}>
              LOGIN
            </Button>
            <Button variant="outline" className="hidden md:flex" onClick={() => navigate("/account")}>
              MY ACCOUNT
            </Button>
            {user && (
              <div className="hidden md:block text-sm text-gray-600">
                {user.email}
              </div>
            )}
            <Button variant="ghost" size="sm" className="md:hidden">
              <Menu className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Mobile Search */}
        <div className="mt-4 md:hidden">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <Input 
              placeholder="Search government schemes..." 
              className="pl-10 bg-gray-50 border-gray-200"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

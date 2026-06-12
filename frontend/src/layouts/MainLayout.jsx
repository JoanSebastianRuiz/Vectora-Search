import { Outlet } from "react-router-dom";
import { Menu } from "lucide-react";

import Sidebar from "@/components/layout/Sidebar";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const MainLayout = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Desktop Sidebar */}
      <aside className="hidden md:flex fixed left-0 top-0 h-screen w-64 border-r bg-background z-40">
        <Sidebar />
      </aside>

      {/* Mobile Header */}
      <header className="md:hidden sticky top-0 z-40 h-16 border-b bg-background flex items-center px-4">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon">
              <Menu />
            </Button>
          </SheetTrigger>

          <SheetContent side="left" className="p-0 w-64 max-w-xs">
            <Sidebar />
          </SheetContent>
        </Sheet>

        <h1 className="ml-3 font-semibold">Vectora</h1>
      </header>

      {/* Main Content */}
      <main className="md:ml-64 min-h-screen p-6">
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;

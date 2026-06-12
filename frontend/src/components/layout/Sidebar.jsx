import { Package, Tags, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

import { Link, useLocation } from "react-router-dom";

const items = [
  { label: "Search", icon: Search, path: "/" },
  { label: "Products", icon: Package, path: "/products" },
  { label: "Categories", icon: Tags, path: "/categories" },
];

const Sidebar = () => {
  const location = useLocation();

  return (
    <aside className=" h-screen border-r bg-background p-4 flex flex-col w-full">
      <div className="mb-6">
        <h2 className="text-lg font-bold">Vectora</h2>
        <p className="text-xs text-muted-foreground">Semantic Search</p>
      </div>

      <Separator className="mb-4" />

      <nav className="flex flex-col gap-2">
        {items.map((item) => {
          const active = location.pathname === item.path;

          return (
            <Link key={item.path} to={item.path}>
              <Button
                variant={active ? "secondary" : "ghost"}
                className="w-full justify-start gap-2"
              >
                <item.icon size={18} />
                {item.label}
              </Button>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
};

export default Sidebar;

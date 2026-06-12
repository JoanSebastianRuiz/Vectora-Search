import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  return (
    <div className="flex gap-2 max-w-2xl mx-auto">
      <Input
        placeholder="Search products semantically..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && onSearch(query)}
      />
      <Button onClick={() => onSearch(query)}>Search</Button>
    </div>
  );
};

export default SearchBar;

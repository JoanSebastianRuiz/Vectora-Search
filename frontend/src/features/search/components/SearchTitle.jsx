import { SearchIcon } from "lucide-react";

const SearchTitle = () => {
  return (
    <div className="mb-10 text-center">
      <div className="flex items-center justify-center gap-3">
        <SearchIcon size={32} className="text-primary drop-shadow-sm" />

        <h2 className="text-4xl font-bold">Search anything semantically</h2>
      </div>

      <p className="mt-3 text-sm md:text-base text-muted-foreground max-w-xl mx-auto">
        Powered by embeddings and pgvector
      </p>
    </div>
  );
};

export default SearchTitle;

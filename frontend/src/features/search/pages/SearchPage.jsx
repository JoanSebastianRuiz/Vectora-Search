import SearchBar from "@/features/search/components/SearchBar";
import SearchResults from "@/features/search/components/SearchResults";
import SearchTitle from "../components/SearchTitle";
import { useSearchProducts } from "@/features/search/hooks/useSearchProducts";
import { useState } from "react";

const SearchPage = () => {
  const [results, setResults] = useState([]);

  const { mutateAsync, isPending } = useSearchProducts();

  const handleSearch = async (query) => {
    mutateAsync(query, {
      onSuccess: (data) => {
        setResults(data);
      },
    });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className="max-w-5xl mx-auto px-6 py-10">
        <SearchTitle />

        <div className="flex justify-center mb-8">
          <div className="w-full max-w-2xl">
            <SearchBar onSearch={handleSearch} />
          </div>
        </div>

        <SearchResults results={results} loading={isPending} />
      </main>
    </div>
  );
};

export default SearchPage;

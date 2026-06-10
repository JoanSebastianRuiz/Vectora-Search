import SearchBar from "@/components/search/SearchBar";
import SearchResults from "@/components/search/SearchResults";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* HEADER */}
      <header className="w-full border-b">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <h1 className="font-bold text-lg">Vectora Search</h1>

          <div className="text-xs text-muted-foreground">
            Semantic Search Engine
          </div>
        </div>
      </header>

      {/* MAIN */}
      <main className="max-w-5xl mx-auto px-6 py-10">
        {/* TITLE */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold">
            Search anything semantically 🔎
          </h2>
          <p className="text-muted-foreground mt-2">
            Powered by embeddings + pgvector + RAG
          </p>
        </div>

        {/* SEARCH */}
        <div className="flex justify-center mb-8">
          <div className="w-full max-w-2xl">
            <SearchBar />
          </div>
        </div>

        {/* RESULTS */}
        <SearchResults
          results={[
            {
              id: 1,
              name: "Apple iPhone 13",
              description:
                "The latest iPhone with A15 Bionic chip and improved camera.",
              score: 0.95,
            },
            {
              id: 2,
              name: "Samsung Galaxy S21",
              description:
                "Flagship Android phone with powerful performance and sleek design.",
              score: 0.92,
            },
          ]}
        />
      </main>
    </div>
  );
}

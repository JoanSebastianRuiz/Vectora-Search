import SearchResultsItem from "./SearchResultsItem";
import SearchResultsLoading from "./SearchResultsLoading";

const SearchResults = ({ results = [], loading }) => {
  if (loading) {
    return <SearchResultsLoading />;
  }

  if (!results.length) {
    return (
      <div className="mt-10 text-center text-muted-foreground">
        No results found. Try adjusting your search.
      </div>
    );
  }

  return (
    <div className="grid gap-4 mt-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
      {results.map((item) => (
        <SearchResultsItem key={item.product.id} {...item} />
      ))}
    </div>
  );
};

export default SearchResults;

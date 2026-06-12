import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

const SearchResultsLoading = () => {
  return (
    <div className="grid gap-4 mt-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
      {Array.from({ length: 6 }).map((_, i) => (
        <Card key={i} className="p-4 space-y-3">
          <div className="flex justify-between items-start gap-2">
            <Skeleton className="h-5 w-2/3" />
            <Skeleton className="h-5 w-12" />
          </div>

          <Skeleton className="h-3 w-1/3" />

          <div className="space-y-2">
            <Skeleton className="h-3 w-full" />
            <Skeleton className="h-3 w-5/6" />
            <Skeleton className="h-3 w-4/6" />
          </div>

          <div className="flex justify-between pt-2">
            <Skeleton className="h-4 w-20" />
            <Skeleton className="h-3 w-16" />
          </div>

          <Skeleton className="h-1 w-full" />
        </Card>
      ))}
    </div>
  );
};

export default SearchResultsLoading;

import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

const SearchResults = ({ results }) => {
  return (
    <div className="grid gap-4 mt-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
      {results.map((item) => (
        <Card key={item.id} className="p-4">
          <div className="flex justify-between">
            <h2 className="font-semibold">{item.name}</h2>
            <Badge>{Math.round(item.score * 100)}%</Badge>
          </div>

          <p className="text-sm text-muted-foreground">{item.description}</p>
        </Card>
      ))}
    </div>
  );
};

export default SearchResults;

import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

const getScoreLabel = (score) => {
  if (score >= 0.75) return { text: "Highly relevant", color: "bg-green-500" };
  if (score >= 0.5) return { text: "Relevant", color: "bg-yellow-500" };
  return { text: "Low match", color: "bg-red-500" };
};

const SearchResultsItem = ({
  product: { name, category, description, price } = {},
  score,
}) => {
  const label = getScoreLabel(score);
  return (
    <Card className="p-4 space-y-3">
      <div className="flex justify-between items-start gap-2">
        <h2 className="font-semibold leading-tight">{name}</h2>

        <Badge className={label.color}>{Math.round(score * 100)}%</Badge>
      </div>

      <div className="text-xs text-muted-foreground">{category?.name}</div>

      <p className="text-sm text-muted-foreground line-clamp-3">
        {description}
      </p>

      <div className="flex justify-between items-center pt-2">
        <span className="font-medium">USD {price.toLocaleString()}</span>

        <span className="text-xs text-muted-foreground">{label.text}</span>
      </div>

      <div className="h-1 w-full bg-muted rounded">
        <div
          className="h-1 bg-primary rounded"
          style={{ width: `${score * 100}%` }}
        />
      </div>
    </Card>
  );
};

export default SearchResultsItem;

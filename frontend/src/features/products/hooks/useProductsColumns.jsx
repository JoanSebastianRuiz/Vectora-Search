import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export const useProductsColumns = () => [
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "description",
    header: "Description",
    cell: ({ row }) => (
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <div className="max-w-xs truncate cursor-help">
              {row.original.description}
            </div>
          </TooltipTrigger>

          <TooltipContent className="max-w-sm">
            <p>{row.original.description}</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    ),
  },
  {
    accessorKey: "category",
    header: "Category",
    cell: ({ row }) => row.original.category.name,
  },
  {
    accessorKey: "price",
    header: "Price",
    cell: ({ row }) => `USD ${row.original.price}`,
  },
];

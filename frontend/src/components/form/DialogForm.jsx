import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const DialogForm = ({
  open,
  onOpenChange,
  selectedItem,
  formComponent: FormComponent,
  createLabel = "Create",
  editLabel = "Edit",
  onSubmit,
}) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{selectedItem ? editLabel : createLabel}</DialogTitle>
        </DialogHeader>

        <FormComponent selectedItem={selectedItem} onSubmit={onSubmit} />
      </DialogContent>
    </Dialog>
  );
};

export default DialogForm;

import { useState } from "react";

import DataTable from "@/components/table/DataTable";
import DialogForm from "../form/DialogForm";
import ConfirmDeleteDialog from "./ConfirmDeleteDialog";
import DataTableActions from "../table/DataTableActions";

const CrudPage = ({
  title,
  useColumns,
  useData,
  useCreate,
  useUpdate,
  useDelete,
  formComponent,
  createLabel,
  editLabel,
}) => {
  const { data, isLoading } = useData();
  const { mutateAsync: mutateAsyncCreate } = useCreate();
  const { mutateAsync: mutateAsyncUpdate } = useUpdate();
  const { mutateAsync: mutateAsyncDelete } = useDelete();

  const [open, setOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [itemToDelete, setItemToDelete] = useState(null);

  const handleCreate = () => {
    setSelectedItem(null);
    setOpen(true);
  };

  const handleEdit = (item) => {
    setSelectedItem(item);
    setOpen(true);
  };

  const handleDelete = (item) => {
    setItemToDelete(item);
    setDeleteDialogOpen(true);
  };

  const confirmDelete = async () => {
    if (!itemToDelete) return;

    await mutateAsyncDelete(itemToDelete.id);

    setDeleteDialogOpen(false);
    setItemToDelete(null);
  };

  const handleSubmit = async (values) => {
    if (selectedItem) {
      await mutateAsyncUpdate({ id: selectedItem.id, ...values });
    } else {
      await mutateAsyncCreate(values);
    }

    setOpen(false);
  };

  const initialColumns = useColumns({
    onEdit: handleEdit,
    onDelete: handleDelete,
  });

  const tableColumns = [
    ...initialColumns,
    {
      id: "actions",
      enableSorting: false,
      cell: ({ row }) => (
        <DataTableActions
          row={row.original}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      ),
    },
  ];

  return (
    <>
      <DataTable
        title={title}
        data={data}
        loading={isLoading}
        columns={tableColumns}
        onCreate={handleCreate}
      />

      <DialogForm
        createLabel={createLabel}
        editLabel={editLabel}
        open={open}
        onOpenChange={setOpen}
        selectedItem={selectedItem}
        formComponent={formComponent}
        onSubmit={handleSubmit}
      />

      <ConfirmDeleteDialog
        open={deleteDialogOpen}
        onOpenChange={setDeleteDialogOpen}
        onConfirm={confirmDelete}
        itemName={itemToDelete ? itemToDelete.name : ""}
      />
    </>
  );
};

export default CrudPage;

import { Button } from "@/components/ui/button";
import FieldContainer from "./FieldContainer";

const Form = ({
  onSubmit,
  isSubmitting,
  selectedItem,
  formConfigs,
  errors,
}) => {
  return (
    <form onSubmit={onSubmit} className="space-y-4 overflow-auto max-h-[70vh]">
      {formConfigs.map(({ name, label, input }) => (
        <FieldContainer key={name} name={name} label={label} errors={errors}>
          {input}
        </FieldContainer>
      ))}

      <Button type="submit" className="w-full" disabled={isSubmitting}>
        {selectedItem ? "Update" : "Create"}
      </Button>
    </form>
  );
};

export default Form;

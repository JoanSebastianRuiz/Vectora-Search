const FieldContainer = ({ name, label, errors, children }) => {
  return (
    <div className="space-y-2">
      <label className="text-sm font-medium">{label}</label>

      {children}

      {errors[name] && (
        <p className="text-sm text-destructive">{errors[name].message}</p>
      )}
    </div>
  );
};

export default FieldContainer;

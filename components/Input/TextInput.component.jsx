import Field from "./Field.component";

export default function TextInput({
  label,
  helper,
  error,
  type = "text",
  ...props
}) {
  return (
    <Field label={label} helper={helper} error={error}>
      <input type={type} className="field-control" {...props} />
    </Field>
  );
}

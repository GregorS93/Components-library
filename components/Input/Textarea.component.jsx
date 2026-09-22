import Field from "./Field.component";

export default function Textarea({
  label,
  helper,
  error,
  rows = 3,
  ...props
}) {
  return (
    <Field label={label} helper={helper} error={error}>
      <textarea className="field-control field-textarea" rows={rows} {...props} />
    </Field>
  );
}

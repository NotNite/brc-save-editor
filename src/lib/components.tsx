import { Binding } from "./misc";
import { Enum } from "./types";

export function BindingNumberInput({
  binding,
  ...props
}: {
  binding: Binding<number>;
} & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      type="number"
      value={binding.get()}
      onChange={(e) => binding.set(parseInt(e.target.value))}
      {...props}
    />
  );
}

export function BindingEnumInput<E extends Enum, T extends E[keyof E]>({
  binding,
  enumType,
  display,
  ...props
}: {
  binding: Binding<T>;
  display?: (value: T) => string | null;
  enumType: E;
} & React.SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <select
      value={binding.get().toString()}
      onChange={(e) => {
        binding.set(parseInt(e.target.value) as T);
      }}
      {...props}
    >
      {Object.entries(enumType)
        .filter(([, value]) => typeof value === "number")
        .map(([key, value]) => {
          let val = display ? display(value as T) : key;
          if (!val) val = key;
          return (
            <option key={value} value={value.toString()}>
              {val}
            </option>
          );
        })}
    </select>
  );
}

export function BindingBooleanInput({
  binding,
  ...props
}: {
  binding: Binding<boolean>;
} & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      type="checkbox"
      checked={binding.get()}
      onChange={(e) => binding.set(e.target.checked)}
      {...props}
    />
  );
}

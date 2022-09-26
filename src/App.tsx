import { FC } from "react";
import { useFieldArray, useForm } from "react-hook-form";

type FormItems = {
  items: { text: string }[];
};

const FormSample: FC = () => {
  const { control, register } = useForm<FormItems>();

  const { fields, append, prepend, remove, swap, move, insert } = useFieldArray(
    {
      control, // control props comes from useForm (optional: if you are using FormContext)
      name: "items", // unique name for your Field Array
    }
  );

  const addItem = () => {
    append({ text: "add" });
  };
  return (
    <>
      {fields.map((field, index) => (
        <div>
          <input
            key={field.id} // important to include key with field's id
            {...register(`items.${index}.text`)}
          />
        </div>
      ))}

      <div>
        <button name="add item" onClick={() => addItem()}>
          add
        </button>
      </div>
    </>
  );
};

export default FormSample;

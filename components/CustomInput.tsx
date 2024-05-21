import React from "react";
import { FormControl, FormField, FormLabel, FormMessage } from "./ui/form";
import { Input } from "./ui/input";

import { Control, FieldPath } from "react-hook-form";
import { z } from "zod";
import { authFormSchema } from "@/lib/utils";

// const formSchema = z.object({
//   email: z.string().email(),
// });

const formSchema = authFormSchema("sign-up");

interface CustomInputProps {
  control: Control<z.infer<typeof formSchema>>;
  // name: "email" | "password";
  name: FieldPath<z.infer<typeof formSchema>>;
  label: string;
  placeholder: string;
};

const CustomInput = ({
  control,
  name,
  label,
  placeholder,
}: CustomInputProps) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <div className='form-item'>
          <FormLabel className='form-label'>{label}</FormLabel>
          <div className='flex w-full flex-col '>
            <FormControl>
              <Input
                id={`${name}-input`}
                type={name === 'password' ? 'password' : 'text'}
                placeholder={placeholder}
                {...field}
                className='input-class'
              />
            </FormControl>
            <FormMessage className='form-message mt-2' />
          </div>
        </div>
      )}
    />
  );
};

export default CustomInput;

'use client';

import {
   FieldErrors,
   FieldValues,
   UseFormRegister
} from "react-hook-form";

interface InputProps {
   label: string;
   id: string;
   type?: string;
   required?: boolean;
   register: UseFormRegister<FieldValues>,
   errors: FieldErrors
   disabled?: boolean;
}

const Input: React.FC<InputProps> = ({
   label,
   id,
   register,
   required,
   errors,
   type = 'text',
   disabled,
}) => {
   return (
      <div className='mt-3'>
         <label className="text-white" htmlFor={id}>{label}</label>
         <input
            type={type}
            id={id}
            className="shadow-sm text-white bg-transparent ring-1 ring-inset ring-gray-300 placeholder: text-gray-400 focus:ring-2 px-4 py-2 focus:ring-inset focus:ring-white-600 sm:text-sm mt-3"
            autoComplete={id}
            disabled={disabled}
            {...register(id, { required })}
         />

      </div>
   );
}

export default Input;
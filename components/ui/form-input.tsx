import { ControllerRenderProps, FieldValues, Path } from 'react-hook-form';
import { FormControl, FormItem, FormLabel, FormMessage } from './form';
import { Input } from './input';
import { cn } from '@/lib/utils';

interface FormInputProps<T extends FieldValues> {
  field: ControllerRenderProps<T, Path<T>>;
  type?: 'text' | 'number';
  label: string;
  placeholder?: string;
  className?: string;
}

const FormInput = <T extends FieldValues>({
  field,
  type = 'text',
  label,
  placeholder,
  className,
}: FormInputProps<T>) => {
  return (
    <FormItem>
      <FormLabel>{label}</FormLabel>
      <FormControl>
        <Input
          placeholder={placeholder}
          type={type}
          {...field}
          className={cn('input', className)}
        />
      </FormControl>
      <FormMessage />
    </FormItem>
  );
};
export default FormInput;

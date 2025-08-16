import { ControllerRenderProps, FieldValues, Path } from 'react-hook-form';
import { FormControl, FormItem, FormLabel, FormMessage } from './form';
import { cn } from '@/lib/utils';
import { Textarea } from './textarea';

interface FormTextareaProps<T extends FieldValues> {
  field: ControllerRenderProps<T, Path<T>>;
  label: string;
  placeholder?: string;
  className?: string;
}

const FormTextarea = <T extends FieldValues>({
  field,
  label,
  placeholder,
  className,
}: FormTextareaProps<T>) => {
  return (
    <FormItem>
      <FormLabel>{label}</FormLabel>
      <FormControl>
        <Textarea
          placeholder={placeholder}
          {...field}
          className={cn('input', className)}
        />
      </FormControl>
      <FormMessage />
    </FormItem>
  );
};
export default FormTextarea;

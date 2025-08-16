import { ControllerRenderProps, FieldValues, Path } from 'react-hook-form';
import { FormControl, FormItem, FormLabel, FormMessage } from './form';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './select';
import { cn } from '@/lib/utils';

interface SelectOption {
  value: string;
  label: string;
}

interface FormSelectProps<
  T extends FieldValues,
  O extends string | SelectOption
> {
  field: ControllerRenderProps<T, Path<T>>;
  label: string;
  placeholder?: string;
  triggerClassName?: string;
  itemClassName?: string;
  options: O[];
}

const FormSelect = <T extends FieldValues, O extends string | SelectOption>({
  field,
  label,
  placeholder,
  triggerClassName,
  itemClassName,
  options,
}: FormSelectProps<T, O>) => {
  const getOptionProps = (option: O): SelectOption => {
    if (typeof option === 'string') {
      return {
        value: option,
        label: option,
      };
    }
    return option;
  };

  return (
    <FormItem>
      <FormLabel>{label}</FormLabel>
      <FormControl>
        <Select
          onValueChange={field.onChange}
          value={field.value}
          defaultValue={field.value}
        >
          <SelectTrigger className={cn('input capitalize', triggerClassName)}>
            <SelectValue placeholder={placeholder} />
          </SelectTrigger>
          <SelectContent>
            {options.map((option) => {
              const { value, label } = getOptionProps(option);
              return (
                <SelectItem
                  value={value}
                  key={value}
                  className={cn('capitalize', itemClassName)}
                >
                  {label}
                </SelectItem>
              );
            })}
          </SelectContent>
        </Select>
      </FormControl>
      <FormMessage />
    </FormItem>
  );
};
export default FormSelect;

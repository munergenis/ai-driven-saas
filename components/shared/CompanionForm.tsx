'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Button } from '@/components/ui/button';
import { Form, FormField } from '@/components/ui/form';
import { subjects, voices } from '@/constants';
import FormInput from '../ui/form-input';
import FormSelect from '../ui/form-select';
import FormTextarea from '../ui/form-textarea';

// type FormData = {
//   name: string;
//   subject: string;
//   topic: string;
//   voice: string;
//   style: string;
//   duration: number;
// };
type FormData = z.infer<typeof formSchema>;
const formSchema = z.object({
  name: z.string().min(1, 'Companion is required.'),
  subject: z.string().min(1, 'Subject is required.'),
  topic: z.string().min(1, 'Topic is required.'),
  voice: z.string().min(1, 'Voice is required.'),
  style: z.string().min(1, 'Style is required.'),
  duration: z
    .string()
    .refine((val) => !isNaN(Number(val)), { error: 'Invalid number' })
    .refine((val) => Number(val) > 0, { error: 'Duration must be positive' })
    .refine((val) => Number(val) % 1 === 0, {
      error: 'Duration must be an integer',
    })
    .transform((val) => Number(val)) as unknown as z.ZodNumber,
});

const voiceStyles = [
  ...new Set(Object.values(voices).flatMap((styles) => Object.keys(styles))),
];

const CompanionForm = () => {
  const form = useForm<FormData>({
    mode: 'onBlur',
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      subject: '',
      topic: '',
      voice: '',
      style: '',
      duration: 15,
    },
  });

  const onSubmit = (values: FormData) => {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8"
      >
        {/* NAME */}
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormInput
              field={field}
              label="Companion name"
              placeholder="Enter the companion name"
            />
          )}
        />

        {/* SUBJECT */}
        <FormField
          control={form.control}
          name="subject"
          render={({ field }) => (
            <FormSelect
              field={field}
              label="Subject"
              placeholder="Select the subject"
              options={subjects}
              triggerClassName="input capitalize"
              itemClassName="capitalize"
            />
          )}
        />

        {/* TOPIC */}
        <FormField
          control={form.control}
          name="topic"
          render={({ field }) => (
            <FormTextarea
              field={field}
              label="What should the companion help with?"
              placeholder="Ex. Derivatives & Integrals"
              className="input"
            />
          )}
        />

        {/* VOICE */}
        <FormField
          control={form.control}
          name="voice"
          render={({ field }) => (
            <FormSelect
              field={field}
              label="Voice"
              placeholder="Select the voice"
              options={Object.keys(voices)}
            />
          )}
        />

        {/* STYLE */}
        <FormField
          control={form.control}
          name="style"
          render={({ field }) => (
            <FormSelect
              field={field}
              label="Style"
              placeholder="Select the style"
              options={voiceStyles}
            />
          )}
        />

        {/* DURATION */}
        <FormField
          control={form.control}
          name="duration"
          render={({ field }) => (
            <FormInput
              field={field}
              type="number"
              label="Estimated session duration in minutes"
              placeholder="15"
            />
          )}
        />
        <Button
          type="submit"
          className="w-full cursor-pointer"
        >
          Build Your Companion
        </Button>
      </form>
    </Form>
  );
};
export default CompanionForm;

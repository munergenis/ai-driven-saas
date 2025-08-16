import { SignIn } from '@clerk/nextjs';

const Page = () => {
  return (
    <main className="flex items-center justify-center py-20">
      <SignIn />
    </main>
  );
};
export default Page;

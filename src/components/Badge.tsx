export default function Badge({ children }: { children: React.ReactNode }) {
  return (
    <div className='text-primary-100 bg-primary-100/10 flex w-fit items-center gap-2 rounded-xl px-3 py-2 font-bold'>
      {children}
    </div>
  );
}

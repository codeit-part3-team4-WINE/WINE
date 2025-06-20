import Tab from '../../components/Tab';

export default function ReviewLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Tab />

      <div>{children}</div>
    </div>
  );
}

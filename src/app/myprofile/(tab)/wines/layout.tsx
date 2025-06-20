import Tab from '../../components/Tab';

export default function WineLayout({
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

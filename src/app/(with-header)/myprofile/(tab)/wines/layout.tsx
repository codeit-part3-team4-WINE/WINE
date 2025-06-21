import Tab from '../../components/Tab';

export default function WineLayout({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <div>
      <Tab />
      {children}
      {modal}
    </div>
  );
}

import Tab from '../../components/Tab';

export default function ReviewLayout({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <>
      <Tab />
      {children}
      {modal}
    </>
  );
}

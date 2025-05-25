export default async function WinePage({
  params,
}: {
  params: Promise<{ wineId: string }>;
}) {
  const wineId = (await params).wineId;
  return <h1 className='text-primary-100 text-3xl'>Wine Id: {wineId}</h1>;
}

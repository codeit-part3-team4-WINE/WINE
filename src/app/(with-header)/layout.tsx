import Footer from '@/components/Footer';
import Header from '@/components/Header';

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <header className='mx-auto w-full max-w-[350rem] px-[5vw] md:px-[10vw] xl:px-[15vw]'>
        <Header />
      </header>
      <main className='mx-auto my-10 min-h-screen w-full max-w-[350rem] px-[5vw] md:px-[10vw] xl:px-[15vw]'>
        {children}
      </main>
      <footer className='w-screen'>
        <Footer />
      </footer>
    </>
  );
}

import { Footer, Navigation } from '@/components';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navigation />
      <main className="overflow-hidden">{children}</main>
      <Footer />
    </>
  );
}

import { DockNav } from "@/components/dock-nav";

export default function FrontLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <DockNav />
      <main className="font-sans grid min-h-dvh p-8 sm:px-24 md:px-18 lg:pr-30 lg:pl-36 lg:py-16">
        {children}
      </main>
    </>
  );
}

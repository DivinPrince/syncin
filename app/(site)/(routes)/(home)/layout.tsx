import Sidebar from "@/components/sidebar/Sidebar";

export const metadata = {
  title: "Syncin | Home",
  description: "let's sync",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Sidebar>{children}</Sidebar>
    </>
  );
}

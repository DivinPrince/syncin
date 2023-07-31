import Sidebar from "@/components/sidebar/Sidebar";

export const metadata = {
  title: "Syncin | Mates",
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

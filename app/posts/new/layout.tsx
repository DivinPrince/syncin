import Sidebar from "@/components/sidebar/Sidebar";

export const metadata = {
   title: "Post | New",
   description: "let's sync",
};

export default function RootLayout({
   children,
}: {
   children: React.ReactNode;
}) {
   return (
      <>
         {children}
      </>
   );
}

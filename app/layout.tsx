import AuthContext from "@/context/AuthContext";
import "./globals.css";
import ToasterContext from "@/context/ToasterContext";
import ActiveStatus from "@/components/ActiveStatus";

export const metadata = {
  title: "Syncin",
  description: "let's sync",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html lang="en">
      <head></head>
      <body>
        <AuthContext>
          <ToasterContext />
          <ActiveStatus />
          {children}
        </AuthContext>
      </body>
    </html>
  );
}

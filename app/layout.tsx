import AuthContext from "@/context/AuthContext";
import { ThemeProvider } from "@/context/ThemeProvider";
import "./globals.css";
import ToasterContext from "@/context/ToasterContext";
import ActiveStatus from "@/components/ActiveStatus";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import QueryContext from "@/context/QueryContext";

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
        <QueryContext>
          <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
            <AuthContext>
              <ToasterContext />
              <ActiveStatus />
              {children}
            </AuthContext>
          </ThemeProvider>
        </QueryContext>
      </body>
    </html>
  );
}

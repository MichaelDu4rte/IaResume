import { cn } from "@/lib/utils";
import "@/styles/globals.css";
import { Inter } from "next/font/google";
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";

const font = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "FormBuilder | Crie Formulários",
  description:
    "FormBuilder permite que você crie formulários impressionantes e personalizados de forma simples e rápida. Transforme suas ideias em formulários eficazes e atraentes, facilitando a coleta de dados e feedbacks valiosos.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="pt-br" suppressHydrationWarning>
        <body
          className={cn(
            "min-h-screen bg-background text-foreground antialiased max-w-full overflow-x-hidden",
            font.className
          )}
        >
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}

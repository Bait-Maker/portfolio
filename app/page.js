import { Inter } from "next/font/google";
import HomePage from "@/components/HomePage";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={inter.className}>
      <HomePage />
    </main>
  );
}

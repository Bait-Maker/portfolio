import "./globals.css";

export const metadata = {
  title: "Jakub Dejworek",
  description: "The portfolio of Jakub Dejworek, Full Stack Developer",
  keywords: ["Next.js", "React", "JavaScript"],
  other: {
    "google-site-verification": "PnbZvk0ghTCKRK3_wQLUNL_LAyZlJez-derhcmwFEYc",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body id="root">{children}</body>
    </html>
  );
}

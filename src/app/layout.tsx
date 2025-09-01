import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'My Invoicing App',
  description: 'Manage your invoices efficiently and effortlessly.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  );
}

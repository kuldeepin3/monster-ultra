import type { Metadata } from 'next';
import './globals.css';
import './fonts.css';

export const metadata: Metadata = {
  title: 'Monster Ultra | Zero Sugar, Full Force',
  description: 'Experience the ultra-smooth energy of White Monster Energy (Zero Ultra).',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className='antialiased font-sans'>
        {children}
      </body>
    </html>
  );
}
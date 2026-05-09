import type { Metadata, Viewport } from 'next';
import Layout from '@/components/Layout';
import './globals.css';

const TITLE = 'OpenAI People-First AI Fund Application | PolicyEngine';
const DESCRIPTION =
  "PSL Foundation's application to OpenAI's People-First AI Fund on behalf of PolicyEngine.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  authors: [{ name: 'PolicyEngine' }],
};

export const viewport: Viewport = {
  themeColor: '#319795',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}

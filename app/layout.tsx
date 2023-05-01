import '@fortawesome/fontawesome-svg-core/styles.css';
import './globals.css';

import { config } from '@fortawesome/fontawesome-svg-core';
import { IBM_Plex_Sans } from 'next/font/google';

import { ThemeProvider } from './theme-provider';

config.autoAddCss = false;

const IBMPlexSans = IBM_Plex_Sans({
  weight: ['300', '500'],
  subsets: ['latin'],
});

export const metadata = {
  title: 'andrasat Github Page',
  description: 'My personal website build with NextJS',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className={IBMPlexSans.className}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}

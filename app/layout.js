import './globals.css';
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from '@vercel/speed-insights/next';

export const metadata = {
  title: 'Swift Life Sciences',
  description: 'Innovating for a healthier future',
  icons: {
    icon: '/logo.jpg',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <main>{children}
          <Analytics />
          <SpeedInsights />
        </main>
      </body>
    </html>
  );
}

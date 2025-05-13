import './globals.css';

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
        <main>{children}</main>
      </body>
    </html>
  );
}

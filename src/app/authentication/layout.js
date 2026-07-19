export default function AuthLayout({ children }) {
  return (
    <html lang="en">
      <body className={`antialiased overflow-x-hidden`}>
        <main>{children}</main>
      </body>
    </html>
  );
}

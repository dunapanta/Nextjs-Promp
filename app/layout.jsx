import "@styles/globals.css";

export const metadata = {
  title: "Nextjs prompt",
  description: "Nextjs prompt app",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <div className="main">
          <div className="grdient" />
          <main className="app">{children}</main>
        </div>
      </body>
    </html>
  );
};

export default RootLayout;

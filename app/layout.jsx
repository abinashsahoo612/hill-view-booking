"use client";
import NextTopLoader from "nextjs-toploader";
import { useEffect } from "react";
import "./styles/styles.css";
import "./assets/css/all.css";
import "./assets/css/meanmenu.min.css";
import "./assets/sass/style.css";
import { AuthProvider } from "./Providers";

export default function RootLayout({ children }) {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.min.js");
  }, []);
  return (
    <html lang="en"> 
	    <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Hill View</title>
	      <link rel="icon" type="image/png" href="/favicon.png" />
      </head>
      <body>
        <NextTopLoader showSpinner={false} />
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}

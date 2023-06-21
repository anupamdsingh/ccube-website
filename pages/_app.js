import "@/styles/globals.css";
import React from "react";
import { ThemeProvider, createTheme } from "@mui/material";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function App({ Component, pageProps }) {
  const notify = () => toast("Wow so easy!");

  const theme = createTheme({
    palette: {
      primary: {
        main: "rgb(99 102 241)",
      },
    },
  });

  return (
    <div>
      {/* <button onClick={notify}>Notify!</button>
      <ToastContainer /> */}
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </div>
  );
}

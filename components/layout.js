import React from "react";
import Head from "next/head";
import Header from "./header";
import Footer from "./footer";
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme();

function Layout({children}){

    return(
        <>
            <Head>
                <title>Renner Challenge Next.js</title>
                <meta name="description" content="Generated by created next app" />
                <link rel="icon" href="/logo.ico"/>        
            </Head>
            <Header />
            <ThemeProvider theme={theme}>
              <CssBaseline />
                <main>
                    {children}
                </main>
            </ThemeProvider>
            <Footer />
        </>
    )
}

export default Layout;
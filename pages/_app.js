import React from 'react';
import Router from 'next/router';
import Head from 'next/head';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import theme from '../components/theme';


import { pageview } from '../lib/gtag'


Router.events.on('routeChangeComplete', (url) => pageview(url))

export default function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
    {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
    <CssBaseline />
    <Component {...pageProps} />
    </ThemeProvider>

  );
}

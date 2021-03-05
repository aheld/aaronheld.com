import React from 'react';
import Head from 'next/head';
import { Provider, teamsTheme, teamsDarkV2Theme } from '@fluentui/react-northstar'

export default function MyApp({ Component, pageProps }) {
  return (
      <Provider theme={teamsTheme}>
    <Component {...pageProps} />
    </Provider>
    

  );
}

import React from 'react';
import Router from 'next/router';
import Head from 'next/head';
import { Provider, teamsTheme, teamsDarkV2Theme } from '@fluentui/react-northstar'

import { pageview } from '../lib/gtag'


Router.events.on('routeChangeComplete', (url) => pageview(url))

export default function MyApp({ Component, pageProps }) {
  return (
      <Provider theme={teamsTheme}>
    <Component {...pageProps} />
    </Provider>
    

  );
}

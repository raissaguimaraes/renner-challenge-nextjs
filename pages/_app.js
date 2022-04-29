import { Provider } from 'react-redux';
import React from 'react';
import Layout from '../components/layout';
import store from '../redux/store';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
        <Layout>
          <React.StrictMode>
            <Component {...pageProps} />
          </React.StrictMode>
        </Layout>
    </Provider>
  )
}

export default MyApp

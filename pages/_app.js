import { Provider } from 'react-redux';
import Header from '../components/header';
import Footer from '../components/footer';
import store from '../redux/store';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <div className="wrapper">
        <Header />
        <Component {...pageProps} />
        <Footer />
      </div>
    </Provider>
  )
}

export default MyApp

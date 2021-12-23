import '../styles/globals.css';
import 'react-multi-carousel/lib/styles.css';

import { AppProps } from 'next/dist/next-server/lib/router/router';
import { DefaultSeo } from 'next-seo';
import { Provider } from 'react-redux';

import BaseLayout from '@/layouts/BaseLayout';
import store from '@/redux/store';
function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <DefaultSeo
        title="My Awesome Project"
        description="My latest awesome project"
        canonical="https://www.canonical.ie/"
        openGraph={{
          type: 'website',
          locale: 'en_IE',
          url: 'https://www.url.ie/',
          site_name: 'My Website',
        }}
      />
      <Provider store={store}>
        <BaseLayout>
          <Component {...pageProps} />
        </BaseLayout>
      </Provider>
    </>
  );
}

export default MyApp;

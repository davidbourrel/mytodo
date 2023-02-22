import type { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';
import '@/styles/globals.css';
import Layout from '@/components/modules/Layout';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <div
      id='app'
      className='bg-white dark:bg-neutral-800 relative flex flex-col items-center w-full min-h-screen'
    >
      <ThemeProvider attribute='class'>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </div>
  );
};
export default App;

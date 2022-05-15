import * as React from 'react';
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { AuthContextProvider } from 'context/AuthContext';
import { useRouter } from 'next/router';
import ProtectedRoute from 'components/ProtectedRoute';
import Layout from 'components/layout';

import useMediaQuery from '@mui/material/useMediaQuery';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const noAuthRequired = ["/", "/login", "/signup", "/imagebrowser"];

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode: prefersDarkMode ? "dark" : "light",
        },
      }),
    [prefersDarkMode]
  );

  return (
    <ThemeProvider theme={theme}>
      <AuthContextProvider>
        <Layout>
          {noAuthRequired.includes(router.pathname) ? (
            <Component {...pageProps} />
          ) : (
            <ProtectedRoute>
              <Component {...pageProps} />
            </ProtectedRoute>
          )}
        </Layout>
      </AuthContextProvider>
    </ThemeProvider>
  );
}

export default MyApp;

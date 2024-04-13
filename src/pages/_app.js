import { ThemeProvider } from "@emotion/react";
import Layout from "@/components/Layout";
import "@/styles/globals.scss";
import theme from "@/mui-theme";
import { store } from "../redux/store";
import { Provider } from "react-redux";
import ScreenCaptureContainer from "@/screen-capture";
import { QueryClientProvider } from "react-query";
import { queryClient } from "@/services/http-client";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <ThemeProvider theme={theme}>
            <ScreenCaptureContainer>
              <Layout>
                <Component {...pageProps} />
              </Layout>
            </ScreenCaptureContainer>
          </ThemeProvider>
        </QueryClientProvider>
      </Provider>
    </>
  );
}

export default MyApp;

import type { AppProps } from "next/app";
import MainLayout from "@/layout/home";

import "@/static/css/main.css";

interface appPropsExtra extends AppProps {
  Component: AppProps["Component"] & {
    getLayout: (page: React.ReactNode) => JSX.Element;
  };
}

function MyApp({ Component, pageProps }: appPropsExtra) {
  if (Component.getLayout) {
    return Component.getLayout(<Component {...pageProps} />);
  }

  return (
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
  );
}

export default MyApp;

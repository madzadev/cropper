import { ChakraProvider } from "@chakra-ui/react";
import PageWrapper from "../components/PageWrapper";
import MetaTags from "../components/MetaTags";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <PageWrapper>
        <MetaTags />
        <Header />
        <Component {...pageProps} />
        <Footer />
      </PageWrapper>
    </ChakraProvider>
  );
}

export default MyApp;

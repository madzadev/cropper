import { ChakraProvider } from "@chakra-ui/react";
import "../styles/globals.css";
import PageWrapper from "../components/PageWrapper";
import Header from "../components/Header";
import Footer from "../components/Footer";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <PageWrapper>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </PageWrapper>
    </ChakraProvider>
  );
}

export default MyApp;

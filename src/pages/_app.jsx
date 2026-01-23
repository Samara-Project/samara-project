import ChatbotWrapper from '@/components/chatbot/ChatbotWrapper';
import Footer from '@/components/ui/Footer';
import Navbar from '@/components/ui/Navbar';
import "@/styles/globals.css";
import Head from 'next/head';

export default function App({ Component, pageProps }) {

  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />

        <meta name="keywords" content="" />
        <meta name="author" content="Samara Chocolate" />
        <meta name="theme-color" content="#2B4A86" />
        <meta name="msapplication-navbutton-color" content="#2B4A86" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="#2B4A86" />
      </Head>
      <Navbar />
      <Component {...pageProps} />
      <ChatbotWrapper />
      <Footer footerData={pageProps?.data?.footer} />
    </>
  )
}

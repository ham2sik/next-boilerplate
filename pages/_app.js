import React from "react";
import App from "next/app";
import { ThemeProvider } from "styled-components";
// style
import GlobalStyle from "../styles/GlobalStyle";
import Layout from "../components/common/Layout/Layout";
import theme from "../styles/Theme";

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ThemeProvider>
      </>
    );
  }
}

export default MyApp;

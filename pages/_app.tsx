import "@/styles/globals.css";
import type { AppProps } from "next/app";

const Website = ({ Component, pageProps }: AppProps) => <Component {...pageProps} />;

export default Website;

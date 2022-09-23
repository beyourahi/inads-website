import Head from "next/head";
import { meta_info } from "../data";

interface LayoutProps {
    children: React.ReactNode;
}

const { title, description } = meta_info;

export const Layout = ({ children }: LayoutProps) => (
    <main>
        <Head>
            <title>{title}</title>
            <meta name="description" content={description} />
            {/* <link rel="icon" href="/favicon.ico" /> */}
        </Head>
        {children}
    </main>
);

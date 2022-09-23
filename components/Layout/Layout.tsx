import Head from "next/head";
import { meta_info } from "../../data";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { Newsletter } from "./Newsletter";

interface LayoutProps {
    children: React.ReactNode;
    page?: string;
}

const { title, description } = meta_info;

export const Layout = ({ children, page }: LayoutProps) => (
    <main className="bg-black text-white h-screen">
        <Head>
            <title>
                {title} {page && "| " + page}
            </title>
            <meta name="description" content={description} />
            {/* <link rel="icon" href="/favicon.ico" /> */}
        </Head>

        <Header />
        {children}
        <Newsletter />
        <Footer />
    </main>
);

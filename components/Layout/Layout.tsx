import Head from "next/head";
import { meta_info } from "../../data";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { Newsletter } from "./Newsletter";

interface LayoutProps {
    children: React.ReactNode;
    page: string;
}

export const Layout = ({ children, page }: LayoutProps) => {
    const { brand, description } = meta_info;
    const title = brand + " | " + page;

    return (
        <main className="bg-black text-white relative">
            <Head>
                <title>{title}</title>
                <meta name="description" content={description} />
                {/* <link rel="icon" href="/favicon.ico" /> */}
            </Head>

            <Header />
            {children}
            <Newsletter />
            <Footer />
        </main>
    );
};

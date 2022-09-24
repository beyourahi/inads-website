import type { NextPage } from "next";
import { Layout } from "../components";

const Home: NextPage = () => (
    <Layout page="Home">
        <h1 className="text-3xl font-bold text-center">Home Page</h1>
    </Layout>
);

export default Home;
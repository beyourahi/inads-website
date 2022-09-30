import type { NextPage } from "next";
import { AnalyticsHero, AnalyticsMasthead, Layout, MeasurementAnalysis } from "../components";

const Analytics: NextPage = () => (
    <Layout page="Analytics">
        <div>
            {/*//! Hero */}
            <AnalyticsHero />

            {/*//! Analytics */}
            <AnalyticsMasthead />

            {/*//! Measurement Analysis */}
            <MeasurementAnalysis />
        </div>
    </Layout>
);

export default Analytics;

import Banner from "./Banner";
import Head from "next/head";
import OurLocations from "./OurLocations";

const LandingPage = () => {
    return (
        <div>
            <Head>
                <title>AUTODRIVE</title>
            </Head>
            <Banner></Banner>
            <OurLocations></OurLocations>
        </div>
    );
};

export default LandingPage;
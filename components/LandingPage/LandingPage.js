import Banner from "./Banner";
import Head from "next/head";
import OurLocations from "./OurLocations";
import HomeBooking from "./HomeBooking";

const LandingPage = () => {
    return (
        <div>
            <Head>
                <title>AUTODRIVE</title>
            </Head>
            <Banner></Banner>
            <OurLocations></OurLocations>
            <HomeBooking></HomeBooking>
        </div>
    );
};

export default LandingPage;
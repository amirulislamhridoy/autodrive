import Banner from "./Banner";
import Head from "next/head";
import OurLocations from "./OurLocations";
import HomeBooking from "./HomeBooking";
import Partners from "./Partners";
import Ranking from "./Ranking";
import Footer from "../Footer";

const LandingPage = () => {
    return (
        <div>
            <Head>
                <title>AUTODRIVE</title>
            </Head>
            <Banner></Banner>
            <OurLocations></OurLocations>
            <HomeBooking></HomeBooking>
            <Partners></Partners>
            <Ranking></Ranking>
            <Footer></Footer>
        </div>
    );
};

export default LandingPage;
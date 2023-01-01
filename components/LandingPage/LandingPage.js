import Banner from "./Banner";
import Head from "next/head";
import OurLocations from "./OurLocations";
import HomeBooking from "./HomeBooking";
import Partners from "./Partners";
import Ranking from "./Ranking";
import Footer from "../Footer";
import CarRentalService from "./CarRentalService";
import HomeCarData from "./HomeCarData";

const LandingPage = () => {
    return (
        <div>
            <Head>
                <title>AUTODRIVE</title>
            </Head>
            <Banner></Banner>
            <HomeCarData></HomeCarData>
            <CarRentalService></CarRentalService>
            <OurLocations></OurLocations>
            <HomeBooking></HomeBooking>
            <Partners></Partners>
            <Ranking></Ranking>
            <Footer></Footer>
        </div>
    );
};

export default LandingPage;
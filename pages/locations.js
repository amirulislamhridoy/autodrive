import Head from "next/head";
import Footer from "../components/Footer";
import SubBanner from "../components/SubBanner";

const locations = () => {
    return (
        <main>
            <Head><title>LOCATIONS</title></Head>
            <SubBanner url='https://templatekits.themewarrior.com/autodrive/wp-content/uploads/sites/42/2021/12/hero-location.jpg'>OUR ALL LOCATIONS</SubBanner>
            <Footer></Footer>
        </main>
    );
};

export default locations;
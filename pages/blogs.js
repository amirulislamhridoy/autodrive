import Head from "next/head";
import SubBanner from "../components/SubBanner";

const blogs = () => {

    return (
        <main>
            <Head><title>BLOGS</title></Head>
            <SubBanner url='https://templatekits.themewarrior.com/autodrive/wp-content/uploads/sites/42/2022/01/hero-blog.jpg'>OUR BLOGS</SubBanner>
        </main>
    );
};

export default blogs;
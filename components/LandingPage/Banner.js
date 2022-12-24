import Navbar from "../Navbar";

const Banner = () => {
    return (
        <section style={{ backgroundImage:` linear-gradient(rgba(0,0,0, 0.3), rgba(0,0,0, 0.2)), url('https://templatekits.themewarrior.com/autodrive/wp-content/uploads/sites/42/2021/12/hero-home.jpg')`}} className='bg-cover bg-fixed bg-center bg-no-repeat'>
            <Navbar></Navbar>
        </section>
    );
};

export default Banner;
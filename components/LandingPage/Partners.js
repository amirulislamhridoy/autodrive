import Image from "next/image";

const Partners = () => {
    return (
        <div className='text-center my-10 sm:my-20 max-w-7xl mx-auto'>
            <p className='text-lg font-semibold text-[#ffc947]'>PARTNERS</p>
            <h3 className='text-xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mt-1 sm:mt-3 mb-2 sm:mb-5'>OUR PARTNERS</h3>
            <p>Odio eu viverra tincidunt tristique ullamcorper blandit dipiscing nunc risus <br /> integer at elementum cursus. Lorem justo a felis elit amet.</p>
            <div className='grid grid-cols-4 justify-items-center gap-y-5 mt-3 sm:mt-8 md:mt-16 mx-1'>
                <Image width='132' height='27' src='https://templatekits.themewarrior.com/autodrive/wp-content/uploads/sites/42/2021/12/logo-color-1.png' alt=''></Image>
                <Image width='132' height='27' src='https://templatekits.themewarrior.com/autodrive/wp-content/uploads/sites/42/2021/12/logo-color-2.png' alt=''></Image>
                <Image width='132' height='27' src='https://templatekits.themewarrior.com/autodrive/wp-content/uploads/sites/42/2021/12/logo-color-3.png' alt=''></Image>
                <Image width='132' height='27' src='https://templatekits.themewarrior.com/autodrive/wp-content/uploads/sites/42/2021/12/logo-color-8.png' alt=''></Image>
                <Image width='132' height='27' src='https://templatekits.themewarrior.com/autodrive/wp-content/uploads/sites/42/2021/12/logo-color-9.png' alt=''></Image>
                <Image width='132' height='27' src='https://templatekits.themewarrior.com/autodrive/wp-content/uploads/sites/42/2021/12/logo-color-10.png' alt=''></Image>
                <Image width='132' height='27' src='https://templatekits.themewarrior.com/autodrive/wp-content/uploads/sites/42/2021/12/logo-color-11.png' alt=''></Image>
                <Image width='132' height='27' src='https://templatekits.themewarrior.com/autodrive/wp-content/uploads/sites/42/2021/12/logo-color-12.png' alt=''></Image>
            </div>
        </div>
    );
};

export default Partners;
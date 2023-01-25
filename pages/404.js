import Image from 'next/image';
import Navbar from '../components/Navbar';

const NoteFound = () => {
    return (
        <section className=''>
            <Navbar>NoteFound</Navbar>
            <div className='w-full flex justify-center items-center' style={{minHeight: 'calc(100vh - 72px)'}}>
                <Image width='800' height='600' className='' src='https://cdn.svgator.com/images/2022/01/404-page-animation-example.gif' alt=''></Image>
            </div>
        </section>
    );
};

export default NoteFound;
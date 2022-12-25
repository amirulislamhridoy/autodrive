import { Children } from 'react';
import Navbar from '../components/Navbar'

const NoteFound = () => {
    return (
        <section className=''>
            <Navbar>NoteFound</Navbar>
            <div className='w-full flex justify-center items-center' style={{minHeight: 'calc(100vh - 72px)'}}>
                <img className='' src='https://cdn.svgator.com/images/2022/01/404-page-animation-example.gif' alt=''></img>
            </div>
        </section>
    );
};

export default NoteFound;
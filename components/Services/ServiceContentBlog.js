import Link from 'next/link';
import React from 'react';

const ServiceContentBlog = () => {
    return (
        <section className='max-w-7xl mx-auto flex items-center'>
            <h1 className='text-4xl font-bold w-6/12'>Our service your satisfaction</h1>
            <div>
                <p>Elit natoque turpis eu himenaeos felis tempus rutrum. Morbi elementum metus mollis enim at praesent lectus sem feugiat duis. Hendrerit metus parturient magnis auctor finibus suscipit penatibus ac. Nullam suscipit curabitur quisque lobortis bibendum cursus conubia.</p>
                <Link className='inline-block font-semibold mt-3 border-b-4 border-[#ffc947] text-[#474FA0] hover:border-[#474FA0]' href='' as=''>More Info  &gt;</Link>
            </div>
        </section>
    );
};

export default ServiceContentBlog;
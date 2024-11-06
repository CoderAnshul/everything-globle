import React from 'react'
import FooterTop from '../../../component/layout/FooterTop'
import PortBanner from './PortBanner'
import { GrLinkNext, GrLinkPrevious } from 'react-icons/gr'
import { Link, useParams } from 'react-router-dom'

export default function PortfolioSlug() {
    const slug = useParams()
    // console.log('vvv', id);

    return (
        <>
            <PortBanner />
            <div className='custom_container'>
                <div className='grid grid-cols-12 gap-5 my-10 items-end'>
                    <div className='col-span-12 lg:col-span-8'>
                        <h1 className='text-6xl text-[#151015] font-semibold'>Innovative</h1>
                        <p>Etiam dignissim diam quis enim lobortis scelerisque fermentum. Purus viverra accumsan in nisl nisi scelerisque. Volutpat odio facilisis mauris sit amet. Interdum velit laoreet id donec ultrices tincidunt arcu. Tincidunt id aliquet risus feugiat in. In egestas erat imperdiet sed euismod nisi.</p><br />
                        <p>Ultrices vitae auctor eu augue ut lectus. Fermentum posuere urna nec tincidunt. Tincidunt arcu non sodales neque sodales ut. Sem fringilla ut morbi tincidunt augue interdum velit euismod in. Id neque aliquam vestibulum morbi blandit cursus.</p>
                    </div>
                    <div className='col-span-12 lg:col-span-1'></div>
                    <div className='col-span-12 lg:col-span-3'>
                        <div className='space-y-2'>
                            <p><span className='text-lg text-[#151015] font-semibold'>Client:</span>&nbsp; 17</p>
                            <p><span className='text-lg text-[#151015] font-semibold'>Category:</span>&nbsp; (Photography)</p>
                            <p><span className='text-lg text-[#151015] font-semibold'>Tag:</span>&nbsp; <span className='border border-black py-1 px-3 rounded-full'>Marketing</span></p>
                            <p><span className='text-lg text-[#151015] font-semibold'>Date:</span>&nbsp; March 28, 2023</p>
                        </div>
                    </div>
                </div>
                <div className='flex justify-between pb-5'>
                    <Link to={`${slug.id == 1 ? '/portfolio' : `/portfolio-slug/${+slug.id - 1}`}`}>
                        <div className='flex items-center gap-2 cursor-pointer text-xl font-medium'>
                            <GrLinkPrevious />Previous
                        </div>
                    </Link>
                    <Link to={`/portfolio-slug/${+slug.id + 1}`}>
                        <div className='flex items-center gap-2 cursor-pointer text-xl font-medium'>
                            Next<GrLinkNext />
                        </div>
                    </Link>
                </div>
            </div>
            <div className={`pt-12`} style={{ background: `url(/image/home/bacground-img.png)` }}>
                <FooterTop />
            </div>
        </>
    )
}

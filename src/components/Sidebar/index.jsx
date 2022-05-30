import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom'
import { AiFillFacebook, AiFillTwitterSquare, AiFillInstagram } from "react-icons/ai";
import { BsDiscord, BsSignal } from "react-icons/bs";

const Sidebar = ({ toggleSidebar, setToggleSidebar }) => {
    const location = useLocation();
    const Navigation = [{ placeholder: 'Home', path: '/' }, { placeholder: 'Covid-19 Vaccine', path: '/covid-vaccine' }, { placeholder: 'FLU Vaccine', path: '/flu-vaccine' }, { placeholder: 'Free RATs', path: '/free-rats' }, { placeholder: 'Locations', path: '/locations' }]

    useEffect(() => {
        const body = document?.querySelector('body');
        toggleSidebar ? body?.classList?.add('overflow-hidden') : body?.classList?.remove('overflow-hidden')
    }, [toggleSidebar])

    return (
        <>
            <main className={`fixed bottom-0 right-0 left-0 z-10 transition-all ${toggleSidebar ? 'sidebar-container' : 'bg-transparent pointer-events-none'}`} style={{ marginLeft: '0px', top: '4.4rem' }}>
                <aside className={`${toggleSidebar ? 'sidebar-open' : 'sidebar-close'} flex justify-between flex-col`}>
                    <ul className="flex pt-40 flex-col items-center mt-4 ">
                        {
                            Navigation?.map(item => (
                                <li key={Math.random()} className='mb-12' onClick={() => setToggleSidebar(false)}>
                                    <Link to={item?.path}>
                                        <span className={`text-lg cursor-pointer transition-all hover:text-primary ${item?.path === location?.pathname ? 'text-primary' : 'text-gray-900'}`}>
                                            {item?.placeholder}
                                        </span>
                                    </Link>
                                </li>
                            ))
                        }
                    </ul>

                    <section className='gGngoX'>
                        <div className='gGngoXline py-18'>
                            <div className='flex justify-center items-center gap-3 text-26 text-gray-500'>
                                <AiFillFacebook className='transition-all hover:text-gray-800 cursor-pointer' />
                                <AiFillTwitterSquare className='transition-all hover:text-gray-800 cursor-pointer' />
                                <AiFillInstagram className='transition-all hover:text-gray-800 cursor-pointer' />
                                <BsDiscord className='text-22 transition-all hover:text-gray-800 cursor-pointer' />
                                <BsSignal className='text-22 transition-all hover:text-gray-800 cursor-pointer' />
                            </div>
                        </div>
                    </section>
                </aside>
            </main>
        </>
    )
}

export default Sidebar;

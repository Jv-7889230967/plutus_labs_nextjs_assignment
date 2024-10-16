"use client"
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const SideBar = () => {
    const pathname = usePathname(); // Get the current pathname

    return (
        <aside className='h-screen w-[20%] min-w-[200px] bg-[#F6F7F5] rounded-[20px] hidden sidebar-screen:flex flex-col items-center'>
            <div className='h-[400px] w-full mt-[80px] flex flex-col items-center gap-[30px]'>
                <h2 className='text-3xl font-bold text-black'>PopDop</h2>
                <section className='h-[270px] w-full flex flex-col gap-[7px] items-center'>
                    <Link
                        href={'/'}
                        className={`link-button ${pathname === '/' ? 'bg-[#D9D9D9]' : 'bg-inherit'}`}
                    >
                        <span className="icon">
                            <Image src={'/assets/home-icon.svg'} alt='home' height={17} width={17} />
                        </span>
                        <span className="text">home</span>
                    </Link>
                    <Link
                        href={'/pages/population'}
                        className={`link-button ${pathname === '/pages/population' ? 'bg-[#D9D9D9]' : 'bg-inherit'}`}
                    >
                        <span className="icon">
                            <Image src={'/assets/population-icon.svg'} alt='population' height={17} width={17} />
                        </span>
                        <span className="text">population</span>
                    </Link>
                    <Link
                        href={'/pages/about'}
                        className={`link-button ${pathname === '/pages/about' ? 'bg-[#D9D9D9]' : 'bg-inherit'}`}
                    >
                        <span className="icon">
                            <Image src={'/assets/about-icon.svg'} alt='about' height={17} width={17} />
                        </span>
                        <span className="text">about</span>
                    </Link>
                </section>
            </div>
        </aside>
    )
}

export default SideBar

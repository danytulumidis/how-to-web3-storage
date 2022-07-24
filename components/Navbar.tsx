import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

const Navbar = (): JSX.Element => {
    const [active, setActive] = useState(false);
    const router = useRouter();

    const handleClick = () => {
        setActive(!active);
    };

    return (
        <nav className='mx-auto flex flex-wrap md:flex-nowrap p-5 flex-row items-center text-white'>
            <Link href={"/"}>
                <a
                    className='flex title-font font-medium items-center text-white'
                    href='#hero'
                >
                    <Image
                        className='rounded-full'
                        src='/logo.svg'
                        width={40}
                        height={40}
                        alt='Logo'
                    ></Image>
                </a>
            </Link>
            <button
                className='inline-flex hover:bg-green-600 rounded sm:hidden text-white ml-auto hover:text-white outline-none'
                onClick={handleClick}
            >
                <svg
                    className='w-6 h-6'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                    xmlns='http://www.w3.org/2000/svg'
                >
                    <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M4 6h16M4 12h16M4 18h16'
                    />
                </svg>
            </button>
            <div
                className={`${
                    active ? "" : "hidden"
                }   w-full md:inline-flex lg:flex-grow lg:w-auto mt-6 md:mt-0`}
            >
                <div className='lg:inline-flex md:flex-row md:m-auto md:w-auto w-full flex flex-col items-center gap-3 md:h-auto text-l md:text-md xl:text-lg'>
                    <Link href={"#about"}>
                        <a
                            className={
                                router.asPath == "/#about"
                                    ? "mr-5"
                                    : "mr-5 hover:text-main"
                            }
                        >
                            About
                        </a>
                    </Link>
                    <Link href={"#howtostorage"}>
                        <a
                            className={
                                router.asPath == "/#howtostorage"
                                    ? "mr-5"
                                    : "mr-5 hover:text-main"
                            }
                        >
                            How to Storage
                        </a>
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

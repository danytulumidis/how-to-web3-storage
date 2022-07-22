import Image from "next/image";

const Footer = (): JSX.Element => {
    const getYear = (): number => {
        return new Date().getFullYear();
    };

    return (
        <footer className='bg-background text-white pt-28 px-10 md:px-16'>
            <h1 className='text-4xl font-bold mb-2 md:text-5xl lg:text-7xl lg:mb-5'>
                How to <span className='text-main'>Web3</span> - Easy explained
            </h1>
            <p className='text-left pt-3 lg:text-2xl'>
                I really hope this was easy to understand and it gave you a good
                understanding of this topic. Here you will find the other
                websites of this series:
            </p>
            <p className='text-main text-center text-2xl py-10 md:text-4xl lg:text-5xl'>
                Coming Soon!
            </p>
            <div className='flex flex-col items-center md:flex-row md:justify-between lg:text-2xl'>
                <Image
                    className='rounded-full'
                    src='/logo.svg'
                    width={40}
                    height={40}
                    alt='Logo'
                ></Image>
                <p className='text-center'>
                    © {getYear()} How To Web3 -
                    <a
                        href='https://twitter.com/danytulumidis'
                        className='text-gray-500'
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        @danytulumidis
                    </a>
                </p>

                <div className='flex justify-center items-center pt-4'>
                    <a
                        className='ml-3 text-gray-400'
                        target='_blank'
                        rel='noreferrer'
                        href='https://twitter.com/danytulumidis'
                    >
                        <svg
                            fill='currentColor'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth='2'
                            className='w-5 h-5'
                            viewBox='0 0 24 24'
                        >
                            <path d='M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z'></path>
                        </svg>
                    </a>
                    <a
                        className='ml-3 text-gray-400'
                        target='_blank'
                        rel='noreferrer'
                        href='https://github.com/danytulumidis'
                        data-aos='fade-right'
                    >
                        <Image
                            src='/github-icon.svg'
                            width={20}
                            height={20}
                            alt='GitHub Logo'
                        ></Image>
                    </a>
                    <a
                        className='ml-3 text-gray-400'
                        target='_blank'
                        rel='noreferrer'
                        href='https://www.linkedin.com/in/dany-tulumidis-390a31197/'
                    >
                        <svg
                            fill='currentColor'
                            stroke='currentColor'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth='0'
                            className='w-5 h-5'
                            viewBox='0 0 24 24'
                        >
                            <path
                                stroke='none'
                                d='M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z'
                            ></path>
                            <circle cx='4' cy='4' r='2' stroke='none'></circle>
                        </svg>
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

import Image from "next/image";
import HTWButton from "./shared/HTWButton";

const Hero = (): JSX.Element => {
    return (
        <section id='hero' className='mb-28'>
            <div className='flex flex-col justify-center gap-10 md:mt-10 lg:flex-row lg:items-center 2xl:m-0'>
                <div className='flex flex-col items-center text-center mx-4 lg:mx-16 lg:items-start lg:text-left'>
                    <p className='text-main font-light text-2xl lg:text-4xl'>
                        Storage
                    </p>
                    <h1 className='text-5xl font-bold mb-2 lg:text-7xl lg:mb-6'>
                        How to Web3
                    </h1>
                    <p className='mb-6 lg:text-2xl lg:mb-6'>
                        What, Why and how to store data in a decentralized way.
                        Easy explained
                    </p>
                    <div className='flex justify-center gap-4'>
                        <HTWButton text='Try it' main={true} />
                        <HTWButton text='Explanation' main={false} />
                    </div>
                </div>
                <div className='md:m-12 lg:m-0'>
                    <Image
                        src='/hero.svg'
                        alt='hero'
                        width={800}
                        height={400}
                    />
                </div>
            </div>
            <div className='flex justify-center mt-28 lg:mt-80 xl:mt-28'>
                <div className='rounded-full border-2 border-main p-4 animate-bounce'>
                    <svg
                        width='35'
                        height='39'
                        viewBox='0 0 35 39'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                    >
                        <path
                            d='M17.5 36.5V2.5M17.5 36.5L2.625 21.625M17.5 36.5L32.375 21.625'
                            stroke='white'
                            strokeWidth='4'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                        />
                    </svg>
                </div>
            </div>
        </section>
    );
};

export default Hero;

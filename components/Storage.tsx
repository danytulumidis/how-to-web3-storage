import Image from "next/image";

const Storage = (): JSX.Element => {
    return (
        <section id='storage' className='mx-10 md:mx-16 mb-28'>
            <h1 className='text-4xl font-bold mb-16 md:text-5xl lg:text-7xl lg:mb-5'>
                How to <span className='text-main'>upload</span> a File
            </h1>
            <div className='inline-block lg:block xl:flex xl:items-center'>
                <div className='mb-8 md:p-16 lg:flex lg:justify-center'>
                    <Image
                        src='/storage1.svg'
                        alt='Storage'
                        width={600}
                        height={400}
                    />
                </div>
                <div className='mb-36 xl:mb-0'>
                    <h1 className='text-2xl font-bold text-left mb-2 md:text-3xl lg:text-5xl'>
                        Choose a File
                    </h1>
                    <p className='lg:text-2xl'>
                        Choose one file you want to upload in a decentralized
                        way. Just as you did in the past.
                    </p>
                </div>
            </div>
            <div className='inline-block xl:flex xl:items-center xl:flex-row-reverse'>
                <div className='mb-8 md:p-16 lg:flex lg:justify-center'>
                    <Image
                        src='/storage2.svg'
                        alt='Storage'
                        width={600}
                        height={400}
                    />
                </div>
                <div className='mb-36'>
                    <h1 className='text-2xl font-bold text-left mb-2 md:text-3xl lg:text-5xl'>
                        Upload via IPFS
                    </h1>
                    <p className='lg:text-2xl'>
                        The next step is also just like you know it already.
                        After you chosen your file you upload it via IPFS. For
                        you anything is just like always.
                    </p>
                </div>
            </div>
            <div className='inline-block xl:flex xl:items-center'>
                <div className='mb-8 md:p-16 lg:flex lg:justify-center'>
                    <Image
                        src='/storage3.svg'
                        alt='Storage'
                        width={600}
                        height={400}
                    />
                </div>
                <div className='mb-36'>
                    <h1 className='text-2xl font-bold text-left mb-2 md:text-3xl lg:text-5xl'>
                        Content ID
                    </h1>
                    <p className='lg:text-2xl'>
                        Your file gets an unique Content ID that is based on the
                        content of the file. This ID can then be used to find
                        that file and download it again.
                    </p>
                </div>
            </div>
            <div className='inline-block xl:flex xl:items-center xl:flex-row-reverse'>
                <div className='mb-8 md:p-16 lg:flex lg:justify-center'>
                    <Image
                        src='/storage4.svg'
                        alt='Storage'
                        width={600}
                        height={400}
                    />
                </div>
                <div className=''>
                    <h1 className='text-2xl font-bold text-left mb-2 md:text-3xl lg:text-5xl'>
                        File is everywhere
                    </h1>
                    <p className='lg:text-2xl'>
                        As soon someone request the File it will be shared among
                        the computer network. This means the file is cached on
                        multiple computers and everyone can access it at
                        anytime.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Storage;

const HowTo = (): JSX.Element => {
    return (
        <section id='storage' className='mx-10 md:mx-16'>
            <h1 className='text-4xl font-bold mb-2 md:text-5xl lg:text-7xl lg:mb-5'>
                How to Storage
            </h1>
            <p className='mb-6 text-left lg:text-2xl'>
                This is your playground to practice using decentralized storage.
                The storage of tomorrow! You can upload files and then even
                download files based on the Content ID.
            </p>
            <div className='border-2 border-main'>
                <h1 className='text-main text-2xl font-bold text-left mb-2 lg:text-5xl lg:mb-5'>
                    Upload
                </h1>
                <div className='flex gap-8'>
                    <div>
                        <h2 className='font-bold'>File to Upload</h2>
                        <input></input>
                    </div>
                    <div>
                        <h2 className='font-bold'>Content ID</h2>
                        <p>3423jnfnfnti4</p>
                    </div>
                </div>
            </div>
            <div className='border-2 border-main mt-10'>
                <h1 className='text-main text-2xl font-bold text-left mb-2 lg:text-5xl lg:mb-5'>
                    Download
                </h1>
                <div className='flex gap-8'>
                    <div>
                        <h2 className='font-bold'>File to Download</h2>
                        <input type='text' placeholder='Content ID'></input>
                    </div>
                    <div>
                        <h2 className='font-bold'>Link to the File</h2>
                        <p>3423jnfnfnti4</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HowTo;
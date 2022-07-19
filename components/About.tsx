const About = (): JSX.Element => {
    return (
        <section id='about' className='mb-28'>
            <div className='flex flex-col items-start mx-10 md:mx-16'>
                <h1 className='text-4xl font-bold mb-2 md:text-5xl lg:text-7xl lg:mb-5'>
                    About
                </h1>
                <p className='mb-6 text-left lg:text-2xl'>
                    How to Web3 is a series of websites that wants to explain
                    Web3 to the everyday user. Web3 is new and its highly
                    complicated especially for non-tech people. On this website
                    it will be explained as easy as possible without hundres of
                    technical buzzwords.
                    <br />
                    <br />
                    The goal is that even your mother or grandmother can go on
                    this site and follow the explanations and even try it out!
                </p>
            </div>

            <div className='flex flex-col items-start mx-10 mt-10 md:mx-16'>
                <h1 className='text-4xl font-bold text-left mb-2 lg:text-5xl lg:mb-5'>
                    Centralized <span className='text-main'>Storage</span>
                </h1>
                <p className='mb-6 text-left lg:text-2xl'>
                    Since we use computers we need to store data in some way.
                    Currently you might use your computers hard drive, Google
                    Drive, Dropbox or other Cloud Services.
                </p>

                <h1 className='text-2xl font-bold text-left mb-2 lg:text-4xl'>
                    Where is the problem?
                </h1>
                <p className='mb-6 text-left lg:text-2xl'>
                    Our data is centralized and you have to trust those cloud
                    providers. In addition you rely on them in every aspect.
                    Nowadays data breaches and hacking attacks happen frequently
                    and million of user data get exposed.
                </p>
            </div>

            <div className='flex flex-col items-start mx-10 mt-10 md:mx-16 md:mt-36'>
                <h1 className='text-4xl font-bold text-left mb-2 lg:text-5xl lg:mb-5'>
                    Decentralized <span className='text-main'>Storage</span>
                </h1>
                <p className='mb-6 text-left lg:text-2xl'>
                    In Web3 storage works a bit different. You dont upload your
                    data on one special point like Google Drive. Instead it will
                    be uploaded via IPFS (explained later) to one computer and
                    then gets shared inbetween a network. Basically your file is
                    then on multiple computers.
                </p>

                <h1 className='text-2xl font-bold text-left mb-2 lg:text-4xl'>
                    Where is the improvement?
                </h1>
                <p className='mb-6 text-left lg:text-2xl'>
                    First of all you dont rely on one central authority. In
                    addition your file gets an unique ID based on its content.
                    This means each file is different and if you have this ID
                    you always can be sure this is your file and find it easily.
                    This means the files cant me altered which decreases scams.
                </p>

                <h1 className='text-2xl font-bold text-left mb-2 lg:text-4xl'>
                    Uploaded via IPFS
                </h1>
                <p className='mb-6 text-left lg:text-2xl'>
                    IPFS stands for InterPlanetary File System. In easy words
                    its a protocol that is used to upload your files. Under the
                    hood there are more things but that would be too technical
                    for this website.
                    <br />
                    <br />
                    But if you are interested in it I highly recommend checking
                    out their website here https://ipfs.io/.
                </p>
            </div>
        </section>
    );
};

export default About;

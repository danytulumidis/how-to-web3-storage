import axios from "axios";
import { useState } from "react";

const HowTo = (): JSX.Element => {
    const [contentID, setContentID] = useState<string>("");
    const [fileLink, setFileLink] = useState<string>("");

    const sendFileToIPFS = async (file: File): Promise<void> => {
        if (file) {
            try {
                const formData = new FormData();
                formData.append("file", file);

                const resFile = await axios({
                    method: "post",
                    url: "https://api.pinata.cloud/pinning/pinFileToIPFS",
                    data: formData,
                    headers: {
                        pinata_api_key: `${process.env.NEXT_PUBLIC_PINATA_API_KEY}`,
                        pinata_secret_api_key: `${process.env.NEXT_PUBLIC_TEST}`,
                        "Content-Type": "multipart/form-data",
                    },
                });

                setContentID(resFile.data.IpfsHash);

                const ImgHash = `ipfs://${resFile.data.IpfsHash}`;
                setFileLink(ImgHash);
            } catch (error) {
                console.log("Error sending File to IPFS: ");
                console.log(error);
            }
        }
    };

    return (
        <section id='howtostorage' className='mx-10 md:mx-16'>
            <h1
                className='text-4xl font-bold mb-2 md:text-5xl lg:text-7xl lg:mb-5'
                data-aos='zoom-in'
            >
                How to Storage
            </h1>
            <p className='mb-6 text-left lg:text-2xl'>
                This is your playground to practice using decentralized storage.
                The storage of tomorrow! You can upload files and then even
                download files based on the Content ID.
            </p>
            <div className='border-2 border-main p-14 md:pr-0 md:mt-12 xl:w-10/12'>
                <h1 className='text-main text-2xl font-bold text-left mb-2 md:text-4xl md:mb-8 lg:text-5xl lg:mb-5'>
                    Upload
                </h1>
                <div className='flex flex-col gap-8 md:flex-row md:gap-44 xl:gap-2'>
                    <div className='xl:w-1/2'>
                        <h2 className='font-bold md:text-xl md:mb-3'>
                            File to Upload
                        </h2>
                        <input
                            type='file'
                            id='formFile'
                            onInput={(e: any) =>
                                sendFileToIPFS(e.target.files[0])
                            }
                        ></input>
                    </div>
                    <div>
                        <h2 className='font-bold md:text-xl md:mb-3'>
                            Content ID
                        </h2>
                        <p>{contentID}</p>
                    </div>
                </div>
            </div>
            <div className='border-2 border-main mt-10 p-14 xl:w-10/12'>
                <h1 className='text-main text-2xl font-bold text-left mb-2 md:text-4xl md:mb-8 lg:text-5xl lg:mb-5'>
                    Download
                </h1>
                <div className='flex flex-col gap-8 md:flex-row md:gap-44'>
                    <div>
                        <h2 className='font-bold md:text-xl md:mb-3'>
                            Link to the File
                        </h2>
                        <a
                            href={fileLink}
                            target='_blank'
                            rel='noreferrer'
                            className='hover:text-main'
                        >
                            {fileLink}
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HowTo;

import type { NextPage } from "next";
import Head from "next/head";
import { useEffect } from "react";
import About from "../components/About";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import HowTo from "../components/HowTo";
import Navbar from "../components/Navbar";
import Storage from "../components/Storage";
// @ts-ignore
import AOS from "aos";
import "aos/dist/aos.css";

const Home: NextPage = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
        });
    }, []);

    return (
        <div>
            <Head>
                <title>Create Next App</title>
                <meta
                    name='description'
                    content='Generated by create next app'
                />
                <link rel='icon' href='/favicon.ico' />
                <link
                    rel='apple-touch-icon'
                    sizes='180x180'
                    href='/apple-touch-icon.png'
                />
                <link
                    rel='icon'
                    type='image/png'
                    sizes='32x32'
                    href='/favicon-32x32.png'
                />
                <link
                    rel='icon'
                    type='image/png'
                    sizes='16x16'
                    href='/favicon-16x16.png'
                />
                <link rel='manifest' href='/site.webmanifest' />
                <meta name='msapplication-TileColor' content='#da532c' />
                <meta name='theme-color' content='#ffffff'></meta>
            </Head>

            <main className='bg-background text-white'>
                <Navbar />
                <Hero />
                <About />
                <Storage />
                <HowTo />
            </main>

            <Footer />
        </div>
    );
};

export default Home;

import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Header from '../../components/Header';
import Services from '../../components/Services';
import Body from '../../components/Body';
import Footer from '../../components/Footer';
import Menu from '../../components/Menu';
import Contact from '../../components/Contact';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Header />
      <Body />
      <Services />
      <Contact />
      <Footer />
    </>
  );
}

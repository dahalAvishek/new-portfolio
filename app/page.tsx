import Image from "next/image";
import Header from '../components/common/header/Header'
import HomeBody from '../components/homeBody/HomeBody'

import '../style/globals.css'

export default function Home() {
  return (
    <main className="main-wrapper">
      <Header />
      <HomeBody />
    </main>
  );
}

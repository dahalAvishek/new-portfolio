
import Image from "next/image";
import Header from '../components/common/header/Header'
import MainBody from '../components/mainBody/MainBody'
import '../style/globals.css'

export default function Home() {
  return (
    <main className="main-wrapper">
      <Header />
      <MainBody />
    </main>
  );
}

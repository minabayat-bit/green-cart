import Image from "next/image";
import Banner from "./UI/Banner";
import Categories from "./UI/Categories";
import Sellers from "./UI/Sellers";
import Deal from "./UI/Deal";
import Footer from "./UI/Footer";

export default function Home() {
  return (
    <div className="text-4xl">
      <Banner />
      <Categories />
      <Sellers />
      <Deal />
      <Footer />
    </div>
  );
}

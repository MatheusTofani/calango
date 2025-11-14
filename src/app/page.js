import Container from "@/components/container";
import Carousel from "@/containers/home/carousel";
import Header from "@/containers/header";
import Desc from "@/containers/home/desc";
import ProductsHome from "@/containers/home/products";

export default function Home() {
  return (
    <div>
      <Container>
        <Header />
        <div className="w-full  py-[57px] bg-[#3BCF41] rounded-[70px]">
          <Carousel />
          <Desc />
          <ProductsHome />
        </div>
      </Container>
    </div>
  );
}

import Container from "@/components/container";
import Carousel from "@/containers/home/carousel";
import Header from "@/containers/header";
import Desc from "@/containers/home/desc";
import ProductsHome from "@/containers/home/products";
import Card from "@/containers/home/card";
import Rating from "@/containers/home/rating";
import Faq from "@/containers/home/faq";
import Whatsapp from "@/containers/whatsapp";


export default function Home() {
  return (
    <div className="overflow-x-hidden scroll-smooth">
      <Container >
        <Header />
        <div className=" pt-10 md:pt-20 bg-[#3BCF41] md:rounded-[70px] rounded-[20px]">
          <Carousel />
<div className="relative z-[5] mt-20 sm:mt-28 md:mt-36 w-full text-center px-4 sm:px-0">
  <a
  href="https://api.whatsapp.com/send/?phone=5577988740276&text&type=phone_number&app_absent=0"
  target="_blank"
    className="
      my-3 md:my-7
      w-full md:w-auto
      cursor-pointer
      bg-[#131413]
      text-[#3BCF41]
      rounded-[24px] sm:rounded-[30px] md:rounded-[40px]
      px-6 sm:px-10 md:px-16
      py-4 sm:py-5
      text-base sm:text-lg md:text-xl
      font-bold
      transition
      hover:scale-105
    "
  >
    Faça seu orçamento!
  </a>
</div>

          <Desc />
          <ProductsHome />
          <Card />
          <Rating />
          <Faq />
        </div>

           <p className="md:text-[18px] text-[12px] text-[#3BCF41] text-center py-20 font-normal">
        © {new Date().getFullYear()} Calango Estamparia e Vestuario Limitada.
        Todos os direitos reservados.
        <br />
        59.965.840.0001/31
      </p>
      </Container>

      <Whatsapp />
    </div>
  );
}

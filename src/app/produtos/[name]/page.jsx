import Container from "@/components/container";
import Header from "@/containers/header";
import { items } from "@/containers/home/products";
import ProductDetail from "@/containers/produtos/productDetail";
import ProductFooter from "@/containers/produtos/productFooter";
import Whatsapp from "@/containers/whatsapp";


const ProductsDetailPage = async ({ params }) => {
    const { name } = await params;
    const products = items.find((a) => a.name === name);

    return (
        <div className="overflow-x-hidden">
            <Container>
                <Header />
                <div className=" py-10 md:pt-20 bg-[#3BCF41] rounded-[25px] md:pb-20 md:rounded-[70px]">
                    <ProductDetail products={products} />
                    <ProductFooter   />
                </div>
                <Whatsapp />
                  <p className="md:text-[18px] text-[12px] text-[#3BCF41] text-center py-20 font-normal">
        © {new Date().getFullYear()} Calango Estamparia e Vestuario Limitada.
        Todos os direitos reservados.
        <br />
        59.965.840.0001/31
      </p>
            </Container>
        </div>
    );
}

export default ProductsDetailPage;
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/auth.config";
import { getProductList } from "@/app/api/servercall/product";
import ProductPage from "@/components/sections/product/ProductPage";

const ProductPageModule = async () => {
  const [products] = await Promise.all([
   getProductList()
  ])

  return (
    <div>
     <ProductPage products={products}/>
    </div>
  );
};

export default ProductPageModule;

import { getOrderList } from "@/app/api/servercall/product";
import AllOrders from "@/components/sections/product/AllOrders";

const AllOrdersOverview = async () => {
    const [orders] = await Promise.all([
     getOrderList()
    ])
    console.log(orders, 'sk')
  return (
    <div>
     <AllOrders/>
    </div>
  );
};

export default AllOrdersOverview;

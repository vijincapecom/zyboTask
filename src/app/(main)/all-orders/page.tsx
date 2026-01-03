export const dynamic = "force-dynamic";

import { getOrderList } from "@/app/api/servercall/product";
import AllOrders from "@/components/sections/product/AllOrders";

const AllOrdersOverview = async () => {
    const [orders] = await Promise.all([
     getOrderList()
    ])
 
  return (
    <div>
     <AllOrders orders={orders as never}/>
    </div>
  );
};

export default AllOrdersOverview;

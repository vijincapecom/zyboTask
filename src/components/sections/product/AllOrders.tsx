"use client";

import { ArrowLeft } from "lucide-react";
import { useRouter } from "nextjs-toploader/app";

const AllOrders =  ({orders}: OrderResponse) => {
   const router = useRouter()
    if (!orders) return (
        <div className="max-w-2xl">
            <h2 className="text-2xl font-bold text-white mx-auto  mb-1">
            No orders found
            </h2>
        </div>
    );


    return (
        <div className="max-w-2xl mx-auto px-4">
            <div>
            <h1 className="text-white font-semibold text-[38px] mb-6">My Orders</h1>
             <p className='text-white text-[14px] flex justify-end cursor-pointer mb-4' onClick={() => router.push('/product-page')}>
             <ArrowLeft className='text-white mr-2'/>
             Add Products
           </p>
            </div>
           {
            orders?.orders?.map((item) => {
                return ( 
                 <div
            key={item?.order_id}
            className="bg-zinc-800 rounded-2xl p-8 flex gap-6 mb-4  items-center"
          >
              <div className="flex-shrink-0">
              <div className="rounded-2xl flex items-center justify-center overflow-hidden">
                <img
                  src={item.product_image}
                  alt={item.product_name}
       
                  className="object-cover w-32 h-32 "
                />
              </div>
            </div>


            <div className="flex-1">
              <div className="flex  justify-between items-start">
                <div>
                  <h2 className="text-2xl font-bold text-white mb-1">
                    {item.product_name}
                  </h2>
                  <h2 className="text-[14px] font-semibold text-white/60 mb-1">
                    {item.order_id}
                  </h2>

                   <h3 className="text-[14px] font-semibold text-white/60 mb-1 mt-4">
                    {item.created_date}
                  </h3>


                </div>

                <div className="text-right flex gap-2">
                  <div>
                  <span className="text-[15px] font-bold text-white">
                    ₹{item.product_price}
                  </span>
                  </div>
                  <div>
                  <span className="text-[13px] font-bold text-white/60 line-through">
                     ₹{item.product_mrp}
                  </span>
                  </div>
                </div>
              </div>
            </div>

                </div>
                )
            })
           }
        </div>
    )
}

export default AllOrders
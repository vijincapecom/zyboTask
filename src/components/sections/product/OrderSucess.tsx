'use client';

import Image from 'next/image';
import { i4 } from '@/components/helpers/imageHelper';
import { useOrderStore } from '@/components/lib/zustand';
import { useRouter } from 'nextjs-toploader/app';
import { formatDate } from '@/components/helpers/constantHelper';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

const OrderSuccess = () => {
  const { order } = useOrderStore();
  const router = useRouter();

  if (!order || order.length === 0) return (
    <div>
      <h2 className="text-white font-bold text-[28px] lg:text-[32px] mb-4 text-center">
        No orders found
      </h2>
    </div>
  );

  return (
    <div className="min-h-screen bg-zinc-900 mx-auto p-4">
      <div className="flex items-center justify-center mb-6">
        <Link href="/product-page">
        <Image src={i4} alt="logo" width={80} height={80} />
        </Link>
      </div>

      <h2 className="text-white font-bold text-[28px] lg:text-[32px] mb-4 text-center">
        Successfully Ordered!
      </h2>
      <div className='text-center text-white/60 text-medium text-[14px]'>
        <h4 className='text-white'>{formatDate(order?.order?.created)}</h4>
      </div>
 
      <div className="w-full max-w-2xl mx-auto space-y-6">
         <div>
        <p className='text-white text-[14px] flex justify-end cursor-pointer' onClick={() => router.push('/all-orders')}>View All Orders
          <ArrowRight className='text-white ml-2'/>
           </p>
      </div>
        {order?.order?.order_details?.map((item: any, index: number) => (
          <div
            key={index}
            className="bg-zinc-800 rounded-2xl p-8 flex gap-6 items-center"
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
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-2xl font-bold text-white mb-1">
                    {item.product_name}
                  </h2>
                  <h2 className="text-[13px] font-semibold text-white/60 mb-1">
                    {item.order}
                  </h2>
                 
                  <p className="text-gray-400 text-sm mb-4">
                    Qty: {item.quantity}
                  </p>
                </div>

                <div className="text-right flex gap-2">
                  <div>
                  <span className="text-[15px] font-bold text-white">
                    ₹{item.price}
                  </span>
                  </div>
                  <div>
                  <span className="text-[13px] font-bold text-white/60 line-through">
                     ₹{item.without_tax_amount}
                  </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrderSuccess;

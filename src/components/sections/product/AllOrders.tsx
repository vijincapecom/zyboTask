"use client";

import ButtonWidget from "@/components/widgets/ButtonWidget";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "nextjs-toploader/app";
import { useState } from "react";

const perPage = 4;

const AllOrders = ({ orders }: OrderResponse) => {
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState(1);

  if (!orders || !orders.orders?.length)
    return (
      <div className="max-w-2xl mx-auto">
        <h2 className="text-2xl font-bold text-white mb-1">
          No orders found
        </h2>
      </div>
    );

  const totalPages = Math.ceil(orders?.orders?.length / perPage);

  const paginatedOrders = orders?.orders?.slice((currentPage - 1) * perPage, currentPage * perPage);

  return (
    <div className="max-w-2xl mx-auto px-4">
      <div>
        <h1 className="text-white font-semibold text-[38px] mb-6">
          My Orders
        </h1>

        <p
          className="text-white text-[14px] flex justify-end cursor-pointer mb-4"
          onClick={() => router.push("/product-page")}
        >
          <ArrowLeft className="mr-2" />
          Add Products
        </p>
      </div>

      {/* ORDERS */}
      {paginatedOrders.map((item) => (
        <div
          key={item.order_id}
          className="bg-zinc-800 rounded-2xl p-8 flex gap-6 mb-4 items-center"
        >
          <div className="flex-shrink-0">
            <div className="rounded-2xl overflow-hidden">
              <img
                src={item.product_image}
                alt={item.product_name}
                className="object-cover w-32 h-32"
              />
            </div>
          </div>

          <div className="flex-1">
            <div className="flex justify-between items-start">
              <div>
                <h2 className="text-2xl font-bold text-white mb-1">
                  {item.product_name}
                </h2>

                <h2 className="text-[14px] font-semibold text-white/60 mb-1">
                  {item.order_id}
                </h2>

                <h3 className="text-[14px] font-semibold text-white/60 mt-4">
                  {item.created_date}
                </h3>
              </div>

              <div className="text-right flex gap-2">
                <span className="text-[15px] font-bold text-white">
                  ₹{item.product_price}
                </span>

                <span className="text-[13px] font-bold text-white/60 line-through">
                  ₹{item.product_mrp}
                </span>
              </div>
            </div>
          </div>
        </div>
      ))}

      <div className="flex justify-center items-center gap-4 mt-6 ">
        <ButtonWidget
          disabled={currentPage === 1}
          onClick={() => setCurrentPage((p) => p - 1)}
          className="px-4 py-2 rounded bg-zinc-700 hover:bg-zinc-600 text-white disabled:opacity-40"
        >
          Prev
        </ButtonWidget>

        <span className="text-white text-sm">
          Page {currentPage} of {totalPages}
        </span>

        <ButtonWidget
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage((p) => p + 1)}
          className="px-4 py-2 rounded bg-zinc-700 hover:bg-zinc-600 text-white disabled:opacity-40"
        >
          Next
        </ButtonWidget>
      </div>
    </div>
  );
};

export default AllOrders;

"use client"

import { useState, useMemo } from "react"
import { memo } from "react"
import ButtonWidget from "@/components/widgets/ButtonWidget"
import { useOrder } from "@/components/store/hooks/AuthHook/AuthHook"
import { useOrderStore } from "@/components/lib/zustand"
import { useRouter } from "nextjs-toploader/app"
import { showErrorToasts } from "@/lib/toasts"


function ProductCard({ product }: ProductResponseTwo) {
  const [selectedColor, setSelectedColor] = useState<ColorVariation | null>(
    product?.variation_colors?.[0] ?? null
  );
  const [selectedSize, setSelectedSize] = useState<Size | null>(null)
  const [isHovered, setIsHovered] = useState(false)
  const router = useRouter()
  const { mutateAsync: orderCart, isPending } = useOrder()
  const { setOrder } = useOrderStore()

  const colorMap: { [key: string]: string } = useMemo(
    () => ({
      Black: "#1a1a1a",
      White: "#ffffff",
      Red: "#ef4444",
      Green: "#22c55e",
      Blue: "#3b82f6",
      Yellow: "#eab308",
      Purple: "#a855f7",
    }),
    [],
  )

  const getColorValue = (colorName: string): string => {
    return colorMap[colorName] || "#666666"
  }

  const displayImage = useMemo(() => {
    return (
      selectedColor?.color_images?.[0] ??
      product?.product_images?.[0]?.product_image ??
      ""
    );
  }, [selectedColor, product]);

  const availableSizes = useMemo(() => {
    return selectedColor?.sizes?.filter(size => size?.status) ?? [];
  }, [selectedColor]);

  const handleBuyNow = async () => {
    try {
      if (selectedColor && !selectedSize) {
        showErrorToasts( "Please select a size");
        return;
      }

      const payload =
        // selectedSize
        //   ? { variation_product_id: selectedSize.size_id }
        //   : 
        { product_id: product.id };

      const response = await orderCart(payload as any);
      setOrder(response)
      router.push("/order-success")
    } catch (error) {
      console.error("Order failed", error);
    }
  };


  return (
    <div
      className="relative w-full max-w-sm bg-slate-900 rounded-lg overflow-hidden transition-all duration-300 hover:shadow-2xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container */}
      <div className="relative h-80 bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center overflow-hidden">
        <img
          src={displayImage || "/placeholder.svg"}
          alt={`${product.name} in ${selectedColor?.color_name}`}
          className="object-contain h-full w-full transition-transform duration-300"
          onError={(e) => {
            const img = e.target as HTMLImageElement
            img.src = "/shoe-product.jpg"
          }}
        />
        {(product?.discount ?? 0) > 0 && (
          <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
            -{product.discount}%
          </div>
        )}
      </div>

      <div className="p-6 bg-slate-950">
        <h3 className="text-white text-xl font-bold mb-4">{product.name}</h3>

        {isHovered && (
          <div className="space-y-4 mb-4 animate-in fade-in duration-300">
            <div>
              <p className="text-gray-400 text-sm font-semibold mb-2">SIZE:</p>
              <div className="flex gap-2 flex-wrap">
                {availableSizes.map((size) => (
                  <button
                    key={size.size_id}
                    onClick={() => setSelectedSize(size)}
                    className={`px-3 py-1 rounded border-2 font-semibold transition-all ${selectedSize?.size_id === size.size_id
                        ? "bg-white text-black border-white"
                        : "bg-transparent text-white border-gray-600 hover:border-white"
                      }`}
                  >
                    {size.size_name}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <p className="text-gray-400 text-sm font-semibold mb-2">COLOR:</p>
              <div className="flex gap-3">
                {product?.variation_colors?.map(color => (
                  <button
                    key={color.color_id}
                    onClick={() => {
                      setSelectedColor(color);
                      setSelectedSize(null);
                    }}
                    className={`w-8 h-8 rounded-full border-2 transition-all ${selectedColor?.color_id === color.color_id
                        ? "border-white scale-110"
                        : "border-gray-600 hover:border-white"
                      }`}
                    style={{ backgroundColor: getColorValue(color?.color_name ?? "") }}
                    title={color.color_name}
                  />
                ))}

              </div>
            </div>
          </div>
        )}

        <div className="flex items-baseline gap-2 mb-4">
          <span className="text-white text-lg font-bold">₹{selectedSize?.price || product.sale_price}</span>
          <span className="text-gray-500 text-sm line-through">₹{product.mrp}</span>
        </div>

        {isHovered && (
          <ButtonWidget
            className="w-full bg-white text-black hover:bg-gray-200 font-bold py-2 rounded-lg transition-all animate-in fade-in duration-300"
            onClick={handleBuyNow}
            isLoading={isPending}
            disabled={isPending}
          >
            Buy Now
          </ButtonWidget>
        )}
      </div>
    </div>
  )
}

export default memo(ProductCard)

"use client";

import Image from "next/image";
import { i4 } from "../helpers/imageHelper";

const WebHeader = () => {
  return (
      <header className="px-4 sm:px-8 py-4 sm:py-6">
      <Image src={i4} alt="logo" width={48} height={24} />
      </header>
  )
}
export default WebHeader
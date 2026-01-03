"use client";

import Image from "next/image";
import { i1, i2, i3, i4 } from "../helpers/imageHelper";
import Link from "next/link";


const WebFooter = () => {
  return (
    <div>
    <footer className="bg-black border-t border-neutral-900 px-4 sm:px-8 py-6 sm:py-8">
        <div className="flex items-center justify-between">
          <div>
              <Image src={i4} alt="logo" width={80} height={80} />

          </div>
          <div className="flex gap-6 items-center">
            <a href="#" className="text-white hover:text-neutral-400 transition-colors" aria-label="Facebook">
             <Image src={i1} alt="logo" width={10} height={10} />
            </a>
            <a href="#" className="text-white hover:text-neutral-400 transition-colors" aria-label="Instagram">
               <Image src={i2} alt="logo" width={10} height={10} />
            </a>
            <a href="#" className="text-white hover:text-neutral-400 transition-colors" aria-label="Twitter">
              <Image src={i3} alt="logo" width={10} height={10} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
export default WebFooter
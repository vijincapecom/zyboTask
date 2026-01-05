"use client";

import Image from "next/image";
import { i4 } from "../helpers/imageHelper";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";
import { LogOut } from "lucide-react";
import ButtonWidget from "../widgets/ButtonWidget";

const WebHeader = () => {
  const { data: session } = useSession();

  return (
      <header className="px-4 sm:px-8 py-4 sm:py-6">
        <div className="flex justify-between">
        <div>

        <Image src={i4} alt="logo" width={48} height={24}  />

      </div>
      <div>
       {session?.user?.accessToken && (
        <ButtonWidget
          onClick={() =>
            signOut({
              callbackUrl: `${process.env.REDIRECT_URL}/log-in`,
            })
          }
          className="flex items-center gap-2 text-sm font-medium text-white hover:text-white"
        >
          <LogOut size={18} color="white"/>
          Logout
        </ButtonWidget>
      )}
      </div>
      </div>
      </header>
  )
}
export default WebHeader
import { Button } from "./button";
import {Poppins} from "next/font/google"

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  variable:'--font-poppins',
  subsets: ['latin'],
})

interface appbarComponents {
  user?: {
    name?: string | null;
  };
  onSignin:any;
  onSignout:any;
}

export const Appbar = ({user,onSignin,onSignout}:appbarComponents) => {
  return <div className="shadow-lg w-full h-[80px]">
      <div className="flex justify-between items-center h-full px-20">
        <div className={`${poppins.className} font-extrabold text-4xl text-blue-500`}>
          PAYIT
        </div>
        <Button className="bg-blue-500 px-3 py-2 font-bold text-xl rounded-lg text-white hover:scale-105 transition-all ease-in-out 0.3s">{user?"Logout":"Login"}</Button>
      </div>
  </div>;
};

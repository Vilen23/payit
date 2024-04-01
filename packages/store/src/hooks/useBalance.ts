import { useRecoilValue } from "recoil"
import { BalanceAtom } from "../atoms/balance"


export const useBalance = () =>{
    const value = useRecoilValue(BalanceAtom);
    return value;
}
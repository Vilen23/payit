import {atom} from "recoil"

export const BalanceAtom = atom<number>({
    key:"balance",
    default:0
})
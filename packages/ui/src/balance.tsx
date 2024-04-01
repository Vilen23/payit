"use client"
import {useBalance} from "@repo/store/useBalance"

export const Balance = () => {
  const balance = useBalance();

  return (
    <div>
     <h1>Hi your balance is {balance}</h1>
    </div>
  );
};

import { createContext, useContext, useState } from "react";
//React context를 사용하여 상태 공유.
const MoneyContext = createContext();
//money를 전역으로 관리하기 위해 새로운 context를 만들었다.
export function MoneyProvider({children}){
    const [money,setMoney]= useState(0);
    return(
        <MoneyContext.Provider value={{money,setMoney}}>
            {children}
        </MoneyContext.Provider>
    )
}
export function useMoney(){
    return useContext(MoneyContext);
}
import {createContext, ReactNode, useContext, useEffect, useState}  from "react"
import { challengesContext } from "./ChallengesContext";

interface CountdownContextData{
    minutes:number
    seconds:number;
    hasFinished:boolean;
    isActive:boolean;
    startCountdown:() => void;
    resetCountdown:() => void;

}

interface CountdownProviderProps{
    children:ReactNode;
}

export const CountdownContext = createContext({} as CountdownContextData);

let countdownTimeout:NodeJS.Timeout;

export function CountdownProvider({children}:CountdownProviderProps){

    const {startNewChallenge} = useContext(challengesContext);

    const [time ,setTime] =useState(25*60);
    const [isActive,setisActive]= useState(false)//estado true ou false
    const [hasFinished,setHasFinisched]=useState(false)

    const minutes = Math.floor(time/60);
    const seconds = time % 60;

    function startCountdown(){
        setisActive(true);
    }

    function resetCountdown(){
        clearTimeout(countdownTimeout);//Corrigir erro do -1 seconds
        setisActive(false);
        setHasFinisched(false);
        setTime(25*60);//Valor inicial
    }

    //quero executar e quando quero executar, todas as veses que mudar o valor de activer e time chama essa função
    useEffect(() =>{
       if(isActive && time >0){// se activer e true && time >0
          countdownTimeout = setTimeout(()=>{
                setTime(time -1); // diminuir um minute
            },1000)
       }else if(isActive && time ===0){// se activer e true && time =0
        setHasFinisched(true);
        setisActive(false);
        startNewChallenge()
        
       }
        
    },[isActive,time])

    return(
        <CountdownContext.Provider value={{
            minutes,
            seconds,
            hasFinished,
            isActive,
            startCountdown,
            resetCountdown
        }}>
            {children}
        </CountdownContext.Provider>
    )
}
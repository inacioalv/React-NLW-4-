import { useState,useEffect, useContext } from 'react'
import { challengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/Components/Countdown.module.css'

let countdownTimeout:NodeJS.Timeout;

export function Countdown(){

    const {startNewChallenge} = useContext(challengesContext);

    const [time ,setTime] =useState(0.1*60);
    const [isActive,setisActive]= useState(false)//estado true ou false
    const [hasFinished,setHasFinisched]=useState(false)

    const minutes = Math.floor(time/60);
    const seconds = time % 60;

    // padStart preencher com zero Ex: 5 '05' '0' '5'
    const  [minuteLeft,minuteRight] = String(minutes).padStart(2,'0').split('');
    const  [secondLeft,secondRight] = String(seconds).padStart(2,'0').split('');

    function startCountdown(){
        setisActive(true);
    }

    function resetCountdown(){
        clearTimeout(countdownTimeout);//Corrigir erro do -1 seconds
        setisActive(false);
        setTime(0.1*60);//Valor inicial
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
        <div>
            <div className={styles.countdownContainer}>
                <div>
                    <span>{minuteLeft}</span>
                    <span>{minuteRight}</span>
                </div>
                <span>:</span>
                <div>
                    <span>{secondLeft}</span>
                    <span>{secondRight}</span>
                </div>
            </div>

            {hasFinished ?(
                    <button disabled className={styles.CountdownButton}>
                    Ciclo encerrado
                    </button>
               
            ):(
                 <>
                  {/* se tiver isActiver */}
            {isActive ? (
                <button 
            type="button" 
            className={`${styles.CountdownButton} ${styles.CountdownButtonActive}`} 
            onClick={resetCountdown}
            >
                Abandonar ciclo
            </button>
            ):(
                <button 
            type="button" 
            className={styles.CountdownButton} 
            onClick={startCountdown}
            >
                Iníciar um ciclo
            </button>
            )}
                 
                 </>
            )}

           
            
        </div>
    )
}
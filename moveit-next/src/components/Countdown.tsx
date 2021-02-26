import { useState,useEffect, useContext } from 'react'
import { challengesContext } from '../contexts/ChallengesContext';
import { CountdownContext } from '../contexts/ContdownContext';
import styles from '../styles/Components/Countdown.module.css'



export function Countdown(){

    const {
        minutes,
        seconds,
        hasFinished,
        isActive,
        resetCountdown,
        startCountdown
    } =useContext(CountdownContext);

    // padStart preencher com zero Ex: 5 '05' '0' '5'
    const  [minuteLeft,minuteRight] = String(minutes).padStart(2,'0').split('');
    const  [secondLeft,secondRight] = String(seconds).padStart(2,'0').split('');

    

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
import { useContext } from 'react';
import { challengesContext } from '../contexts/ChallengesContext';
import { CountdownContext } from '../contexts/ContdownContext';
import styles from '../styles/Components/ChallengeBox.module.css'

export function ChallengeBox(){

    const {activeChallenge,resetChallenge,completeChallenge} = useContext(challengesContext);
    const {resetCountdown} = useContext(CountdownContext)

    function handleChallengeSucceeded(){
        completeChallenge();
        resetCountdown();
    }

    function handleChallengeFailed(){
        resetChallenge();
        resetCountdown();
    }

   
    //const hasActiveChallenge= true;

    return(
        <div className={styles.challengeBoxContainer} >

            {activeChallenge ? (
               <div className={styles.challengeActive}>
                   <header>Ganhe {activeChallenge.amount} xp</header>
                   <main>
                       <img src={`icons/${activeChallenge.type}.svg`} alt=""/>
                       <strong>Novo desafio</strong>
                       <p>{activeChallenge.description}</p>
                   </main>

                   <footer>
                       <button type="button"
                               className={styles.challengeFailedButton} 
                               onClick={handleChallengeFailed}>
                           Falhei
                        </button>
                       <button type="button"
                                className={styles.challengeSucceededButton}
                                onClick={handleChallengeSucceeded}
                            >
                           Completei
                        </button>
                   </footer>
               </div>
            ):(
                <div className={styles.challengeNotActiver}>
                <strong>
                Inicie um ciclo
                para receber desafios
                </strong>
                <p>
                    <img src="icons/level-up.svg" alt="Level up"/>
                    Avance de level completando 
                    os desafios.
                </p>
            </div>
            )}
            
        </div>
    )
}
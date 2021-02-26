import { useContext } from 'react';
import { challengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/Components/ChallengeBox.module.css'

export function ChallengeBox(){

    const {activeChallenge,resetChalleng} = useContext(challengesContext);

   
    //const hasActiveChallenge= true;

    return(
        <div className={styles.challengeBoxContainer} >

            {activeChallenge ? (
               <div className={styles.challengeActive}>
                   <header>Ganhe {activeChallenge.amount} xp</header>
                   <main>
                       <img src="icons/body.svg" alt=""/>
                       <strong>Novo desafio</strong>
                       <p>{activeChallenge.description}</p>
                   </main>

                   <footer>
                       <button type="button"
                               className={styles.challengeFailedButton} 
                               onClick={resetChalleng}>
                           Falhei
                        </button>
                       <button type="button"
                                className={styles.challengeSucceededButton}
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
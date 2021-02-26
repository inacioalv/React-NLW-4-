import { useContext } from 'react'
import { challengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/Components/CompletedChallenges.module.css'

export function CompletedChallenges(){

    const {challengesCompleted} = useContext
    (challengesContext);
    return(
        <div className={styles.completedChallenges} >  
            <span>Desafios comoletos</span>
            <span>{challengesCompleted}</span>
        </div>
    )
}
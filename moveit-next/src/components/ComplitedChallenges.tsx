import styles from '../styles/Components/CompletedChallenges.module.css'

export function CompletedChallenges(){
    return(
        <div className={styles.completedChallenges} >  
            <span>Desafios comoletos</span>
            <span>5</span>
        </div>
    )
}
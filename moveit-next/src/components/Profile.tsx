import styles from '../styles/Components/Profile.module.css'

export function Profile(){
    return(
        <div className={styles.profileContainer} >
            <img src="https://avatars.githubusercontent.com/u/51245154?s=60&v=4" alt="Inacio"/>
            <div>
                <strong>Inácio alves</strong>
                <p>
                    <img src="icons/level.svg" alt="Level"/>
                    Level 1
                </p>
            </div>
        </div>
    )
}
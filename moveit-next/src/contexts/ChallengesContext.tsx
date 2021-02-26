import {createContext, ReactNode, useState } from 'react'
import challenges from '../../challenges.json'


interface Challenge{
    type: 'body' | 'eye';
    description:string;
    amount:number
}

interface ChallengesContextData{
    level:number;
    currentExperience:number;
    challengesCompleted:number;
    activeChallenge:Challenge;
    experienceToNextLevel:number;
    levelUp: ()=> void;
    startNewChallenge: ()=> void;
    resetChallenge: () => void;
    completeChallenge:() => void;
}

interface ChallengesProviderProps{
    children:ReactNode;
}

export const challengesContext = createContext({} as ChallengesContextData);

export function ChallengesProvider({children}:ChallengesProviderProps){

    const [level,setLevel]= useState(1)
    const [currentExperience,setCureentExperience]= useState(0);
    const [challengesCompleted,setChallengesComplete]= useState(0);

    const [activeChallenge,setActiveChallenge]= useState(null)

    const experienceToNextLevel = Math.pow((level +1)* 4,2)

    function levelUp(){
        setLevel(level +1);
    }

    function startNewChallenge(){
        const randomChallengeIndex= Math.floor(Math.random() *challenges.length);
        const challenge = challenges[randomChallengeIndex];

        setActiveChallenge(challenge);
        
    }

    function resetChallenge(){
        setActiveChallenge(null)
    }

    function completeChallenge(){
        if(!activeChallenge){
            return
        }
        //add experiência
        const {amount}= activeChallenge;

        //pegando experiência do user
        let finalExperience = currentExperience+amount;

        if(finalExperience >= experienceToNextLevel){
            finalExperience = finalExperience -experienceToNextLevel;//quanto precissa para o nivel
            levelUp();
        }

        setCureentExperience(finalExperience);
        setActiveChallenge(null);//zera desafio
        setChallengesComplete(challengesCompleted +1);// número de desafio completos
    }

    return(
        <challengesContext.Provider value={{
            level,
            currentExperience,
            challengesCompleted,
            activeChallenge,
            experienceToNextLevel,
            levelUp,
            startNewChallenge,
            resetChallenge,
            completeChallenge
            }} >
            {children}
        </challengesContext.Provider>
    )
}
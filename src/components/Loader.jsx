import { useRecoilState } from "recoil"
import { IsEnteredAtom } from "../stores"
import { Html, useProgress } from "@react-three/drei"
import styled from "styled-components"
import { useEffect } from "react"

export default function Loader(){
    const [isEntered,setIsEntered]=useRecoilState(IsEnteredAtom)

    const progress = useProgress()
    console.log(progress)
    
    useEffect(()=>{
        if(progress.progress==100){
            setIsEntered(true)
        }
    },[progress.progress])

    if(isEntered) return null;
    return(
        <>
            <Html center>
                <Test>
                    {isEntered? 100:progress.progress}%
                </Test>
            </Html>
        </>
    )
}

const Test=styled.div`
    color:white;
`
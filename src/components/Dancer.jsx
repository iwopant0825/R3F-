import { Box, useAnimations, useGLTF, useScroll } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"
import { useEffect, useRef } from "react"
import { useRecoilValue } from "recoil"
import { IsEnteredAtom } from "../stores"
import Loader from "./Loader"

export default function Dancer() {
    const dancerRef = useRef(null)
    const { scene, animations } = useGLTF("/models/dancer.glb")
    const { actions } = useAnimations(animations, dancerRef)
    console.log(actions)
    const isEntered = useRecoilValue(IsEnteredAtom)

    const sroll = useScroll()

    useEffect(() => {
        if(!isEntered) return;
        actions['wave'].play()
    }, [actions])

    if(isEntered){
        return (
            <>
                <ambientLight intensity={2} />
                <primitive ref={dancerRef} scale={0.03} object={scene} />
            </>
        )
    }

    return (
        <>
            <Loader isCompleted/>
        </>
    )
}
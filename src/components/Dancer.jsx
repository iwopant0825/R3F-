import { Box, useAnimations, useGLTF } from "@react-three/drei"
import { useEffect, useRef } from "react"

export default function Dancer(){
    const dancerRef = useRef(null)
    const {scene,animations} = useGLTF("/models/dancer.glb")
    const {actions} = useAnimations(animations,dancerRef)
    console.log(actions)
    useEffect(()=>{
        actions['uprock'].play()
    },[actions])
    return(
        <>
            <ambientLight intensity={2}/>
            <primitive ref={dancerRef} scale={0.03} object={scene}/>
        </>
    )
}
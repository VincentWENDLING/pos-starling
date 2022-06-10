import { useState } from "react";


const useModal = () => {
    const [isShown, setIsShown]:any = useState(false)

    const toggle = () => {
        setIsShown(!isShown)
    }

    return [
        isShown,
        toggle
    ]
}

export default useModal
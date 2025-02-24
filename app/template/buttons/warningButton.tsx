// website-template v2.0.0

import { ReactNode } from "react"
import Button from "./button"

export default function WarningButton({text, clicked, className}: {text: ReactNode, clicked?: () => void, className?: string}) { // Red delete button
    return (
        <Button text={text} clicked={clicked} classOverride="bg-red-700 hover:bg-red-800 active:bg-red-900" className={className}/>
    )
}
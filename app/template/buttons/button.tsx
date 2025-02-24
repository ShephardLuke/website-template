// website-template v1.2

import { ReactNode } from "react"

export default function Button({text, clicked, className, classOverride}: {text: ReactNode, clicked?: () => void, className?:string, classOverride?: string}) { // Blue button for main stuff
    let toAdd = "bg-blue-700 hover:bg-blue-800 active:bg-blue-900";
    if (classOverride) {
        toAdd = classOverride;
    }

    if (className) {
        toAdd += toAdd + " " + className
    }

    return (
        <button className={"p-2 " + toAdd} onClick={clicked? clicked : () => {}}>{text}</button>
    )
}
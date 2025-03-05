// website-template v2.0.0

import { ReactNode } from "react"
import interactiveClass from "../utils/interactiveElement";

export default function Button({text, clicked, className, classOverride}: {text: ReactNode, clicked?: () => void, className?:string, classOverride?: string}) { // Blue button for main stuff
    let toAdd = "bg-blue-700 hover:bg-blue-800 active:bg-blue-900";
    if (classOverride) {
        toAdd = classOverride;
    }

    if (className) {
        toAdd += toAdd + " " + className
    }

    return (
        <button className={interactiveClass("p-2 " + toAdd)} onClick={clicked? clicked : () => {}}>{text}</button>
    )
}
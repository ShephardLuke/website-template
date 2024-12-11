'use client'

import { useState } from "react";
import Footer from "../template/global/footer";
import Header from "../template/global/header";

export default function Page() {

    const [easteregg, setEasteregg] = useState(false);

    return (
        <>
            <Header currentPage="Test Page"/>
            <div className="main">
                <h1>Test Page</h1>
                {easteregg ?
                    <div className="border-2">
                        <Page/> 
                    </div> 
                    :
                    <button className="cursor-default" onClick={() => {setEasteregg(true)}}>Test</button>
                }   
            </div>
            <Footer/>
        </>
    )
}
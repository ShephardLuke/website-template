// website-template v1.3

import Link from "next/link";
import { NameLink } from "../link/nameLink";
import { NavLink } from "../link/navLink";

export default function Header({currentPage}: {currentPage?: string}) {

    const MAIN_TITLE = "Website Template";
    
    const PAGES = [
        new NavLink("Home", "/"),
        new NavLink("Test Page"),
        new NameLink("View on GitHub", "https://github.com/shephardluke/website-template"),
    ]

    const pageLinks = PAGES.map(page => {
        const label = page.getLabel();
        if (currentPage == label) {
            return <div key={"currentPage"} className="underline header linkStyle">{page.generateElement()}</div>
        } 
        return page.generateElement();
    })

    return (
        <div className="flex justify p-10 header">
            <div className="header whitespace-nowrap">
                <Link className="text-4xl" href={"/"}>{MAIN_TITLE}</Link>
            </div>
            <div key={"links"} className="flex justify-around header text-2xl items-center w-full">
                {pageLinks}
            </div>
        </div>
    )
}

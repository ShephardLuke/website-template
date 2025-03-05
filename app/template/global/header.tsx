// website-template v2.0.0

import Link from "next/link";
import { NameLink } from "../link/nameLink";
import { NavLink } from "../link/navLink";
import interactiveClass from "../utils/interactiveElement";

export default function Header({currentPage}: {currentPage?: string}) {

    // eslint-disable-next-line @typescript-eslint/no-require-imports
    const pk = require("../../../package.json");
    const repo = pk.name;

    const MAIN_TITLE = "Website Template";
    
    const PAGES = [ // List of pages that will show on the nav bar. NavLink internal links, NameLink is for external links and will open in a new tab
        new NavLink("Home", "/"),
        new NavLink("Test Page"),
        new NameLink("View on GitHub", "https://github.com/shephardluke/" + repo),
    ]

    const pageLinks = PAGES.map(page => { // Turns each element into a link, with the current page having linkStyle class
        const label = page.getLabel();
        if (currentPage == label) {
            return <li key={"currentPage"} className={interactiveClass("underline header linkStyle")}>{page.generateElement()}</li>
        } 
        return <li key={label} className={interactiveClass()}>{page.generateElement()}</li>;
    })

    return (
        <header className="flex flex-col text-center lg:flex-row justify p-10 header">
            <div className={interactiveClass("header lg:whitespace-nowrap")}>
                <Link className="text-4xl" href={"/"}>{MAIN_TITLE}</Link>
            </div>
            <nav className="w-full">
                <ul key={"links"} className="flex flex-col pt-5 space-y-5 lg:space-y-0 lg:pt-0 lg:flex-row justify-around header text-2xl items-center h-full">
                    {pageLinks}
                </ul>
            </nav>
        </header>
    )
}

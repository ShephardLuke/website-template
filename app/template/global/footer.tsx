// website-template v2.0.0

import { NameLink } from "../link/nameLink";

export default function Footer() {
    const YEAR = 2025 // Year of license
    const TEMPLATE_VERSION = "v2.0.0"

    // eslint-disable-next-line @typescript-eslint/no-require-imports
    const pk = require("../../../package.json");
    const repo = pk.name;
    const releaseNotesLink = new NameLink("release notes", "https://github.com/shephardluke/" + repo + "/releases/tag/v" + pk.version).generateElement()

    const websiteTemplateLink = new NameLink("Website Template", "https://website-template.shephardluke.co.uk").generateElement()

    return (
        <div className="p-10 bg-darkest-blue flex flex-col space-y-5 whitespace-pre text-wrap">
            <p>Website Template v{pk.version} ({releaseNotesLink}).</p>
            <p className={repo === "website-template" ? "hidden" : ""}>Made using {websiteTemplateLink} {TEMPLATE_VERSION}.</p>
            <p>© {YEAR} Luke Christopher Shephard.</p>
        </div>
    )
}

// website-template v2.0.0

export default function Footer() {
    const YEAR = 2025 // Year of license

    // eslint-disable-next-line @typescript-eslint/no-require-imports
    const pk = require("../../../package.json");
    const repo = pk.name;

    return (
        <footer className="p-10 bg-darkest-blue flex flex-col space-y-5 whitespace-pre text-wrap">
            <p>{repo} v{pk.version}</p>
            <p>© {YEAR} Luke Christopher Shephard</p>
        </footer>
    )
}

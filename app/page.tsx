import Footer from "./website-shared/footer";
import Header from "./website-shared/header";

export default function Home() {
  return (
    <>
      <Header currentPage="Home"/>
      <div className="p-10">
        <p className="text-2xl underline">Home to all of the shared files for my websites</p>
        <p className="pt-5">Files include:</p>
        <ul className="pl-5">
          <li>header.tsx - For the header above</li>
          <li>footer.tsx - For the footer below</li>
          <li>nameLink.tsx - A class for links, for example the header links</li>
          <li>globals.css - For shared style</li>
          <li>tailwind.config.ts - For shared colours</li>
        </ul>
      </div>

      <Footer/>
    </>
  );
}

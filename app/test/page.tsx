import Footer from "../website-shared/footer";
import Header from "../website-shared/header";

export default function Page() {
    return (
        <>
            <Header currentPage="Test"/>
            <div>
                <p className="text-2xl underline p-10">TEST PAGE!</p>
            </div>
            <Footer/>
        </>
    )
}
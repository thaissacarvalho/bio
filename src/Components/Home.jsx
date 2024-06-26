import Header from "./Header/Header";
import Main from "./Main/Main";

export default function Home() {
    return (
        <div className="bg-[#F8F8FF] w-[375px] h-screen flex flex-col justify-center items-center gap-8">
            <Header />
            <Main/>
        </div>
    )
}

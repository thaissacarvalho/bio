import Link from './Link/Link.jsx';
import Titles from './Titles/Titles.jsx';

export default function Home() {
    return (
        <main className="w-full h-screen flex flex-col justify-center items-center gap-8">
            <Titles />

            <span className="flex flex-col gap-4">
                <Link link="https://thaissacarvalho.vercel.app/" nameLink="Site" />
                <Link link="https://github.com/thaissacarvalho" nameLink="Github" />
                <Link link="mailto:thaissa.dos2003@outlook.com" nameLink="Email" />
                <Link link="https://www.linkedin.com/in/thaissa-carvalho-dos-santos/" nameLink="LinkedIN" />
            </span>
        </main>
    )
}

import Logo from './Logo/Logo.jsx';
import Link from './Link/Link.jsx';
import Me from './Me/Me.jsx';

export default function Bio() {
    return (
        <main className="sm: flex flex-col justify-center items-center gap-8 lg:gap-4">
            <Logo />

            <Me />

            <span className="flex flex-col gap-4">
                <Link link="#" nameLink="SITE" />
                <Link link="https://github.com/thaissacarvalho" nameLink="GITHUB" />
                <Link link="mailto:thaissa.dos2003@outlook.com" nameLink="EMAIL" />
                <Link link="https://www.linkedin.com/in/thaissa-carvalho-dos-santos/" nameLink="LINKEDIN" />
            </span>
        </main>
    )
}

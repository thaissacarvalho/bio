export default function Profile() {
    return (
        <div className="flex flex-col justify-center items-center">
            <img src="/eu-sorrindo.svg" alt="My memoji photo. I'm smile and I make a 2 with hands" className="w-36 h-36" />

            <span className="flex flex-col items-center">
                <h2 className="text-lg font-bold">Thaissa Carvalho</h2>
                <h3 className="text-[12px] font-bold text-style-purple text-center px-5 hover:text-green-500">Desenvolvedora Full Stack | Typescript | Javascript | React | Node.js | Express | Nest.js | MySQL | PostgreSQL | MongoDB | Docker | NGINX | PM2</h3>
            </span>
        </div>
    )
}

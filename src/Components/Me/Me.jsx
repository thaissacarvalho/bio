import myselfHappy from '../../assets/Eu sorrindo.svg';

export default function Me() {
  return (
    <section className="sm: w-80 flex flex-col justify-center items-center">
        <img className="sm: w-40 flex" src={myselfHappy} alt="Eu sorrindo com os dedos cruzados"/>

        <h1 className="sm: text-turquoise font-bold text-3xl">Thaissa Carvalho</h1>
        <h3 className="sm: text-white font-bold text-sm">Desenvolvedora Fullstack</h3>
    </section>
  )
}

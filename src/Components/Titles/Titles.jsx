import myselfHappy from '../../assets/Eu sorrindo.svg';

export default function Titles() {
  return (
    <section className="w-80 flex flex-col justify-center items-center">
        <img className="w-40 flex" src={myselfHappy} alt="Eu sorrindo com os dedos cruzados"/>

        <h1 className="text-style-light-purple font-bold text-3xl">Thaissa Carvalho</h1>
        <h3 className="text-style-purple font-bold text-sm">Desenvolvedora Fullstack</h3>
    </section>
  )
}

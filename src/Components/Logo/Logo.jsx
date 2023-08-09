import logo from '../../assets/Logo.svg';

export default function Logo() {
  return (
    <header className="sm: w-40 self-start relative top-3 left-3">
      <img src={logo} alt="Thaissa Carvalho" className="w-40"/>
    </header>
  )
}

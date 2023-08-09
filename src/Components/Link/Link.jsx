export default function Link({ link, nameLink }) {
  return (
    <a href={link} target="_blank" rel="noreferrer" className="sm: w-80 h-14 bg-purpleBg flex justify-center items-center text-2xl font-bold text-white rounded-lg border-solid border-2 border-turquoise shadow-lg shadow-black">{nameLink}</a>
  )
}

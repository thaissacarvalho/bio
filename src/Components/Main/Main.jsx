import Button from "../Button/Button";
import SocialMedia from "../SocialMedia/SocialMedia";
import Profile from "../Profile/Profile";

export default function Main() {
  return (
      <main className="w-full h-full flex flex-col gap-6">
        <Profile />
        <div className="flex flex-col gap-4 justify-center items-center">
          <Button linkName="https://www.bythaissa.com" textName="ACESSE O MEU WEBSITE" />
          <Button linkName="https://docs.google.com/document/d/e/2PACX-1vRJhC6nksr3nTbrII8wSvtOZU4J166YLwQvPY8z_e-f6NCtakBA_TGnipRVp3-ZsO2TjBTZ_aJFY0ag/pub" textName="CURRICULO BACK END" />
          <Button linkName="https://docs.google.com/document/d/e/2PACX-1vSS4MhQ2qL40E_ZBqnnaPe58jqaCTlzifn0PuMclMtdBwjudKGNptlkfxA5tOh7Ruo5AhcExAlCCEqZ/pub" textName="CURRICULO FULL STACK" />
        </div>
        <SocialMedia />
      </main>
  )
}

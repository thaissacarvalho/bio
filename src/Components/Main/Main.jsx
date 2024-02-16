import Button from "../Button/Button";
import SocialMedia from "../SocialMedia/SocialMedia";
import Profile from "../Profile/Profile";

export default function Main() {
  return (
      <main className="w-full h-full flex flex-col gap-6">
        <Profile />
        <div className="flex flex-col gap-4 justify-center items-center">
          <Button linkName="https://thaissacarvalho.vercel.app/" textName="ACESSE O MEU WEBSITE" />
          <Button linkName="https://1drv.ms/w/s!AvyeC1pPN5L-jTL7iZ-Lau5agES8?e=JdAreR" textName="CURRICULO FRONT END" />
          <Button linkName="https://1drv.ms/w/s!AvyeC1pPN5L-jTRRA0NnErBIlwuf?e=J6LiGT" textName="CURRICULO FULL STACK" />
        </div>
        <SocialMedia />
      </main>
  )
}

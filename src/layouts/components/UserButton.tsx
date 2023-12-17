import { UserButton } from "@clerk/nextjs";
 
export default function UserBtm() {
  return (
    <div className="text-xs">
      <UserButton afterSignOutUrl="/"/>
    </div>
  )
}
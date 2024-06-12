import Logout from "./Logout"
import Seach from "./Seach"
import User from "./User"

function Left() {
  return (
    <div className="w-[30%] bg-base-300 text-slate-700">
      
      <Seach/>
      <User/>
      <Logout/>
    </div>
  )
}

export default Left

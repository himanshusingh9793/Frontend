import Chatuser from "./Chatuser"
import Messages from "./Messages"
import Typesend from "./Typesend"

function Right() {
  return (
    <div className=" w-[70%] bg-base-200  text-black">
    <Chatuser/>
    <div  className="overflow-y-scroll hide-scroll" style={{maxHeight:"calc(92vh - 8vh)"}}>
    <Messages/>

    </div>
    <Typesend/>
    </div>
  )
}

export default Right

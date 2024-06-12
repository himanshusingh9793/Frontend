
import { IoSend } from "react-icons/io5";
function Typesend() {
  return (
    <div className="flex space-x-2 h-[8vh] text-clip">
      <div className="w-[70%] ml-3">
      <input type="text" placeholder="Type here" className="input input-bordered input-primary w-full " />
      </div>
      <button >
          <IoSend className="text-4xl text-primary drop-shadow-2xl mb-6" />
        </button>
    </div>
  )
}

export default Typesend

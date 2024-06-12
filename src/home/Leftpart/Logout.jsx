
import { BiLogOutCircle } from "react-icons/bi";

function Logout() {
 
  return (
    <>
      <hr />
      <div className=" h-[10vh] bg-transparent">
        <div>
          <BiLogOutCircle
            className="text-5xl text-slate-500 hover:bg-slate-700 duration-300 cursor-pointer rounded-full p-2 ml-3 mt-1"
          />
        </div>
      </div>
    </>
  );
}

export default Logout;

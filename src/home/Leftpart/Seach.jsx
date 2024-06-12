import { FaSearch } from "react-icons/fa";
function Seach() {
  return (
    <div className="h-[10vh] py-6">
      <div className="px-20 py-4">
      <form action="">
        <div className="flex space-x-3 ">
          <label className="input   input-bordered input-info w-[100%] flex items-center gap-2 ">
            <input type="text" className="grow" placeholder="Search" />
          </label>
          <button>
            <FaSearch className="text-5xl p-2 hover:bg-sky-100 rounded-full duration-300"/>
          </button>
        </div>
      </form>
    </div>
    </div>
  );
}

export default Seach;

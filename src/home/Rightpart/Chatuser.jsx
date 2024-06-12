
function Chatuser() {
  return (
    <div className="flex space-x-4 items-center justify-center h-[8vh] bg-primary-content hover:bg-gray-300 duration-300 p-3 rounded-md">
      <div className="avatar online">
  <div className="w-16 rounded-full">
    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
  </div>
</div>
<div className="text-slate-500 font-semibold">
  <h1 className="text-xl">Himanshu</h1>
  <span className="text-sm">Offline</span>
</div>
    </div>
  )
}

export default Chatuser

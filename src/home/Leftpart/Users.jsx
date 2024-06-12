

function Users() {
  return (
    <div>
      <div className="flex space-x-4 px-8 py-3 hover:bg-sky-100 duration-300 cursor-pointer">
        <div className="avatar online">
          <div className="w-12 rounded-full">
            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
          </div>
        </div>
        <div className="text-slate-500 font-semibold">
          <h1>Harsh</h1>
          <span>harsh2028@gmail.com</span>
        </div>
      </div>
    </div>
  )
}

export default Users

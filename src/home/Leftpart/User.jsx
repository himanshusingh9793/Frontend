import Users from "./Users";

function User() {
  return (
    <div className="pt-6">
      <h1 className="px-8 py-2 text-slate-500 font-semibold rounded-md bg-primary-content">
        Messages
      </h1>
      <div className="overflow-y-scroll hide-scroll py-1" style={{maxHeight:"calc(84vh - 10vh)"}}>
      <Users/>
      <Users/>
      <Users/>
      <Users/>
      <Users/>
      <Users/>
      <Users/>
      <Users/>
      <Users/>
      <Users/>
      <Users/>
      <Users/>
      <Users/>
      <Users/>
      <Users/>
      <Users/>
     

      </div>
    </div>
  );
}

export default User;

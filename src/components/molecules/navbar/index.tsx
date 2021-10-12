import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar mb-2 shadow-lg bg-neutral text-neutral-content flex ">
      <div className="flex-none px-2 mx-2">
        <span className="text-lg font-bold hidden lg:flex">UE plan stats</span>
      </div>
      <div className="flex-1 px-2 mx-2  lg:flex ">
        <div className="items-stretch  lg:flex">
          <Link to="/">
            <div className="btn btn-ghost btn-sm rounded-btn">Home </div>
          </Link>
          <Link to="/logs">
            <div className="btn btn-ghost btn-sm rounded-btn">Logs </div>
          </Link>
          <Link to="/charts">
            <div className="btn btn-ghost btn-sm rounded-btn">Charts </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

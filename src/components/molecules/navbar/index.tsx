import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar mb-2 shadow-lg bg-neutral text-neutral-content ">
      <div className="flex-none px-2 mx-2">
        <span className="text-lg font-bold">UE plan stats</span>
      </div>
      <div className="flex-1 px-2 mx-2">
        <div className="items-stretch hidden lg:flex">
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

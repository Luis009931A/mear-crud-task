import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="p-4 bg-slate-800">
      <header className="flex justify-between items-center px-5">
        <div>
          <Link to="/">
            <span className="text-white font-bold text-2xl hover:text-blue-500">CRUD TASKS</span>
          </Link>
        </div>
        <nav className="flex w-80">
          <ul className="flex className= text-gray-400 font-bold text-xl w-full justify-between">
            <li className="hover:text-cyan-400">
              <Link to="/tasks">Home | Tasks</Link>
            </li>
            <li className="hover:text-cyan-400">
              <Link to="/newtask">Create Task</Link>
            </li>
            <li className="hover:text-cyan-400">
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default Navbar;

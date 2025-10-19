import { Link, NavLink } from "react-router";
// import logo from "../assets/img/firebase-logo.png";

// import MyLink from "./MyLink";
import MyContainer from "../Container/MyContainer";
import MyLink from "../Container/MyLink";

const Navbar = () => {
    // const links = <>
    // <NavLink to='/' className={({isActive})=>(isActive ? 'text-purple-500' : '')}>Home</NavLink>
    // <NavLink to='/aboutus' className={({isActive})=>(isActive ? 'text-purple-500' : '')}>About Us</NavLink>
    // <NavLink to='/profile' className={({isActive})=>(isActive ? 'text-purple-500' : '')}>Profile</NavLink>
    // </>
  return (
    <div className="bg-slate-100f py-2  border-b border-b-slate-300 ">
      <MyContainer className="flex items-center justify-between">
        <figure>
          {/* <img src={logo} className="w-[55px]" /> */}
        </figure>
        <ul className="flex items-center gap-2">
            {/* {links} */}
            {/* we can use component to make reusable code to not repeat this activ functon  */}
         <li>
            <MyLink to={"/"}>Home</MyLink>
          </li>
          <li>
            <MyLink to={"/aboutus"}>About US</MyLink>
          </li>
          <li>
            <MyLink to={"/profile"}>Profile</MyLink>
          </li>
        </ul>

        <button className="bg-purple-500 text-white px-4 py-2 rounded-md font-semibold cursor-pointer">
          <Link to={"/signin"}>Sign in</Link>
        </button>
      </MyContainer>
    </div>
  );
};

export default Navbar;
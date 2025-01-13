import logo from "../utils/logo.png";
import avatarImg from "../utils/image-avatar.jpg";
import moonImg from "../utils/icon-moon.svg";

export  const SideNav=()=>{
 return <div className="sidenav">
    <img src={logo} className="logo"/>
     <div className="sidenav-bottom-images">
    <img src={moonImg} className="moon"/>
    <hr/>
    <img src={avatarImg} className="avatar"/>
    </div>
 </div>
}
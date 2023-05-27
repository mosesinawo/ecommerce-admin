import "./widgetSm.css";
import { Visibility } from "@material-ui/icons";
import { useEffect } from "react";
import { useState } from "react";
import { userRequest } from "../../requestMethod";

export default function WidgetSm() {

  const [users, setUsers] = useState([])

  useEffect(() =>{
    const getUsers = async () =>{
      try {
        const res= await userRequest.get("users/?new=true")
        setUsers(res.data)
    
      } catch (error) {
        console.log(error)
      }
    }
    getUsers()
  },[])

  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Join Members</span>
      <ul className="widgetSmList">
        {users.map((user) =>{
        return  (<li key={user._id} className="widgetSmListItem">
          <img
            src={user.img ||
               "https://crowd-literature.eu/wp-content/uploads/2015/01/no-avatar.gif"}
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">{user.username}</span>
            <span className="widgetSmUserTitle">Software Engineer</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>)
        })}
        
        
      </ul>
    </div>
  );
}

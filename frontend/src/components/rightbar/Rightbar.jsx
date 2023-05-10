import "./rightbar.css";
import { Users } from "../../dummyData";
import Online from "../online/Online";


const Rightbar = ({profile}) => {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const HomeRightbar = () => {

  
  return (
    <>
    <div className="birthdayContainer">
    <img className="birthdayImg"   src="assets/images/gift.jpg" alt="" />
    <span className="birthdayText">
    <b>Pola foster</b>  and <b>3 other freinds</b> hav a birthday today
    </span>
  </div> 
    <img className="rightbarAd" src="/assets/images/add.jpg" alt="" />
    <h4 className="rightbarTitle">Online Friends</h4>
    <ul className="rightbarFriendList">
      {Users.map((u) => (
        <Online key={u.id} user={u}/>
      ))}
        
        </ul>
      
    </>
    )
      }
      const ProfileRightbar = () => {
        return (
          <>
             <h4 className="raightbarTitle" >User information </h4>
             <div className="rightbarInfo">
               <div className="rightbarInfoItem">
               <span className="rightbarInfoKey">City:</span>
               <span className="rightbarInfoValue">New York</span>
               </div>
               <div className = "rightbarInfoItem">
               <span className = "rightbarInfoKey">From:</span>
               <span className = "rightbarInfoValue">Madrid</span>
               </div>
               <div className = "rightbarInfoItem">
               <span className = "rightbarInfoKey">Relationship:</span>
               <span className = "rightbarInfoValue">Single</span>
               </div>
             </div>
             <h4 className="raightbarTitle" >User friends </h4>
             <div className="rightbarFollowings">
               <div className="rightbarFollowing">
                <img src={`${PF}images/person/prof3.jpg`} alt="" className="rightbarFollowingImg"/>
                <span className="rightbarFollowingName">Ben arfa</span>
               </div> 
               <div className="rightbarFollowing">
                <img src={`${PF}images/person/prof1.jpg`} alt="" className="rightbarFollowingImg"/>
                <span className="rightbarFollowingName">Ben arfa</span>
               </div> 
               <div className="rightbarFollowing">
                <img src={`${PF}images/person/prof2.jpg`} alt="" className="rightbarFollowingImg"/>
                <span className="rightbarFollowingName">Ben arfa</span>
               </div> 
               <div className="rightbarFollowing">
                <img src={`${PF}images/person/prof3.jpg`} alt="" className="rightbarFollowingImg"/>
                <span className="rightbarFollowingName">Ben arfa</span>
               </div> 
               <div className="rightbarFollowing">
                <img src={`${PF}images/person/prof2.jpg`} alt="" className="rightbarFollowingImg"/>
                <span className="rightbarFollowingName">Ben arfa</span>
               </div> 
               <div className="rightbarFollowing">
                <img src={`${PF}images/person/prof4.jpg`} alt="" className="rightbarFollowingImg"/>
                <span className="rightbarFollowingName">Ben arfa</span>
               </div> 
             </div>
          </>
          )
      }
      return (
    <div className="rightbar">
       <div className="rightbarWrapper">
        {profile ? <ProfileRightbar/> : <HomeRightbar /> }
       </div>
    </div>
  );
};
  
export default Rightbar
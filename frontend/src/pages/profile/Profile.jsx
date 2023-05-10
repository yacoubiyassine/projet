import "./profile.css"
import Topbar from '../../components/topbar/Topbar';
import Sidebar from '../../components/sidebar/Sidebar';
import Feed from '../../components/feed/Feed';
import Rightbar from '../../components/rightbar/Rightbar';

const Profile = () => {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <div>
    <Topbar />
    <div className='profile'>   
    <Sidebar />
    <div className="profileRight">
      <div className="profileRightTop">
         <div className="profileCover">

         <img className="profileCoverImg" src={`${PF}images/post/3.jpg`} alt=""/>
         <img className="profileUserImg" src={`${PF}images/person/prof3.jpg`} alt=""/>
      </div>
         <div className="profileInfo">
           <h4 className="profileInfoName">Yacoubi Yassine</h4>
           <span className="profileInfoDesc">Hello my friends</span>
         </div>
      </div>
      <div className="profileRightBottom">
    
             <Feed />
             <Rightbar profile/>
       </div> 
    </div>     
    
    </div>
    </div>
  )
}

export default Profile
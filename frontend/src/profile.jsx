import './stylesheets/profile.css';
import pfp from './assets/profile-profile-pic.png';

function Profile(){
    return (
        
        <div className = "profile-container">
            <h1 style = {{position:"absolute",top:"0",left:"50%",fontFamily:'Lucida Handwriting'}}>Profile</h1>
            
            <img className = "profile-picture" src ={pfp} alt = "profile"/>
            <div className = "button-container">
            <button className = 'change-profile-button'>Change Profile picture</button>
            <button className = 'change-profile-button'>Change username</button>
            <button className = 'change-profile-button'>Change bio</button>
            <button className = 'change-profile-button'>Change password</button>
            </div>
        </div>
        
    )
}

export default Profile;
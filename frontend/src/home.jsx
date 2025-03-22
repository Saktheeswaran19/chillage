import './stylesheets/home.css'
import inb from './assets/inbox.jpg'
import profile from './assets/profile.jpeg'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

function Home() {
    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState('');
    const [notifications, setNotifications] = useState([]);
    
    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
        // Add search functionality here
        console.log('Searching:', e.target.value);
    };

    const handleProfileClick = () => {
        navigate("/profile");
    };

    const handleInboxClick = () => {
        navigate("/inbox");
    };

    const addNotification = (message) => {
        setNotifications(prev => [...prev, { id: Date.now(), message }]);
        // Remove notification after 3 seconds
        setTimeout(() => {
            setNotifications(prev => prev.filter(n => n.id !== Date.now()));
        }, 3000);
    };

    return (
        <div className="home-container">
            <div className="grid-background"></div>
            
            {/* Notifications */}
            <div className="notifications-container">
                {notifications.map(notification => (
                    <div key={notification.id} className="notification">
                        {notification.message}
                    </div>
                ))}
            </div>

            <div className="search-wrapper">
                <input 
                    type="text" 
                    className="search-input"
                    placeholder="Search friends..."
                    value={searchTerm}
                    onChange={handleSearch}
                />
                <div className="search-border"></div>
                <div className="search-glow"></div>
            </div>

            <h1 className="welcome-text">Welcome to the Home Page</h1>
            <p className="suggestion-text">Suggested for you</p>
            
            <div className="suggestion-container">
                <SuggestionProfiles 
                    name="Sai Harish" 
                    image="https://via.placeholder.com/300x200"
                    followers={1234}
                    following={567}
                    posts={42}
                    onNotification={addNotification}
                />
                <SuggestionProfiles 
                    name="Sakthi" 
                    image="https://via.placeholder.com/300x200"
                    followers={2345}
                    following={789}
                    posts={65}
                    onNotification={addNotification}
                />
                <SuggestionProfiles 
                    name="Samyukthaa" 
                    image="https://via.placeholder.com/300x200"
                    followers={3456}
                    following={890}
                    posts={89}
                    onNotification={addNotification}
                />
            </div>

            <div className="nav-icon inbox-icon" onClick={handleInboxClick}>
                <div className="notification-badge">3</div>
                <img 
                    src={inb} 
                    alt="Inbox" 
                    style={{
                        width: "80px",  
                        height: "auto",
                        cursor: "pointer"
                    }} 
                />
            </div>

            <div className="nav-icon profile-icon" onClick={handleProfileClick}>
                <img 
                    src={profile} 
                    alt="Profile" 
                    style={{
                        width: "80px",  
                        height: "auto",
                        borderRadius: "75px",
                        cursor: "pointer"
                    }} 
                />
            </div>
        </div>
    )
}   

function SuggestionProfiles({ name, image, followers, following, posts, onNotification }) {
    const [isFollowing, setIsFollowing] = useState(false);
    const [likes, setLikes] = useState(0);
    const [isLiked, setIsLiked] = useState(false);
    const [showStats, setShowStats] = useState(false);

    const handleFollow = () => {
        setIsFollowing(!isFollowing);
        onNotification(`${isFollowing ? 'Unfollowed' : 'Following'} ${name}`);
    };

    const handleLike = () => {
        if (!isLiked) {
            setLikes(prev => prev + 1);
            setIsLiked(true);
            onNotification(`You liked ${name}'s profile`);
        } else {
            setLikes(prev => prev - 1);
            setIsLiked(false);
        }
    };

    return (
        <div className="suggestion-profiles" onMouseEnter={() => setShowStats(true)} onMouseLeave={() => setShowStats(false)}>
            <div className="profile-image-container">
                <img 
                    src={image} 
                    style={{ borderRadius: '75px', width: '100px', height: '100px' }} 
                    alt={`${name}'s profile`} 
                />
                {showStats && (
                    <div className="profile-stats">
                        <div>{posts} posts</div>
                        <div>{followers} followers</div>
                        <div>{following} following</div>
                    </div>
                )}
            </div>
            <h3>{name}</h3>
            <div className="profile-actions">
                <button 
                    className={`follow-button ${isFollowing ? 'following' : ''}`}
                    onClick={handleFollow}
                >
                    {isFollowing ? 'Following' : 'Follow'}
                </button>
                <button 
                    className={`like-button ${isLiked ? 'liked' : ''}`}
                    onClick={handleLike}
                >
                    {isLiked ? '❤️' : '🤍'} {likes > 0 && likes}
                </button>
            </div>
        </div>
    )
}

export default Home;

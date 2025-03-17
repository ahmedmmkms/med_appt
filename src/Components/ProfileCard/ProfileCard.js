import "./ProfileCard.css";

const ProfileCard = () => {
    return (
        <div className="profile-card">
            <a className="profile-link" href="/profile">Your Profile</a>
            <a className="profile-link" href="/reports">Reports</a>
        </div>
    )
};

export default ProfileCard;
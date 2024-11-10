import './Profile.css';
import profilePic from '../assets/IMG_20230613_000620_806.jpg'

export default function Profile() {
  return (
    <div className="profile-container">
      {/* Sidebar */}
      <aside className="sidebar">
        <img src={profilePic} alt="Profile" className="profile-pic" />
        <h2 className="user-name">Behzad</h2>
        <p className="user-title">Frontend Developer</p>
        <div className="user-info">
          <p>Email: john.doe@example.com</p>
          <p>Location: San Francisco, CA</p>
        </div>
        <button className="edit-profile-btn">Edit Profile</button>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        <section className="bio-section">
          <h3>About Me</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ac volutpat arcu.</p>
        </section>
        <section className="activity-section">
          <h3>Recent Activities</h3>
          <ul>
            <li>Posted a new article on React tips</li>
            <li>Commented on a post</li>
            <li>Updated profile picture</li>
          </ul>
        </section>
      </main>
    </div>
  );
}


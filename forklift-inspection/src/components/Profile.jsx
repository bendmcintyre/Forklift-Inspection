import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../styles/Profile.module.scss'; // Import the new styles
import profilePictureSrc from '../images/forklift-logo.png'; // Import the profile picture

function Profile() {
  const [picture, setPicture] = useState(null); // Rename to avoid conflicts
  const navigate = useNavigate();
  const [showEditPictureMenu, setShowEditPictureMenu] = useState(false);

  const handleProfilePictureChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setPicture(e.target.result);
        setShowEditPictureMenu(false);
      };
      reader.readAsDataURL(event.target.files[0]);
    }
  };

  const handleGoToInspectionAssignMenu = () => {
    navigate('/inspectionassignmenu');
  };

  return (
    <div className={styles.profile}>
      <h2>Profile</h2>
      <button type="button" onClick={() => setShowEditPictureMenu(!showEditPictureMenu)} className={`profile-picture ${styles.profilePicture}`} tabIndex={0}>
        <img src={picture || profilePictureSrc} alt="Profile" />
        {/* Use imported profile picture */}
        {showEditPictureMenu && (
          <div className={`edit-picture-menu ${styles.editPictureMenu}`}>
            <input type="file" id="profile-picture-input" accept="image/*" onChange={handleProfilePictureChange} />
            <label htmlFor="profile-picture-input">Choose a picture</label>
          </div>
        )}
      </button>
      <button type="button" onClick={handleGoToInspectionAssignMenu} className={`btn btn-primary ${styles.inspectionAssignButton}`}>
        Inspection Assignment Menu
      </button>
    </div>
  );
}

export default Profile;
export { profilePictureSrc }; // Export the imported variable separately

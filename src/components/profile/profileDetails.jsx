import React, { useState } from 'react';
import Swal from 'sweetalert2';
import '../../styles/profileDetails.css';
import { MdModeEditOutline } from "react-icons/md";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const ProfileDetails = ({ user, onEdit }) => {
    const { displayName, email, phone, photoURL } = user || {};
    const [sendReceipt, setSendReceipt] = useState(user.sendReceipt || false);
    const [profileImage, setProfileImage] = useState(null);

    const handleToggleSendReceipt = () => {
        setSendReceipt(prevSendReceipt => !prevSendReceipt);
    };

    const handleImageUpload = (e) => {
        const imageFile = e.target.files[0];
        if (imageFile) {
            const imageUrl = URL.createObjectURL(imageFile);
            Swal.fire({
                title: 'Are you sure?',
                text: "Do you want to change your profile picture?",
                icon: 'question',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, change it!'
            }).then((result) => {
                if (result.isConfirmed) {
                    setProfileImage(imageUrl);
                    // Additional logic to upload the image to the server or update in LocalStorage can be added here
                    Swal.fire(
                        'Changed!',
                        'Your profile picture has been updated.',
                        'success'
                    );
                }
            });
        }
    };

    return (
        <div className="profile-container">
            <h2>User Profile</h2>
            <div className="profile-item">
                <div className="profile-photo">
                    {profileImage ? (
                        <img src={profileImage} alt="Profile" />
                    ) : (
                        photoURL ? (
                            <img src={photoURL} alt="Profile" />
                        ) : (
                            <FontAwesomeIcon icon={faUser} size="6x" />
                        )
                    )}
                    <button id="editProfileButton" className="profile-edit-button" onClick={() => document.getElementById('fileInput').click()}>
                        <MdModeEditOutline />
                    </button>
                </div>
                <input id="fileInput" type="file" onChange={handleImageUpload} accept="image/*" style={{ display: 'none' }} />
                <p className="profile-label">{displayName || email}</p>
            </div>
            <hr className="profile-divider" />
            <div className="profile-item">
                <p className="profile-label">Email: {email}</p>
            </div>
            <hr className="profile-divider" />
            <div className="profile-item">
                <p className="profile-label">Phone Number: {phone}</p>
            </div>
            <hr className="profile-divider" />
            <div className="profile-item">
                <p className="profile-label">Send Receipt to Email:</p>
                <button className={`toggle-button ${sendReceipt ? 'active' : ''}`} onClick={handleToggleSendReceipt}>
                    <div className="toggle-track">
                        <div className="toggle-thumb"></div>
                    </div>
                </button>
            </div>
        </div>
    );
};

export default ProfileDetails;
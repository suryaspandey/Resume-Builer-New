import React, { useState, useEffect } from "react";

import ProfilePhoto from "../ProfilePhoto";

import { FaEnvelope, FaLinkedin, FaLocationArrow } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";
import "./template2.css"; // Import the CSS file for styling
// import "./BasicInfotemplate1.css";

import SkillsDetailsTemplate2 from "./SkillsDetailsTemplate2";
import ExperienceDetailsTemplate2 from "./ExperienceDetailsTemplate2";

const BasicInfoTemplate2 = ({
    themeColor,
    backgroundColor,
    textColor,
    subheadingColor,
}) => {
    const [formData, setFormData] = useState({
        name: "",
        location: "",
        phone: "",
        email: "",
        linkedin: "",
        summary: "",
    });
    const [nameError, setNameError] = useState("");
    const [locationError, setLocationError] = useState("");
    const [phoneError, setPhoneError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [linkedinError, setLinkedinError] = useState("");
    const [summaryError, setSummaryError] = useState("");

    const [profilePhoto, setProfilePhoto] = useState("");
    const [isTyping, setIsTyping] = useState(false);
    const [isEditing, setIsEditing] = useState(false);

    useEffect(() => {
        const storedData = localStorage.getItem("basicInfo");
        if (storedData) {
            setFormData(JSON.parse(storedData));
        }
    }, []);

    useEffect(() => {
        const storedPhoto = localStorage.getItem("profilePhoto");
        if (storedPhoto) {
            setProfilePhoto(storedPhoto);
        }
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === "summary") {
            const wordCount = value.trim().split(" ").length;
            // no of characters to 150 chars: if (value.length <= 150) {
            if (wordCount <= 60) {
                setFormData((prevData) => ({
                    ...prevData,
                    [name]: value,
                }));
                setIsTyping(true);
            }
        } else {
            setFormData((prevData) => ({
                ...prevData,
                [name]: value,
            }));
        }
        setIsEditing(true);
    };

    const handlePhotoSelect = (photoUrl) => {
        setProfilePhoto(photoUrl);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validate form data
        let isValid = true;
        setNameError("");
        setLocationError("");
        setPhoneError("");
        setEmailError("");
        setLinkedinError("");
        setSummaryError("");

        if (formData.name.trim() === "") {
            setNameError("Name cannot be empty");
            isValid = false;
        }

        if (formData.phone.trim() === "") {
            setPhoneError("Phone number cannot be empty");
            isValid = false;
        } else if (!/^\d{10}$/.test(formData.phone.trim())) {
            setPhoneError("Phone number should be 10 digits");
            isValid = false;
        }

        if (formData.email.trim() === "") {
            setEmailError("Email cannot be empty");
            isValid = false;
        } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
                formData.email.trim()
            )
        ) {
            setEmailError("Invalid email format");
            isValid = false;
        }

        if (formData.linkedin.trim() !== "") {
            if (
                !/^https?:\/\/(?:www\.)?linkedin\.com\/\S+$/.test(
                    formData.linkedin.trim()
                )
            ) {
                setLinkedinError("Invalid LinkedIn URL");
                isValid = false;
            }
        }
        if (formData.summary.trim() === "") {
            setSummaryError("Summary cannot be empty");
            isValid = false;
        }

        if (isValid) {
            // Save data to local storage or perform any desired action
            localStorage.setItem("basicInfo", JSON.stringify(formData));
            setIsEditing(false);
        }
    };
    const summaryTextareaClass = isTyping
        ? "summary-textarea active"
        : "summary-textarea";

    return (
        <>
            <div
                className="resume"
                style={{
                    backgroundColor: backgroundColor,
                }}
            >
                <form onSubmit={handleSubmit}>
                    <div className="resume_left">
                        <div className="resume_profile">
                            <ProfilePhoto onPhotoSelect={handlePhotoSelect} />
                        </div>
                        <div className="resume_content">
                            <div className="resume_item resume_info">
                                <div className="title">
                                    <input
                                        className="bold basic-info"
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        onFocus={() => setIsEditing(true)}
                                        placeholder="Name"
                                        style={{
                                            textTransform: "uppercase",
                                        }}
                                    />
                                    <input
                                        className="regular basic-info"
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        onFocus={() => setIsEditing(true)}
                                        placeholder="Current Role"
                                    />
                                </div>
                                <ul>
                                    <li>
                                        <div className="icon ">
                                            <i
                                                class="fas fa-map-signs"
                                                style={{ color: themeColor }}
                                            ></i>
                                        </div>
                                        <div className="data">
                                            <input
                                                className="basic-info"
                                                type="text"
                                                name="location"
                                                value={formData.location}
                                                onChange={handleChange}
                                                onFocus={() =>
                                                    setIsEditing(true)
                                                }
                                                placeholder="Location"
                                            />
                                        </div>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <i
                                                class="fas fa-mobile-alt"
                                                style={{ color: themeColor }}
                                            ></i>
                                        </div>
                                        <div className="data">
                                            <input
                                                className="basic-info"
                                                type="text"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                onFocus={() =>
                                                    setIsEditing(true)
                                                }
                                                placeholder="Phone"
                                            />
                                        </div>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <i
                                                className="fas fa-envelope"
                                                style={{ color: themeColor }}
                                            ></i>
                                        </div>
                                        <div className="data">
                                            <input
                                                className="basic-info"
                                                type="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                onFocus={() =>
                                                    setIsEditing(true)
                                                }
                                                placeholder="Email"
                                            />
                                        </div>
                                    </li>

                                    <li>
                                        <div className="icon">
                                            <FaLinkedin
                                                className="linkedin"
                                                style={{ color: themeColor }}
                                            />
                                        </div>
                                        <div className="data">
                                            <input
                                                className="basic-info"
                                                type="text"
                                                name="linkedin"
                                                value={formData.linkedin}
                                                onChange={handleChange}
                                                onFocus={() =>
                                                    setIsEditing(true)
                                                }
                                                placeholder="LinkedIn"
                                            />
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            {isEditing ? (
                                <button className="save-btn" type="submit">
                                    Save
                                </button>
                            ) : null}

                            {/* <br /> */}
                            {nameError && <p>{nameError}</p>}
                            {phoneError && <p>{phoneError}</p>}
                            {emailError && <p>{emailError}</p>}
                            {linkedinError && <p>{linkedinError}</p>}
                            {summaryError && <p>{summaryError}</p>}
                        </div>
                        <div className="resume resume_item"></div>

                        <SkillsDetailsTemplate2
                        // themeColor={themeColor}
                        // backgroundColor={backgroundColor}
                        // textColor={textColor}
                        />
                        {/* </div> */}
                    </div>
                </form>
                <ExperienceDetailsTemplate2
                    themeColor={themeColor}
                    backgroundColor={backgroundColor}
                    textColor={textColor}
                    subheadingColor={subheadingColor}
                />
            </div>

            {/* ---------------   ------------- */}
        </>
    );
};

export default BasicInfoTemplate2;

// import React from "react";
// import "../Components/home.css";
// const Home = () => {
//     return (
//         <>
//             <div className="navbar-container">
//                 <div className="navbar">
//                     <ul className="home-links">
//                         <li>Logo</li>
//                         <li>About Us</li>
//                         <li>Contact Us</li>
//                         <li>Login</li>
//                     </ul>
//                 </div>
//             </div>
//         </>
//     );
// };

// export default Home;

import React, { useState } from "react";
import {
    AppstoreOutlined,
    SettingOutlined,
    MailOutlined,
} from "@ant-design/icons";
import { Layout, Menu, Space } from "antd";
import { useHistory, Link } from "react-router-dom";
import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
import "../Components/home.css";
// import { Header } from "antd/es/layout/layout";
import Logout from "./Logout";
import { auth } from "../firebase";
import { Carousel } from "antd";
import HeaderComp from "./HeaderComp";
import { Button, Popover, Rate } from "antd";
import { PopoverHeader } from "react-bootstrap";

const Home = () => {
    const history = useHistory();
    const { currentUser } = auth;

    const content1 = (
        <div className="cust_reviews">
            {/* <p>Excellent Tool</p> */}
            <Rate disabled defaultValue={5} style={{ color: "#43d74f" }} />

            <p className="review-text">
                It was an awesome experience. I enjoyed every bit of it and will
                definitely use it again in the future when the need arises.
            </p>
        </div>
    );
    const content2 = (
        <div className="cust_reviews">
            {/* <p>Excellent Tool</p> */}
            {/* <Rate disabled defaultValue={5} /> */}
            <Rate allowHalf defaultValue={4.5} style={{ color: "#43d74f" }} />
            <p className="review-text">
                I love how customizable and modern my resume looks. This website
                exceeded my expectations
            </p>
        </div>
    );
    const content3 = (
        <div className="cust_reviews">
            {/* <p>Excellent Tool</p> */}
            <Rate disabled defaultValue={5} style={{ color: "#43d74f" }} />

            <p className="review-text">
                This website is a must-try for anyone serious about advancing
                their career. It made crafting a professional resume a delight.
            </p>
        </div>
    );

    const content4 = (
        <div className="cust_reviews">
            {/* <p>Excellent Tool</p> */}
            <Rate disabled defaultValue={5} style={{ color: "#43d74f" }} />

            <p className="review-text">
                Highly recommended! This resume builder elevated my job
                application to the next level.
            </p>
        </div>
    );

    const content5 = (
        <div className="cust_reviews">
            {/* <p>Excellent Tool</p> */}
            {/* <Rate disabled defaultValue={5} /> */}
            <Rate allowHalf defaultValue={4} style={{ color: "#43d74f" }} />
            <p className="review-text">
                I love how customizable and modern my resume looks. This website
                exceeded my expectations
            </p>
        </div>
    );

    const content6 = (
        <div className="cust_reviews">
            {/* <p>Excellent Tool</p> */}
            {/* <Rate disabled defaultValue={5} /> */}
            <Rate allowHalf defaultValue={4.5} style={{ color: "#43d74f" }} />
            <p className="review-text">
                I used their service recently to write my CV. Easy to use with
                great ideas. I successfully secured an interview for the first
                vacancy I applied for.
            </p>
        </div>
    );
    return (
        <>
            <HeaderComp />

            <div className="home-container">
                <h1 className="home-tagline">
                    Your Dream Job Starts Here: Build Your Winning Resume
                </h1>
                <div
                    className="hr_tg"
                    style={{ display: "flex", justifyContent: "center" }}
                >
                    <hr
                        style={{
                            marginBottom: "50px",
                            paddingLeft: "50%",
                            borderRadius: "20px",
                            border: "4px solid rgb(121, 133, 132)",
                        }}
                    />
                </div>

                <h4>
                    MyResumeBuilder is lightning fast. There's no software to
                    download. No multi-part sign-up form. No long-winded
                    tutorials. Just a straightforward process.
                </h4>

                <h6>Four simple steps to make your CV </h6>
            </div>
            <div
                className="hr_tg"
                style={{
                    display: "flex",
                    justifyContent: "center",
                }}
            >
                <hr
                    style={{
                        marginBottom: "50px",
                        paddingLeft: "50%",
                        borderRadius: "20px",
                        border: "4px solid rgb(121, 133, 132)",
                    }}
                />
            </div>
            <div className="steps_img_text">
                <div className="steps_text">
                    <div className="steps">1</div>
                    <div className="steps_texts">Pick a Template</div>
                </div>
                <div className="steps_img">
                    <img
                        src="/template_previews/step1.PNG"
                        alt="step1"
                        height={190}
                        width={190}
                        style={{ borderRadius: "10%" }}
                    />
                </div>
            </div>
            <hr style={{ width: "50%", margin: "0 auto" }} />

            <div className="steps_img_text">
                <div className="steps_img">
                    <img
                        src="/template_previews/step2.PNG"
                        alt="step1"
                        height={190}
                        width={190}
                        style={{ borderRadius: "10%" }}
                    />
                </div>
                <div className="steps_text">
                    <div className="steps">2</div>
                    <div className="steps_texts">Customize Your Layout</div>
                </div>
            </div>
            <hr style={{ width: "50%", margin: "0 auto" }} />

            <div className="steps_img_text">
                <div className="steps_text">
                    <div className="steps">3</div>
                    <div className="steps_texts">Fill in the Blanks</div>
                </div>
                <div className="steps_img">
                    <img
                        src="/template_previews/step3.PNG"
                        alt="step1"
                        height={190}
                        width={190}
                        style={{ borderRadius: "10%" }}
                    />
                </div>
            </div>
            <hr style={{ width: "50%", margin: "0 auto" }} />

            <div className="steps_img_text">
                <div className="steps_img">
                    <img
                        src="/template_previews/step4.PNG"
                        alt="step1"
                        height={190}
                        width={190}
                        style={{ borderRadius: "10%" }}
                    />
                </div>
                <div className="steps_text">
                    <div className="steps">4</div>
                    <div className="steps_texts">Hit 'Download!'</div>
                </div>
            </div>
            <div
                className="home-costomers-main"
                style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-evenly",
                    backgroundColor: "#dad9d978",
                }}
            >
                <div className="customers-text">
                    <h1>See why customers love MyResumeBuilder</h1>
                    <img
                        src="./template_previews/trustPilotReview.jpg"
                        alt="TrustPilot review"
                        height={100}
                        width={100}
                    />
                </div>
                {/* <div className="customers-imgs"> */}
                <div className="steps_img_text">
                    <div
                        className="cust-imgs-grid"
                        style={{
                            display: "grid",
                            gridTemplateColumns: "repeat(3,1fr)",
                            gap: "5px",
                            margin: "2px",
                            // border: "1px solid red",
                        }}
                    >
                        <Popover
                            content={content1}
                            title="Anna"
                            trigger="hover"
                        >
                            {/* <Button>Hover me</Button> */}
                            <img
                                className="human-img"
                                height={150}
                                width={150}
                                alt="template2"
                                src="/template_previews/cust_img6.jfif"
                            />
                        </Popover>
                        <Popover
                            content={content2}
                            title="Sebastien"
                            trigger="hover"
                        >
                            <img
                                className="human-img"
                                height={150}
                                width={150}
                                alt="template2"
                                src="/template_previews/cust_img2.jfif"
                            />
                        </Popover>
                        <Popover
                            content={content3}
                            title="Kathie"
                            trigger="hover"
                        >
                            <img
                                className="human-img"
                                height={150}
                                width={150}
                                alt="template2"
                                src="/template_previews/cust_img4.jfif"
                            />
                        </Popover>

                        <Popover
                            content={content4}
                            title="Bradd"
                            trigger="hover"
                        >
                            <img
                                className="human-img"
                                height={150}
                                width={150}
                                alt="template2"
                                src="/template_previews/cust_img3.jfif"
                            />
                        </Popover>

                        <Popover
                            content={content5}
                            title="Mahi"
                            trigger="hover"
                        >
                            <img
                                className="human-img"
                                height={150}
                                width={150}
                                alt="template2"
                                src="/template_previews/cust_img55.jfif"
                            />
                        </Popover>

                        <Popover
                            content={content6}
                            title="Vimal"
                            trigger="hover"
                        >
                            <img
                                className="human-img"
                                height={150}
                                width={150}
                                alt="template2"
                                src="/template_previews/cust_img1.jfif"
                            />
                        </Popover>
                    </div>
                </div>
            </div>

            <div
                className="resume_fetures"
                style={{
                    display: "flex",
                    alignItems: "center",
                    flexDirection: "column",
                    alignItems: "center",
                }}
            >
                <div
                    className="hr_tg"
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        width: "100%",
                    }}
                >
                    <hr
                        style={{
                            marginBottom: "50px",
                            paddingLeft: "50%",
                            borderRadius: "20px",
                            border: "4px solid rgb(121, 133, 132)",
                        }}
                    />
                </div>
                <h2>Why Use MyResumeBuilder?</h2>

                <div className="resume_features_grid">
                    <div className="features_img_text">
                        <div className="feature_img">
                            <img
                                src="./template_previews/free_feature.PNG"
                                width={100}
                                height={100}
                            />
                        </div>
                        <div className="feature_text">
                            <h3>Completely Free</h3>
                            <h6>
                                Enjoy all the robust features of our resume
                                builder without any cost or hidden fees, making
                                it accessible to everyone looking to create a
                                standout resume.
                            </h6>
                        </div>
                    </div>

                    <div className="features_img_text">
                        <div className="feature_img">
                            <img
                                src="./template_previews/user_friendly_feature.PNG"
                                width={100}
                                height={100}
                            />
                        </div>
                        <div className="feature_text">
                            <h3>User-friendly Interface</h3>
                            <h6>
                                Create professional resumes effortlessly with
                                our intuitive and user-friendly interface,
                                making the resume-building process a breeze.
                            </h6>
                        </div>
                    </div>

                    <div className="features_img_text">
                        <div className="feature_img">
                            <img
                                src="./template_previews/customizable_feature.PNG"
                                width={100}
                                height={100}
                            />
                        </div>
                        <div className="feature_text">
                            <h3>Customizable Templates</h3>
                            <h6>
                                Choose from a diverse range of customizable
                                templates that suit your style and industry,
                                ensuring your resume stands out.
                            </h6>
                        </div>
                    </div>

                    <div className="features_img_text">
                        <div className="feature_img">
                            <img
                                src="./template_previews/edit_feature.PNG"
                                width={100}
                                height={100}
                            />
                        </div>
                        <div className="feature_text">
                            <h3>Real-time Previews</h3>
                            <h6>
                                Instantly visualize your resume as you edit,
                                ensuring you can fine-tune every detail to
                                perfection.
                            </h6>
                        </div>
                    </div>
                </div>

                {currentUser ? (
                    <>
                        {console.log("button " + currentUser)}
                        <button className="save-btn">
                            <Link
                                to="/choose-template"
                                style={{
                                    textDecoration: "none",
                                    color: "white",
                                }}
                            >
                                TRY RESUME BUILDER NOW!
                            </Link>
                        </button>
                    </>
                ) : (
                    <Link
                        to="/login"
                        // style={{ textDecoration: "none", color: "white" }}
                    ></Link>
                )}
            </div>
        </>
    );
};
export default Home;

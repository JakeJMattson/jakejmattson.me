import React from "react";
import "./SocialMedia.css";
import {socialMediaLinks} from "../../portfolio";

export default function socialMedia() {
    return (
        <div className="social-media-div">
            {socialMediaLinks.map((media) => {
                return (
                    <a href={media.link} className={`social-button`} target="_blank" rel="noopener noreferrer">
                        <img src={require("../../assets/images/" + media.name.toLowerCase() + ".svg")} alt={media.name}
                             style={{width: 50, height: 50, margin: 10}}
                        />
                    </a>
                );
            })}
        </div>
    );
}

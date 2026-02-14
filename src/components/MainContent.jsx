import { MdEmail } from "react-icons/md"
import { FaLinkedin } from "react-icons/fa"

export default function MainContent() {
    return (
        <div className="main">
            <div className="pr-info">
                <h1 className="pr-name">Deniz Can Calkin</h1>
                <h2 className="pr-title">Frontend Developer</h2>
                <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">
                    <p className="pr-link">denizcancalkin.website</p>
                </a>
                <div className="pr-buttons">
                    <a href="mailto:calkindenizcan33@gmail.com" target="_blank" rel="noopener noreferrer">
                        <button id="button-pr" className="email-btn">
                            <MdEmail size={18} />
                            Email
                        </button>
                    </a>
                    <a href="https://www.linkedin.com/in/deniz-can-calkin-21559829b/" target="_blank" rel="noopener noreferrer">
                        <button id="button-pr" className="linkedin-btn">
                            <FaLinkedin size={18} />
                            LinkedIn
                        </button>
                    </a>
                </div>
                <h2 className="about">About</h2>
                <p className="pr-about">I am a frontend developer with a passion for creating beautiful and functional web applications. I enjoy turning ideas into clean, user-friendly interfaces and paying attention to details that improve the overall user experience.</p>
                <h2 className="interests">Interests</h2>
                <p className="pr-interests">Frontend developer intern. UI enthusiast. Problem solver. Detail-oriented designer. Basketball follower. F1 fan. Tech curious. Continuous learner. Coffee-powered builder.</p>
            </div>
        </div>
    )
}

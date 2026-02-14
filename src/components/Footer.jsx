import { FaTwitter, FaFacebookF, FaInstagram, FaGithub } from "react-icons/fa"

export default function Footer() {
    return (
        <footer>
            <div className="footer-icons">
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                    <FaTwitter />
                </a>

                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                    <FaFacebookF />
                </a>

                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                    <FaInstagram />
                </a>

                <a href="https://github.com/Deniseu24" target="_blank" rel="noopener noreferrer">
                    <FaGithub />
                </a>
            </div>
        </footer>
    )
}

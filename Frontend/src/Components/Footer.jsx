import { Link } from "react-router-dom"
import { SocialIcon } from 'react-social-icons'
import 'react-social-icons/facebook'
import 'react-social-icons/github'
import 'react-social-icons/linkedin'
import 'react-social-icons/instagram'

function Footer() {
  return (
<>

<footer className="footer footer-center  text-base-content rounded p-10">
  <nav className="grid grid-flow-col gap-4">
    <a className="link link-hover"><Link to="/">Home</Link></a>
    <a className="link link-hover"><Link to="/courses">Course</Link></a>
    <a className="link link-hover"><Link to="/contacts">Contact</Link></a>
    <a className="link link-hover"><Link to="/reviews">Review</Link></a>
  </nav>
  <nav>
    <div className="grid grid-flow-col gap-4">
<a href="https://www.facebook.com/">
<SocialIcon url="www.facebook.com" />

</a>
<a href="https://github.com/Rittikwebdes">
<SocialIcon url="www.github.com" />
</a>
<a href="https://www.linkedin.com/in/rittik-chauhan-556a28284/">
<SocialIcon url="www.linkedin.com" />
</a>
<a href="https://www.instagram.com/">
<SocialIcon url="www.instagram.com" />
</a>
    </div>
  </nav>
  <aside>
    <p>Copyright © {new Date().getFullYear()} - All right reserved by RC Industries Ltd</p>
  </aside>
</footer>
</>
  )
}

export default Footer

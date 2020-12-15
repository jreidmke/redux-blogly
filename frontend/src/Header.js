import {NavLink} from 'react-router-dom';
import './Header.css';

const Header = () => {
    return(
        <nav>
            <h1>Blogger</h1>
            <h4>Write your inner most thoughts</h4>
            <NavLink to="/">The Blog</NavLink>
            <NavLink to="/new">Create a New Post</NavLink>
        </nav>
    )
}

export default Header;
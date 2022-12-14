import { Link } from "react-router-dom";
import  classes from'./MainNavigation.module.css';
function MainNavigation() {
  return (
  <header className={classes.header}>
      <div className={classes.logo}>
         <Link to = '/'> Navigation</Link>
      </div>
      <nav>
          <ul>
              <li><Link to='/'> Meetup</Link></li>
              <li><Link to='/fav'>Fav</Link></li>
              <li><Link to='/new'>New</Link></li>
          </ul>
      </nav>
  </header>
  
  );
}

export default MainNavigation;

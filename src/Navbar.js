export default function Navbar() {
    return <nav className="nav">
      <a href="/" className="LOGO">
         <h1>LOGO</h1>
      </a>
         <ul>
            <li><a href="/menu">Menu</a></li>
            <li><a href="/menu">Menu</a></li>
            <li><a href="/menu">Menu</a></li>
            <li><a href="/menu">Menu</a></li>
         </ul>



         <div className="profile">
            <div class="dropdown">
               <button class="dropbtn"></button>
             <div class="dropdown-content">
                  <a href="#">
                     <h5>My Profile</h5>
                     <p>Change settings of your account.</p>
                  </a>
                  <a href="#">Logout</a>
             </div>
            </div>
         </div>
    </nav>    
}
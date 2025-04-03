
import React from 'react'

const Header = () => 
{ 

    return 
    (
    <Header className= "bg-gray-800 text-white p-4">
        <nav>
          <ul className= "flex justify-around">
          <li><a href='#home'>Home</a></li>
          <li><a href='#about'>About</a></li>
          <li><a href='#contact'>Contact</a></li>


          </ul>
        </nav>    
    </Header>

    )
}

export default Header;

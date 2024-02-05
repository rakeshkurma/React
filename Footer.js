import React from 'react'

const Footer = ()=>{
    return(
           <>
    
    <div className='footer'>

        <div className='about'>

      <h1>ABOUT</h1>

      <p>Every business has an origin story worth telling, and usually, one that justifies why you even do business and have clients.

Some centennial enterprises have pages of content that can fit in this section, while startups can tell the story of how the company was born, its challenges, and its vision for the future.</p>

        </div>
        <div className='categ'>
      <h1>CATEGORIES</h1>  

      <ul className='list'>
        <li>Biryani</li>
        <li>Chapathi</li>
         <li>Curries</li>
        <li>Salads</li>
         <li>Shakes</li>
        <li>Rice</li>
      </ul>
        
        </div>
        <div className='quick'>
            
            <h1>QUICK LINKS</h1>

        <ul className='list'>
        <li>About us</li>
        <li>Contact us</li>
         <li>Contribute</li>
        <li>Privacy Policy</li>
         <li>Sitemap</li>
      </ul>
        
        
        </div>
    </div>

    </>
    )
    
}

export default Footer;
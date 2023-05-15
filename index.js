

//CHALLENGE by Scrimba
function Header(){
    return(
 <header>
                <nav className="nav"> 
                    < img className="imglogo" src="reactlogo.png"  />
                    
                    <ul className="nav-items">
                        <li>Pricing</li>
                        <li>About</li>
                        <li>Contact</li>

                    </ul>
 </nav>  
 </header>
    )
}
function Data(){
    return(
        <div className="data"> 
             <h1 className="heading1">Reasons
                        I'm excited to learn React</h1>
                    <ol className="ul-list">
                        <li>It's a popular library, so I'll be
                            able to fit in with the cool kids!</li>
                        <li>I'm more likely to get a job as a developer
                            if I know React</li>
                    </ol>
                    </div>
  
    )
}
function Footer(){
    return(
<footer className="footer">
            © 20xx BUTT's development. All rights reserved.
            </footer>
    )
}


function TemporaryPage() {
    return (
        <div>
           <Header/>
              < Data/>   
               
          
            <Footer/>
        </div>

    )

}
ReactDOM.render(
    <TemporaryPage />,
    document.getElementById("root")
)
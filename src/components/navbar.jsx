import React from "react"

function Navbar(){
    return(
        <nav className="pc flex align-center space-between p-2">
            <div className="logo mf"><h1>FINANCIAL TRACKER</h1>
            </div>
            <div class="Budget flex align-center p-1">
                <h3 class="mf">Budget:</h3>
                <p id="budget">$ &nbsp;</p>
            </div>
        </nav>
    )
};

export default Navbar;
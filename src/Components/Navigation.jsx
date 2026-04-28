import { Link } from "react-router-dom"

function Navigation (){
    return (
        <div className="Navigation">
            <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                <div className="left">
                    Eugene Adavore.
                </div>
            </Link>

            <div className="nav-right">
                <div className="top">Product Design Engineer.</div>
                <div className="bottom">Middlesbrough, UK.</div>
            </div>
        </div>
    )
}

export default Navigation
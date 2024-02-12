import { Link, NavLink } from "react-router-dom";

import React from 'react'

const Navbar = () => {
  const Navlinks = [
    { name: "Home",
      path: "/"
  },

    {name: "About",
    path: "/about"},

    {name: "Vans",
    path: "/vans"},
  ]
  return (
    <div>
      <nav className="navbar bg-body-tertiary">
  <div className="container-fluid">
    <Link to={"/"}className="navbar-brand"><h5>#NAVLIFE</h5></Link>
    <div className="d-flex" role="search">
      <div className="d-flex gap-5">
        {
          Navlinks.map((data, i) => {
              return (
                <div key={i}>
                  <NavLink className={({isActive})=> (isActive? "text-info fw-bolder underline": " text-dark text-decoration-none") } to={data.path}>{data.name}</NavLink>
                </div>
              )
          })
        }
      </div>
    </div>
  </div>
  </nav>
    </div>
  )
}

export default Navbar
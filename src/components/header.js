import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle, imageUrl }) => (
  <header>
    <div
      style={{
        height: "20rem",
        backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${imageUrl ? imageUrl : "https://images.unsplash.com/photo-1432821596592-e2c18b78144f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"})`,
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}
      className="d-flex justify-content-center align-items-center"
    >
      <h1 className="text-white">{siteTitle}</h1>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string
}

Header.defaultProps = {
  siteTitle: ``
}

export default Header
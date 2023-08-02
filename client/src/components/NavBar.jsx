import { Navbar, Nav } from "react-bootstrap";

const NavBar = () => {
  const linkStyle = {
    color:'white',
    fontWeight:'700',
  }
  return (
    <div className="navbar fixed-top navbar-expand-lg navbar-light bg-black">
      <p className="webName text-center" style={{
        position:'relative',
        fontSize:22, 
        color:"white", 
        marginLeft: '45px',
        marginTop: '0px', 
        marginBottom: '0px'}}>ONECOMPASS</p>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto" style = {{marginRight: "40px"}}>
            <Nav.Link href="/majorminor" style = {linkStyle}>Major/Minor</Nav.Link>
            <Nav.Link href="/exploratory" style = {linkStyle}>Exploratory</Nav.Link>
            <Nav.Link href="/upcomingterm" style = {linkStyle}>Upcoming Term</Nav.Link>
            <Nav.Link href="/roadmap" style = {linkStyle}>Roadmap</Nav.Link>
            <Nav.Link href="/gpa" style = {linkStyle}>GPA & Credits</Nav.Link>
            <Nav.Link href="/aboutus" style = {linkStyle}>About us</Nav.Link>
            <Nav.Link href="/profile" style = {linkStyle}>Profile</Nav.Link>
          </Nav>
        </Navbar.Collapse>
    </div>
  )
}

export default NavBar 
import React from 'react'
import {
  Navbar,
  NavbarBrand,
  Collapse,
  Nav,
  NavItem,
  NavLink,
  NavbarToggler,
} from 'reactstrap'
import Link from 'next/link'

function Header() {
  return (
    <div>
      <Navbar color="warning" expand="md" fixed="top" light>
        <NavbarBrand>
          <Link href="/">MusicFI</Link>
        </NavbarBrand>
        <NavbarToggler onClick={function noRefCheck() {}} />
        <Collapse navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
              <NavLink>
                <Link href="/latests">Latests</Link>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink>
                <Link href="/upcoming">Upcoming</Link>
              </NavLink>
            </NavItem>
          </Nav>
          <NavLink>Login</NavLink>
        </Collapse>
      </Navbar>
    </div>
  )
}

export default Header

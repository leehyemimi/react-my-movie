import React, { useState, useCallback } from 'react';
import { useNavigate, Outlet } from 'react-router-dom';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import Categories from './Categories'

function Header() {
	const navigate = useNavigate();

	const [category, setCategory] = useState('all');
	const onSelect = useCallback(category => setCategory(category), []);

	return (
		<>
			<Navbar bg="dark" variant="dark">
				<Container>
					<Navbar.Brand onClick={() => { navigate('/') }}>HOME</Navbar.Brand>
					<Categories category={category} onSelect={onSelect} />
					{/* <Navbar.Collapse id="responsive-navbar-nav">
						<Nav className="me-auto">
							<NavDropdown title="Sort" id="collasible-nav-dropdown">
								<NavDropdown.Item onClick={() => { navigate('/detail') }}>Action</NavDropdown.Item>
							</NavDropdown>
						</Nav>
					</Navbar.Collapse> */}
				</Container>
			</Navbar>
			<main>
				<Outlet />
			</main>
		</>
	)
}


export default Header;
import React, { useState } from "react";
import { 
  CDBNavbar,
  CDBNavBrand,
  CDBNavbarNav,
  CDBNavToggle,
  CDBNavItem,
  CDBNavLink,
  CDBBtn,
  CDBCollapse } from "cdbreact";
import './Hero404.css';

export const Hero404 = () => {

  const [collapse, setCollapse] = useState(false);

	return(
		<div className="hero404">
			<div className="page-container">
				<header className="navigation">
          <CDBNavbar className="bg-transparent p-0" expand="md" light scrolling>
            <CDBNavBrand href="/">
              <img alt="logo" src="/img/pages/logo.png" width="25px"/>
            </CDBNavBrand>
            <CDBNavToggle
              onClick={() => {
                setCollapse(!collapse);
              }}
            />
            <CDBCollapse id="navbarCollapse1" isOpen={collapse} navbar>
              <CDBNavbarNav left>
                <CDBNavItem active>
                  <CDBBtn flat className="p-3 border-0 bg-transparent">
                    <CDBNavLink to="#">Home</CDBNavLink>
                  </CDBBtn>
                </CDBNavItem>
                <CDBNavItem>
                  <CDBBtn flat className="p-3 border-0 bg-transparent">
                    <CDBNavLink to="#">Resources</CDBNavLink>
                  </CDBBtn>
                </CDBNavItem>
                <CDBNavItem>
                  <CDBBtn flat className="p-3 border-0 bg-transparent">
                    <CDBNavLink to="#">Blog</CDBNavLink>
                  </CDBBtn>
                </CDBNavItem>
                <CDBNavItem>
                  <CDBBtn flat className="p-3 border-0 bg-transparent">
                    <CDBNavLink to="#">Contact</CDBNavLink>
                  </CDBBtn>
                </CDBNavItem>
                <CDBNavItem>
                  <CDBBtn flat className="p-3 border-0 bg-transparent">
                    <CDBNavLink to="#">Support</CDBNavLink>
                  </CDBBtn>
                </CDBNavItem>
              </CDBNavbarNav>
            </CDBCollapse>
          </CDBNavbar>
        </header>
        <section className="page-body">
					<div className="message404">
						<h4 className="h1 font-weight-bold">Oops</h4>
						<h4 className="h3 my-4">Something went wrong</h4>
						<p>Sorry about that, hmmm... probably a missing page or the link's incorrect.</p>
						<CDBBtn flat color="dark" className="py-2 btn-block">Back Home</CDBBtn>
					</div>
					<img className="image404" alt="404" src="/img/pages/hero404.png"/>
				</section>
			</div>
		</div>
	);
}

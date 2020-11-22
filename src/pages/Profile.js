import React from "react";
import { CDBBtn, CDBIframe, CDBView } from "cdbreact";
import Sidebar from "../Sidebar";
import Navbar from "../Navbar";
import "./Profile.css"

export const Profile = () => {

	return (
		<div className="d-flex profile">
			<div>
      	<Sidebar/>
			</div>
      <div style={{flex:"1 1 auto", display:"flex", flexFlow:"column", height:"100vh", overflowY:"hidden"}}>
      	<Navbar/>
      	<div style={{height:"100%"}}>
					<div style={{height:"calc(100% - 64px)", padding:"20px 5%", overflowY:"scroll"}}>
						<div style={{margin:"0 auto", maxWidth:"1320px"}}>
							<div  className="cards-container1">
								<div>
									<div className="card shadow border-0">
										<img alt="profileImage" src="/img/pages/heroImage2.png" className="w-100" style={{objectFit:"cover", maxHeight:"500px"}}/>
										<div className="card-body">
											<h4 className="card-title mb-2" style={{fontWeight:"600"}}>Warren Briggs</h4>
											<h5 className="mb-2">Photographer</h5>
											<p className="text-justify mt-4">
												<strong className="mb-2">Desciption: </strong>
												Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione perferendis quod animi dignissimos
											</p>
											<div className="justify-content-end pr-1">
												<CDBBtn color="dark" outline>More</CDBBtn>
											</div>
										</div>
									</div>
								</div>
								<div className="mini-container">
									<div>
					          <div className="card shadow border-0">
					            <img
					              alt="cardImg"
					              className="img-fluid"
					              style={{objectFit:"cover"}}
					              src="/img/cardImage.png"
					            />
					            <div className="p-3">
					              <h3>Basic</h3>
					              <p>This is just a card text Get important notifications about you or activity you've missed </p>
					              <CDBBtn style={{background:"#333", border:"none"}}>
					                Button
					                </CDBBtn>
					            </div>
					          </div>
									</div>
									<div>
					          <div className="card shadow border-0 h-75 mx-auto" style={{backgroundImage:"url('https://cdn.pixabay.com/photo/2018/08/14/13/23/ocean-3605547_960_720.jpg')"}}>
					            <div className="p-3 d-flex flex-column h-100 w-100">
					              <h4 className="mt-3 text-white">Heading</h4>
					              <p className="text-white">Paragraph</p>
					              <div className="d-flex justify-content-center mt-auto">
					                <CDBBtn color="light" flat circle>
					                  Button
					                </CDBBtn>
					              </div>
					            </div>
					          </div>
				          </div>
				        </div>
							</div>
							<div className="cards-container2">
								<div>
				          <div className="card shadow border-0">
				            <img
				              alt="cardImg"
				              className="img-fluid"
				              style={{objectFit:"cover"}}
				              src="/img/cardImage.png"
				            />
				            <img alt="cardImg" className="mx-auto border rounded-circle" style={{marginTop:"-5rem"}} width="130px" src="/img/pane/pane4.png" />
				            <div className="p-3 d-flex flex-column align-items-center mb-4 text-center">
				              <h4 style={{fontWeight:"600"}}>Sammy Russo</h4>
				              <p>Senior Software Developer</p>
				              <p className="text-muted">Detroit, USA</p>
				              <div className="d-flex justify-content-center flex-wrap">
				                <CDBBtn className="mr-2" size="small" color="dark"><i className="fas fa-user-plus"></i> Connect</CDBBtn>
				                <CDBBtn size="small" color="warning"> Send Message </CDBBtn>
				              </div>
				            </div>
				          </div>
								</div>
								<div>
									<div className="card shadow border-0">
										<div>
											<img src="/img/pages/promotionImage2.png" alt="Project" className="img-fluid"/>
										</div>
										<div className="card-body">
											<h4 className="card-title mb-3">
												<span style={{fontWeight:"600"}}>Project Name</span>
											</h4>
											<p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, error amet numquam iure provident voluptate esse quasi, veritatis totam voluptas.</p>
										</div>
										<div className="card-footer">
											<a className="p-2" href="#profile">
												Live Preview
												<i className="far fa-image ml-1"></i>
											</a>
										</div>
									</div>
								</div>
								<div>
									<div className="card shadow border-0">
										<div>
											<img src="/img/pages/promotionImage.png" alt="Project" className="img-fluid"/>
										</div>
										<div className="card-body">
											<h4 className="card-title text-center mb-3" style={{fontWeight:"600"}}>
												Card Title
											</h4>
											<p className="card-text text-center ">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, error amet numquam iure provident voluptate esse quasi, veritatis totam voluptas.</p>
										</div>
										<div className="card-footer text-center">
											<a className="p-2" href="#profile">Live Preview<i className="far fa-image ml-1"></i></a>
										</div>
									</div>
								</div>
								<div>
				          <div className="card shadow border-0">
				            <div className="p-3">
				              <h4 className="mt-3">Heading</h4>
				              <p>Paragraph</p>
				            </div>
				            <CDBView>
				              <CDBIframe src="https://www.youtube.com/embed/xnczyP2jSR0"></CDBIframe>
				            </CDBView>
				            <div className="p-3">
				              <CDBBtn color="dark" flat outline circle>
				                Button
				              </CDBBtn>
				            </div>
				          </div>
								</div>
							</div>
			        <footer className="d-flex mx-auto py-4">
			          <small className="mx-auto my-1 text-center">&copy; Devwares, 2020. All rights reserved.</small>
			        </footer>
				    </div>
					</div>
				</div>
			</div>
		</div>

	);
}
import React from "react";
import { CDBTable, CDBTableHeader, CDBTableBody } from "cdbreact";
import Sidebar from "../Sidebar";
import Navbar from "../Navbar";

export const Tables = () => {
  return (
    <div className="d-flex">
      <div>
        <Sidebar/>
      </div>
      <div style={{flex:"1 1 auto", display:"flex", flexFlow:"column", height:"100vh", overflowY:"hidden"}}>
        <Navbar/>
        <div style={{height:"100%"}}>
          <div style={{padding:"20px 5%",height:"calc(100% - 64px)",overflowY:"scroll"}}>
            <div style={{display:"grid", gridTemplateColumns:"repeat(1, minmax(200px, 700px))"}}>
              <div className="mt-5 w-100">
                <h4 className="font-weight-bold mb-3">Default Table</h4>
                <CDBTable responsive>
                  <CDBTableHeader>
                    <tr>
                      <th>#</th>
                      <th>First</th>
                      <th>Last</th>
                      <th>Handle</th>
                    </tr>
                  </CDBTableHeader>
                  <CDBTableBody>
                    <tr>
                      <td>1</td>
                      <td>Mark</td>
                      <td>Otto</td>
                      <td>@mdo</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Jacob</td>
                      <td>Thornton</td>
                      <td>@fat</td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>Larry</td>
                      <td>the Bird</td>
                      <td>@twitter</td>
                    </tr>
                  </CDBTableBody>
                </CDBTable>
              </div>
              <div className="mt-5">
                <h4 className="font-weight-bold mb-3">Table Head Options</h4>
                <h5>Dark Header</h5>
                <CDBTable responsive>
                  <CDBTableHeader color="dark">
                    <tr>
                      <th>#</th>
                      <th>First</th>
                      <th>Last</th>
                      <th>Handle</th>
                    </tr>
                  </CDBTableHeader>
                  <CDBTableBody>
                    <tr>
                      <td>1</td>
                      <td>Mark</td>
                      <td>Otto</td>
                      <td>@mdo</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Jacob</td>
                      <td>Thornton</td>
                      <td>@fat</td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>Larry</td>
                      <td>the Bird</td>
                      <td>@twitter</td>
                    </tr>
                  </CDBTableBody>
                </CDBTable>
                <h5 className="mt-4">Light Header</h5>
                <CDBTable responsive>
                  <CDBTableHeader color="light">
                    <tr>
                      <th>#</th>
                      <th>First</th>
                      <th>Last</th>
                      <th>Handle</th>
                    </tr>
                  </CDBTableHeader>
                  <CDBTableBody>
                    <tr>
                      <td>1</td>
                      <td>Mark</td>
                      <td>Otto</td>
                      <td>@mdo</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Jacob</td>
                      <td>Thornton</td>
                      <td>@fat</td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>Larry</td>
                      <td>the Bird</td>
                      <td>@twitter</td>
                    </tr>
                  </CDBTableBody>
                </CDBTable>
              </div>
              <div className="mt-5">
                <h4 className="font-weight-bold mb-3">Striped Table</h4>
                <CDBTable striped responsive>
                  <CDBTableHeader>
                    <tr>
                      <th>#</th>
                      <th>First</th>
                      <th>Last</th>
                      <th>Handle</th>
                    </tr>
                  </CDBTableHeader>
                  <CDBTableBody>
                    <tr>
                      <td>1</td>
                      <td>Mark</td>
                      <td>Otto</td>
                      <td>@mdo</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Jacob</td>
                      <td>Thornton</td>
                      <td>@fat</td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>Larry</td>
                      <td>the Bird</td>
                      <td>@twitter</td>
                    </tr>
                  </CDBTableBody>
                </CDBTable>
              </div>
              <div className="mt-5">
                <h4 className="font-weight-bold mb-3">Bordered Table</h4>
                <CDBTable bordered responsive>
                    <CDBTableHeader>
                      <tr>
                        <th>#</th>
                        <th>First</th>
                        <th>Last</th>
                        <th>Handle</th>
                      </tr>
                    </CDBTableHeader>
                    <CDBTableBody>
                      <tr>
                        <td>1</td>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td>Larry</td>
                        <td>the Bird</td>
                        <td>@twitter</td>
                      </tr>
                    </CDBTableBody>
                </CDBTable>
              </div>
              <div className="mt-5">
                <h4 className="font-weight-bold mb-3">Borderless Table</h4>
                <CDBTable borderless responsive>
                  <CDBTableHeader>
                    <tr>
                      <th>#</th>
                      <th>First</th>
                      <th>Last</th>
                      <th>Handle</th>
                    </tr>
                  </CDBTableHeader>
                  <CDBTableBody>
                    <tr>
                      <td>1</td>
                      <td>Mark</td>
                      <td>Otto</td>
                      <td>@mdo</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Jacob</td>
                      <td>Thornton</td>
                      <td>@fat</td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>Larry</td>
                      <td>the Bird</td>
                      <td>@twitter</td>
                    </tr>
                  </CDBTableBody>
                </CDBTable>
              </div>
              <div className="mt-5">
                <h4 className="font-weight-bold mb-3">Hoverable Rows</h4>
                <CDBTable hover responsive>
                  <CDBTableHeader>
                    <tr>
                      <th>#</th>
                      <th>First</th>
                      <th>Last</th>
                      <th>Handle</th>
                    </tr>
                  </CDBTableHeader>
                  <CDBTableBody>
                    <tr>
                      <td>1</td>
                      <td>Mark</td>
                      <td>Otto</td>
                      <td>@mdo</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Jacob</td>
                      <td>Thornton</td>
                      <td>@fat</td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>Larry</td>
                      <td>the Bird</td>
                      <td>@twitter</td>
                    </tr>
                  </CDBTableBody>
                </CDBTable>
              </div>
              <div className="mt-5">
                <h4 className="font-weight-bold mb-3">Small Table</h4>
                <CDBTable small responsive>
                  <CDBTableHeader>
                    <tr>
                      <th>#</th>
                      <th>First</th>
                      <th>Last</th>
                      <th>Handle</th>
                    </tr>
                  </CDBTableHeader>
                  <CDBTableBody>
                    <tr>
                      <td>1</td>
                      <td>Mark</td>
                      <td>Otto</td>
                      <td>@mdo</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Jacob</td>
                      <td>Thornton</td>
                      <td>@fat</td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>Larry</td>
                      <td>the Bird</td>
                      <td>@twitter</td>
                    </tr>
                  </CDBTableBody>
                </CDBTable>
              </div>
              <div className="mt-5">
                <h4 className="font-weight-bold mb-3">Captions</h4>
                <CDBTable responsive>
                  <caption>List of users</caption>
                  <CDBTableHeader>
                    <tr>
                      <th>#</th>
                      <th>First</th>
                      <th>Last</th>
                      <th>Handle</th>
                    </tr>
                  </CDBTableHeader>
                  <CDBTableBody>
                    <tr>
                      <td>1</td>
                      <td>Mark</td>
                      <td>Otto</td>
                      <td>@mdo</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Jacob</td>
                      <td>Thornton</td>
                      <td>@fat</td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>Larry</td>
                      <td>the Bird</td>
                      <td>@twitter</td>
                    </tr>
                  </CDBTableBody>
                </CDBTable>
              </div>
              <div className="mt-5">
                <h4 className="font-weight-bold mb-3">Responsive Table</h4>
                <CDBTable responsive>
                  <CDBTableHeader>
                    <tr>
                      <th>#</th>
                      <th>First</th>
                      <th>Second</th>
                      <th>Third</th>
                      <th>Fourth</th>
                      <th>Fifth</th>
                      <th>Sixth</th>
                      <th>Seventh</th>
                      <th>Last</th>
                      <th>Handle</th>
                    </tr>
                  </CDBTableHeader>
                  <CDBTableBody>
                    <tr>
                      <td>1</td>
                      <td>Name</td>
                      <td>Name</td>
                      <td>Name</td>
                      <td>Name</td>
                      <td>Name</td>
                      <td>Name</td>
                      <td>Name</td>
                      <td>Name</td>
                      <td>@email</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Name</td>
                      <td>Name</td>
                      <td>Name</td>
                      <td>Name</td>
                      <td>Name</td>
                      <td>Name</td>
                      <td>Name</td>
                      <td>Name</td>
                      <td>@email</td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>Name</td>
                      <td>Name</td>
                      <td>Name</td>
                      <td>Name</td>
                      <td>Name</td>
                      <td>Name</td>
                      <td>Name</td>
                      <td>Name</td>
                      <td>@email</td>
                    </tr>
                  </CDBTableBody>
                </CDBTable>
              </div>
            </div>
            <footer className="mx-auto my-3 text-center">
                <small>&copy; Devwares, 2020. All rights reserved.</small>
            </footer>
          </div>
        </div>
      </div>
    </div>
  );
};

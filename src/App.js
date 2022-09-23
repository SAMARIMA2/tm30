import React from "react";
import Navbar from "./Navbar"
import "./App.css"

function App () {
  return <><Navbar />
  <div className="Main-body">
    <div className="start-up">
      <h4>Why do you create a startup?</h4>
      <p>Trends</p>
    </div>
    <div className="empolyees">
      <div className="EM">
       <h3> <span>Employees</span></h3>
      </div>
      <div className="data">
                  
          <table id="customers">
            <tr>
              <th>Employee</th>
              <th>Last login</th>
              <th>Department</th>
              <th>Status</th>
            </tr>
            <tr>
              <td>Logan Henderson <br />logan@company.com</td>
              <td>September 20, 2019 <br /> 2 days ago</td>
              <td>Accounting</td>
              <td className="green">Active</td>
            </tr>
            <tr>
              <td>Susie Carlson
          <br />susie@company.com </td>
              <td>September 22, 2019 <br /> 5 hours ago</td>
              <td>Development</td>
              <td className="red">Inactive</td>
            </tr>
            <tr>
              <td>Markus Benes <br />markus@company.com</td>
              <td>September 18, 2019 <br /> 4 days ago</td>
              <td>Development</td>
              <td className="green">Active</td> 
            </tr>
            <tr>
              <td>  Marie Stephens <br />marie@company.com</td>
              <td>September 20, 2019 <br /> 2 days ago</td>
              <td>Human Resources</td>
              <td className="green">Active</td>
            </tr>
            <tr>
              <td>   Jacob Gibson <br />jacob@company.com</td>
              <td>September 20, 2019 <br /> 2 days ago</td>
              <td>Sales</td>
              <td className="green">Active</td>
            </tr>

          



          
          
          </table>
      </div>
    </div>

  </div>
  </>
}

export default App;
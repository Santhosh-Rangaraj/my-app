import React from 'react';

import './userlist.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function Table() {
    return (
      <table className='table-outline'>
        <thead className='table-head'>
          <tr>
            <th>STATUS</th>
            <th>USER ID</th>
            <th>USER NAME</th>
            <th>MOBILE NUMBER</th>
            <th>E-MAIL ID</th>
            <th>ACCOUNT  CREATED DETAILS</th>
            <th>ACCOUNT TYPE</th>
          </tr>
        </thead>
        <tbody>
        <tr className='table-body'>
          <td>IN ACTIVE</td>
            <td>123</td>
            <td>Santhosh</td>
            <td>989405xxxx</td>
            <td>santho...@gmail</td>
            <td> 23,jan 2023</td>
            <td> Frequent User</td>
          </tr>
          <tr className='table-body'>
          <td>IN ACTIVE</td>
            <td>123</td>
            <td>Santhosh</td>
            <td>989405xxxx</td>
            <td>santho...@gmail</td>
            <td> 23,jan 2023</td>
            <td> Frequent User</td>
          </tr>
          <tr className='table-body'>
          <td>IN ACTIVE</td>
            <td>123</td>
            <td>Santhosh</td>
            <td>989405xxxx</td>
            <td>santho...@gmail</td>
            <td> 23,jan 2023</td>
            <td> Frequent User</td>
          </tr>
          <tr className='table-body'>
          <td>ACTIVE</td>
            <td>123</td>
            <td>Santhosh</td>
            <td>989405xxxx</td>
            <td>santho...@gmail</td>
            <td> 23,jan 2023</td>
            <td> Frequent User</td>
          </tr>
          <tr className='table-body'>
            <td>Row 5, Column 1</td>
            <td>Row 5, Column 2</td>
            <td>Row 5, Column 3</td>
            <td>Row 5, Column 4</td>
            <td>Row 5, Column 5</td>
          </tr>
          {/* Add more rows as needed */}
        </tbody>
      </table>
    );
  }
  


function UserList(){
    return(
        <div>
            <h3 className='user'>User List </h3>
            <h4 >Search Criteria</h4>
            <div>
            <input  placeholder='enter Mobile Number' className='input'></input>
            <input placeholder='enter User ID' className='input'></input>
            <input placeholder='Account Type'className='input'/>
            <input placeholder='Search...' className='input'></input>
           
            </div><br></br>
            <Table></Table>
        </div>
    );
  };

export default UserList;



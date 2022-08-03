import React from "react";
import { Card, CardText, CardBody } from 'reactstrap';
import {Link} from 'react-router-dom'

   function RenderSalary ({staff, onClick}) { 
       return (
            <Card >
                <h2 > {staff.name} </h2>
                <CardBody >
                    <CardText> Mã nhân viên : {(staff.id) } </CardText>
                    <CardText> Hệ số lương : {Math.trunc(staff.salaryScale)}</CardText>
                    <CardText> Số ngày làm thêm : {staff.overTime} </CardText>
                    <CardText className="khung"> Lương : {Math.trunc(staff.salaryScale) * 3000000 + staff.overTime *200000} </CardText>
                </CardBody>
            </Card>
       )
   }
  
        
    ///////////////hiển thị //////////
    const Salary = ({staffs}) =>  {
        const salary = staffs.map ((staff) => {
            return (    
                <div key={staff.id} className = 'col-sm-6 col-xs-12 col-md-4 mt-4 '>
                    <RenderSalary staff={staff}  />
                </div>
            )
        })
        
        
        return (
            <div className="container">
                 <div className="row">
                    <p className="pay"><Link to='/stafflist'>Nhân viên </Link>/ Bảng lương</p>
                </div>
                <div className="row">
                    {salary}
                </div>
            </div>
        )
    }


export default Salary;
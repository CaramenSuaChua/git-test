import React from "react";
import { useParams } from "react-router-dom";
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';
import { Link } from "react-router-dom";


///////////////hiển thị //////////
const Department = ({ departments, staffs }) => {
    let {id } = useParams();
        console.log('a', staffs)

    const RenderDepartMent = ({ department }) => {
        const staff = staffs.filter((staff) => staff.department.id == department.id)
        console.log(staff)
        return (
            <Card >
                <h3 >{department.name}</h3>
                <CardBody >
                    <CardText> Số lượng nhân viên: {staff.length}</CardText>
                </CardBody>
            </Card>
        )
    }

    const departmentsList = departments?.map((department) => {
        return (
            <div key={department.id} className='col-sm-6 col-xs-12 col-md-4 mt-4 '>
                <RenderDepartMent department={department} />
            </div>
        )
    })


    return (
        <div className="container">
             <div className="row">
                    <p className="pay"><Link to='/stafflist'>Nhân viên </Link>/ Phòng ban</p>
                </div>
            <div className="row">
                {departmentsList}
            </div>
        </div>
    )
}


export default Department;
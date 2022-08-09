import React from "react";
import { useParams } from "react-router-dom";
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';





///////////////hiển thị //////////
const Department = ({ departments, staffs }) => {
    let { id } = useParams();
        console.log('a', staffs)

    const RenderDepartMent = ({ department }) => {
        const staff = staffs.filter((staff) => staff.departments.id == departments.id)
        console.log(staff)
        return (
            <Card >
                <h3 >{department.name}</h3>
                <CardBody >
                    <CardText> Số lượng nhân viên: {department.numberOfStaff}</CardText>
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
                {departmentsList}
            </div>
        </div>
    )
}


export default Department;
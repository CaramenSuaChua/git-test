import React from "react";
import { Card, CardText, CardBody } from 'reactstrap';
import { Loading } from "./LoadingComponent";


function RenderDepartMent({ department, onClick }) {
    return (
        <Card >
            <h3 >{department.name}</h3>
            <CardBody onClick={() => onClick(department.id)}>

                <CardText> Số lượng nhân viên: {department.numberOfStaff}</CardText>
            </CardBody>
        </Card>
    )
}

///////////////hiển thị //////////
const Department = ({ departments }) => {
    const departmentsList = departments?.map((department) => {
        return (
            <div key={department.id} className='col-sm-6 col-xs-12 col-md-4 mt-4 '>
                <RenderDepartMent department={department} />
            </div>
        )
    })

    if (departments.isLoading) {
        return (
            <div className="container">
                <div className="row">
                    <Loading />
                </div>
            </div>
        )
    }
    else if (departments.errMess) {
        return (
            <div className="container">
                <div className="row">
                    <h4>{departments.errMess}</h4>
                </div>
            </div>
        )
    }

    return (
        <div className="container">
            <div className="row">
                {departmentsList}
            </div>
        </div>
    )
}


export default Department;
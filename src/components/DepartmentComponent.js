import React from "react";
import { Card, CardText, CardBody } from 'reactstrap';
import { Loading } from "./LoadingComponent";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

///////////////hiển thị //////////
const Department = ({ departs, staffs }) => {
   
    console.log("tét-data", departs)
    console.log("tét-data1", staffs)

    const RenderDepartMent = ({ department }) => {
        let {id} = useParams()
        let history = useHistory();
        const staff = staffs.filter((staff) => staff.departmentId == department.id )
        console.log('de', department.id)
        return (
            <Card >
                <h3 >{department.name}</h3>
                <CardBody onClick={() => history.push(`/detailDepart/${department.id}`)}>
                    <CardText > Số lượng nhân viên: {staff.length  }</CardText>
                </CardBody>
            </Card>
        )
    }

    const departsList = departs?.map((department) => {
        return (
            <CardBody >
                <div className='col-sm-6 col-xs-12 col-md-12 mt-4 '>
                    <RenderDepartMent department={department} />
                </div>
            </CardBody>
        )
    })

    // if (departs.isLoading) {
    //     return (
    //         <div className="container">
    //             <div className="row">
    //                 <Loading />
    //             </div>
    //         </div>
    //     )
    // }
    // else if (departs.errMess) {
    //     return (
    //         <div className="container">
    //             <div className="row">
    //                 <h4>{departs.errMess}</h4>
    //             </div>
    //         </div>
    //     )
    // }

    return (
        <div className="container">
            <div className="row">
                <h3 className="pay">Phòng Ban    </h3>
            </div>

            <div className="row">
                {departsList}
            </div>
        </div>
    )
}


export default Department;
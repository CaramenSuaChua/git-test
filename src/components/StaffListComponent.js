import React, { useState } from "react";
import {
    Card, CardImg, CardText, CardBody,
    FormGroup, Col, Button
} from 'reactstrap';
import { useHistory } from "react-router-dom";
import ModalAddStaff from './ModalAddStaff';
import { Loading } from './LoadingComponent';

const Menu = ({ staffs, postStaff }) => {
    const [filterStaffs, setFilterStaffs] = useState(staffs)
    let history = useHistory();

    console.log('staffs', filterStaffs)

    
    const RenderMenuItem = ({ staff, isLoading, errMess }) => {
        console.log(staff)
        if (isLoading) {
            return <Loading />;
        } else if (errMess) {
            return <h4>{errMess}</h4>;
        } else
            return (
                <Card >
                    <CardBody onClick={() => {
                        history.push(`/detail/${staff.id}`)
                    }}>
                        <CardImg src={staff.image} />
                        <CardText> {staff.name} </CardText>
                      
                    </CardBody>
                </Card>
            );
    };

    //////////////// danh sách nhân viên //////////////
    const menu = filterStaffs.map((staff) => {
        return (
            <div key={staff.id} className='col-sm-4 col-xs-6 col-md-2 mt-4 '>
                <RenderMenuItem staff={staff} />
            </div>
        )
    })

    ///////////////tìm kiếm nhân viên
    const searchStaff = (key) =>{
        const filterStaffs = staffs.filter((staff) => staff.name.includes(key))
        setFilterStaffs(filterStaffs);
    }

  
    if (staffs.isLoading) {
        return (
            <div className="container">
                <div className="row">
                    <Loading />
                </div>
            </div>
        );
    } else if (staffs.errMess) {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h4>{staffs.errMess}</h4>
                    </div>
                </div>
            </div>
        );
    }
    else
        return (
            <div className="container" >
                <FormGroup row >
                    <Col md={3}>
                        <div className="row">
                            <h3 className="pay">Nhân viên </h3>
                        </div>
                    </Col>

                    <Col md={{ size: 9 }}>
                        <ModalAddStaff staffs={filterStaffs} postStaff={postStaff} 
                        searchStaff={searchStaff}  />
                    </Col>
                </FormGroup>
                <div className="row">
                    {menu}
                </div>
            </div>
        )
}

export default Menu;
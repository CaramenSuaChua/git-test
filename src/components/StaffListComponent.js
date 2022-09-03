import React, { Component, useState } from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';
import { useHistory } from "react-router-dom";
import ModalStaff from "./ModalStaff";
import { Link } from "react-router-dom";

///////////////hiển thị //////////
const Menu = ({ staffs, handleAddStaff }) => {
    const [filterStaffs, setFilterStaffs] = useState(staffs)

    let history = useHistory();

    ///////// hàm hiển thị 
    const RenderMenuItem = ({ staff }) => {
        return (
            <Card >
                <CardBody onClick={() => {
                    history.push(`/detail/${staff.id}`)
                }}>
                    <CardImg src={staff.image} />
                    <CardText> {staff.name}</CardText>
                    
                </CardBody>
            </Card>
        )
    }

    ////////hàm tìm kiếm nhân viên /////////
    const searchStaff = (key) => {
        const filterStaffs = staffs.filter((staff) => staff.name.includes(key))
        setFilterStaffs(filterStaffs)
        console.log(filterStaffs)
    }

    ////////////hàm khai báo ////////
    const menu = filterStaffs.map((staff) => {
        console.log('a', filterStaffs)
        return (
            <div key={staff.id} className='col-sm-4 col-xs-6 col-md-2 mt-4 '>

                <RenderMenuItem staff={staff}  />

            </div>
        )

    })

    return (
        <div className="container">
            <div className="row">
                <div className="col-3">
                <p className="pay"><Link to='/stafflist'>Nhân viên </Link></p>
                    <hr />
                </div>
                <div className="col-9">
                    <ModalStaff searchStaff={searchStaff}   />
                </div>
            </div>
            <div className="row">
                {menu}
            </div>
        </div>
    )
}


export default Menu;
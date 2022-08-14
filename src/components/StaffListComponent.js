import React, { useState } from "react";
import {
    Card, CardImg, CardText, CardBody,
    FormGroup, Col
} from 'reactstrap';
import { useHistory } from "react-router-dom";
import ModalAddStaff from './ModalAddStaff'

const Menu = ({ staffs, handleAddStaff, departments }) => {
    const [filterStaffs, setFilterStaffs] = useState(staffs)
    let history = useHistory();

    console.log('staffs', filterStaffs)

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

    const menu = filterStaffs.map((staff) => {
        return (
            <div key={staff.id} className='col-sm-4 col-xs-6 col-md-2 mt-4 '>

                <RenderMenuItem staff={staff} />

            </div>
        )

    })


    const handleSearchStaff = (keyword) => {
        const filterStaffs = staffs.filter((staff) => staff.name.includes(keyword));
        setFilterStaffs(filterStaffs)
    }

    return (
        <div className="container" >
            <FormGroup row >
                <Col md={3}>
                    <h3>Nhân viên</h3>
                </Col>
                <Col md={{ size: 9 }}>
                    <ModalAddStaff handleSearch={handleSearchStaff} onClickSubmit={handleAddStaff} departments={departments} />
                </Col>
            </FormGroup>
            <div className="row">
                {menu}
            </div>
        </div>
    )
}

export default Menu;
import React from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter, FormFeedback, Form } from 'reactstrap';
import { Input, Col, FormGroup, Button, Label } from 'reactstrap';


class ModalAddStaff extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            doB: '',
            startDate: '',
            department: '',
            salaryScale: '',
            leaveTime: '',
            overTime: '',
            modal: false,
            search: '',
            touched: {
                name: false,
                doB: false,
                startDate: false,
                department: false,
            }
        };
        console.log(this.state.doB)
        this.toggleModal = this.toggleModal.bind(this)
        this.handleInputChange = this.handleInputChange.bind(this);
       
        this.handleBlur = this.handleBlur.bind(this)
        
    }

    toggleModal() {
        this.setState({
            modal: !this.state.modal,
        });
    }

    /////////////thay đổi 
    handleInputChange(e) {
        const target = e.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        console.log(value)
        this.setState({
            [name]: value,
        })

        console.log(this.state.date)
        console.log(this.state.start)
        console.log(target.name)
    }

    // sự kiện handleSubmit khi người dùng thêm nhân viên

    // handleSubmit(value) {
    //     value.preventDefault()
    //     console.log('value', value)
    //     const newStaff = {
    //         id: this.props.staffs.length,
    //         name: this.state.name,
    //         doB: this.state.doB,
    //         departmentId: this.state.departmentId,
    //         salaryScale: this.state.salaryScale,
    //         startDate: this.state.startDate,
    //         annualLeave: this.state.annualLeave,
    //         overTime: this.state.overTime,
    //         image: "/assets/images/alberto.png",
    //     };

    //     // Đièu kiện người dùng nhập đầy đủ các trường
    //     if (newStaff.name === "") {
    //         alert("Vui lòng nhập các trường");
    //     } else {
    //         this.props.postStaff(newStaff);
    //     }
    // }

    ///////////sự kiện handleUpdate khi người dùng sửa thông tin nhân viên
    handleUpdateStaffs(values) {
        console.log('values', values)
        const updateStaff = {
            id: this.props.staffs.id,
            name: this.state.name,
            doB: this.state.doB,
            startDate: this.state.startDate,
            departmentId: this.state.departmentId,
            salaryScale: this.state.salaryScale,
            annualLeave: this.state.annualLeave,
            overTime: this.state.overTime,
        };

        this.props.updateStaff(updateStaff);
        this.toggleModal(updateStaff);
    };

    handleBlur = (field) => (event) => {
        this.setState({
            touched: { ...this.state.touched, [field]: true }
        });
    }

    /////////kiểm tra dữ liệu 
    validate(name, doB, startDate, department) {
        const errors = {
            name: '',
            doB: '',
            startDate: '',
            salaryScale: '',
            department: '',
        }

        if (this.state.touched.name && name.length < 3)
            errors.name = 'Name is should be more 3 character'
        else if (this.state.touched.name && name.length > 15)
            errors.name = 'Name is shouble less or equal 15 character'

        return errors;
    }

    ///////////////hiển thị //////////
    render() {
        const errors = this.validate(this.state.name, this.state.doB,
            this.state.startDate, this.state.department)

        return (
            <FormGroup  row >
                <Col md={5} row>
                    <Modal
                        isOpen={this.state.modal}
                        toggle={this.toggleModal}
                        className={this.props.className}>
                        <ModalHeader toggle={this.toggleModal} >
                            Thay đổi thông tin
                        </ModalHeader>
                        <Form onSubmit={this.handleSubmit}>
                            <ModalBody>
                                <FormGroup row >
                                    <Label htmlFor='name' md={3}> Tên</Label>
                                    <Col md={9}>
                                        <Input type='text' name='name' id='name' value={this.state.name}
                                            valid={errors.name === ''}
                                            invalid={errors.name !== ''}
                                            onChange={this.handleInputChange}
                                            onBlur={this.handleBlur('name')} />
                                        <FormFeedback>{errors.name}</FormFeedback>
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label htmlFor='dob' md={3}>Ngày sinh</Label>
                                    <Col md={9}>
                                        <Input type='date' name='doB' id='date' value={this.state.doB}
                                            onChange={this.handleInputChange}
                                            onBlur={this.handleBlur('doB')} />
                                        <FormFeedback>{errors.doB}</FormFeedback>
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label htmlFor='start' md={3}>Ngày vào công ty </Label>
                                    <Col md={9}>
                                        <Input type='date' name='startDate' id='start'
                                            value={this.state.startDate}
                                            onChange={this.handleInputChange}
                                            onBlur={this.handleBlur('startDate')} />
                                        <FormFeedback>{errors.startDate}</FormFeedback>
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label md={3} htmlFor='department'>Phòng ban </Label>
                                    <Col md={9}>
                                        <Input type='select' name='department' id='departmnet' 
                                        className='department'
                                            onChange={this.handleInputChange}
                                            onBlur={this.handleBlur('department')}
                                            value={this.state.department} >
                                            <option>Sale</option>
                                            <option>HR</option>
                                            <option>Marketing</option>
                                            <option>IT </option>
                                            <option>Finance</option>
                                        </Input>
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label htmlFor='salaryScale' md={3}>Hệ số lương </Label>
                                    <Col md={9}>
                                        <Input type='number' name='salaryScale' value={this.state.salaryScale}
                                            onChange={this.handleInputChange}
                                            onBlur={this.handleBlur('salaryScale')} />
                                        <FormFeedback>{errors.salaryScale}</FormFeedback>
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label htmlFor='Leave' md={3}>Số ngày nghỉ còn lại </Label>
                                    <Col md={9}>
                                        <Input md={1} type='number' name='leaveTime' id='leave' value={this.state.leaveTime}
                                            onChange={this.handleInputChange}
                                            onBlur={this.handleBlur('leaveTime')} />
                                        <FormFeedback>{errors.leaveTime}</FormFeedback>
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label htmlFor='Over' md={3}>Số ngày đã làm thêm  </Label>
                                    <Col md={9}>
                                        <Input type='number' name='overTime' value={this.state.overTime}
                                            onChange={this.handleInputChange}
                                            onBlur={this.handleBlur('overTime')} />
                                        <FormFeedback>{errors.overTime}</FormFeedback>
                                    </Col>
                                </FormGroup>
                            </ModalBody>
                            <ModalFooter >
                                <Button color='primary' type='submit'
                                >
                                    Cập nhật thông tin
                                </Button>{' '}
                                <Button color='danger' onClick={this.toggleModal}>
                                    Cancel
                                </Button>
                            </ModalFooter>
                        </Form>

                    </Modal>
                </Col>
                <Button type="button" color="info" outline onClick={this.toggleModal}>
                    Cập nhật thông tin
                </Button>
            </FormGroup>
        );
    }
}

export default ModalAddStaff;
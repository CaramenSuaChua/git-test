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
            salaryScale: 1,
            overTime: 0,
            annualLeave: 0,
            modal: false,
            search: '',
            touched: {
                name: false,
                doB: false,
                startDate: false,
                department: false,
            }
        };
        this.toggleModal = this.toggleModal.bind(this)
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleBlur = this.handleBlur.bind(this)
    }

    toggleModal() {
        this.setState({
            modal: !this.state.modal,
        });
    }

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

    handleSubmit(event) {
        const department = this.props.departments && this.props.departments.filter(x => x.id === this.state.department)[0];
        let item = {
            name: this.state.name,
            doB: this.state.doB,
            startDate: this.state.startDate,
            department: department,
            salaryScale: this.state.salaryScale,
            overTime: this.state.overTime,
            annualLeave: this.state.annualLeave,
        }
        // if(!this.validate()){
        this.props.onClickSubmit(item) 
    // }
        event.preventDefault()

    }

    handleBlur = (field) => (event) => {
        this.setState({
            touched: { ...this.state.touched, [field]: true }
        });
    }

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
            <FormGroup row>
                <Col md={5}>
                    <Button color='danger' onClick={this.toggleModal}>
                        +
                    </Button>
                    <Modal
                        isOpen={this.state.modal}
                        toggle={this.toggleModal}
                        className={this.props.className}>
                        <ModalHeader toggle={this.toggleModal}>
                            Thành viên
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
                                            onBlur={this.handleBlur('name')}    />
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
                                            <option value="Dept01"> Sale</option>
                                            <option value="Dept02"> HR</option>
                                            <option value="Dept03"> Marketing</option>
                                            <option value="Dept04"> IT </option>
                                            <option value="Dept05"> Finance</option>
                                        </Input>
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label htmlFor='salaryScale' md={3}>Hệ số lương </Label>
                                    <Col md={9}>
                                        <Input type='number' name='salaryScale' id='salaryScale'value={this.state.salaryScale}
                                            // valid={errors.salaryScale === ''}
                                            //  invalid={errors.salaryScale !== ''}
                                            onChange={this.handleInputChange}
                                            onBlur={this.handleBlur('salaryScale')} />
                                        <FormFeedback>{errors.salaryScale}</FormFeedback>
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label htmlFor='Leave' md={3}>Số ngày nghỉ còn lại </Label>
                                    <Col md={9}>
                                        <Input md={1} type='number' name='overTime' id='overTime' value={this.state.overTime}
                                            // valid={errors.name === ''}
                                            // invalid={errors.name !== ''}
                                            onChange={this.handleInputChange}
                                            onBlur={this.handleBlur('overTime')} />
                                        <FormFeedback>{errors.overTime}</FormFeedback>
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label htmlFor='Over' md={3}>Số ngày đã làm thêm  </Label>
                                    <Col md={9}>
                                        <Input type='number' name='annualLeave' id='annualLeave' value={this.state.annualLeave}
                                            // valid={errors.name === ''}
                                            // invalid={errors.name !== ''}
                                            onChange={this.handleInputChange}
                                            onBlur={this.handleBlur('annualLeave')} />
                                        <FormFeedback>{errors.annualLeave}</FormFeedback>
                                    </Col>
                                </FormGroup>
                            </ModalBody>
                            <ModalFooter >
                                <Button color='primary' type='submit'
                                >
                                    Thêm nhân viên
                                </Button>{' '}
                                <Button color='danger' onClick={this.toggleModal}>
                                    Cancel
                                </Button>
                            </ModalFooter>
                        </Form>

                    </Modal>
                </Col>
                <Col md={{ size: 5, offset: 4 }}>
                    <Input type='search' onChange={(e) => this.setState({ search: e.target.value })}
                    />
                </Col>
                <Button color='primary' md={{ size: 1 }} forHtml='Tìm'
                    onClick={() => this.props.handleSearch(this.state.search)}>Tìm {' '}</Button>
            </FormGroup>
        );
    }
}

export default ModalAddStaff;
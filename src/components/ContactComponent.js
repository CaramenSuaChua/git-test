import React, { Component } from 'react';
import { FormGroup, Label, Input, Form, Col, Button, FormFeedback} from 'reactstrap'


class Contact extends Component {
    constructor(props) {
        super(props);

        this.state = {
            firstname: '',
            lastname: '',
            telnum: '',
            email: '',
            agree: false,
            contactType: 'Tel.',
            message: '',
            touched: {
                firstname: false,
                lastname: false,
                telnum: false,
                email: false,
            }
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
    }

    ////////////////thay doi cac the input , label
    handleInputChange(e){
        const target = e.target; 
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name] : value,
        })
    }

    /////////////////click submit hien thi /////////////
    handleSubmit(e) {
            alert('Current State is :' + JSON.stringify(this.state)) ;
        e.preDefault();
    }

    //////////////dua cac gia tri ve true 
    handleBlur = (field) => (event) => {    
        this.setState({
            touched : {...this.state.touched, [field] : true}
        });
    } 

    validate(firstname, lastname, telnum, email) {
        const errors = {
            firstname: '',
            lastname: '',
            telnum: '',
            email: '',
        } ;
        ///////////khai baso dieu kien first name 

        if(this.state.touched.firstname && firstname.length <3)
            errors.firstname='FirstName is shoud be >=3 character';
        else if(this.state.touched.firstname && firstname.length >10 )
            errors.firstname ='FirstName is shoud be <=10 character'

        /////////khai bao dieu kien last name 

        if(this.state.touched.lastname && lastname.length <3)
            errors.lastname= 'Lastname is shoud be >=3 character'
        else if(this.state.touched.lastname && lastname.length >10)
            errors.lastname='lastname is shoud be <=10 character'

        //////////khai bao dieu kien telnum

        const reg =/^\d+$/ ;
        if(this.state.touched.telnum && !reg.test(telnum))
            errors.telnum='TelNum should be contain only number'
        
        //////////////////khai bao dieu kien email 

        if(this.state.touched.email && email.split(' ').filter(x => x === '@'). length !== 1 )
            errors.email= 'Email should contain a @'
       
        return errors;  

    }
    
    ///////////////hien thi ///////////////
    render() {
        const errors = this.validate(this.state.firstname, this.state.lastname, 
            this.state.telnum, this.state.email);
        return (
            <div className='container'>
                <div className='row row-content'>
                    <div className='col-12'>
                        <h3> Send us Your Feedback</h3>
                    </div>
                    <div className='col-12 col-md-9'>
                        <Form onSubmit = {this.handleSubmit}>
                            <FormGroup row>
                                <Label htmlFor='firstname' md={2}>First Name</Label>
                                <Col md={10}>
                                    <Input type='text' name='firstname' id='firstname'
                                        placeholder='First Name' value={this.state.firstname}
                                        valid={errors.firstname === ''}
                                        invalid={errors.firstname !==''}
                                        onBlur ={ this.handleBlur('firstname')}
                                        onChange ={this.handleInputChange} />
                                    <FormFeedback>{errors.firstname}</FormFeedback>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor='lastname' md={2}>Last Name</Label>
                                <Col md={10}>
                                    <Input type='text' name='lastname' id='lastname'
                                        placeholder='Last Name' value={this.state.lastname}
                                        valid={errors.lastname === ''}
                                        invalid={errors.lastname !==''}
                                        onBlur ={this.handleBlur('lastname')}
                                        onChange ={this.handleInputChange} />
                                        <FormFeedback>{errors.lastname}</FormFeedback>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor='telNum' md={2}>Contact Tel.</Label>
                                <Col md={10}>
                                    <Input type='tel' name='telnum' id='telnum'
                                        placeholder='Tel. Number' value={this.state.telnum}
                                        valid={errors.telnum === ''}
                                        invalid={errors.telnum !==''}
                                        onBlur ={ this.handleBlur('telnum')}
                                        onChange ={this.handleInputChange} />
                                        <FormFeedback>{errors.telnum}</FormFeedback>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor='Email' md={2}>Email</Label>
                                <Col md={10}>
                                    <Input type='email' name='email' id='email'
                                        placeholder='Email' value={this.state.email}
                                        valid={errors.email === ''}
                                        invalid={errors.email !==''}
                                        onBlur ={this.handleBlur('email')}
                                        onChange ={this.handleInputChange} />
                                        <FormFeedback>{errors.email}</FormFeedback>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col md={{ size: 6, offset: 2 }}>
                                    <FormGroup check>
                                        <Label check>
                                            <input type='checkbox' name='agree' id='checkbox'
                                                checked={this.state.agree} 
                                                onChange = {this.handleInputChange} /> {'  '}
                                            <strong>May we contact you ?</strong>
                                        </Label>
                                    </FormGroup>
                                </Col>
                                <Col md={{ size: 3, offset: 1 }}>
                                    <Input type='select' name='contactType'
                                        value={this.state.contactType} >
                                        <option> Tel. Number</option>
                                        <option> Email</option>
                                    </Input>
                                </Col>
                            </FormGroup>
                            <FormGroup row >
                                <Label htmlFor='message' md={2} >Your Feedback</Label>
                                <Col md={10}>
                                    <Input type='textarea' id='message' name='message' rows='12'
                                        placeholder='FeedBack' value={this.state.message} 
                                        onChange ={this.handleInputChange}/>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col md={{size:10 , offset:2}} >
                                <Button type='submit' name='submit' id='submit' color='primary'>
                                    Send FeedBack
                                </Button>
                                </Col>
                            </FormGroup>
                        </Form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Contact;
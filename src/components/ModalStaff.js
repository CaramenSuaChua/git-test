import React from "react";
import { FormGroup, Col, Button, Input } from 'reactstrap'

class ModalStaff extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <FormGroup>
                <Col md={{ size: 5, offset: 5 }} className='mt-2'>
                    <Input type='search' placeholder='Tìm nhân viên' onChange={(e) => this.setState({ search: e.target.value })}
                    />
                    <Button md={{ size: 2 }} color='primary' forHtml='Tìm'
                    onClick={() => this.props.searchStaff(this.state.search)}>Search {''} <i className="fa fa-search" aria-hidden="true"></i></Button>
                </Col>
            </FormGroup >
        )
    }
}

export default ModalStaff;
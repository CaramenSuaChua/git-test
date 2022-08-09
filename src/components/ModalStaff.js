import React from "react";
import { FormGroup, Col, Button, Input } from 'reactstrap'

class ModalStaff extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <FormGroup>
                <Col md={{ size: 4, offset: 4 }}>
                    <Input type='search' placeholder='Tìm nhân viên' onChange={(e) => this.setState({ search: e.target.value })}
                    />
                </Col>
                <Button color='primary' md={{ size: 1 }} forHtml='Tìm'
                onClick={() => this.props.searchStaff(this.state.search)}>Tìm {' '}</Button>
            </FormGroup >
        )
    }
}

export default ModalStaff;
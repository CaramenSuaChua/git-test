import React, { Component } from "react";
import { DEPARTMENTS, STAFFS } from "../shared/staffs";
import Menu from "./StaffListComponent";
import Depart from './DepartmentComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom'
import Salary from "./SalaryComponent";
import Detail from "./Detail";
import {fetchStaffs} from '../redux/ActionCreator';
import { connect } from 'react-redux';
import Home from './HomeComponents';


const mapStateToProps = state =>{
    return{
        staffs:state.staffs,
    }
}

const mapDispatchToProps = (dispatch) =>({
    fetchStaffs:() =>{ dispatch(fetchStaffs())}
})

class Main extends Component {

    componentDidMount(){
        this.props.fetchStaffs();
    }

    constructor(props) {
        super(props);

        this.state = {
            staffs: JSON.parse(localStorage.getItem('staffs')) || STAFFS,
            departments: DEPARTMENTS,
        }
        this.handleAddStaff = this.handleAddStaff.bind(this);
    }

    handleAddStaff(staff) {
        const item = {
            ...staff,
            id: this.state.staffs.length,
            image: '/assets/images/alberto.png',
        }
        this.setState({
            staffs: [...this.state.staffs, item]
            
        });
        localStorage.setItem('staffs', JSON.stringify([...this.state.staffs, item]))
    }

    render() {

        const HomePage = () => {
            return(
                <Home staff={this.props.staffs.staffs}
                staffsLoading={this.props.staffs.isLoading}
                staffsErrMess={this.props.staffs.errMess}
                />
            )
        }
        return (
            <div>
                <Switch  >
                    <Route path='/home' component={HomePage} />
                    <Route path="/stafflist" component={() => { return <Menu staffs={this.state.staffs} handleAddStaff={this.handleAddStaff} /> }} />
                    <Route path='/department' component={() => { return <Depart departments={this.state.departments} /> }} />
                    <Route path='/payroll' component={() => { return <Salary staffs={this.state.staffs} /> }} />
                    <Route path='/detail/:id' component={() => { return <Detail staffs={this.state.staffs} /> }} />
                    <Redirect to='/home' />
                </Switch >

            </div>
        )
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps) (Main) );
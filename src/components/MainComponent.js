import React, { Component } from "react";
import { DEPARTMENTS, STAFFS } from "../shared/staffs";
import Menu from "./StaffListComponent";
import Depart from './DepartmentComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom'
import Salary from "./SalaryComponent";
import Detail from "./Detail";
import {fetchSalary, fetchStaffs, fetchDeparts, postComment} from '../redux/ActionCreator';
import { connect } from 'react-redux';
import Home from './HomeComponents';


const mapStateToProps = state =>{
    return{
        staffs:state.staffs,
        departs:state.departs,
        salarys: state.salarys,
    }
}

const mapDispatchToProps = (dispatch) =>({
    postComment:(staffId, rating, author, comment) =>{
        dispatch(postComment(staffId, rating, author, comment))
    },
    fetchStaffs:() =>{ dispatch(fetchStaffs())},
    fetchDeparts:() =>{ dispatch(fetchDeparts())},
    fetchSalary:() =>{ dispatch(fetchSalary())}
})

class Main extends Component {

    componentDidMount(){
        this.props.fetchStaffs();
        this.props.fetchDeparts();
        this.props.fetchSalary();
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
            console.log(this.props.staffs)
            console.log(this.props.departs)
            console.log(this.props)
            return(
                <Home staff={this.props.staffs.staffs.filter(staffs => staffs.featured)[0]}
                staffsLoading={this.props.staffs.isLoading}
                staffsErrMess={this.props.staffs.errMess}
                depart = {this.props.departs.departs.filter(departs => departs.featured)[0]}
                departsLoading={this.props.departs.isLoading}
                departsErrMess={this.props.departs.errMess}
                salary={this.props.salary.salary.filter(salarys => salarys.featured)[0]}
                salarysLoading={this.props.salary.isLoading}
                salarysErrMess={this.props.salary.errMess}
                />

               
            )
            
        }
        return (
            <div>
                <Switch  >
                    <Route path='/home' component={HomePage} />
                    <Route path="/stafflist" component={() => { return <Menu staffs={this.state.staffs} handleAddStaff={this.handleAddStaff} /> }} />
                    <Route path='/department' component={() => { return <Depart departs={this.state.departs} /> }} />
                    <Route path='/payroll' component={() => { return <Salary staffs={this.state.staffs} /> }} />
                    <Route path='/detail/:id' component={() => { return <Detail staffs={this.state.staffs} /> }} />
                    <Redirect to='/home' />
                </Switch >

            </div>
        )
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps) (Main) );
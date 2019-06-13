import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import axios from 'axios';
import { find, sortBy } from 'lodash';

import Main from './components/Main';
import Profile from './components/Profile';
import Appointments from './components/Appointments';
import Specialists from './components/Specialists';
import Plan from './components/Plan';
import Content from './components/Content';
import Header from './components/Header';

export default class App extends React.Component {
    state = {
        appointments: [],
        doctors: [],
        rooms: [],
        profile: {},
        orderBy: 'ask',
        currentSortField: '',
      };
    componentDidMount() {
        this.getData();
    }

    getData = async () => {
        const { data } = await axios.get('/api/v1');
        console.log(data);
        this.setState({ ...data });
    }

    getAppointments = () => {
        const { appointments, doctors, rooms } = this.state;
        const apps = appointments.map((a) => {
            const room = find(rooms, { roomId: a.roomId });
            const doctor = find(doctors, {doctorId: a.doctorId });
            const { date } = a;
            return { date, doctor, room };
        })
        .sort((a, b) => a.date - b.date);

        return apps;
    }

    getSpecialists = () => {
        const { doctors, rooms } = this.state;
        const specialists = doctors.map((doc) => {
            const { roomNumber } = find(rooms, { roomId: doc.roomId });
            return { ...doc, roomNumber };
        });
        return specialists;
    }

    handleChangeField = ({ target }) => {
        const { doctors, orderBy, currentSortField } = this.state;
        const { value } =  target;
        const sortFunctions = {
            ask: sortBy(doctors, value),
            desk: sortBy(doctors, value).reverse(),
        };
        let newOrderBy = orderBy;
        if (currentSortField === value) {
            newOrderBy = orderBy === 'ask' ? 'desk' : 'ask';
        }
        const sortedDoctors = sortFunctions[orderBy];
        this.setState({ doctors: sortedDoctors, orderBy: newOrderBy, currentSortField: value });
    }

    render() {
        return (
            <Router>
                <div className = "app" style={{ 'maxWidth': '480px','minWidth': '320px' }}>
                    <Header />
                    <Content>
                        <Route exact path="/" render={() => <Main apps={this.getAppointments()} />} />
                        <Route path="/profile" render={() => <Profile profile={this.state.profile} />} />
                        <Route path="/appointments" render={() => <Appointments apps={this.getAppointments()} />} />
                        <Route path="/specialists" render={() => <Specialists onChangeField={this.handleChangeField} specialists={this.getSpecialists()} />} />
                        <Route path="/plan" component={Plan}/>
                    </Content>
                </div>
            </Router>
        );
    };
}
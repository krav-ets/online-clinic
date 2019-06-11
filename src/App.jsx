import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import axios from 'axios';
import { find } from 'lodash';

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
      };
    componentDidMount() {
        this.getData();
    }

    getData = async () => {
        const { data } = await axios.get('/api/v1');
        console.log(data);
        this.setState({ ...data });
    }

    genAppointments = () => {
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

    genSpecialists = () => {
        const { doctors, rooms } = this.state;
        const apps = doctors.map((doc) => {
            const { roomNumber } = find(rooms, { roomId: doc.roomId });
            return { ...doc, roomNumber };
        });
        return apps;
    }

    render() {
        return (
            <Router>
                <div className = "app" style={{ 'max-width': '480px','min-width': '320px' }}>
                    <Header />
                    <Content>
                        <Route exact path="/" render={() => <Main apps={this.genAppointments()} />} />
                        <Route path="/profile" render={() => <Profile profile={this.state.profile} />} />
                        <Route path="/myrecords" render={() => <Appointments apps={this.genAppointments()} />} />
                        <Route path="/specialists" render={() => <Specialists specialists={this.genSpecialists()} />} />
                        <Route path="/plan" component={Plan}/>
                    </Content>
                </div>
            </Router>
        );
    };
}
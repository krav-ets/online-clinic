import React from 'react';
import { Link } from 'react-router-dom';
import Card from './Card';

export default class MyRecords extends React.Component {
    render() {
        const { apps } = this.props;
        const appointments = apps
            .sort((a, b) => a.date - b.date)
            .slice(0, 2);

        return (
            <div className="vh-100">
                {appointments.map(a => <Card key={a.date} appointment={a} />)}
                <Link to="/plan">
                    <div className="card">
                        <img src="hospital.svg" className="card-img" alt="..." />
                    </div>
                </Link>
            </div>
        );
    }
}
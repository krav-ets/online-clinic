import React from 'react';
import { Link } from 'react-router-dom';
import Card from './Card';

export default class Main extends React.Component {
    render() {
        const { apps } = this.props;
        const appointments = apps
            .sort((a, b) => a.date - b.date)
            .slice(0, 2);

        return (
            <>
                {appointments.map(a => <Card key={a.date} appointment={a} />)}
                <div className="row justify-content-center">
                    <div className="col-6">
                        <Link to="/appointments" className="mb-3 btn btn-block btn-outline-success btn-sm">Все записи</Link>
                    </div>
                </div>
                <Link to="/plan">
                    <div className="card" style={{"height": "200px", "overflow": "hidden"}}>
                        <img src="hospital.svg" className="card-img" alt="..." />
                    </div>
                </Link>
            </>
        );
    }
}
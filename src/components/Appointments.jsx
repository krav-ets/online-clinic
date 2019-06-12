import React from 'react';
import Card from './Card';

export default class Appointments extends React.Component {
    render() {
        const { apps } = this.props;
        return (
            <>
                {apps.map(a => <Card key={a.date} appointment={a} />)}
            </>
        );
    }
}
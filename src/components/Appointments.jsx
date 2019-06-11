import React from 'react';
import { Link } from 'react-router-dom';
import Card from './Card';

export default class MyRecords extends React.Component {
    render() {
        const { apps } = this.props;
        return (
            <div>
                {apps.map(a => <Card key={a.date} appointment={a} />)}
            </div>
        );
    }
}
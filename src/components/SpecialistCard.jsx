import React from 'react';
import cn from 'classnames';
import { Link } from 'react-router-dom';

export default class SpecialistCard extends React.Component {
    state = { isOpen: false };

    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen,
        });
    }

    getShortSchedule = (schedule) => {
        return schedule
            .map(day => day[0])
            .join(', ');
    }

    getFullSchedule = (schedule) => {
        return schedule
            .map((day, index) => <li key={index}>{day[0]}: c {day[1].from} до {day[1].to}</li>);
    }

    render() {
        const { firstName, lastName, patronymic, specialization, schedule, roomNumber } = this.props;
        const fullName = `${lastName} ${firstName} ${patronymic}`;
        const { isOpen } = this.state;

        const classes = cn({
            modal: true,
            fade: isOpen,
            show: isOpen,
        });

        const style = {
            display: isOpen ? 'block' : 'none',
        };

        return (
            <div>
                <div className="card shadow" onClick={this.toggle}>
                    <div className="card-body">
                        <h5 className="card-title">{fullName}</h5>
                        <h6 className="card-subtitle mb-2 text-muted">{specialization}</h6>
                        <p className="card-text">Кабинет №{roomNumber}</p>
                        <p className="card-text">Дни работы: {this.getShortSchedule(schedule)}</p>
                    </div>
                </div>
                <div className={classes} style={style}>
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <div className="modal-title">{fullName}</div>
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={this.toggle}>
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                            <div className="modal-body">
                                <h6 className="text-muted">{specialization}</h6>
                                <p>Кабинет №{roomNumber}</p>
                                <p>Расписание:{}</p>
                                <ul>{this.getFullSchedule(schedule)}</ul>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

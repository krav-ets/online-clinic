import React from 'react';
import cn from 'classnames';

export default class Card extends React.Component {
    state = { isOpen: false };

    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen,
        });
    }

    render() {
        const { date, room, doctor: { firstName, lastName, patronymic, specialization } } = this.props.appointment;
        const fullName = `${lastName} ${firstName} ${patronymic}`;

        const dateApp = new Date(date * 1000);
        const options = {
            year: 'numeric',
            month: 'numeric',
            day: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
        };
        const stringDate = dateApp.toLocaleString("ru", options)

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
            <>
                <div className="card border-light mb-3 shadow">
                    <h5 className="card-header">
                        <div className="row">
                            <div className="col-auto mr-auto">{stringDate}</div>
                            <div className="col-auto">каб. {room.roomNumber}</div>
                        </div>
                    </h5>
                    <div className="card-body">
                        <h5 className="card-title">{fullName}</h5>
                        <p className="card-text">{specialization}</p>
                        <div className="row justify-content-end">
                            <button type="button" className="mx-1 btn btn-outline-success btn-sm">Маршрут</button>
                            <button type="button" className="mx-1 btn btn-outline-success btn-sm" onClick={this.toggle}>Отменить</button>
                        </div>
                    </div>
                </div>
                <div className={classes} style={style}>
                    <div className="modal-dialog"  role="document">
                        <div className="modal-content">
                            <div className="modal-body">
                                Вы действительно хотите отменить запись?
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-sm btn-outline-warning" onClick={this.toggle}>Да, отменить</button>
                                <button type="button" className="btn btn-sm btn-outline-secondary" onClick={this.toggle}>Нет, не отменять</button>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
    
}

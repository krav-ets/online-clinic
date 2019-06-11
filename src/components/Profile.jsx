import React from 'react';
import { Link } from 'react-router-dom';

export default class Profile extends React.Component {
    render() {
        const { firstName, lastName, patronymic, phoneNumber, email } = this.props.profile;
        const fullName = `${lastName} ${firstName} ${patronymic}`;
        return (
            <div>
                <div className="card mb-3">
                    <div className="row no-gutters">
                        <div className="col-4">
                            <img src="photo.png" className="card-img rounded" alt="..." />
                        </div>
                        <div className="col-8">
                            <div className="card-body">
                                <h5 className="card-title">{fullName}</h5>
                                <p className="card-text mt-5">Телефон: {phoneNumber}</p>
                                <p className="card-text">Email: {email}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="list-group">
                    <Link to="/myrecords" className="list-group-item list-group-item-action">Мои записи</Link>
                    <Link to="/specialists" className="list-group-item list-group-item-action">Кабинеты и специалисты</Link>
                    <Link to="/plan" className="list-group-item list-group-item-action">Схема поликлиники</Link>
                </div>
                <div class="row justify-content-center">
                    <div class="col-4">
                        <button type="button" className="btn btn-block btn-outline-success btn-sm">Выйти</button>
                    </div>
                </div>
                
            </div>
        );
    }
}
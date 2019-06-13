import React from 'react';
import { uniqueId } from 'lodash';
import SpecialistCard from './SpecialistCard';

export default class Specialists extends React.Component {

    render() {
        const { specialists, onChangeField } = this.props;
        return (
            <>
                <select className="form-control form-control-sm" name="country" 
                onChange={onChangeField} value=''>
                    <option>Сортировать по</option>
                    <option value="specialization">Специализации</option>
                    <option value="firstName">Имени</option>
                    <option value="lastName">Фамилии</option>
                </select>
                {specialists.map(spec => <SpecialistCard {...spec} key={uniqueId()}/>)}
            </>
        );
    }
}
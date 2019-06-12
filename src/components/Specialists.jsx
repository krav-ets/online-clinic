import React from 'react';

import cn from 'classnames';
import { Link } from 'react-router-dom';
import { uniqueId } from 'lodash';
import SpecialistCard from './SpecialistCard';

export default class Specialists extends React.Component {
    
    render() {
        const { specialists } = this.props;
        return (
            <div>
                {specialists.map(spec => <SpecialistCard {...spec} key={uniqueId()}/>)}
            </div>
        );
    }
}
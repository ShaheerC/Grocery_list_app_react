import React from 'react';
import FilterItem from './filterItem';

const Filters = () => {
    
    return(
        <ul className='filters'>
            <FilterItem num={1} category={'All'}/>
            <FilterItem num={2} category={'Meat'}/>
            <FilterItem num={3} category={'Prod'}/>
            <FilterItem num={4} category={'Dairy'}/>
            <FilterItem num={5} category={'Bakery'}/>
        </ul>
    )
}

export default Filters;
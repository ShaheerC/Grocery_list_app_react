import React from 'react';

const FilterItem = ({num, category}) =>{
    
    return(
        <li><input type="radio" name="category" value="all" id={`filter${num}`} checked={false}/><label htmlFor={`filter${num}`}>{category}</label></li>
    )
}

export default FilterItem;

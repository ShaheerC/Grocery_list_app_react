import React from 'react';
import ListItem from './listItem';

const ShoppingList = () => {

    return(
        <ul className="shoppinglist" id="ShoppingList">
            <ListItem category={'meat'} item={'Steak'} />
            <ListItem category={'prod'} item={'Apples'} />
            <ListItem category={'dairy'} item={'Milk (1L, 2%)'} />
            <ListItem category={'bakery'} item={'Baguettes'} />
        </ul>
    )
}

export default ShoppingList;
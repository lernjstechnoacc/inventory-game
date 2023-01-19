import React from 'react';

import './itemList.scss'

interface ItemListProps<T> {
    items: T[];
    renderItem: (item: T) => React.ReactNode
}

export default function ItemList<T>(props: ItemListProps<T>) {

    return (
        <ul>
            {props.items.map(props.renderItem)}
        </ul>
    )
}
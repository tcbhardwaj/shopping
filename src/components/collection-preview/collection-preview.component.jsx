import React from 'react';

import CollectionItem from '../collection-item/collection-item.component';

import './collection.styles.scss'

const CollectionPreview = ({title, items}) => (
    <div className='collection-preview'>
        <h1>{title.toUpperCase()}</h1>
        <div className='preview'>
            {items.slice(0, 4).map(({id, ...otherProps}) => (
                <CollectionItem key={id} {...otherProps}/>
            ))}
        </div>
    </div>
);

export default CollectionPreview;
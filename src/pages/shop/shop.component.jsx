import React from 'react';
import CollectionPreview from '../../components/collection-preview/collection-preview.component'
import SHOP_DATA from './shop.data';

class ShopPage extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            collections: SHOP_DATA
        }
    }

    render() {
        const {collections } = this.state;
        return(
            <div>
                {console.log(collections)}
                {
                    collections.map(({id, ...collectionOptions}) => (
                    <CollectionPreview key={id} {...collectionOptions} />
                ))}
            </div>
        );
    }
}

export default ShopPage;

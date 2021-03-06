import React from 'react'
import SHOP_DATA from "./shop.data"
import CollectPreview from "../../components/collection-preview/collection-preview.component"
export class ShopPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            collections:SHOP_DATA
        }
    }

    render() {
        const {collections} = this.state
        return (
            <div className="shop">
               {
                   collections.map(
                       ({id, ...otherProperties}) => <CollectPreview key={id} {...otherProperties}/>
                       )
                }  
            </div>
        )
    }
}
  
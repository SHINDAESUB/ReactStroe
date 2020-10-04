import React ,{ Component } from 'react';
import { Selector } from './Selector';
import { ProductDisplay } from './ProductDisplay';
import { SupplierDisplay } from './SupplierDisplay';

export default class ProductsAndSuppliers extends Component{

    constructor(props){
        super(props);
        this.state ={
            products: [
                {id: 1 ,name:"카약", category:"수기종목", price: 275},
                {id: 2 ,name:"요트", category:"수기종목", price: 48.95},
                {id: 3 ,name:"축구", category:"축구", price: 19.50},
            ],
            suppliers: [
                {id: 1 ,name:"램파드", city:"English" , products:[1,2]},
                {id: 2 ,name:"무리뉴", city:"Poroto" , products:[3]},
            ]
        }
        this.idConter = 100;
    }

    saveData = (collection,item) =>{
        if (item.id === ""){
            item.id = this.idConter++;
            this.setState(state => state[collection] = state[collection].concat(item));
        }else{
            this.setState(state => state[collection] = state[collection].map(stored => stored.id === item.id ? item: stored))
        }
    }

    deleteData = (collection,item ) => {
        this.setState(state => state[collection] =state[collection].filter(stored => stored.id !== item.id ));
    }

    render(){
        return <div>
                    <Selector>
                        <ProductDisplay
                            name="Products"
                            products={this.state.products}
                            saveCallback={ p => this.saveData("products",p) }
                            deleteCallback={ p => this.deleteData("products",p)}
                        />
                        <SupplierDisplay
                            name="Suppliers"
                            suppliers={this.state.suppliers}
                            saveCallback={ s => this.saveData("suppliers",s)}
                            deleteCallback={ s => this.deleteData("suppliers",s) }
                        />
                    </Selector>
               </div>
    }

}
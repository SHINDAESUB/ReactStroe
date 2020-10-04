import React, { Component } from "react"

export class ProductEditor extends Component{

    constructor(props) {
        super(props);
        this.state = {
            formData: {
                id: props.product.id || "",
                name : props.product.name ||"",
                category : props.product.category || "",
                price: props.product.price || ""
            }
        }
    }

    handleChage = (ev) => {
        ev.persist();
        this.setState(state => state.formData[ev.target.name] = ev.target.value);
    }

    handleClick = (ev) => {
        this.props.saveCallback(this.state.formData);
    }

    render(){
        return <div className="m-2">
                    <div className="form-group">
                        <label>ID</label>
                        <input className="form-control" name="id" 
                            disabled
                            value={this.state.formData.id}
                            onChange={this.handleChage} />    
                    </div>
                    <div className="form-group">
                        <label>Name</label>
                        <input className="form-control" name="name" 
                            disabled
                            value={this.state.formData.name}
                            onChange={this.handleChage} />    
                    </div>
                    <div className="form-group">
                        <label>Category</label>
                        <input className="form-control" name="category" 
                            disabled
                            value={this.state.formData.category}
                            onChange={this.handleChage} />    
                    </div>
                    <div className="form-group">
                        <label>price</label>
                        <input className="form-control" name="price" 
                            disabled
                            value={this.state.formData.price}
                            onChange={this.handleChage} />    
                    </div>
                    <div className="text-center">
                        <button className="btn btn-primary m-1" onClick="{ this.handleClick }">
                            Save
                        </button>
                        <button className="btn btn-secondary" onClick={this.props.cancelCallback}>
                            Cancel 
                        </button>
                    </div>
               </div>
    }
}



import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Product from './Product';
 
/* Main Component */
class Main extends Component {
  constructor() { 
    super();
    
    this.state = {
        products: [],
        currentProduct: null
    }
  }

  handleClick(product) {
    this.setState({currentProduct:product});
  }
  
  componentDidMount() {
    fetch('/api/products')
        .then(response => {
            return response.json();
        })
        .then(products => {
            this.setState({ products });
        });
  }
 
 renderProducts() {
    return this.state.products.map(product => {
        return (
            <li onClick={() =>this.handleClick(product)} key={product.id} >
                { product.id } { product.title }
            </li>      
        );
    })
  }
   
  render() {
    return (
        <div className="main"> 
            <div className="sider">
              <h3> All products </h3>
              <ul>
                { this.renderProducts() }
              </ul> 
            </div> 
            <Product product={this.state.currentProduct} />
        </div> 
       
    );
  }
}

export default Main;
 
/* The if statement is required so as to Render the component on pages that have a div with an ID of "root";  
*/
 
if (document.getElementById('root')) {
    ReactDOM.render(<Main />, document.getElementById('root'));
}

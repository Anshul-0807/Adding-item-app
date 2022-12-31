import React from 'react';

class Additem extends React.Component {
 constructor(props){
    super(props);
    this.props = {
        productName:" ",
        productPrice:0, 
    };
 }
  render() {
    return (
      <form className='row mb-5'>
        <div className="mb-3 col-4">
          <label htmlFor="Inputname" className="form-label">
          Name
          </label>
          <input
            type="text"
            className="form-control"
            id="Inputname"
            aria-describedby="name"
            name='productName'
            onChange={(e)=>{
                this.setState({productName: e.currentTarget.value});
            }}
            value ={this.state.productName}

          />
         
        </div>
        <div className="mb-3 col-4">
          <label htmlFor="InputPrice" className="form-label">
            Price
          </label>
          <input
            type="Number"
            className="form-control"
            id="Price"
            name="productPrice"
            onChange={(e)=>{
                this.setState({productPrice: e.currentTarget.value})
            }}
            value={this.state.productPrice}
          />
        </div>
        
        
        <button type="submit" className="btn btn-primary col-4 " onClick={()=>{
            this.props.additem()
        }}>
          Add
        </button>
      </form>
    );
  }
}

export default Additem;

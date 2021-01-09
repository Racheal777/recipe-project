
import React, { Component } from 'react';
import '../Components/styles.css'


export default class AddDocumentComponent extends Component {
    
 
    documentData;
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
       
        this.state = [{
            title: '',
            cooktime: '',
            ingredients: '',
            method: ''
        
    }]
    }
   
handleChange= (e)=> {
    this.setState({[e.target.name]:e.target.value});
}
// on form submit...
handleFormSubmit(e) {
    e.preventDefault()
   localStorage.setItem('document',JSON.stringify(this.state));
}

// React Life Cycle
componentDidMount() {
    this.documentData = JSON.parse(localStorage.getItem('document'));
 
    if (localStorage.getItem('document')) {
        this.setState({
            title: this.documentData.title,
           cooktime: this.documentData.cooktime,
           ingredients: this.documentData.ingredients,
           method: this.documentData.method
    })
} else {
    this.setState({
        title: '',
        cooktime: '',
        ingredients: '',
        method: ''
    })
}

}

 
render() {
    return (
        <div className='add-app'> 

         <div><h1>Add Recipe</h1></div>

         
            <form onSubmit={this.handleFormSubmit}>
                   

                    <label>Title</label>
                    <input type="text" name="title" value={this.state.title} onChange={this.handleChange} />
            
                
                    <label>Cook Time</label>
                    <input type="text" name="cooktime"  value={this.state.cooktime} onChange={this.handleChange} />
            
                
                    <label>Ingredients</label>
                    <input type="text" name="ingredients" value={this.state.ingredients} onChange={this.handleChange} />
            
                    <label>Method</label>
                    <input type="text" name="method"style={{height:"100px",resize: 'vertical'}}  value={this.state.method} onChange={this.handleChange} />

                <button type="submit" >Submit</button>
            </form>
        </div>
    )
}
}
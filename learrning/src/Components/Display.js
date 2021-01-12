import React from 'react'
class App extends React.Component {
  constructor(props) {
    super(props);
    var storedClicks = 0;
    this.handleFormSubmit = this.handleFormSubmit.bind(this);

    if (localStorage.getItem('clicks')) {
      storedClicks = parseInt(localStorage.getItem('clicks'));
    }

    this.state = {
      clicks: storedClicks,
    };
    this.click = this.click.bind(this);
  }

  click() {
    var newclick = this.state.clicks + 1;
    this.setState({clicks: newclick});
    // Set it
    localStorage.setItem('clicks', newclick);
  }
  handleFormSubmit(e) {
    e.preventDefault()
   localStorage.setItem('document',JSON.stringify(this.state));
}
  render() {
    return (
      <div>
        <h2>Add Recipe</h2>

        <form onSubmit={this.handleFormSubmit}>

        <label>Title</label>
                    <input type="text" name="title" value={this.state.title} onChange={this.handleChange} />
            
                
                    <label>Cook Time</label>
                    <input type="text" name="cooktime"  value={this.state.cooktime} onChange={this.handleChange} />
            
                
                    <label>Ingredients</label>
                    <input type="text" name="ingredients" value={this.state.ingredients} onChange={this.handleChange} />
            
                    <label>Method</label>
                    <input type="text" name="method"style={{height:"100px",resize: 'vertical'}}  value={this.state.method} onChange={this.handleChange} /> 

 

<button onClick={this.click}>Add Recipe</button> Counter {this.state.clicks}

    
    </form>
       
      </div>
    );
  }
}
export default App;
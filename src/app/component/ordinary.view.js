import React, { Component } from "react";
import axios from 'axios';

const API_URL = 'http://192.168.178.32:5000/ordinary'

export class Ordinary extends Component {
  constructor(props) {
    super(props)
    this.state = { 
      data: [],
      nextId: -1,
      info: '',
    } 

    this.onChangeItem = this.onChangeItem.bind(this);
    this.handleSubmitItem = this.handleSubmitItem.bind(this);
  }
  // Function to get Data from REST API
  getData() {
    axios({
      method: 'get',
      url: API_URL
    }).then((response) => {
      this.setState({
        data: response.data.payload,
        nextId: response.data.nextVal
      })
    })
  }

  // Fetch Data after mount
  componentDidMount() {
    this.getData()
  }

  // Update state after from input
  onChangeItem(event) {
    this.setState({info: event.target.value})     
  }

  // Handle Form Submit, i.e. send data to database 
  // and update state.
  handleSubmitItem(event) {
    if (this.state.nextId > 0) {
      axios({
        method: 'post',
        url: API_URL + '/item',
        data: {
          info: this.state.info
        }
      }).then((response) => {        
        // Add submitted Item to state. Since Id is generated by the database, one has to guess.
        // Future TO DO: return nextval with response.
        this.setState(state => {
          const data = state.data.concat({id: this.state.nextId, info: this.state.info})
          return {
            data,
            nextId: response.data.nextVal
          };
        })
        //this.getData();
      })
      event.preventDefault();
    } else {
      alert('Cannot perform request. No API connection so far.')
    }
  }

  deleteItem(i,state)  {
    axios({
      method: 'delete',
      url: API_URL + '/item',
      data: {
        id: i
      }
    }).then((response) => {
      this.setState(state => {
        const data = state.data.filter(item => i !== item.id);
   
        return {
          data,
        };
      });
    })
  }

  render() {
    return (
      <div>
        <h1>Ordinary Table</h1>
        <p>{JSON.stringify(this.state)}</p>
        <p>Mit dem folgenden Eingabefeld kann ein neuer Dateieintrag erzeugt werden:</p>
        <form onSubmit={this.handleSubmitItem}>
          <label>Info:</label>
          <input name="Info" type="text" value={this.state.info} onChange={this.onChangeItem}/>
          <input type="submit" value="Submit" />
        </form>
        <div>
        {
           this.state.data.map((item,i) => {return <OrdinaryItem key={i} id={item.id}  info={item.info} deleteItem={this.deleteItem.bind(this,item.id)} />})
        }
        </div>
      </div>
    );
  }
}

function OrdinaryItem(props) {
  return (
    <div>
      <p>{props.id}</p>
      <p>{props.info}</p>
      <button onClick={props.deleteItem}>Delete</button>
    </div>
  )
}

export default Ordinary;
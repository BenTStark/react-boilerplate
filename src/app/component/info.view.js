import React, { Component } from "react";
import axios from 'axios';

export class Info extends Component {
  constructor(props) {
    super(props)
    this.state = { 
      data: [],
      id: '',
      info: '',
    } 

    this.onChange = this.onChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.getData()
  }

  getData() {
    let url = 'http://192.168.178.32:5000/ordinary'
    axios({
      method: 'get',
      url: url
    }).then((response) => {
      this.setState({
        data: response.data
      })
    })
  }


  onChange(event) {
    this.setState({id: this.state.data.length + 1})
    this.setState({info: event.target.value})
        
  }

  handleSubmit(event) {
    let url = 'http://192.168.178.32:5000/ordinary/item'
    axios({
      method: 'post',
      url: url,
      data: {
        id: this.state.id,
        info: this.state.info
      }
    }).then((response) => {
      this.getData();
    })
    event.preventDefault();
    
  }

  delete(i,state)  {
    let url = 'http://192.168.178.32:5000/ordinary/item'
    axios({
      method: 'delete',
      url: url,
      data: {
        id: i
      }
    }).then((response) => {
      this.getData();
    })
  }

  render() {
    return (
      <div>
        <h1>Info Pages</h1>
        <p>{JSON.stringify(this.state)}</p>
        <p>Mit den beiden folgenden Eingabefelder kann ein neuer Dateieintrag erzeugt werden:</p>
        <form onSubmit={this.handleSubmit}>
          <label>ID:</label>
          <input readOnly name="ID" type="number" value={this.state.id}/>
          <label>Info:</label>
          <input name="Info" type="text" value={this.state.info} onChange={this.onChange}/>
          <input type="submit" value="Submit" />
        </form>
        <div>
        {
           this.state.data.map((item,i) => {return <OrdinaryItem key={i} id={item.id}  info={item.info} delete={this.delete.bind(this,item.id)} />})
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
      <button onClick={props.delete}>Delete</button>
    </div>
  )
}

export default Info;

import React, { Component } from 'react'
import CardSection from './components/CardSection';
import Charts from './components/Charts';
import Header from './components/Header';

export default class App extends Component {
  constructor(){
    super();
    this.state = {
      Id: "device id",
      Data: {}
    }
  }

  fetchData = async () => {
    let data = await fetch('dashboard\\dataset.csv' + this.state.Id)
    let JsonData = await data.json()
    this.setState({Id: this.state.Id, Data: JsonData})
  }

  handleSubmit = async (event)=>{
    await console.log(event.target.value)
    await this.setState({Id: event.target.value, Data:this.state.Data})
    this.fetchData()
  }
  
  componentDidMount(){
    this.fetchData()
  }
  render() {
    return (
      <div>
        <Header handle_Submit = {this.handleSubmit}/>   
        <CardSection device = {this.state.Data.device} Timestamp = {this.state.Data.t} Windspeed = {this.state.Data.w} Wind-Dir = {this.state.Data.h} PM1 = {this.state.Data.p1} PM25 = {this.state.Data.p25} PM10 = {this.state.Data.p10}/>   
        <Charts/>
      </div>
    )
  }
}

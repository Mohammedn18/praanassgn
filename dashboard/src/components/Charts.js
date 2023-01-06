import React, { Component } from 'react'
import Chart from "react-apexcharts";

export class Charts extends Component 
{
    constructor(props) {
        super(props);
    
        this.state = {
            PM1: {
                options: {
                    chart: {
                        id: 'area-location',
                    },
                    grid: {
                        show: false
                    }, title: {
                        text: "Time",
                        style: {
                            fontSize: '14px', fontWeight: 'bold', color: "#fcdf03"
                        }
                    }, stroke: {
                        curve: 'smooth'
                    }, xaxis: {
                        type: "datetime"
                    }, dataLabels: {
                        enabled: false
                    }, yaxis: {
                        show: false
                    }, colors: ["#fcdf03"],
                    tooltip: {
                        y: {
                            formatter: (value) => { return value.toFixed(2) }
                        }, theme: "dark"
                    }, selection: 365,
                },
                series: [
                    {
                        name: 'Series',
                        data: [[pm1, pm25, pm10]]
                    }
                ]
            }
            ,PM25: {
                options: {
                    grid: {
                        show: false
                    }, title: {
                        text: "Time",
                        style: {
                            fontSize: '14px', fontWeight: 'bold', color: '#ff69f5'
                        }
                    }, stroke: {
                        curve: 'smooth'
                    }, xaxis: {
                        type: "datetime"
                    }, dataLabels: {
                        enabled: false
                    }, yaxis: {
                        show: false
                    }, colors: ["#ff69f5"],
                    tooltip: {
                        y: {
                            formatter: (value) => { return value.toFixed(2) }
                        }, theme: "dark"
                    }
                },
                series: [
                    {
                        name: 'Series',
                        data: [[pm1, pm25, pm10]]

                    }
                ]
            }
            ,
            PM10: {
                options: {
                    grid: {
                        show: false
                    }, title: {
                        text: "Time",
                        style: {
                            fontSize: '14px', fontWeight: 'bold', color: "#00ffea"
                        }
                    }, stroke: {
                        curve: 'smooth'
                    }, xaxis: {
                        type: "datetime"
                    }, dataLabels: {
                        enabled: false
                    }, yaxis: {
                        show: false
                    }, colors: ["#00ffea"],
                    tooltip: {
                        y: {
                            formatter: (value) => { return value.toFixed(2) }
                        }, theme: "dark"
                    }, 
                },
                series: [
                    {
                        name: "Series",
                        data: [[pm1, pm25, pm10]]

                    }
                ]
            }
            
        };
        this.prevSelection = this.state.data.options.selection
    }
    prevId = this.props.Id

    fetchData = async () => {
        let chartData = await fetch('dashboard\\dataset.csv' + this.props.Id + this.state.Data.options.selection);
        let jsonChartData = await chartData.json()
        this.setState({ PM1: { options: this.state.PM1.options, series: [{ name: 'P1', data: jsonChartData.PM1}] } })
        this.setState({ PM25: { options: this.state.PM25.options, series: [{ name: 'P25', data: jsonChartData.pm25}] } })
        this.setState({ PM10: { options: this.state.PM10.options, series: [{ name: 'P10', data: jsonChartData.pm10 }] } })
    }


    componentDidMount() {
        this.fetchData()
        this.interval = setInterval(() => this.fetchData(), 2000);
    }
    componentWillUnmount() {
        clearInterval(this.interval);
      }
    componentDidUpdate() {
        if (this.prevId !== this.props.Id) {
            this.prevId = this.props.Id
            this.fetchData()
        }
        if (this.prevSelection !== this.state.PM1.options.selection) {
            this.prevSelection =this.state.PM1.options.selection
            this.fetchData()
        }
    }

    render() 
    {
        return (  
            <div>         
                <div className="container">
                    <div className="row">
                        <div className="col" style={{ maxWidth: '610px' }}>
                            <div id="chart">
                                <div className="toolbar">
                                    <button id="one"
                                        onClick={() => this.setState({ PM1: { options:{...this.tooltip,selection: 1},series: this.state.PM1.series }})}>
                                        1
                                    </button>
                                    &nbsp;
                                    <button id="two"
                                        onClick={() => this.setState({ PM25: { options:{...this.tooltip,selection: 7},series: this.state.PM25.series }})}>
                                        1
                                    </button>
                                    &nbsp;
                                    <button id="three"
                                        onClick={() => this.setState({ PM10: { options:{...this.tooltip,selection: 30},series: this.state.PM10.series }})}>
                                        1
                                    </button>
                                    &nbsp;
                                <Chart
                                    options={this.state.PM1.options}
                                    series={this.state.PM25.series}
                                    type="area"
                                    height='400'
                                    width='600' />
                            </div>
                        </div>
                        <div className="col" style={{ maxWidth: '200px' }}>

                            <div className="card-body ">
                                <h6 className="card-title" style={{ fontFamily: 'NHaasGroteskDSPro-65Md' }}>Time</h6>
                                <p className="card-text fw-bold "
                                    style={{ fontFamily: 'NHaasGroteskDSPro-65Md', color: 'rgb(255, 255, 255)', fontSize: 'small' }}>                                    
                                </p>
                            </div>

                            <div className="card-body ">
                                <h6 className="card-title" style={{ fontFamily: 'NHaasGroteskDSPro-65Md' }}>Windspeed</h6>
                                <p className="card-text fw-bold "
                                    style={{ fontFamily: 'NHaasGroteskDSPro-65Md', color: 'rgb(255, 255, 255)', fontSize: 'small' }}>
                                </p>
                            </div>
                            <div className="card-body ">
                                <h6 className="card-title" style={{ fontFamily: 'NHaasGroteskDSPro-65Md' }}>Location</h6>
                                <p className="card-text fw-bold "
                                    style={{ fontFamily: 'NHaasGroteskDSPro-65Md', color: 'rgb(255, 255, 255)', fontSize: 'small' }}>
                                    {this.props.Location}
                                </p>
                            </div>               

                        <div className="col" style={{ maxWidth: '310px' }}>
                            <div >
                                <Chart
                                    options={this.state.PM1.options}
                                    series={this.state.PM1.series}
                                    type="line"
                                    height='200'
                                    width='300' />
                            </div>
                            <div >
                                <Chart
                                    options={this.state.PM25.options}
                                    series={this.state.PM25.series}
                                    type="line"
                                    height='200'
                                    width='300'/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div> 
        )
            
    }
        
}
    
        


export default Charts
import React, { Component } from 'react'

export class CardSection extends Component {
    render() {
        return (
            <div>
                <div className="fs-1 fw-bold m-3 text-Capitalize"
                    style={{ fontFamily: 'NHaasGroteskDSPro-65Md', marginTop: '3px !important', marginBottom: '0px !important' }}>
                    {this.props.device}
                </div>
                <section className="row m-3 mb-0" style={{ marginTop: ' 2px !important' }}>
                    <div className="card text-white text-center  m-3"
                        style={{ width: "11rem", backgroundColor: "rgb(43, 43, 43)", marginTop: "0px !important" }}>
                        <div className="card-body">
                            <h6 className="card-title" style={{ fontFamily: 'NHaasGroteskDSPro-65Md' }}>TimeStamp</h6>
                        </div>
                    </div>
                    <div className="card text-white text-center  m-3"
                        style={{ width: "11rem", backgroundColor: "rgb(43, 43, 43)", marginTop: "0px !important" }}>
                        <div className="card-body">
                            <h6 className="card-title" style={{ fontFamily: 'NHaasGroteskDSPro-65Md' }}>Windspeed</h6>
                        </div>
                    </div>
                    <div className="card text-white text-center  m-3"
                        style={{ width: "11rem", backgroundColor: "rgb(43, 43, 43)", marginTop: "0px !important" }}>
                        <div className="card-body">
                            <h6 className="card-title" style={{ fontFamily: 'NHaasGroteskDSPro-65Md' }}>Wind-Direction</h6>
                        </div>
                    </div>

                    <div className="card text-white text-center  m-3"
                        style={{ width: "11rem", backgroundColor: "rgb(43, 43, 43)", marginTop: "0px !important" }}>
                        <div className="card-body">
                            <h6 className="card-title" style={{ fontFamily: 'NHaasGroteskDSPro-65Md' }}>PM 1.0 particle</h6>
                        </div>
                    </div>
                    <div className="card text-white text-center  m-3"
                        style={{ width: "11rem", backgroundColor: "rgb(43, 43, 43)", marginTop: "0px !important" }}>
                        <div className="card-body">
                            <h6 className="card-title" style={{ fontFamily: 'NHaasGroteskDSPro-65Md' }}>PM 2.5 particle</h6>
                        </div>
                    </div>
                    <div className="card text-white text-center  m-3"
                        style={{ width: "11rem", backgroundColor: "rgb(43, 43, 43)", marginTop: "0px !important" }}>
                        <div className="card-body">
                            <h6 className="card-title" style={{ fontFamily: 'NHaasGroteskDSPro-65Md' }}>PM 10 particle</h6>
                        </div>
                    </div>
                </section>
                <div>
                    <div className="text-white text-center"
                        style={{ fontFamily: 'NHaasGroteskDSPro-65Md', overflow: 'visible', height: '2px', marginTop: "1%" }}> Current
                        Location</div>
                    <div style={{
                        fontFamily: 'NHaasGroteskDSPro-65Md', fontSize: '90px',
                        fontWeight: '700', color: "#fcdf03", textDecoration: 'none solid rgb(255, 255, 255)',
                        textAlign: 'center'
                    }}>
                        {this.props.t}
                    </div>
                </div>
            </div>
        )
    }
}

export default CardSection
import React, { Component } from 'react'

export class Header extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg" style={{backgroundColor:"aqua"}}>
                    <div className="container-fluid">

                        <select className="form-select form-select-lg " aria-label=".form-select-lg example" name='selectTime'
                            style={{ width: "fit-content" }} onChange={this.props.handleSubmit}>
                            <option value="Location">Select Location</option>
                            <option value="PM 1.0">pm 1</option>
                            <option value="PM 2.5">pm 2.5</option>
                            <option value="PM 10.0">pm 10.0</option>
                        </select>

                        <a className="navbar-brand d-flex ml-auto display-2 text-dark fs-2 fw-bold text-uppercase "
                            style={{ fontFamily: 'NHaasGroteskDSPro-65Md'}} href="/">Praan Dashboard</a>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Header
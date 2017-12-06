import React, { Component } from 'react';
import Selector from './select';

class Form extends Component {

    render() {
        const handleStringSubmit = e => {
            e.preventDefault();
            this.props.stringtranslate(this.props.string)
        }
        const handleDNASubmit = e => {
            e.preventDefault();
            this.props.dnatranslate(this.props.dna)
        }

        const handleStringChange = event => {
            this.props.handleStringChange(event.target.value)
        }
        const handleDNAChange = event => {
            this.props.handleDNAChange(event.target.value)
        }

        return (
            <div style={{left: '0'}}>
                <form onSubmit={handleStringSubmit}>
                    <label>
                        String:
                    <input type="text" name="name" value={this.props.string} onChange={handleStringChange} />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
                <br />
                <form onSubmit={handleDNASubmit}>
                    <label>
                        <Selector />
                    <input type="text" name="name" value={this.props.dna} onChange={handleDNAChange} />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
                {/* <div>{this.props.translation}</div> */}
            </div>
        )
    }
}

export default Form;
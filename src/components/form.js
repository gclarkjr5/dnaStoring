import React, { Component } from 'react';
import Selector from './select';

class Form extends Component {

    render() {
        const handleStringSubmit = e => {
            e.preventDefault();
            this.props.stringtranslate(this.props.stringValue, this.props.DNARNA)
        }
        const handleDNASubmit = e => {
            e.preventDefault();            
            this.props.dnatranslate(this.props.dnaValue, this.props.DNARNA)
        }

        const handleStringChange = event => {
            this.props.handleStringChange(event.target.value)
        }
        const handleDNAChange = event => {
            this.props.handleDNAChange(event.target.value)
        }

        return (
            <div>
                <form onSubmit={handleStringSubmit}>
                    <label>
                        String:
                    <input type="text" name="name" value={this.props.stringValue} onChange={handleStringChange} />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
                <br />
                <div>{this.props.dna}</div>
                <br />
                <form onSubmit={handleDNASubmit}>
                    <label>
                        <div style={{textAlign: 'center'}}>
                            <Selector style={{ text: 'center' }} 
                                DNARNA={this.props.DNARNA}
                                newType={this.props.newType}
                            />
                        </div>
                        <input type="text" name="name" value={this.props.dnaValue} onChange={handleDNAChange} />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
                <br />
                <div>{this.props.string}</div>
            </div>
        )
    }
}

export default Form;
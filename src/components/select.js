import React, { Component } from 'react';
import Select from 'react-select';
import 'react-select/dist/react-select.css';

class Selector extends Component {
    render() {

        const options = [
            {
                value: 'DNA',
                label: 'DNA',
            },
            {
                value: 'RNA',
                label: 'RNA'
            }
        ]

        const valueChange = v => {
            this.props.newType(v);
        }

        return (
            <Select
                value={this.props.DNARNA.value}
                options={options}
                onChange={valueChange}
                style={{width: '200px'}}
            />
        )
    }
}

export default Selector;
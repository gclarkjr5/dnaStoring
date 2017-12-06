import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as appActions from '../actions/actions';
import Form from '../components/form';


class Container extends Component {
    constructor(props) {
        super(props)
        this.handleStringChange = this.handleStringChange.bind(this)
        this.handleDNAChange = this.handleDNAChange.bind(this)
        this.stringtranslate = this.stringtranslate.bind(this)
        this.dnatranslate = this.dnatranslate.bind(this)
    }

    handleStringChange = input => {
        this.props.action.handleStringChange(input)
    }
    handleDNAChange = input => {
        this.props.action.handleDNAChange(input)
    }

    stringtranslate = input => {
        this.props.action.stringtranslate(input);
    }
    dnatranslate = input => {
        this.props.action.dnatranslate(input);
    }

    render() {
        const {dna, string} = this.props.data.app;
        return (
            <Form
                stringtranslate={this.stringtranslate}
                dnatranslate={this.dnatranslate}
                string={string}
                dna={dna}
                handleStringChange={this.handleStringChange}
                handleDNAChange={this.handleDNAChange}
            />
        )
    }
}

const mapStateToProps = state => {
    return {
        data: state
    }
}

const mapDispatchToProps = dispatch => {
    return {
        action: bindActionCreators(appActions, dispatch)
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Container);


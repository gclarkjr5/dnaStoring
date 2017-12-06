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
        this.newType = this.newType.bind(this)
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
    newType = val => {
        this.props.action.newType(val)
    }

    render() {
        const {dnaValue, stringValue, dna, string, DNARNA} = this.props.data.app;
        return (
            <Form
                stringtranslate={this.stringtranslate}
                dnatranslate={this.dnatranslate}
                stringValue={stringValue}
                string={string}
                dna={dna}
                dnaValue={dnaValue}
                handleStringChange={this.handleStringChange}
                handleDNAChange={this.handleDNAChange}
                DNARNA={DNARNA}
                newType={this.newType}
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


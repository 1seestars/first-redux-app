import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { changeFirstName, changeSecondName } from '../store/actions'

class MainComponent extends React.Component {
    render() {
        const { firstName, secondName, changeFirstName, changeSecondName } = this.props
        return (
            <div id='main'>
                <input 
                    placeholder = 'First name'
                    value={firstName}
                    onChange={e => changeFirstName(e.target.value)}
                />
                <input 
                    placeholder = 'Second name' 
                    value={secondName} 
                    onChange={e => changeSecondName(e.target.value)}
                />
                <div id='text'>Your name is</div>
                <div id='display'>{`${firstName} ${secondName}`}</div>
            </div>
        )
    }
}

const putStateToProps = state => {
    return {
        firstName: state.firstName,
        secondName: state.secondName
    }
}

const putActionsToProps = dispatch => {
    return {
        changeFirstName: bindActionCreators(changeFirstName, dispatch),
        changeSecondName: bindActionCreators(changeSecondName, dispatch)
    }
}

export default connect(putStateToProps, putActionsToProps)(MainComponent)
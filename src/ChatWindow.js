import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MessageList from './MessageList';


class ChatWindow extends Component {
    static propTypes = {
      user: PropTypes.object.isRequired,
      messages: PropTypes.array.isRequired,
      addMessage: PropTypes.func.isRequired
    }
    state = this.getInitialState();

    getInitialState() {
        return {
            message: '',
        }
    }

    handleChange = (e) => {
        const value = e.target.value;
        this.setState((prevState) => ({
            message: value
        }))
    };

    clearInput = (e) => {
        e.preventDefault();
        const refreshedState = this.getInitialState();
        this.setState((prevState) => ({
            message: refreshedState.message,
        }));
    }

    isDisabled = () => {
        return this.state.message === '';
    }

    render() {
        return (
            <div className="chat-window">
                <h2>Super Awesome Chat</h2>
                <div className="name sender">{this.props.user.username}</div>

                {this.props.messages && this.props.messages.length > 0 && <MessageList user={this.props.user} messages={this.props.messages}/>}

                <div>
                    <form className="input-group" onSubmit={(e) => {this.props.addMessage({username: this.props.user.username, text: this.state.message}); this.clearInput(e)}}>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Enter your message..."
                            value={this.state.message}
                            onChange={this.handleChange}
                        />
                        <div className="input-group-append">
                            <button className="btn submit-button" disabled={this.isDisabled()}>
                                SEND
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default ChatWindow;

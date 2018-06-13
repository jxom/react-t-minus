import React from 'react';
import PropTypes from 'prop-types';

export default class T extends React.Component {
  static propTypes = {
    children: PropTypes.func.isRequired,
    onComplete: PropTypes.func,
    onTick: PropTypes.func,
    minus: PropTypes.number.isRequired
  };

  static defaultProps = {
    onComplete: null,
    onTick: null
  };

  state = {
    isComplete: false,
    secondsLeft: this.props.minus
  };

  _interval = null;

  componentDidMount = () => {
    const { onTick } = this.props;
    const { secondsLeft } = this.state;
    onTick && onTick({ secondsLeft });
    this._interval = setInterval(this.handleTick, 1000);
  };

  componentWillUnmount = () => clearInterval(this._interval);

  handleTick = () => {
    const { onComplete, onTick } = this.props;
    this.setState(
      state => ({ secondsLeft: state.secondsLeft - 1 }),
      () => {
        const { secondsLeft } = this.state;
        onTick && onTick({ secondsLeft });
        if (secondsLeft === 0) {
          onComplete && onComplete();
          this.setState({ isComplete: true });
          clearInterval(this._interval);
        }
      }
    );
  };

  render = () => {
    const { children } = this.props;
    const { isComplete, secondsLeft } = this.state;
    return children({ isComplete, secondsLeft });
  };
}

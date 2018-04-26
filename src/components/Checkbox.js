import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

class Checkbox extends Component {
  state = { animating: false };

  onClick = e => {
    e.stopPropagation();
    this.setState({ animating: true });

    setTimeout(() => {
      this.setState({ animating: false });
    }, 250);
    this.props.onClick();
  };

  render() {
    const { animating } = this.state;
    const { active } = this.props;
    return (
      <div /* Animate.css classnames */
        className={classNames('mr1 animated inline-block', {
          bounceIn: animating,
        })}
        onClick={this.onClick}
        role="img"
        aria-label="favorite"
      >
        {active ? '✅' : '⬜️'}
      </div>
    );
  }
}

Checkbox.propTypes = {
  onClick: PropTypes.func.isRequired,
  active: PropTypes.bool,
};

Checkbox.defaultProps = {
  active: false,
};

export default Checkbox;

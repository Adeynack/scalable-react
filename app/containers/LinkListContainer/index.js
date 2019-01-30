/*
 *
 * LinkListContainer
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import selectLinkListContainer from './selectors';
import LinkList from '../../components/LinkList';
import { requestLinks } from './actions';

export class LinkListContainer extends React.Component { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    routeTopicName: React.PropTypes.string.isRequired,
    requestLinks: React.PropTypes.func.isRequired,
  }

  /** Called the first time to component is instanciated. */
  componentWillMount() {
    // todo: consider using `componentDidMount` instead:
    // https://reactjs.org/docs/react-component.html#unsafe_componentwillmount
    this.props.requestLinks(this.props.routeTopicName);
  }

  /** Called before `render`, when props are about to change. */
  componentWillReceiveProps(newProps) {
    if (newProps.routeTopicName !== this.props.routeTopicName) {
      this.props.requestLinks(newProps.routeTopicName);
    }
  }

  render() {
    return (
      <LinkList {...this.props} />
    );
  }
}

const mapStateToProps = selectLinkListContainer();

function mapDispatchToProps(dispatch) {
  return {
    requestLinks: (topicName) => dispatch(requestLinks(topicName)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LinkListContainer);

import React from 'react';
import { connect } from 'react-redux';
import { getAllPost } from '../Http';
class PostList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { ...props };
  }
  componentDidMount() {
    this.props.dispatch(getAllPost());
  }
  render() {
    if (this.props.postInformation.isLoading) {
      return <h1>Loading...</h1>;
    }
    if (this.props.postInformation.posts.length > 0) {
      return this.props.postInformation.posts.map((post, index) => <li key={index}>{post.title}</li>);
    }
    return (
      <React.Fragment>
        <h1 style={{ border: '1px solid red', padding: '1px' }}>{this.props.postInformation.errorInfo}</h1>
      </React.Fragment>
    );
  }
}

export default connect((state) => state)(PostList);

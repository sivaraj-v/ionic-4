import React, { lazy, Suspense } from 'react';
import '@babel/polyfill';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './store';
const ArithmeticOperation = lazy(() => import('./component/ArithmeticOperation'));
const PostList = lazy(() => import('./component/PostList'));
const Index = () => {
  return (
    <Provider store={store}>
      <Suspense fallback={<div>loading...</div>}>
        <ArithmeticOperation />
        <PostList />
      </Suspense>
    </Provider>
  );
};
ReactDOM.render(<Index />, document.getElementById('index'));

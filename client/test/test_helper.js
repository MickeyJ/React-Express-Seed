import _$ from 'jquery';
import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import jsdom from 'jsdom';
import chai, { expect } from 'chai';
import chaiJquery from 'chai-jquery';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk'
import reducers from '../src/redux/reducers';

class LocalStorage{
  constructor(){
    this.data = {}
  }
  setItem(key, val){
    this.data[key] = val;
  }
  getItem(key){
    return this.data[key]
  }
  clear(key){
    delete this.data[key]
  }
}

global.document = jsdom.jsdom('<!doctype html><html><body></body></html>');
global.window = global.document.defaultView;
global.navigator = global.window.navigator;
global.window.localStorage = new LocalStorage;
const $ = _$(global.window);

chaiJquery(chai, chai.util, $);

const storeWithMiddleware = applyMiddleware(reduxThunk)(createStore);

function renderComponent(ComponentClass, props={}, state={}) {
  const componentInstance =  TestUtils.renderIntoDocument(
      <Provider store={storeWithMiddleware(reducers, state)}>
        <ComponentClass {...props} />
      </Provider>
  );

  return $(ReactDOM.findDOMNode(componentInstance));
}

$.fn.simulate = function(eventName, value) {
  if (value) {
    this.val(value);
  }
  TestUtils.Simulate[eventName](this[0]);
};

export {renderComponent, expect};

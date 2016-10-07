import {expect} from '../../test_helper'
import {AUTH_USER, UNAUTH_USER} from '../../../src/redux/actions/types'
import authReducer from '../../../src/redux/reducers/auth_reducer'

describe("Authentication Reducer", () =>{
  

  it('handles action with unknown types', () =>{
    
    expect(authReducer().authenticated).to.be.undefined;
    
  });

  
  it('handles action of type AUTH_USER', () =>{
    
    const action = {type: AUTH_USER};
    
    expect(authReducer({}, action).authenticated).to.be.true
    
  });

  
  it('handles action of type UNAUTH_USER', () =>{
    
    const action = {type: UNAUTH_USER};
    
    expect(authReducer({}, action).authenticated).to.be.false
    
  });
  

});
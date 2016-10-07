import {renderComponent, expect} from '../test_helper'
import Main from '../../src/Containers/Main'

describe('Default Layout', () =>{

  let component;

  beforeEach(() =>{
    component = renderComponent(Main);
  });

  it('has correct id', () =>{
    expect(component).to.have.id('all-wrapper')
  })

});
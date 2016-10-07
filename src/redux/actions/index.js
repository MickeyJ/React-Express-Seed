import axios from '../../utils/api'

export function testRequest(){
  return function(dispatch){
    axios.get('/test')
  }
}
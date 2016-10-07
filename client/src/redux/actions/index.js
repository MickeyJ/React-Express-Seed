import axios from '../../utils/api'

export function testRequest(){
  return function(dispatch){

    axios.get('/test').then(res =>{

        console.log(res.data.message);

    }).catch(err =>{

      console.log(err);

    })

  }
}

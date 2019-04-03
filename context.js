import React, { Component } from 'react'
import axios from "axios";



const UserContext = React.createContext();

const reducer = (state,action) => {
  switch(action.type){  //action gönderiyoruz

    case "DELETE_BOOK":
    return {
      ...state,    // stateimizin eski hali
      users : state.users.filter(user => action.payload !== user.id)  // statimizin güncellenmiş hali
    }
    case "ADD_BOOK":
    return{

      ...state,
      users : [...state.users,action.payload] //array döndürüyor

    }

    default:
      return state; 
  }
  

}

export  class UserProvider extends Component {
    state = {


        users : [
        
         ],

        dispatch : action => {  // içine bir action alır ve önceki state ile beraber reducer a gönderir.
          this.setState(state => reducer(state,action))   // dispath ve veriler alt componentlere provider sayesinde gecebilir.

        }
    
        
      }

      componentDidMount = async () => {
        
        const response = await axios.get("http://localhost:3004/users");
        this.setState({

          users : response.data

        })
        
      }
      

        // {this.props.children}  app.js e karşılık geliyor.React tarafından yollanan bir props
                                         
  render() {
    return (

        <UserContext.Provider value ={this.state}> 

            {this.props.children}                                          

        </UserContext.Provider>

    )
  }
}

const UserConsumer = UserContext.Consumer;

export default UserConsumer;   
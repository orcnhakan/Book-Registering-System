import React, { Component } from 'react'
import PropTypes from 'prop-types'
import UserConsumer from '../context';
import axios from "axios";



 class User extends Component {


  static defaultProps = {

    title : "Bilgi yok",
    isbn : "Bilgi yok",
    shortDescription : "Bilgi yok",
    id : "Bilgi yok",
    pageCount : "Bilgi yok",
    publishedDate : "Bilgi yok",
    thumbnailUrl : "Bilgi yok",
    longDescription : "Bilgi yok",
    status : "Bilgi yok",
    authors : "Bilgi yok",
    categories : "Bilgi yok"


  }
  ondeleteUser =async (dispatch,e) => {

    const {id} = this.props; // consumer dispatch

    //DELETE REQUEST 
    await axios .delete(`http://localhost:3004/users/${id}`);
    




    dispatch({type : "DELETE_BOOK",payload :id})
  }
  render() {
    const {title,shortDescription,isbn} = this.props;
  
    return(<UserConsumer>


      {

        value => {

          const {dispatch} = value;
             return (
        <div className = "col-md-8 mb-4">
          <div className = "card" >
              <div className = "card-header d-flex justify-content-between">
                 
                   <h4 className = "d-inline">{title}</h4>
                   <i onClick = {this.ondeleteUser.bind(this,dispatch)} className="fas fa-trash" style = {{cursor : "pointer"}}></i>
              
              </div>
                 <div className = "card-body">
                  <p className ="card-text " >Isbn : {isbn}</p>
                  <p className ="card-text" >Description : {shortDescription}</p>
              </div> 
              
          </div>
        </div>
    )  


        }

      }

    </UserConsumer>) 
  
  }
}
User.propTypes = {

  title : PropTypes.string.isRequired,
  isbn : PropTypes.string.isRequired,
  shortDescription :  PropTypes.string.isRequired,
  id : PropTypes.number.isRequired
}
export default User;
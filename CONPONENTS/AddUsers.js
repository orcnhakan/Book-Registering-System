import UserConsumer from '../context';
import React, { Component } from 'react'
import posed from 'react-pose';
import axios from "axios";



 const Animation = posed.div({

    visible : {
        opacity : 1,
        applyAtStart :{
            display :"block"
        }
    },
    hidden : {
        opacity : 0,
        applyAtEnd :{
            display : "none"
        }
    }


 });
 class AddUsers extends Component {
     state = {

        visible : false,
        title : "" ,
        isbn  : "",
        shortDescription : "",
        searchText : ""

            }
     
  changeVisibility = (e) => {

    this.setState({
        visible : !this.state.visible
    })
  }

  changeInput = (e) => {

    this.setState({
        [e.target.name] : e.target.value

    })

  }
  AddUser = async (dispatch,e) => {
      e.preventDefault();
      const {title,isbn,shortDescription,searchText} = this.state;
      const newUser = {
        
          title ,
          isbn ,
          shortDescription ,
          searchText
      }
      const response = await axios.post("http://localhost:3004/users",newUser)
      dispatch ({type : "ADD_BOOK",payload :response.data});
     
  }
  render() {
      const {visible,title,isbn,shortDescription,searchText} = this.state;
      return <UserConsumer> 
          {
              value => {
                  const {dispatch} = value ;
                return (
                    <div className="col-md-8 mb-4">
                     <button onClick = {this.changeVisibility} className = "btn btn-dark btn-block mb-2">{visible ? "Hide Form" : "Show Form" }</button>
                     <Animation pose = {visible ? "visible" : "hidden"}>
                       <div className="card"  >
                          <div className = "card-header">
                              <h4>Add Book Form</h4>
                              <div>
                                  <div className="card-body">
                                      <form onSubmit = {this.AddUser.bind(this,dispatch)}>
                                          <div className="form-group">
                                              <label htmlFor ="title">Book Name</label>
                                              <input
                                              
                                              type = "text"
                                              name = "title"
                                              id = "bookname"
                                              placeholder ="Enter Name"
                                              className ="form-control"
                                              value = {title}
                                              onChange = {this.changeInput} // mutlaka onChange yazılmalı
                                               />
                                              
                                              </div>
                                              <div className="form-group">
                                              <label htmlFor ="isbn">ISBN</label>
                                              <input
                                              
                                              type = "text"
                                              name = "isbn"
                                              id = "ısbn"
                                              placeholder ="Enter ISBN"
                                              className ="form-control"
                                              value = {isbn}
                                              onChange = {this.changeInput}
                                               />
                                              
                                              </div>
                                              <div className="form-group">
                                              <label htmlFor ="shortDescription">Description</label>
                                              <input
                                              
                                              type = "text"
                                              name = "shortDescription"
                                              id = "desct"
                                              placeholder ="Enter Destricption"
                                              className ="form-control"
                                              value = {shortDescription}
                                              onChange = {this.changeInput}
                                               />
                                              
                                              </div>
                                         
                                              
                                              <button className ="btn btn-danger btn-block" type ="submit">Add Books</button>
                                              <hr/>
                                              <hr/>

                                          
                                      </form>
                                  </div>
              
                              </div>
                              
                          </div>
                       </div>
                       </Animation>
                   </div>
                  )

              }
          }
      </UserConsumer>
 
  }
}
export default AddUsers;
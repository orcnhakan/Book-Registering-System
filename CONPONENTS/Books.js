import React, { Component } from 'react'
import User from '../CONPONENTS/Book';
import UserConsumer from '../context';



 class Users extends Component {
  render() {


  return (
        <UserConsumer>
        {

           value => {

                const {users} = value ; //users state adı value provider tarafından saglanan veri
                return (
                         <div>
        
                         {
                         users.map(user =>  {
                             return(
                                <User
                                  
                                  key = {user.id}
                                  id = {user.id}
                                  title = {user.title}
                                  isbn  = {user.isbn}
                                  shortDescription = {user.shortDescription}
                                  pageCount = {user.pageCount}
                                  publishedDate ={user.publishedDate}
                                  thumbnailUrl = {user.thumbnailUrl}
                                  longDescription = {user.longDescription}
                                  status = {user.status}
                                  authors = {user.authors}
                                  categories = {user.categories}
                                  />)
                                  
                                })}
                              </div>
                              )                         
                             }
                  }

          
        </UserConsumer>




      ) 
}
}

export default Users;
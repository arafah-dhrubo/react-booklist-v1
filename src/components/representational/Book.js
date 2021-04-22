import React, {Component} from 'react'
import '../stylesheets/Book.css'
const Book = () =>{
        return(
            <div className="Book">
                <h4 onClick={this.props.delete}>Book name: {this.props.bookName} </h4>
                <h5> Writer: {this.props.writer}</h5>
                <input type="text" onChange={this.props.inputName} value={this.props.bookName}/>
            </div>
        )
    }

export default Book
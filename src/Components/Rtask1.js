import React, { Component } from 'react'
import "./R1style.css";
const styles = {
    borderColor : "black",
    borderWidth : "2px",
    borderRadius : "7px",
};

export class Rtask1 extends Component {
    constructor(props) {
        super(props);
        this.state ={
            InputText : "",
            WordCount : 0,

        };
    }
    handleInput = (e) => {
        const inputText = e.target.value;
        const words = inputText.trim().split(/\s+/);
        const wordCount = inputText.trim() === "" ? 0 : words.length;
        const Wordcount = wordCount;

        this.setState({
            InputText : inputText,
            WordCount : Wordcount,
        });
        
    };
  render() {
    return (
      <div>
        <h1> Responsive Word Paragraph Counter</h1>
        <textarea class="text1" rows="9" cols="50" onChange={this.handleInput} style={styles}  ></textarea>
        <p>Word Count : {this.state.WordCount}</p>
      </div>

    )
  }
}

export default Rtask1

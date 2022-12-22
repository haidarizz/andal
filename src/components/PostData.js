import { Component } from "react";
import "./PostStyles.css";

class PostData extends Component{
    render(){
        return(
            <div className={this.props.className}>
                <div className="des-text">
                    <h2>{this.props.heading}</h2>
                    <p>{this.props.text}</p>
                    <a href={this.props.url} className={this.props.btnClass}>
                        {this.props.btnText}
                    </a>
                </div>
                <div className="image">
                    <img alt="img" src={this.props.img1}/>
                    <img alt="img" src={this.props.img2}/>
                </div>
            </div>
        )
    }
}

export default PostData;
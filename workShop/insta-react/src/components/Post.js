import React, {Component} from 'react';
import User from './User';

export default class Post extends Component {
    render() {
        return (
            <div className="post"> 
                 <User src="https://aoclinics.com/wp-content/uploads/2016/03/lhr-men-fb.jpg"
                        alt="man" 
                        name="Scot"
                        min/>
                <img src={this.props.src} alt="this.props.alt"></img>
                <div className="post__name">
                    some accauunt
                </div>
                <div className="post__desr">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos est quasi modi? 
                Necessitatibus, impedit. Impedit voluptates repudiandae quaerat ullam numquam
                </div>

            </div>
        )
    }
}
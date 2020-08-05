import React, { Component } from 'react';
export default class Blog extends Component {
  render() {
    let blogData = this.props.blogData;
    return (
      <section id="blog">
         <div className="row">
            <ul className="skills">
            {
                
                blogData.blog && blogData.blog.map((item) => {
                    return(
                      <li>
                          {item.title}
                      </li>
                    )
                })
            }
            </ul>
         </div>
      </section>
    );
  }
}
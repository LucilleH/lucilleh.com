'use strict'

var React = require("react");
var ReactDOM = require("react-dom");

var Home = require('./home');
var Projects = require('./projects'); 

// header bar
const Header = React.createClass({
    render: function() {
      return (
        <div className="title-block">
          <img src="./public/img/circle.gif" width="150px" />
            <h1 className="title">Lucille H</h1>
            <ul>
              <li><a href="">home</a></li>
              <li><a href="">projects</a></li>
            </ul>
        </div>
      );
    }
});

/* Footer start */
var Footer = React.createClass({
  render: function() {
    return (
      <div className="contact">
        <p>http://github.com/lucilleh</p>
      </div>
    );
  }
});

var App = React.createClass({
  render: function() {
    return (
      <div>
        <Header />
        <Home />
        <Footer />
      </div>
    );
  }
});

console.log(Home);
console.log(Projects);

ReactDOM.render(<App />, document.getElementById('content'));
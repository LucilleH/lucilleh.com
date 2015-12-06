'use strict'

var React = require('react');

var Home = React.createClass({
  render: function () {
    return (
      <div>
        <h1>home</h1>
        <p>Entering fourth year at McGill University in Montreal, Canada, I major in software engineering and minor in music technology. I&#39;m currently a student, but I&#39;m also:</p>
        <ul>
          <li>Software engineering intern at Google</li>
          <li>Past developer at Ericsson, working part time</li>
          <li>USG-IT for SSUNS 2013, SSUNS 2014</li>
          <li>Web developer for McGill Engineering Competition 2014</li>
          <li>Past developer of Digital Prosopography at <a href="http://ddmal.music.mcgill.ca">DDMAL</a></li>
          <li>Past web developer of Student Offering Support <a href="http://www.studentsofferingsupport.ca/portal/login.php">Portal</a></li>
          <li>A guitarist who knows how to play <a href="http://www.youtube.com/watch?v=Ddn4MGaS3N4">Drifting</a> by Andy McKee</li>
          <li>A music composer who does not know how to hand-write music notes</li>
          <li>A dancer</li>
          <li>A travelholic</li>
        </ul>

        <p>Below are my contact info if you want to hit me up:</p>
        <ul>
          <li>  Email: <a href="mailto:lucille.hua@gmail.com">lucille.hua@gmail.com</a></li>
          <li>  Facebook: <a href="https://www.facebook.com/lucille.hua">lucille.hua</a></li>
          <li>  Linkedin: <a href="http://www.linkedin.com/pub/lucille-hua/27/232/862">Lucille Hua</a></li>
        </ul>
      </div>
    );
  }
});

module.exports = Home;
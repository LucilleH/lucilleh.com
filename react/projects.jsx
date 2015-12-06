'use strict'

var React = require('react');

var ProjectDescription = React.createClass({
  render: function () {
    return (
      <div id="home-post">
        <a href={this.props.url} target="_blank"><img src={this.props.img} /></a>
        <ul>
          <h5><a href={this.props.url} target="_blank">{this.props.title}</a></h5>
          <li><p>{this.props.description}</p></li>
          <li><a href={this.props.readmore} target="_blank">Read more &raquo;</a></li>
        </ul>
      </div>
    );
  }

});

var Projects = React.createClass({
  render: function () {
    return (
      <div>
        <h1>projects</h1>
        <p>The following projects are ones I am heavily involved in for the past years, described in summary, with link for each of them. Feel free to contact me if you are particularly interested in these projects.</p>

        <ProjectDescription 
          url="http://ssuns.org" 
          img="./public/img/ssuns.png"
          title="Secondary Schools' United Nations Symposium"
          description="Attracting over 1,100 secondary school students from across 
          the globe, SSUNS is the largest and most renowned high school level model 
          United Nations Conference in Canada. As USG IT, I was responsible for website 
          rontend backend registration system, etc."
          readmore="https://github.com/LucilleH/ssuns-2014" />

        <ProjectDescription
          url="../project/rmg.html" 
          img="./public/img/rsz_rmg.png" 
          title="Random Music Generator"
          description="This random music generator software generates music notes 
          based on user input (music scale, tempo, etc) and common music theory. 
          It is done in real time. The purpose of this random music generator is 
          to help me, and the rest of the musicians, deal with those hard time when 
          we run out of ideas."
          readmore="./project/rmg.html" />

        <ProjectDescription
          url="http://mec.mcgilleus.ca" 
          img="./public/img/mec_logo.png"
          title="MEC (McGill Engineering Competition)"
          description="MEC is an event gathering McGill Engineers to compete against 
          each other. The goal of the competition is to foster relationships between 
          students while providing them a setting for professional engineering practice 
          as well as networking opportunities. I'm the IT Director for year 2014."
          readmore="http://mec.mcgilleus.ca" />

        <ProjectDescription
          url="http://mcgill.soscampus.com/"
          img="./public/img/sos.gif"
          title="Students Offering Support"
          description="Students Offering Support: McGill Chapter is a network of 
          student volunteers working together to raise funds to raise the quality of 
          education and life for those in developing nations through raising marks of 
          our fellow University students. Was IT of head quarter back in 2011."
          readmore="http://mcgill.soscampus.com/" />

        <ProjectDescription
          url="./project/prosopography.html"
          img="./public/img/rdf.png"
          title="Digital Prosopography"
          description="Human history project called Digital Prosopography aims to turn 
          uman history digital text records to a relational web representation. 
          It extracts the semantic meaning from text input, stores in rdf format with 
          specific model, and present it as network graph of historical events."
          readmore="./project/prosopography.html" />

        <ProjectDescription
          url="http://www.webmproject.org/"
          img="./public/img/webm.png"
          title="WebM Parser"
          description="I was the developer of WebM parser for media inspection at Ericsson."
          readmore="http://www.webmproject.org/" />
      </div>
    );
  }
});

module.exports = Projects;

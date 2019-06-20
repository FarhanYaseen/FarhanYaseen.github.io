import React, { Component } from 'react';
import './App.css';
import resume from './resume.json';
import Experience from './Experience';
import Project from './Project';
import Skill from './Skill';
import Education from './Education';
import Language from './Language';


class App extends Component {

    renderExperiences() {
        let resultsArray = [];
        resume.experiences.map((item, i) => {
            return resultsArray.push(<Experience item={item} key={i} />);
        });
        return resultsArray;
    }

    renderProjects() {
        let resultsArray = [];
        resume.projects.map((item, i) => {
            return resultsArray.push(<Project item={item} key={i} />);
        });
        return resultsArray;
    }

    renderSkills() {
        let resultsArray = [];
        resume.skills.map((item, i) => {
            return resultsArray.push(<Skill item={item} key={i} />);
        });
        return resultsArray;
    }

    renderEducations() {
        let resultsArray = [];
        resume.education.map((item, i) => {
            return resultsArray.push(<Education item={item} key={i} />);
        });
        return resultsArray;
    }

    renderLanguages() {
        let resultsArray = [];
        resume.languages.map((item, i) => {
            return resultsArray.push(<Language item={item} key={i} />);
        });
        return resultsArray;
    }

    renderInterests() {
        let resultsArray = [];
        resume.interests.map((item, i) => {
            return resultsArray.push(<li key={i}>{item}</li>);
        });
        return resultsArray;
    }

    render() {
        return (
            <div className="wrapper">
                <div className="sidebar-wrapper">
                    <div className="profile-container">
                        <img className="profile" src={resume.image} alt="" />
                        <h1 className="name">{resume.name}</h1>
                        <h3 className="tagline">{resume.title}</h3>
                    </div>

                    <div className="contact-container container-block">
                        <ul className="list-unstyled contact-list">
                            <li className="email"><i className="fa fa-envelope"></i><a href="mailto: farhan.yaseen.se@gmail.com">{resume.email}</a></li>
                            <li className="phone"><i className="fa fa-phone"></i><a href="tel:0123 456 789">{resume.phone}</a></li>
                            <li className="linkedin"><i className="fa fa-linkedin"></i><a href={resume.linkedinURL} target="_blank">{resume.linkedin}</a></li>
                            <li className="stack-overflow"><i className="fa fa-stack-overflow"></i><a href={resume.stackoverflowURL} target="_blank" rel="noopener noreferrer">{resume.stackoverflow}</a></li>
                            <li className="github"><i className="fa fa-github"></i><a href={resume.githubURL} target="_blank" rel="noopener noreferrer">{resume.github}</a></li>
                            <li className="twitter"><i className="fa fa-twitter"></i><a href={resume.twitterURL} target="_blank" rel="noopener noreferrer">{resume.twitter}</a></li>
                            <li className="download"><i className="fa fa-download"></i><a href={resume.downloadURL} target="_blank" rel="noopener noreferrer">{resume.download}</a></li>
                        </ul>
                    </div>
                    <div className="education-container container-block">
                        <h2 className="container-block-title">Education</h2>
                        {this.renderEducations()}
                    </div>

                    <div className="languages-container container-block">
                        <h2 className="container-block-title">Languages</h2>
                        <ul className="list-unstyled interests-list">
                            {this.renderLanguages()}
                        </ul>
                    </div>

                    <div className="interests-container container-block">
                        <h2 className="container-block-title">Interests</h2>
                        <ul className="list-unstyled interests-list">
                            {this.renderInterests()}
                        </ul>
                    </div>

                </div>

                <div className="main-wrapper">

                    <section className="section summary-section">
                        <h2 className="section-title"><i className="fa fa-user"></i>Career Profile</h2>
                        <div className="summary">
                            <p>
                                {resume.description}
                            </p>
                        </div>
                    </section>

                    <section className="section experiences-section">
                        <h2 className="section-title"><i className="fa fa-briefcase"></i>Experiences</h2>

                        {this.renderExperiences()}

                    </section>

                    <section className="section projects-section">
                        <h2 className="section-title"><i className="fa fa-archive"></i>Projects</h2>
                        <div className="intro">
                            {/* <p>You can list your side projects or open source libraries in this section. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum et ligula in nunc bibendum fringilla a eu lectus.</p> */}
                        </div>

                        {this.renderProjects()}

                    </section>

                    <section className="skills-section section">
                        <h2 className="section-title"><i className="fa fa-rocket"></i>Skills &amp; Proficiency</h2>
                        <div className="skillset">
                            {this.renderSkills()}

                        </div>
                    </section>

                </div>
            </div>
        );
    }
}

export default App;

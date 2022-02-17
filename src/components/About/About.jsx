import React, { Fragment } from "react";

import "./about.css";

const About = () => {
  return (
    <>
      <div className="about" id="About">
        <div className="container">
          <div className="about-title">
            <p className="about-title">Why Choose</p>
            <span className="about-hack">Hack</span>
            <span className="about-trix">Trix</span>?
          </div>
          <div className="about-content">
            Coding is today’s language of creativity, and like all creative
            pursuits, it must be refined, practiced, and exercised. IEEE SRM
            Student Branch brings you a unique opportunity to unleash your
            creativity with HackTrix. A hackathon-like-no-other, choose from 8
            unique tracks that you can revolutionize with your skills. Interact
            with like-minded individuals as you hack your way up the
            leaderboard, going toe-to-toe with the best in your field as you
            leave your mark on the world of coding. Innovate, inspire and work
            towards making your ideas a reality and win lucrative prizes and
            SWAGs as you prove yourself to the world throughout a three-day
            spree of a pure coding frenzy.
          </div>
        </div>
      </div>
      <div className="about">
        <div className="container">
          <div className="about-title">HackTrix Meet-Up</div>
          <div className="about-content">
            Innovation is the change that unlocks new value. The crusade for
            innovation however is one that cannot be traversed alone. Sharing
            knowledge with the world is one of the cornerstones of innovation
            and this principle is realized with "HackTrix Meet-UP". Learn from
            various speakers hailing from various industries. These speakers are
            some of the most experienced professionals in their field, a diverse
            panel of individuals indeed because knowledge shared should not be
            kept exclusive to a field and its people, but instead be within
            reach of all those who wish to pursue it.
          </div>
        </div>
      </div>
    </>
  );
};

export default About;

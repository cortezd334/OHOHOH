# OHOHOH

## Table of Contents
- General Info
- Technologies
- Setup
- User Story
- Features
- Inspiration
- Troubles
- Contributions

## General Info
OHOHOH, Open Hands Open Hearts Open Home, was created by Danira Cortez and Daniel Patnode for the purpose of learning Java Script, Rails, Active Record, HTML, and CSS. Through this single page application a User can adopt a pet and the agency can manage the adoption process. This Mod 3 Final Project for Flatiron School was presented on September 11, 2020.

## Technologies
- Java Script
- Rails
- ActiveRecord
- PostgreSQL
- HTML
- CSS
- Dog CEO API

## Setup
You'll need to fork and open OHOHOH. Then cd into the frontend and run the following in your terminal:
`$ bundle install`
`$ open index.html`

Once you cd into the backend run the following:
`$ bundle install`
`$ rails s`

## User Story
After creating an account the User directed to their profile page where they can update or delete their profile. From the nav bar the User can click on View Pets, which will display all the pets available for adoption. The pet's profile will either have a button that says 'Adopt Me!' that will start the adoption process or have a Pending Adoption status. If the 'Adopt Me!' button was clicked, the pet will then show under the View Adoption Status. There is also an option for the Agency to log in. Once logged in, the page will display a form in which a new pet can be added. Below that form all the pets up for adoption will display. If someone started the adoption process through the User end, the pet cards will display the information of the person that is trying to adopt it, as well as an option to approve or deny the adoption. If the Agency decides to approve the adoption, the pet will go from the Pet Management page to the Adopted Pets page. This page displays all the pets that have already been adopted and their owner's information.

## Features
- Sign up/login as a User
- Update or Delete profile
- View all pets not yet adopted
- View adoption status of pets 
- Sign up/login as an Agency
- Add pets that will be available for adoption
- View all pets
- View pets pending adoption
- Approve or Deny adoption

## Inspiration
We wanted to create an application that makes adopting pets fast and easy. 

## Troubles
The main challenge we had with building this program was that it had to be a single page application. We wanted to render many pages but could not use routes, due to the requirements of the project. In order to work around this, we used event listeners and replaced the HTML that was displayed. This may not be the best solution but it worked well for us, especially since we only had one week to build out the whole application. 

## Contributions
Danira Cortez, Daniel Patnode, Dog CEO API

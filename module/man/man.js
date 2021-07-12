
const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');


const petNameForManYearOne = require('./lovepoetry/lengthofloveone.js');
const randomPetNumberForManYearOne = require('./lovepoetry/lengthofloveone.js');
const petNameForManYearTwo = require('./lovepoetry/lengthoflovetwo.js');
const randomPetNumberForManYearTwo = require('./lovepoetry/lengthoflovetwo.js');
const petNameForManYearThree = require('./lovepoetry/lengthoflovethree.js');
const randomPetNumberForManYearThree = require('./lovepoetry/lengthoflovethree.js');
const petNameForManYearFour = require('./lovepoetry/lengthoflovefour.js');
const randomPetNumberForManYearFour = require('./lovepoetry/lengthoflovefour.js');
const petNameForManYearFive = require('./lovepoetry/lengthoflovefive.js');
const randomPetNumberForManYearFive = require('./lovepoetry/lengthoflovefive.js');


module.exports = {

  selectedManAndLovePoetry: function(){

    let selectedLengthOfLove = Number(req.body.lengthOfLove);
    let selectedLoverActivities = req.body.loverActivities;
    let selectedGender = (req.body.loverGender).toLowerCase();

    let thePetName = petNameForManYearOne[randomPetNumberForManYearOne];

    if(selectedGender === "man" && selectedLoverActivities === "Love Poetry" && selectedLengthOfLove === 1){
        return thePetName;
      } else if(selectedGender === "man" && selectedLoverActivities === "Love Poetry" && selectedLengthOfLove === 2){
        return thePetName;
      } else if(selectedGender === "man" && selectedLoverActivities === "Love Poetry" && selectedLengthOfLove === 3){
        return thePetName;
      } else if(selectedGender === "man" && selectedLoverActivities === "Love Poetry" && selectedLengthOfLove === 4){
        return thePetName;
      } else if(selectedGender === "man" && selectedLoverActivities === "Love Poetry" && selectedLengthOfLove === 5){
        return thePetName;
        }
      }
    }

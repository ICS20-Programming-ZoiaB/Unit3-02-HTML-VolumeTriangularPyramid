// Copyright (c) 2023 ZoiaB All rights reserved
//
// Created by: ZoiaB
// Created on: Mar 2023
// This file contains the JS functions for index.html

"use strict"
/**
 * This function calculates the volume of a triangular pyramid.
 */
function volumeCalculate() {
  
  //declaration of variables
  let height = parseFloat(document.getElementById("height").value);
  let sideA = parseFloat(document.getElementById("side-a").value);
  let sideB = parseFloat(document.getElementById("side-b").value);
  let volumeOfPyramid = (1/6) * sideB * sideA * height;
  
  //displaying calculations to screen
  document.getElementById("display-results").innerHTML = "The area of the pyramid is " + volumeOfPyramid.toFixed(2) + " cm<sup>2</sup>"
}
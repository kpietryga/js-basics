import './style.css'
import {mainTeams} from "./js/teams/main-teams";
import {mainStringGenerator} from "./js/string-generator/main-string-generator";
import {mainTriangleClass} from "./js/triangle-classes/triangles-main";
import {mainJoinArr} from "./js/concat-arrays/concat-arrays-main";
import {mainTrianglesFunction} from "./js/triangles/triangles-main";

const teamButton = document.getElementById("teams");
const stringGeneratorButton = document.getElementById("string-generator");
const concatArrButton  = document.getElementById("concat");
const triangleClassButton = document.getElementById("triangles-classes");
const triangleFunctionsButton = document.getElementById("triangles-functions");

teamButton.addEventListener("click", () => {
    console.clear()
    mainTeams()
})

stringGeneratorButton.addEventListener("click", () => {
    console.clear()
    mainStringGenerator()
})

triangleClassButton.addEventListener("click", () => {
    console.clear()
    mainStringGenerator()
})

triangleClassButton.addEventListener("click", () => {
    console.clear()
    mainTriangleClass()
})

triangleFunctionsButton.addEventListener("click", () => {
    console.clear()
    mainTrianglesFunction()
})

concatArrButton.addEventListener("click", () => {
    console.clear()
    mainJoinArr()
})

// Define some global variables that will be used
let cameraList = [];
let cameraView = null;
let cvRouter = null;
let cameraEnhancer = null;
let promiseCVRReady = null;
let isPlaySound = true;
let timer = null;

// Get the UI element
const homePage = document.querySelector(".home-page");
const scannerContainer = document.querySelector(".scanner-container");
const startScaningBtn = document.querySelector(".start-btn");
const resultRestartBtn = document.querySelector(".result-restart");
const passportFrame = document.querySelector(".passport-frame");
const restartVideoBtn = document.querySelector(".btn-restart-video");
const resultContainer = document.querySelector(".result-container");
const cameraViewContainer = document.querySelector(".div-ui-container");
const parsedResultArea = document.querySelector(".parsed-result-area");
const parsedResultHeader = document.querySelector(".parsed-result-header");
const parsedResultName = document.querySelector(".name");
const parsedResultSexAndAge = document.querySelector(".sex-and-age");
const parsedResultMain = document.querySelector(".parsed-result-main");
const cameraListDiv = document.querySelector(".camera-list")
const cameraSelector = document.querySelector(".camera-selector");
const playSoundBtn = document.querySelector(".music");
const closeSoundBtn = document.querySelector(".no-music");
const down = document.querySelector(".down");
const up = document.querySelector(".up");
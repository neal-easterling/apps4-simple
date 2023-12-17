const constraints = {video: true, audio: true};
const frontPrezLink = "https://docs.google.com/presentation/d/";
const endPrezLink = "/preview?slide=id.g23d7bfe890a_0_5";

let camVideo = document.getElementById("cam");
let camContain = document.getElementById("cam_container");
let prezFrame = document.getElementById("presentation");
let loadAppModal = document.getElementById("load_app_modal");
let smCamBut = document.getElementById("small_cam_button");
let medCamBut = document.getElementById("medium_cam_button");
let lgCamBut = document.getElementById("large_cam_button");

function setWebCam(){
  console.log("cam triggered");
  camVideo.muted = true;
  navigator.mediaDevices.getUserMedia(constraints)
  .then((stream) => {

    // Changing the source of video to current stream.
    camVideo.srcObject = stream;
    camVideo.addEventListener("loadedmetadata", () => {
        camVideo.play();
    });
})
  .catch(alert); 
  camVideo.classList.remove("hidden");
}

function getPrezID(){
  let inputValue = document.getElementById("prez_input_link").value;
  console.log(inputValue);
  let inputArray = inputValue.split("/");
  console.log(inputArray);
  let prezID = inputArray[inputArray.indexOf("d")+1];
  console.log(prezID);
  return prezID;
}

function loadWebCamPrezApp(){
  let prezID = getPrezID();
  let prezFullLink = frontPrezLink + prezID + endPrezLink;
  console.log(prezFullLink);
  prezFrame.src = prezFullLink;
  prezFrame.classList.remove("hidden");
  loadAppModal.classList.add("hidden");
  setWebCam();
}

function changeCam(size){
  return size;
}

function selectSmallCam(){
  if(smCamBut.classList.length == 0 && !camContain.classList.contains("small_cam")){
    camContain.className = "small_cam";
    smCamBut.className= "selected";
    medCamBut.className = "";
    lgCamBut.className = "";
  }else{
    console.log("already selected");
  }
}

function selectMediumCam(){
  if(medCamBut.classList.length == 0 &&  !camContain.classList.contains("medium_cam")){
    camContain.className = "medium_cam";
    smCamBut.className= "";
    medCamBut.className = "selected";
    lgCamBut.className = "";
  }else{
    console.log("already selected");
  }
}

function selectLargeCam(){
  if(lgCamBut.classList.length == 0 &&  !camContain.classList.contains("large_cam")){
    camContain.className = "large_cam";
    smCamBut.className= "";
    medCamBut.className = "";
    lgCamBut.className = "selected";
  }else{
    console.log("already selected");
  }
}



 

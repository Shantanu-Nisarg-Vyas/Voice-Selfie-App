var SpeechRecognition = window.webkitSpeechRecognition;
var Recognition = new SpeechRecognition();

function start() {
    document.getElementById("textbox").innerHTML = "";
    Recognition.start();
}

Recognition.onresult = function (event) {
    console.log(event);
    var content = event.results[0][0].transcript;
    console.log(content);
    document.getElementById("textbox").innerHTML = content;
    if (content = "take my selfie") {
        console.log("Taking Selfie");
        speak();
    }
}

function speak() {
    var synth = window.speechSynthesis;
    speak_data = "Taking your selfie in 5 seconds";
    var utter_this = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utter_this);
    Webcam.attach(camera);
    setTimeout(function () {
        save();
    }, 5000);
    Webcam.snap(function (data_uri) {
        document.getElementById("result_div1").innerHTML = '<img id = "selfie" src = "' + data_uri + '">';
    });
    var synth = window.speechSynthesis;
    speak_data = "Taking your selfie in 5 seconds";
    var utter_this = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utter_this);
    Webcam.attach(camera);
    setTimeout(function () {
        save();
    }, 10000);
    Webcam.snap(function (data_uri) {
        document.getElementById("result_div2").innerHTML = '<img id = "selfie" src = "' + data_uri + '">';
    });
    var synth = window.speechSynthesis;
    speak_data = "Taking your selfie in 5 seconds";
    var utter_this = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utter_this);
    Webcam.attach(camera);
    setTimeout(function () {
        save();
    }, 15000);
    Webcam.snap(function (data_uri) {
        document.getElementById("result_div3").innerHTML = '<img id = "selfie" src = "' + data_uri + '">';
    });
}

Webcam.set({
    width: 420,
    height: 320,
    image_format: "png",
    png_quality: 90,
});

camera = document.getElementById("camera_div");

function save() {
    link = document.getElementById("link");
    image = document.getElementById("selfie").src;
    link.href = image;
    link.click();
}
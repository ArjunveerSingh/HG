Webcam.set({
    width: 350,
    height: 300,
    image_format: 'png',
    png_quality:90
});

camera=document.getElementById("camera");

Webcam.attach("#camera");

function ts(){
    Webcam.snap(function(data_uri){
        document.getElementById("si").innerHTML='<img src="'+data_uri+'" id="snap"/>';
    });
}

function speak(){
    synth=window.speechSynthesis;
    sd1="The prediction is"+results[0].label;
    utter= new SpeechSynthesisUtterance(sd1);
    synth.speak(utter);
}

classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/74kORu4mh/model.json',modelLoaded);
function modelLoaded(){
    console.log("Model Loaded!");
}
function compare(){
    img=document.getElementById('snap');
    classifier.classify(img,gotResult);
}

function gotResult(error,results){
if (error){
    console.error(error);
}
else {
    console.log(results);
    document.getElementById("rn").innerHTML=results[0].label;
    speak();

    if (results[0].label=="Victory"){
document.getElementById("rn").innerHTML= "&#9996;";
    }
    if (results[0].label=="Bye"){
        document.getElementById("rn").innerHTML="&#128075;";
    }
    if (results[0].label=="Yo"){
        document.getElementById("rg").innerHTML="&#129304;";
    }
    if (results[0].label=="Nice"){
        document.getElementById("rg").innerHTML="&#128077;";
            }
            if (results[0].label=="Beautiful"){
                document.getElementById("rn").innerHTML="&#128076;";
            }
            if (results[0].label=="I'm gonna beat you"){
                document.getElementById("rn").innerHTML="&#9994;";
            }
            if (results[0].label=="Stop"){
                document.getElementById("rn").innerHTML="&#9995;";
            }
}
}
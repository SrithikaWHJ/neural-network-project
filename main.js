Webcam.set({
    width:350,
    height:300,
    img_format:'png',
    img_quality:90
});

document.getElementById("camera");
Webcam.attach('#camera');

function take_snapshot()
{
Webcam.snap(function(data_uri){
    document.getElementById("result").innerHTML = 'img id="captured_image" src="'+data_uri+'"/>';
});
}

console.log('ml5 version:' , ml5.version)
classifier.Imageclassifier("https://teachablemachine.withgoogle.com/models/[...]model.json",Loaded);

function gotResult(error , results) {
if (error) {
    console.error(error);
} else{
    console.log(results);
   document.getElementById ("result_object_name").innerHTML = results[0].label;
   document.getElementById ("result_object_accuracy").innerHTML = results[0].confidence.toFixed(3);
}
}
function preload()
{

}

function setup()
{
    canvas = createCanvas(300 , 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded()
{
    console.log('Posenet Is Inisiyalised')
}

function draw() 
{
    image(video , 0 , 0 , 300 , 300);
}

    function take_snapshot()
    {
        save('myFilterImage.png')
    }

    function gotPoses(result)
    {
        if(result.lengtn > 0)
        {
            console.log(result);
            console.log("nose x = " + result[0].pose.nose.x);
            console.log("nose y = " + result[0].pose.nose.y);
        }

    }


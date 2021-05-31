function preload(){
    bg1=loadImage("sunrise1.png")
    bg2=loadImage("sunrise2.png")
    bg3=loadImage("sunrise3.png")
    bg4=loadImage("sunrise4.png")
    bg5=loadImage("sunrise5.png")
    bg6=loadImage("sunrise6.png")
    bg7=loadImage("sunset7.png")
    bg8=loadImage("sunset8.png")
    bg9=loadImage("sunset9.png")
    bg10=loadImage("sunset10.png")
    bg11=loadImage("sunset11.png")
    bg12=loadImage("sunset12.png")
}

function setup(){
    createCanvas(1200,800)
}

function draw(){
    bgImg()
    async function bgImg(){
        var response=await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata")
    
        var responseJSON= await response.json()
        //console.log(responseJSON)
    
        var hour=responseJSON.datetime.slice(11,13)
        //console.log(hour)
    
        if(hour>=04&&hour<06){
            background(bg1)
        }
        if(hour>=06&&hour<08){
            background(bg1)
        }
        if(hour>=08&&hour<10){
            background(bg3)
        }
        if(hour>=10&&hour<12){
            background(bg4)
        }
        if(hour>=12&&hour<14){
            background(bg5)
        }
        if(hour>=14&&hour<16){
            background(bg6)
        }
        if(hour>=16&&hour<18){
            background(bg7)
        }
        if(hour>=18&&hour<20){
            background(bg8)
        }
        if(hour>=20&&hour<22){
            background(bg9)
        }
        if(hour>=22&&hour<00){
            background(bg10)
        }
        if(hour>=00&&hour<02){
            background(bg11)
        }
        if(hour>=02&&hour<04){
            background(bg12)
        }
    }
}


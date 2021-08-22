const angles = document.querySelectorAll(".angle-input")
const isTriangleBtn = document.querySelector("#type-triangle-btn")
const output= document.querySelector("#output")


function sumOfAngles(angle1,angle2,angle3){

    const sumAngles = parseInt(angle1)+parseInt(angle2)+parseInt(angle3);
    // console.log(sumAngles)
    if(sumAngles  === 180)
    {
        return (" It is a triangle")

    }
    else{
        return (" not a triangle")
    }
}

function isTriangle(){
    // console.log("in isTraingle")
    // for( item in angles)
    // const sumAngles = angles.
    // console.log(angles[0].value)

    output.innerText = sumOfAngles(angles[0].value,angles[1].value,angles[2].value)
}

isTriangleBtn.addEventListener("click",isTriangle)


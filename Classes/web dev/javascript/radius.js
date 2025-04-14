let myradius = [1 ,2 , 3, 4 , 5]
console.log(myradius)

function area(radius){

    let areas = []

    for(let i = 0 ;i < radius.length ; i++){
        areas.push(3.14*radius[i]*radius[i])
    }

    return areas
}

let finalarea = area(myradius)
console.log(finalarea)

function circumference(radius){

    let circumference = []

    for(let i = 0 ;i < radius.length ; i++){
        circumference.push(2*3.14*radius[i])
    }

    return circumference
}

let finalcircumference = circumference(myradius)
console.log(finalcircumference)


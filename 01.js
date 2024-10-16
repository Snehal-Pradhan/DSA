const grocery = ["milk","sugar","dahi","peanuts","banana"];

const searchForItem = (item,array) => {
    for(let i =0;i<array.length;i++){
        if(array[i]===item){
             console.log(`found ${item}`)
            return
        }
           
    }
    return console.log("not found");
}

searchForItem("banana",grocery)
function openOrSenior(data){
    return data.map(([unknown1, unknown2]) => (unknown1 > 11 && unknown2 < 7) ? "senior" : "open" )
}1  

//or

function openOrSenior(unkmown){
    let data = []
    unknown.forEach(element => {
        if(data[0] > 11 && data[1] < 7){
            data.push('senior')

        }else{
            data.push('open')
        }
        
    });
    return unknown;
}
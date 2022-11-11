
export const DateMaxMin = (MinMax) => {
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    let yyyy = today.getFullYear();

    if(MinMax === "Min"){
        const date = yyyy + '-' + mm + '-' + dd;
        return date
    }
    if(MinMax === "Max"){
        const date = yyyy+2 + '-' + mm + '-' + dd;
        return date
    }
    
}



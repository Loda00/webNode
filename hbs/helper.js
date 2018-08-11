const hbs = require('hbs');

hbs.registerHelper('getAnio',()=>{
    return new Date().getFullYear();
})

hbs.registerHelper('capitalizar',(nombre)=>{
    let arr = nombre.split(' ');

        arr.forEach((name,i)=>{
            arr[i] = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
        })
        return arr.join(' ');
    
})

module.exports={
    
}
setTimeout(()=>{
    console.log('Two seconds are up')
},2000)

const names = ['Andrew', 'Jen','Jess']
const shortNames = names.filter((name)=>{
    return name.length <=4
})

const geocode = (address,callback)=>{
    const data = {
        latitude: 0,
        longitude: 0
    }
    callback(data)
}

geocode('Philadelphia',(data)=>{
    console.log(data)
})
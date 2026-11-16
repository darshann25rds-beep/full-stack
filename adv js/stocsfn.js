export default function company() {
    return{
        name: "Stocsfn",
        symbol: "STOCS",
        price:(Math.random()*3).toFixed(2),
        time: new Date().toLocaleTimeString()
    }

}
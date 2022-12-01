export function roll(sides, dice, rolls){
    var results = []
    for(let i = 0; i < dice; i++){
        for(let j = 0; j < rolls; j++){
            var num = Math.floor(Math.random() * sides) + 1
        }
        results[i] = num
    }
    var umm = 0
    for(let i = 0; i < length(results); i++){
        umm += results[i]
    }
    return [umm]   
}

export default{ roll };
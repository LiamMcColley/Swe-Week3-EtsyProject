//takes in book title and runs it through a hash to generate the price
//hash code algorithm taken from: https://werxltd.com/wp/2010/05/13/javascript-implementation-of-javas-string-hashcode-method/
export default function Appraise(title){
    let maxPrice = 25;

    let hash = 0;
    if (title.length === 0) return hash;

    for (let i = 0; i < title.length; i++) {
        let char = title.charCodeAt(i);
        hash = ((hash<<5)-hash)+char;
        hash = hash & hash; // Convert to 32bit integer
    }
    return Math.abs(hash%maxPrice);
}
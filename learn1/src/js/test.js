let names = {
    firstname: "michel",
    secondname: 'hallos'
};
var lastName = "Jackson";
var year = 1958;

export function multiply(x, y){
    return x + y;
}

export default names;
export {
    names,
    lastName,
    year,
    multiply as streamV1
}


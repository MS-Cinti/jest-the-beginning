const declareWinner = require("./declareWinner");

const firstFighter = {
    name: "Gabesz",
    health: 40,
    damagePerAttack: 20
}

const secondFighter = {
    name: "Cini",
    health: 40,
    damagePerAttack: 20
}

it("the fighter in the first parameter wins", () => {
    expect(declareWinner(firstFighter, secondFighter, firstFighter.name)).toEqual("Gabesz")

    expect(declareWinner(secondFighter, firstFighter, secondFighter.name)).toEqual("Cini")
})

it("the fighter in the second parameter wins", () => {
    expect(declareWinner(firstFighter, secondFighter, secondFighter.name)).toEqual("Cini")

    expect(declareWinner(secondFighter, firstFighter, firstFighter.name)).toEqual("Gabesz")
})
const recipes = require("./recipes")
// @ponicode
describe("recipes.loadRecipes", () => {
    test("0", () => {
        let callFunction = () => {
            recipes.loadRecipes()
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("recipes.loadRecipe", () => {
    test("0", () => {
        let callFunction = () => {
            recipes.loadRecipe(12)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            recipes.loadRecipe("a1969970175")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            recipes.loadRecipe(12345)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            recipes.loadRecipe("bc23a9d531064583ace8f67dad60f6bb")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            recipes.loadRecipe(987650)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            recipes.loadRecipe(-Infinity)
        }
    
        expect(callFunction).not.toThrow()
    })
})

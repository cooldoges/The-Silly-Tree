addLayer("e", {
    name: "buy eggs", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "E", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#4BDC13",
    requires: new Decimal(10), // Can be a function that takes requirement increases into account
    resource: "eggs", // Name of prestige currency
    baseResource: "Golden Coins", // Name of resource prestige is based on
    baseAmount() {return player.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.5, // Prestige currency exponent
    gainMult() {
        let mult = new Decimal(1)
        if (hasUpgrade('e', 13)) mult = mult.times(upgradeEffect('e', 13))
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 0, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "e", description: "E: Reset for eggs", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){return true},
    upgrades: {
        11: {
            title: "Egg powered generators",
            description: "Double your Golden Coin gain.",
            cost: new Decimal(1),
        },
        12: {
            title: "Gold coated Eggs",
            description: "Increase Golden Coin Gain by Eggs.",
            cost: new Decimal(3),
            effect() {
                return player[this.layer].points.add(1).pow(0.5)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }, // Add formatting to the effect
        },
        13: {
            title: "Melted Gold",
            description: "Increase Egg Gain by Golden Coins.",
            cost: new Decimal(5),
            effect() {
                return player.points.add(1).pow(0.15)
            },
        },
        21: {
            title: "GIGABOOST",
            description: "mutliply your Golden Coin gain by 5.",
            cost: new Decimal(500),
        },
    },

})
addLayer("p", {
    startData() { return {                  // startData is a function that returns default data for a layer. 
        unlocked: false,      // You can add more variables here to add them to your layer.
        points: new Decimal(0),             // "points" is the internal name for the main resource of the layer.
    }},

    color: "#4BDC13",                       // The color for this layer, which affects many elements.
    resource: "Paint Buckets",            // The name of this layer's main prestige resource.
    row: 1,                                 // The row this layer is on (0 is the first row).

    baseResource: "points",                 // The name of the resource your prestige gain is based on.
    baseAmount() { return player.points },  // A function to return the current amount of baseResource.

    requires: new Decimal(2000),              // The amount of the base needed to  gain 1 of the prestige currency.
                                            // Also the amount required to unlock the layer.

    type: "normal",                         // Determines the formula used for calculating prestige currency.
    exponent: 0.5,                          // "normal" prestige gain is (currency^exponent).

    gainMult() {                            // Returns your multiplier to your gain of the prestige resource.
        return new Decimal(1)               // Factor in any bonuses multiplying gain here.
    },
    gainExp() {                             // Returns the exponent to your gain of the prestige resource.
        return new Decimal(1)
    },

    layerShown() { return true },          // Returns a bool for if this layer's node should be visible in the tree.

    upgrades: {
        11: {
            title: "New generator Coat",
            description: "Double your Golden Coin gain again.",
            cost: new Decimal(1),
         },
            12: {
            title: "fueled fuel",
            description: "TRIPLE your Golden Coin gain, and yes, the fuel has paint in it now.",
            cost: new Decimal(5),
         },
            
    },
        hotkeys: [
            {key: "p", description: "P: Reset for Paint Buckets", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
        ],
    },

addLayer("w", {
    startData() { return {                  // startData is a function that returns default data for a layer. 
        unlocked: false,      // You can add more variables here to add them to your layer.
        points: new Decimal(0),             // "points" is the internal name for the main resource of the layer.
    }},

    color: "#4BDC13",                       // The color for this layer, which affects many elements.
    resource: "Washing Machines",            // The name of this layer's main prestige resource.
    row: 1,                                 // The row this layer is on (0 is the first row).

    baseResource: "points",                 // The name of the resource your prestige gain is based on.
    baseAmount() { return player.points },  // A function to return the current amount of baseResource.

    requires: new Decimal(2000),              // The amount of the base needed to  gain 1 of the prestige currency.
                                              // Also the amount required to unlock the layer.

    type: "normal",                         // Determines the formula used for calculating prestige currency.
    exponent: 0.5,                          // "normal" prestige gain is (currency^exponent).

    gainMult() {                            // Returns your multiplier to your gain of the prestige resource.
        return new Decimal(1)               // Factor in any bonuses multiplying gain here.
    },
    gainExp() {                             // Returns the exponent to your gain of the prestige resource.
        return new Decimal(1)
    },

    layerShown() { return true },          // Returns a bool for if this layer's node should be visible in the tree.

    upgrades: {
        11: {
            title: "Fresh new clothes",
            description: "Double your Golden Coin gain again again.",
            cost: new Decimal(1),
    },
    12: {
        title: "The power in numbers",
        description: "TRIPLE your Golden Coin gain AGAIN.",
        cost: new Decimal(5),
     },
},
hotkeys: [
        {
            key: "w", // What the hotkey button is. Use uppercase if it's combined with shift, or "ctrl+x" for holding down ctrl.
            description: "W: reset Eggs and Golden Coins for Washing machines", // The description of the hotkey that is displayed in the game's How To Play tab
            onPress() { if (player.p.unlocked) doReset("w") },
        }
    ]}))
    addLayer("i", {
        startData() { return {                  // startData is a function that returns default data for a layer. 
            unlocked: false,                     // You can add more variables here to add them to your layer.
            points: new Decimal(0),             // "points" is the internal name for the main resource of the layer.
        }},
    
        color: "#4BDC13",                       // The color for this layer, which affects many elements.
        resource: "Insanities",            // The name of this layer's main prestige resource.
        row: 2,                                 // The row this layer is on (0 is the first row).
    
        baseResource: "points",                 // The name of the resource your prestige gain is based on.
        baseAmount() { return player.points },  // A function to return the current amount of baseResource.
    
        requires: new Decimal(1000000),              // The amount of the base needed to  gain 1 of the prestige currency.
                                                // Also the amount required to unlock the layer.
    
        type: "normal",                         // Determines the formula used for calculating prestige currency.
        exponent: 0.5,                          // "normal" prestige gain is (currency^exponent).
    
        gainMult() {                            // Returns your multiplier to your gain of the prestige resource.
            return new Decimal(1)               // Factor in any bonuses multiplying gain here.
        },
        gainExp() {                             // Returns the exponent to your gain of the prestige resource.
            return new Decimal(1)
        },
    
        layerShown() { return true },          // Returns a bool for if this layer's node should be visible in the tree.
    
        upgrades: {
            
                 11: {
                    title: "life remade",
                    description: "Multiply your Golden Coin gain by 10.",
                    cost: new Decimal(1),
               },
            },
} )
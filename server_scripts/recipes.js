ServerEvents.recipes(e => {
  // Bullet Recipes go here (4-X)
    e.custom({
  "type": "immersiveengineering:metal_press",
  "energy": 2000,
  "input": {
    "item": "minecraft:iron_ingot"
  },
  "mold": "scguns:bullet_mold",
  "result": {
    "count": 24,
    "item": "scguns:standard_bullet"
  }
})
    e.custom({
  "type": "immersiveengineering:metal_press",
  "energy": 2000,
  "input": {
    "tag": "scguns:advanced_bullet_material"
  },
  "mold": "scguns:bullet_mold",
  "result": {
    "count": 24,
    "item": "scguns:hardened_bullet"
  }
})
    e.custom({
  "type": "immersiveengineering:metal_press",
  "energy": 2000,
  "input": {
    "tag": "forge:ingots/steel"
  },
  "mold": "scguns:bullet_mold",
  "result": {
    "count": 24,
    "item": "scguns:hardened_bullet"
  }
})
    e.custom({
  "type": "immersiveengineering:metal_press",
  "energy": 2000,
  "input": {
    "item": "scguns:depleted_diamond_steel_ingot"
  },
  "mold": "scguns:bullet_mold",
  "result": {
    "count": 24,
    "item": "scguns:hardened_bullet"
  }
})
  // Casing Recipes go here (X-X)
    e.remove({
      id: "scguns:immersiveengineering/metalpress/small_copper_casing"
})
    e.remove({
      id: "scguns:immersiveengineering/metalpress/medium_copper_casing"
})
    e.custom({
      // Small Copper Casings
        "type": "immersiveengineering:metal_press",
  "energy": 2150,
  "input": {
    "tag": "forge:ingots/copper"
  },
  "mold": "scguns:small_casing_mold",
  "result": {
    "count": 28,
    "item": "scguns:small_copper_casing"
  }
})
    e.custom({
      // Medium Copper Casings
        "type": "immersiveengineering:metal_press",
  "energy": 2150,
  "input": {
    "tag": "forge:ingots/copper"
  },
  "mold": "scguns:medium_casing_mold",
  "result": {
    "count": 20,
    "item": "scguns:medium_copper_casing"
  }
})

  // I.E Custom Recipes go here (52-X)
    e.custom({
  "type": "immersiveengineering:blueprint",
  "category": "bullet",
  "inputs": [
    {
      "base_ingredient": {
        "item": "scguns:small_copper_casing"
      },
      "count": 8
    },
    {
      "base_ingredient": {
        "item": "scguns:standard_bullet"
      },
      "count": 8
    },
    {
      "base_ingredient": {
        "item": "scguns:gunpowder_dust"
      },
      "count": 8
    }
  ],
  "result": {
    "count": 16,
    "item": "scguns:compact_copper_round"
  }
})
    e.recipes.immersiveengineering.blueprint(Item.of("scguns:hog_round", 16), [Item.of("scguns:small_iron_casing", 8), Item.of("scguns:sheol_dust", 8), Item.of("minecraft:gold_nugget", 8)], "Advanced Bullets")
})
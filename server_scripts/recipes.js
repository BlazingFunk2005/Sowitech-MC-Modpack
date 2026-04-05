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
    e.remove({
      id: "scguns:immersiveengineering/metalpress/small_brass_casing"
})
    e.remove({
      id: "scguns:immersiveengineering/metalpress/medium_brass_casing"
})
    e.remove({
      id: "scguns:immersiveengineering/metalpress/large_brass_casing"
})
    e.remove({
      id: "scguns:immersiveengineering/metalpress/small_iron_casing"
})
    e.remove({
      id: "scguns:immersiveengineering/metalpress/large_iron_casing"
})
    e.remove({
      id: "scguns:immersiveengineering/metalpress/small_diamond_steel_casing"
})
    e.remove({
      id: "scguns:immersiveengineering/metalpress/medium_diamond_steel_casing"
})
    e.custom({
      // Small Diamond Steel Casings
        "type": "immersiveengineering:metal_press",
  "energy": 2150,
  "input": {
    "item": "scguns:depleted_diamond_steel_ingot"
  },
  "mold": "scguns:small_casing_mold",
  "result": {
    "count": 28,
    "item": "scguns:small_diamond_steel_casing"
  }
})
    e.custom({
      // Medium Diamond Steel Casings
        "type": "immersiveengineering:metal_press",
  "energy": 2150,
  "input": {
    "item": "scguns:depleted_diamond_steel_ingot"
  },
  "mold": "scguns:medium_casing_mold",
  "result": {
    "count": 20,
    "item": "scguns:medium_diamond_steel_casing"
  }
})
    e.custom({
      // Small Iron Casings
        "type": "immersiveengineering:metal_press",
  "energy": 2150,
  "input": {
    "tag": "forge:ingots/iron"
  },
  "mold": "scguns:small_casing_mold",
  "result": {
    "count": 28,
    "item": "scguns:small_iron_casing"
  }
})
    e.custom({
      // Large Iron Casings
        "type": "immersiveengineering:metal_press",
  "energy": 2150,
  "input": {
    "tag": "forge:ingots/iron"
  },
  "mold": "scguns:large_casing_mold",
  "result": {
    "count": 12,
    "item": "scguns:large_iron_casing"
  }
})
    e.custom({
      // Small Brass Casings
        "type": "immersiveengineering:metal_press",
  "energy": 2150,
  "input": {
    "tag": "forge:ingots/brass"
  },
  "mold": "scguns:small_casing_mold",
  "result": {
    "count": 28,
    "item": "scguns:small_brass_casing"
  }
})
    e.custom({
      // Medium Brass Casings
        "type": "immersiveengineering:metal_press",
  "energy": 2150,
  "input": {
    "tag": "forge:ingots/brass"
  },
  "mold": "scguns:medium_casing_mold",
  "result": {
    "count": 28,
    "item": "scguns:medium_brass_casing"
  }
})
    e.custom({
      // Large Brass Casings
        "type": "immersiveengineering:metal_press",
  "energy": 2150,
  "input": {
    "tag": "forge:ingots/brass"
  },
  "mold": "scguns:large_casing_mold",
  "result": {
    "count": 12,
    "item": "scguns:large_brass_casing"
  }
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
    e.recipes.immersiveengineering.blueprint(Item.of("scguns:hog_round", 16), [Item.of("scguns:small_iron_casing", 8), Item.of("scguns:sheol_dust", 8), Item.of("minecraft:gold_nugget", 8)], "Advanced Rounds")

    e.recipes.immersiveengineering.blueprint(Item.of("scguns:compact_copper_round", 16), [Item.of("scguns:small_copper_casing", 8), Item.of("scguns:gunpowder_dust", 8), Item.of("scguns:standard_bullet", 8)], "Basic Rounds")

//    e.recipes.immersiveengineering.blueprint(Item.of("scguns:hog_round", 16), [Item.of("scguns:small_iron_casing", 8), Item.of("scguns:sheol_dust", 8), Item.of("minecraft:gold_nugget", 8)], "Advanced Bullets")


})
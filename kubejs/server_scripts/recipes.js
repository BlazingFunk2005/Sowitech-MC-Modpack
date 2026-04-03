ServerEvents.recipes(e => {
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
})
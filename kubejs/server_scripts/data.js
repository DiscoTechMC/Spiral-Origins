// priority: 0

ServerEvents.recipes(event => {
    function reversible(comp, decomp) {

        event.shapeless(
            Item.of(comp, 1), // arg 1: output
            [
                decomp,
                decomp,
                decomp,
                decomp,
                decomp,
                decomp,
                decomp,
                decomp
            ]
        )
        event.shapeless(
            Item.of(decomp, 8), // arg 1: output
            [
                comp
            ]
        )
    }

    reversible("kubejs:silver_coin", "kubejs:copper_coin")
    reversible("kubejs:gold_coin", "kubejs:silver_coin")
    reversible("kubejs:netherite_coin", "kubejs:gold_coin")
})

LootJS.modifiers((event) => {
    function coinLoot(entity) {
        event
            .addEntityLootModifier(entity)
            .killedByPlayer()
            .randomChanceWithLooting(0.05, 1)
            .addWeightedLoot(
                [0, 1],
                [
                    Item.of("kubejs:copper_coin").withChance(79), 
                    Item.of("kubejs:silver_coin").withChance(20), 
                    Item.of("kubejs:gold_coin").withChance(1)
                ]
            );
    }

    // Applying the loot modifier to a hardcoded list
    [
        "minecraft:blaze",
        "minecraft:cave_spider",
        "minecraft:creeper",
        "minecraft:enderman",
        "minecraft:evoker",
        "minecraft:guardian",
        "minecraft:husk",
        "minecraft:magma_cube",
        "minecraft:phantom",
        "minecraft:pillager",
        "minecraft:ravager",
        "minecraft:skeleton",
        "minecraft:slime",
        "minecraft:spider",
        "minecraft:stray",
        "minecraft:vindicator",
        "minecraft:witch",
        "minecraft:zombie",
    ]
        .forEach(
            (entity) => {
                coinLoot(entity)
            }
        )
});
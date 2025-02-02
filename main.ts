player.onChat("т", function () {
    for (let index = 0; index < 4; index++) {
        player.execute(
        "/give @a light_blue_wool 64"
        )
        player.execute(
        "/give @a light_blue_stained_glass 64"
        )
    }
    gameplay.title(mobs.target(ALL_PLAYERS), "ТАЙИЕР ПОЧАВСЯ", "ГОТУЙСЯ")
    loops.pause(1000)
    gameplay.title(mobs.target(ALL_PLAYERS), "10", "ГОТУЙСЯ")
    loops.pause(1000)
    gameplay.title(mobs.target(ALL_PLAYERS), "9", "ГОТУЙСЯ")
    loops.pause(1000)
    gameplay.title(mobs.target(ALL_PLAYERS), "8", "ГОТУЙСЯ")
    loops.pause(1000)
    gameplay.title(mobs.target(ALL_PLAYERS), "7", "ГОТУЙСЯ")
    loops.pause(1000)
    gameplay.title(mobs.target(ALL_PLAYERS), "6", "ГОТУЙСЯ")
    loops.pause(1000)
    gameplay.title(mobs.target(ALL_PLAYERS), "5", "ГОТУЙСЯ")
    loops.pause(1000)
    gameplay.title(mobs.target(ALL_PLAYERS), "4", "ГОТУЙСЯ")
    loops.pause(1000)
    gameplay.title(mobs.target(ALL_PLAYERS), "3", "ГОТУЙСЯ")
    loops.pause(1000)
    gameplay.title(mobs.target(ALL_PLAYERS), "2", "ГОТУЙСЯ")
    loops.pause(1000)
    gameplay.title(mobs.target(ALL_PLAYERS), "1", "ГОТУЙСЯ")
    loops.pause(1000)
    gameplay.title(mobs.target(ALL_PLAYERS), "0", "ГОТУЙСЯ")
    loops.pause(1000)
    gameplay.title(mobs.target(ALL_PLAYERS), "ГРА ПОЧЯЛАСЬ!", "УДАЧІ")
})

let projectile: Sprite = null
scene.setBackgroundColor(1)
let mySprite = sprites.create(img`
    ....................
    ....................
    ....................
    ...........555......
    ..........52225.....
    .........5244425....
    ........524eee425...
    .....555b2444442b...
    ....52225b24442b....
    ...5244425b262b.....
    ..524eee425b6b......
    ..b2444442b76.777...
    ...b24442b.767777...
    ....b262b..76777....
    .....7677..7677.....
    ....77767..767......
    .....777677677......
    ........766777......
    ......eeeeeeee......
    ....................
    `, SpriteKind.Player)
game.onUpdateInterval(1000, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . 2 . . . . . . . 
        . . . . . . . e e e . . . . . . 
        . . . . . . f f f f f . . . . . 
        . . . . . . 5 5 5 5 5 . . . . . 
        . . . e e e f f f f f e e e . . 
        . . e e . . 5 5 5 5 5 . . e e . 
        . . . . . . f f f f f . . . . . 
        . . . . . . . . f . . . . . . . 
        . . . . . . . . f . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, mySprite, randint(-30, 30), randint(-30, 30))
    projectile.lifespan = 3000
    if (projectile.vx < 0) {
        projectile.image.flipY()
    }
})

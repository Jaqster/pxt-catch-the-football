sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    football.setPosition(Math.randomRange(0, 160), Math.randomRange(0, 120))
    info.startCountdown(10)
})
let football: Sprite = null
scene.setBackgroundColor(7)
let mySprite = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . a a a a a a . . . 
. . . . . . a a 4 4 4 4 a a . . 
. . . . . . a 4 4 4 4 4 4 a a . 
. . . . . . a 4 4 6 4 6 4 4 a . 
. . . . . . a 4 4 4 4 4 4 4 a . 
. . 4 . . . a 4 4 4 3 3 3 a a . 
. . 4 4 4 4 . a a a a a a a . . 
. . . . . 4 4 4 4 4 4 4 a a 4 4 
. . . . . . . 4 4 4 4 4 4 4 4 . 
. . . . . . 4 4 4 4 4 4 4 . . . 
. . . . . . 4 4 4 4 4 4 . . . . 
. . . . 4 4 4 . 4 4 . . . . . . 
. . . 4 4 . . . . 4 4 . . . . . 
. a a a . . . . . a a a . . . . 
`, SpriteKind.Player)
controller.moveSprite(mySprite)
football = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . e e e e e e . . . . . 
. . . e e e e e e e e e e . . . 
. . e e e e e e e e e e e e . . 
. e e e e e e e e e e e e e e . 
e e e e e e e e e e e e e e e e 
e e 1 1 1 e e 1 e e 1 1 1 e e e 
e e e e e e e e e e e e e e e e 
. . e e e e e e e e e e e e e . 
. . . e e e e e e e e e e . . . 
. . . . e e e e e e e . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Projectile)
let mySprite2 = sprites.create(img`
. . . . c c c b b b b b . . . . 
. . c c b 4 4 4 4 4 4 b b b . . 
. c c 4 4 4 4 4 5 4 4 4 4 b c . 
. e 4 4 4 4 4 4 4 4 4 5 4 4 e . 
e b 4 5 4 4 5 4 4 4 4 4 4 4 b c 
e b 4 4 4 4 4 4 4 4 4 4 5 4 4 e 
e b b 4 4 4 4 4 4 4 4 4 4 4 b e 
. e b 4 4 4 4 4 5 4 4 4 4 b e . 
8 7 e e b 4 4 4 4 4 4 b e e 6 8 
8 7 2 e e e e e e e e e e 2 7 8 
e 6 6 2 2 2 2 2 2 2 2 2 2 6 c e 
e c 6 7 6 6 7 7 7 6 6 7 6 c c e 
e b e 8 8 c c 8 8 c c c 8 e b e 
e e b e c c e e e e e c e b e e 
. e e b b 4 4 4 4 4 4 4 4 e e . 
. . . c c c c c e e e e e . . . 
`, SpriteKind.Food)

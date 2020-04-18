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
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Food)
game.onUpdate(function () {
	
})

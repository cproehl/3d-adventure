namespace SpriteKind {
    export const button1 = SpriteKind.create()
    export const coin = SpriteKind.create()
    export const button2 = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.coin, function (sprite, otherSprite) {
    music.play(music.melodyPlayable(music.baDing), music.PlaybackMode.InBackground)
    sprites.destroy(otherSprite)
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.button2, function (sprite, otherSprite) {
    music.play(music.melodyPlayable(music.magicWand), music.PlaybackMode.InBackground)
    tiles.setWallAt(tiles.getTileLocation(38, 5), false)
    tiles.setWallAt(tiles.getTileLocation(38, 6), false)
    sprites.destroy(otherSprite)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.button1, function (sprite, otherSprite) {
    music.play(music.melodyPlayable(music.magicWand), music.PlaybackMode.InBackground)
    tiles.setWallAt(tiles.getTileLocation(29, 13), false)
    sprites.destroy(otherSprite)
})
let Hero = Render.getRenderSpriteInstance()
tiles.placeOnTile(Hero, tiles.getTileLocation(7, 9))
scene.setBackgroundColor(8)
tiles.setCurrentTilemap(tilemap`level2`)
info.setScore(0)
info.setLife(3)
let coin1 = sprites.create(img`
    . . b b b b . . 
    . b 5 5 5 5 b . 
    b 5 d 3 3 d 5 b 
    b 5 3 5 5 1 5 b 
    c 5 3 5 5 1 d c 
    c d d 1 1 d d c 
    . f d d d d f . 
    . . f f f f . . 
    `, SpriteKind.coin)
tiles.placeOnTile(coin1, tiles.getTileLocation(20, 1))
Render.setSpriteAnimations(coin1, Render.createAnimations(100, [img`
    . . b b b b . . 
    . b 5 5 5 5 b . 
    b 5 d 3 3 d 5 b 
    b 5 3 5 5 1 5 b 
    c 5 3 5 5 1 d c 
    c d d 1 1 d d c 
    . f d d d d f . 
    . . f f f f . . 
    `,img`
    . . b b b . . . 
    . b 5 5 5 b . . 
    b 5 d 3 d 5 b . 
    b 5 3 5 1 5 b . 
    c 5 3 5 1 d c . 
    c 5 d 1 d d c . 
    . f d d d f . . 
    . . f f f . . . 
    `,img`
    . . . b b . . . 
    . . b 5 5 b . . 
    . b 5 d 1 5 b . 
    . b 5 3 1 5 b . 
    . c 5 3 1 d c . 
    . c 5 1 d d c . 
    . . f d d f . . 
    . . . f f . . . 
    `,img`
    . . . b b . . . 
    . . b 5 5 b . . 
    . . b 1 1 b . . 
    . . b 5 5 b . . 
    . . b d d b . . 
    . . c d d c . . 
    . . c 3 3 c . . 
    . . . f f . . . 
    `,img`
    . . . b b . . . 
    . . b 5 5 b . . 
    . b 5 1 d 5 b . 
    . b 5 1 3 5 b . 
    . c d 1 3 5 c . 
    . c d d 1 5 c . 
    . . f d d f . . 
    . . . f f . . . 
    `,img`
    . . . b b b . . 
    . . b 5 5 5 b . 
    . b 5 d 3 d 5 b 
    . b 5 1 5 3 5 b 
    . c d 1 5 3 5 c 
    . c d d 1 d 5 c 
    . . f d d d f . 
    . . . f f f . . 
    `]))
let button = sprites.create(img`
    . . . . 6 6 6 6 6 6 6 . . . . 
    . . 6 6 7 7 7 7 7 7 7 6 6 . . 
    . 6 6 7 7 7 7 7 7 7 7 7 6 6 . 
    . 6 7 7 7 7 7 7 7 7 7 7 7 6 . 
    . c 7 7 7 7 7 7 7 7 7 7 7 c . 
    . c 9 7 7 7 7 7 7 7 7 7 9 c . 
    . c 9 9 7 7 7 7 7 7 7 9 9 c . 
    . c 6 6 9 9 9 9 9 9 9 6 6 c . 
    c c 6 6 6 6 6 6 6 6 6 6 6 c c 
    c d c c 6 6 6 6 6 6 6 c c d c 
    c d d d c c c c c c c d d d c 
    c c b d d d d d d d d d b c c 
    c c c c c b b b b b c c c c c 
    c c b b b b b b b b b b b c c 
    . c c b b b b b b b b b c c . 
    . . . c c c c c c c c c . . . 
    `, SpriteKind.button1)
tiles.placeOnTile(button, tiles.getTileLocation(48, 7))
let button2 = sprites.create(img`
    . . . . 6 6 6 6 6 6 6 . . . . 
    . . 6 6 7 7 7 7 7 7 7 6 6 . . 
    . 6 6 7 7 7 7 7 7 7 7 7 6 6 . 
    . 6 7 7 7 7 7 7 7 7 7 7 7 6 . 
    . c 7 7 7 7 7 7 7 7 7 7 7 c . 
    . c 9 7 7 7 7 7 7 7 7 7 9 c . 
    . c 9 9 7 7 7 7 7 7 7 9 9 c . 
    . c 6 6 9 9 9 9 9 9 9 6 6 c . 
    c c 6 6 6 6 6 6 6 6 6 6 6 c c 
    c d c c 6 6 6 6 6 6 6 c c d c 
    c d d d c c c c c c c d d d c 
    c c b d d d d d d d d d b c c 
    c c c c c b b b b b c c c c c 
    c c b b b b b b b b b b b c c 
    . c c b b b b b b b b b c c . 
    . . . c c c c c c c c c . . . 
    `, SpriteKind.button2)
tiles.placeOnTile(button2, tiles.getTileLocation(16, 9))

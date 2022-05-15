const monsters = {
  Emby: {
    position: {
      x: 280,
      y: 325
    },
    image: {
      src: './img/embySprite.png'
    },
    frames: {
      max: 4,
      hold: 30
    },
    animate: true,
    name: 'Emby',
    attacks: [attacks.Tackle, attacks.Fireball]
  },
  Soulbreaker: {
    position: {
      x: 800,
      y: 100
    },
    image: {
      src: './img/SoulbreakerSprite.png'
    },
    frames: {
      max: 4,
      hold: 30
    },
    animate: true,
    isEnemy: true,
    name: 'Soulbreaker',
    attacks: [attacks.Tackle, attacks.Fireball]
  }
}

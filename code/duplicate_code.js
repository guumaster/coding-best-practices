// Bad:
function walkNorth() {
  const player = getPlayer()
  player.Move('N')
  return player.NewPosition
}

function walkSouth() {
  const player = getPlayer()
  player.Move('S')
  return player.NewPosition
}

// Good:
function walk(direction) {
  const player = getPlayer()
  player.Move(direction)
  return player.NewPosition
}

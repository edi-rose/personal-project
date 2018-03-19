var settings = require('../client/settings.js')

test('token returns correct token', ()=> {
  expect(settings.token('none')).toEqual(' ')
  expect(settings.token('cross')).toEqual('x')
  expect(settings.token('naught')).toEqual('o')
})

test('default teams are correct', ()=>{
  expect(settings.userTeam).toEqual('cross')
  expect(settings.botTeam).toEqual('naught')
})

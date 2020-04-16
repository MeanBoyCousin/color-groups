const groupColors = require('../index')

describe('Tests for groupColors.find function', () => {
    const primary = groupColors.find('lemonchiffon')
    const emptyString = groupColors.find('')
    const undef = groupColors.find()
    const arr = groupColors.find(['lemonchiffon', 'salmon', 'coral'])
    const obj = groupColors.find({
        1: 'salmon',
        2: 'lemonchiffon'
    })

    test('should return the correct primary color as a string', () => {
        expect(primary).toEqual('yellow')
        expect(typeof primary).toEqual('string')
    })

    test('should return undefined message for anything other than a string', () => {
        expect(emptyString).toEqual('Incorrect parameter. Parameter must be of type string and must match a known HTML color.')
        expect(undef).toEqual('Incorrect parameter. Parameter must be of type string and must match a known HTML color.')
        expect(arr).toEqual('Incorrect parameter. Parameter must be of type string and must match a known HTML color.')
        expect(obj).toEqual('Incorrect parameter. Parameter must be of type string and must match a known HTML color.')
    })
})

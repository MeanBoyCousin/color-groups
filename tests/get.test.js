const groupColors = require('../index')

describe('Tests for groupColors.get', () => {
    const colorGroups = {
        pink: groupColors.get.pink,
        purple: groupColors.get.purple,
        red: groupColors.get.red,
        orange: groupColors.get.orange,
        yellow: groupColors.get.yellow,
        green: groupColors.get.green,
        cyan: groupColors.get.cyan,
        blue: groupColors.get.blue,
        brown: groupColors.get.brown,
        white: groupColors.get.white,
        grey: groupColors.get.grey
    }

    test('Each color group should be of type array', () => {
        expect(Object.values(colorGroups).every(group => Array.isArray(group))).toEqual(true)
    })

    test('Each color group should be an array of length > 0', () => {
        expect(Object.values(colorGroups).every(group => group.length > 0)).toEqual(true)
    })

    test('Each color group should be an array of only strings', () => {
        expect(Object.values(colorGroups).flat().every(color => typeof color === 'string')).toEqual(true)
    })

    test('should return strings with length greater than 0', () => {
        expect(Object.values(colorGroups).flat().every(color => color.length > 0)).toEqual(true)
    })
})

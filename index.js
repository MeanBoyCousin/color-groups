const colors = {
    pink: ['pink', 'lightpink', 'hotpink', 'deeppink', 'palevioletred', 'mediumvioletred'],
    purple: ['lavender', 'thistle', 'plum', 'orchid', 'violet', 'fuchsia', 'magenta', 'mediumorchid', 'darkorchid', 'darkviolet', 'blueviolet', 'darkmagenta', 'purple', 'mediumpurple', 'mediumslateblue', 'slateblue', 'darkslateblue', 'rebeccapurple', 'indigo'],
    red: ['lightsalmon', 'salmon', 'darksalmon', 'lightcoral', 'indianred', 'crimson', 'red', 'firebrick', 'darkred'],
    orange: ['orange', 'darkorange', 'coral', 'tomato', 'orangered'],
    yellow: ['gold', 'yellow', 'lightyellow', 'lemonchiffon', 'lightgoldenrodyellow', 'papayawhip', 'moccasin', 'peachpuff', 'palegoldenrod', 'khaki', 'darkkhaki'],
    green: ['greenyellow', 'chartreuse', 'lawngreen', 'lime', 'limegreen', 'palegreen', 'lightgreen', 'mediumspringgreen', 'springgreen', 'mediumseagreen', 'seagreen', 'forestgreen', 'green', 'darkgreen', 'yellowgreen', 'olivedrab', 'darkolivegreen', 'mediumaquamarine', 'darkseagreen', 'lightseagreen', 'darkcyan', 'teal'],
    cyan: ['aqua', 'cyan', 'lightcyan', 'paleturquoise', 'aquamarine', 'turquoise', 'mediumturquoise', 'darkturquoise'],
    blue: ['cadetblue', 'steelblue', 'lightsteelblue', 'lightblue', 'powderblue', 'lightskyblue', 'skyblue', 'cornflowerblue', 'deepskyblue', 'dodgerblue', 'royalblue', 'blue', 'mediumblue', 'darkblue', 'navy', 'midnightblue'],
    brown: ['cornsilk', 'blanchedalmond', 'bisque', 'navajowhite', 'wheat', 'burlywood', 'tan', 'rosybrown', 'sandybrown', 'goldenrod', 'darkgoldenrod', 'peru', 'chocolate', 'olive', 'saddlebrown', 'sienna', 'brown', 'maroon'],
    white: ['white', 'snow', 'honeydew', 'mintcream', 'azure', 'aliceblue', 'ghostwhite', 'whitesmoke', 'seashell', 'beige', 'oldlace', 'floralwhite', 'ivory', 'antiquewhite', 'linen', 'lavenderblush', 'mistyrose'],
    grey: ['gainsboro', 'lightgray', 'silver', 'darkgray', 'dimgray', 'gray', 'lightslategray', 'slategray', 'darkslategray', 'black']
}

const findPrimary = color => {
    try {
        return Object.entries(colors).filter(array => array[1].includes(color.toLowerCase()))[0][0]
    } catch (error) {
        return 'Incorrect parameter. Parameter must be of type string and must match a known HTML color.'
    }
}

module.exports = {
    get: colors,
    find: findPrimary
}

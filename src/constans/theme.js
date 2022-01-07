// Object.freeze - что бы с наружи не изменяли
export const theme = Object.freeze({
  colors: {
    white: '#fff',
    black: '#010101',
    green: '#5ddf6f',
    blue: '#7e75ff',
    red: '#f74e4e',
    primaryText: '#212121',
    secondaryText: '#757575',
  },
  spacing: 8,
});

// свойство spacing
//если проэкты разрабатываются по дизайнерской системе (обычно 4, 8 точечная)
//все отступы(margine, padding) кратні 4 или 8

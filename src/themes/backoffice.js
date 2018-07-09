import {pxDivide} from './utils';

const pallete = {
  disabled: '#cbd3dc', //D55
  mainColor: '#3899ec', //B10
  mainHoverColor: '#4eb7f5', //B20
  dangerColor: '#ee5951', //R10
  dangerHoverColor: '#ff6666', //R20
  white: '#ffffff' //D80
};

const heightMap = {
  small: '30px',
  medium: '36px',
  large: '42px'
};

const paddingMap = {
  small: '0 17px',
  medium: '0 23px',
  large: '0 29px'
};

const fontSizeMap = {
  small: '14px',
  medium: '16px',
  large: '20px'
};

const lineHeightMap = {
  small: '18px',
  medium: '24px',
  large: '24px'
};

const skinToColorMap = {
  fullblue: pallete.white,
  fullred: pallete.white,
  emptyblue: pallete.mainColor
};

const skinToBackgroundMap = {
  fullblue: pallete.mainColor,
  fullred: pallete.dangerColor,
  emptyblue: pallete.white
};

const skinToBorderColorMap = {
  fullblue: pallete.mainColor,
  fullred: pallete.dangerColor,
  emptyblue: pallete.mainColor
};

const skinToHoverColorMap = {
  fullblue: pallete.white,
  fullred: pallete.white,
  emptyblue: pallete.white
};

const skinToHoverBackgroundMap = {
  fullblue: pallete.mainHoverColor,
  fullred: pallete.dangerHoverColor,
  emptyblue: pallete.mainHoverColor
};

const skinToHoverBorderColorMap = {
  fullblue: pallete.mainHoverColor,
  fullred: pallete.dangerHoverColor,
  emptyblue: pallete.mainHoverColor
};

export default {
  button: {
    fontSize: ({height}) => fontSizeMap[height],
    lineHeight: ({height}) => lineHeightMap[height],

    height: ({height}) => heightMap[height],
    padding: ({height}) => paddingMap[height],
    borderRadius: ({height}) => pxDivide(heightMap[height], 2),

    color: ({skin}) => skinToColorMap[skin],
    backgroundColor: ({skin}) => skinToBackgroundMap[skin],
    borderColor: ({skin}) => skinToBorderColorMap[skin],

    hover: {
      color: ({skin}) => skinToHoverColorMap[skin],
      backgroundColor: ({skin}) => skinToHoverBackgroundMap[skin],
      borderColor: ({skin}) => skinToHoverBorderColorMap[skin]
    },

    disabled: {
      color: 'black',
      backgroundColor: pallete.disabled,
      borderColor: pallete.disabled
    }
  }
};

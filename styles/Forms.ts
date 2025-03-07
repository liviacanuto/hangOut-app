import { Dimensions, StyleSheet } from 'react-native';
import { Palette } from '@styles/Design';
const palette = Palette.getInstance();

const fontSizeBase = 14;
const inputHeight = 40;
const fieldSpace = 10;
const formSpace = 35;

export const formStyle = StyleSheet.create({
  scroll: {
    flex: 1,
  },

  scrollContent: {
    flexGrow: 1,
    justifyContent: 'flex-end',
  },

  area: {
    backgroundColor: palette.colors.bg_primary,
    width: '100%',

    padding: formSpace,
    borderTopLeftRadius: 70,
  },

  space: {
    marginBottom: formSpace,
  },

  littleSpace: {
    marginBottom: 20,
  },
  
  bigSpace: {
    marginBottom: 70,
  },

  title: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: palette.colors.text_primary,
    fontSize: fontSizeBase * 2.5,
    fontFamily: palette.font.family,
  },

  field: {
    position: 'relative',
  },

  text: {
    color: palette.colors.text_primary,
    fontFamily: palette.font.family,
    fontSize: fontSizeBase,
    textAlign: 'center',
  },

  highlightedText: {
    fontWeight: 'bold',
    fontSize: fontSizeBase,
    color: palette.colors.main,
    fontFamily: palette.font.family,
  },

  forgetPasswordArea: {
    alignSelf: 'flex-end',
    marginTop: 5,
  },

  bottomTextArea: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  bottomText: {
    fontSize: fontSizeBase * 1.3,
  }
});

export const labelStyle = StyleSheet.create({
  area: {
    height: inputHeight,

    justifyContent: 'center',
    position: 'absolute',
    left: fieldSpace,

    zIndex: 3,
  },

  content: {
    backgroundColor: palette.colors.bg_primary,
    color: palette.colors.text_primary,
    fontFamily: palette.font.family,
    fontSize: fontSizeBase,
  },
});

export const placeholderStyle = StyleSheet.create({
  area: {
    position: 'absolute',
    top: inputHeight / 2 - fontSizeBase / 2,
    left: fieldSpace,

    zIndex: 1,
  },

  content: {
    color: palette.colors.text_secondary,
    fontFamily: palette.font.family,
    fontSize: fontSizeBase,
  },
});

export const inputStyle = StyleSheet.create({
  area: {
    position: 'relative',
    height: inputHeight,
    flexDirection: 'row',

    borderRadius: 5,
    borderWidth: 1,
    zIndex: 2,
  },

  content: {
    color: palette.colors.text_primary,
    fontFamily: palette.font.family,
    paddingHorizontal: fieldSpace,
    fontSize: fontSizeBase,
    flex: 1,
  },

  iconArea: {
    justifyContent: 'center',
    paddingRight: fieldSpace,
    height: inputHeight,
  },

  icon: {
    color: palette.colors.text_secondary,
    fontSize: fontSizeBase * 1.5,
  },
});

export const inputStyleData = {
  default: {
    borderColor: palette.colors.border,
  },

  focused: {
    top: -20,
    borderColor: palette.colors.main,
  },
};

export const buttonStyle = StyleSheet.create({
  area: {
    height: inputHeight,
    position: 'relative',
    flexDirection: 'row',

    justifyContent: 'center',
    alignItems: 'center',
    gap: fieldSpace * 1,

    borderRadius: 100,
  },

  main: {
    backgroundColor: palette.colors.main,
  },

  alternative: {
    borderWidth: 1,
    borderColor: palette.colors.border,
  },

  text: {
    color: palette.colors.text_primary,
    fontFamily: palette.font.family,
    fontSize: fontSizeBase * 1.5,
  },

  icon: {
    color: palette.colors.text_primary,
    fontSize: fontSizeBase * 1.3,
  },

  logo: {
    height: fontSizeBase * 1.7,
    width: fontSizeBase * 1.7,
  },
});

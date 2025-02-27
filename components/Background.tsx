import { Dimensions, StyleSheet, View } from 'react-native';
import { Palette } from '@styles/Design';
const palette = Palette.getInstance();

export function StripedBackground() {
  const striped_size = 16;
  const device_width = Dimensions.get('window').width;
  const stripe_count = Math.ceil(device_width / striped_size);

  return (
    <View style={[styles.fullBackground]}>
      {Array.from({ length: stripe_count }).map((_, index) => (
        <View
          key={index}
          style={[
            styles.stripe,
            {
              top: index * striped_size,
              right: index * striped_size,
              backgroundColor: index % 2 === 0 ? palette.colors.bg_secondary : palette.colors.bg_tertiary,
            },
          ]}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  fullBackground: {
    position: 'absolute',
    top: 0,
    left: 0,

    width: '100%',
    height: '100%',
  },

  stripe: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
});

import {Image, StyleSheet, TouchableOpacity} from 'react-native';

interface IScreenHeaderBtnProps {
  iconUrl: string,
  dimension: any,
  handlePress: () => void,
}

export const ScreenHeaderBtn:React.FC<IScreenHeaderBtnProps> = ({iconUrl, dimension, handlePress}) => {
  return (
    <TouchableOpacity style={styles.btnContainer} onPress={handlePress}>
      <Image
        source={{uri:iconUrl}}
        resizeMode="cover"
        style={getBtnImgStyle(dimension)}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btnContainer: {
    width: 40,
    height: 40,
    backgroundColor: '#fff',
    borderRadius: 1.25,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
const getBtnImgStyle = (dimension: any) => ({
  width: dimension,
  height: dimension,
  borderRadius: 1.25,
});

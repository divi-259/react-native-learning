import React, {useState, useEffect} from 'react';
import {
  Dimensions,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const {width, height} = Dimensions.get('window');
const shapeTypes = ['circle', 'square', 'oval'];

function getRandomColor() {
  const hexRange = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += hexRange[Math.floor(Math.random() * 16)];
  }
  return color;
}

function getRandomPosition() {
  return {
    top: Math.floor(Math.random() * (height - 120)), // buffer from bottom
    left: Math.floor(Math.random() * (width - 120)), // buffer from right
  };
}

function App(): React.JSX.Element {
  const [randomBackground, setRandomBackground] = useState('#ffffff');
  type ShapeType = 'circle' | 'square' | 'oval';

  interface Shape {
    type: ShapeType;
    color: string;
    position: {top: number; left: number};
  }

  const shapeTypes: ShapeType[] = ['circle', 'square', 'oval'];
  const [shapes, setShapes] = useState<Shape[]>([]);

  const generateCollage = () => {
    const newBackground = getRandomColor();
    const newShapes = Array.from({length: 15}).map(() => {
      return {
        type: shapeTypes[Math.floor(Math.random() * shapeTypes.length)],
        color: getRandomColor(),
        position: getRandomPosition(),
      };
    });
    setRandomBackground(newBackground);
    setShapes(newShapes);
  };

  useEffect(() => {
    generateCollage();
  }, []);

  return (
    <>
      <StatusBar backgroundColor={randomBackground} />
      <View style={[styles.container, {backgroundColor: randomBackground}]}>
        {shapes.map((shape, index) => (
          <View
            key={index}
            style={[
              styles.baseShape,
              styles[shape.type],
              {
                backgroundColor: shape.color,
                top: shape.position.top,
                left: shape.position.left,
              },
            ]}
          />
        ))}

        <TouchableOpacity onPress={generateCollage} style={styles.actionBtn}>
          <Text style={styles.styleBtnText}>Random Collage</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  baseShape: {
    position: 'absolute',
    borderWidth: 2,
    borderColor: '#000',
  },
  circle: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  square: {
    width: 60,
    height: 60,
  },
  oval: {
    width: 80,
    height: 50,
    borderRadius: 25,
  },
  actionBtn: {
    position: 'absolute',
    bottom: 30,
    alignSelf: 'center',
    backgroundColor: '#6a1b4d',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  styleBtnText: {
    color: '#fff',
    fontSize: 18,
  },
});

export default App;

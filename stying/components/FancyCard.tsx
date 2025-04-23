import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function FancyCard() {
  return (
    <View>
      <Text style={styles.headingText}>Trending Places</Text>
      <View style={[styles.card, styles.cardElevated]}>
        <Image
          source={require('./../assets/images/fancyCard.jpg')}
          style={styles.cardImage}
        />
        <View style={styles.cardBody}>
          <Text style={styles.cardTitle}>Some Ancient Monument</Text>
          <Text style={styles.cardLabel}>Asian continent</Text>
          <Text style={styles.cardDescription}>
            Chinese temple Lorem ipsum dolor sit amet Lorem ipsum dolor sit
            amet. Lorem ipsum dolor.
          </Text>
          <Text style={styles.cardFooter}>Asian Temple</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 8,
  },
  card: {
    width: 350,
    height: 360,
    borderRadius: 6,
    marginVertical: 12,
    marginHorizontal: 16,
  },
  cardElevated: {
    backgroundColor: '#fff',
    elevation: 14,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: '#043b5c',
    shadowOpacity: 0.1,
    shadowRadius: 12,
  },
  cardImage: {
    height: 170,
    width: '100%',
    marginBottom: 8,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
  },
  cardBody: {
    flex: 1,
    flexGrow: 1,
    paddingHorizontal: 12,
  },
  cardTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 6,
    color: 'black',
  },
  cardLabel: {
    fontSize: 20,
    marginBottom: 6,
  },
  cardDescription: {
    fontSize: 16,
    marginBottom: 6,
    color: '#043b5c',
    marginTop: 6,
    flexShrink: 1,
  },
  cardFooter: {
    color: 'black',
  },
});

import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import colorPalette from '../../helpers/color_palette';

const PoemDetailOptionsSkeleton = () => {
  return (
    <View style={styles.container}>
      <View style={styles.playButton}>
        <View style={styles.iconSkeleton} />
        <View style={styles.textSkeleton} />
      </View>

      <View style={styles.dateContainer}>
        <View style={styles.iconSkeleton} />
        <View style={styles.textSkeleton} />
      </View>

      <View style={styles.viewsContainer}>
        <View style={styles.iconSkeleton} />
        <View style={styles.textSkeleton} />
      </View>

      <View style={styles.likesContainer}>
        <View style={styles.likeButton}>
          <View style={styles.iconSkeleton} />
          <View style={styles.textSkeleton} />
        </View>
        <View style={styles.likesCountSkeleton} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#d3d3d3',
  },
  playButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  iconSkeleton: {
    width: 24,
    height: 24,
    backgroundColor: '#e0e0e0',
    borderRadius: 4,
    marginRight: 10,
  },
  textSkeleton: {
    width: 150,
    height: 16,
    backgroundColor: '#e0e0e0',
    borderRadius: 4,
  },
  dateContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  viewsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  likesContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  likeButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 10,
  },
  likesCountSkeleton: {
    width: 100,
    height: 16,
    backgroundColor: '#e0e0e0',
    borderRadius: 4,
    marginTop: 5,
  },
});

export default PoemDetailOptionsSkeleton;

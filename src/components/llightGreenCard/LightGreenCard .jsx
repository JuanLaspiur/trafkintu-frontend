import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 
import colorPalette from '../../helpers/color_palette';

function LightGreenCard() {
  return (
    <View style={styles.greenContainer}>
        <Text style={styles.balanceLabel}>Saldo Actual</Text>
      <Text style={styles.balanceAmount}>$1227,23 <Ionicons name="eye" size={20} color={colorPalette.neutralDark} style={styles.icon} /></Text>
    </View>
  );
}

const styles = StyleSheet.create({
  greenContainer: {
    marginTop: 15,
    backgroundColor: colorPalette.secondary, 
    width:'80%',
    margin:'auto',
    borderRadius: 10,
    padding: 20,
    display:'flex',
    flexDirection:'row', 
    gap:'20',
    alignItems: 'center',
    justifyContent: 'center',
  },
  balanceRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  icon: {
    marginHorizontal: 5,
  },
  balanceLabel: {
    fontSize: 16,
    color: colorPalette.neutralDark,
    fontWeight: 'bold',
  },
  balanceAmount: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colorPalette.neutralDark,
  },
});

export default LightGreenCard;

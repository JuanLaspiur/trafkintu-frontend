import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Image } from 'expo-image';
import colorPalette from '../../../helpers/color_palette';
import { useNavigation } from '@react-navigation/native'; 
import { formatDateToSpanishLong } from '../../../helpers/formatDate';
import { Ionicons } from '@expo/vector-icons'; 

function PoemCard({ title, image, poem }) {
  const navigation = useNavigation();

  const handleCardPress = () => {
    navigation.navigate('PoemDetail', { poem });
  };

  const handleSetDraft = () => {
  alert('modificando estado del poema')
  };

  return (
    <TouchableOpacity onPress={handleCardPress} activeOpacity={0.7}>
      <View style={styles.card}>
        <Image source={image} style={styles.image} />
        <Text style={styles.cardTitle}>
          <Image source={require('../../../../assets/icons/inkwell_15894224.webp')} style={styles.icon} />  {title || 'Sin título'}
        </Text>
        <View style={styles.dateContainer}>
          <Text style={styles.cardDate}>
            <Image source={require('../../../../assets/icons/fecha_card.webp')} style={styles.iconTitleCard} /> Publicado: {formatDateToSpanishLong(poem.createdAt)}
          </Text>
        </View>
        <TouchableOpacity onPress={handleSetDraft} style={styles.draftButton}>
          <Ionicons 
            name={poem.isDraft ? "document-outline" : "eye-outline"} 
            size={18} 
            color={colorPalette.primary} 
          />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    overflow: 'hidden',
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    marginBottom: 10,
    position: 'relative'
  },
  image: {
    width: '100%',
    height: 150,
    borderRadius: 12,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: colorPalette.primary,
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center', 
  },
  icon: {
    width: 15,
    height: 15,
    marginRight: 5,  
  },
  cardDate: {
    fontSize: 12,
    color: '#999',
    flex: 1, 
  },
  iconTitleCard: {
    height: 12,
    width: 12,
  },
  dateContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between', 
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  draftButton: {
    position: 'absolute',
    right: 10,
    top: 10,
    backgroundColor: 'white',
    padding: 5,
    borderRadius: 15,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
});

export default PoemCard;

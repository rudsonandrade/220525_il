import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { MapPin, ChevronRight, Clock } from 'lucide-react-native';
import { useState } from 'react';

interface LocationCardProps {
  name: string;
  description: string;
  hours: string;
  pinColor: string;
}

export function LocationCard({ name, description, hours, pinColor }: LocationCardProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <TouchableOpacity 
      style={styles.card} 
      onPress={() => setExpanded(!expanded)}
      activeOpacity={0.8}
    >
      <View style={styles.cardHeader}>
        <MapPin size={20} color={pinColor} style={styles.cardIcon} />
        <View style={styles.cardTitleContainer}>
          <Text style={styles.cardTitle}>{name}</Text>
          <Text style={styles.cardDescription}>{description}</Text>
        </View>
        <ChevronRight 
          size={20} 
          color="#666666"
          style={{ transform: [{ rotate: expanded ? '90deg' : '0deg' }] }}
        />
      </View>
      
      {expanded && (
        <View style={styles.cardExpanded}>
          <View style={styles.cardHours}>
            <Clock size={16} color="#666666" style={styles.hoursIcon} />
            <Text style={styles.hoursText}>{hours}</Text>
          </View>
          <TouchableOpacity style={styles.detailsButton}>
            <Text style={styles.detailsButtonText}>Ver Detalhes</Text>
          </TouchableOpacity>
        </View>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    padding: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cardIcon: {
    marginRight: 12,
  },
  cardTitleContainer: {
    flex: 1,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333333',
  },
  cardDescription: {
    fontSize: 14,
    color: '#666666',
    marginTop: 2,
  },
  cardExpanded: {
    marginTop: 12,
    paddingTop: 12,
    borderTopWidth: 1,
    borderTopColor: '#EEEEEE',
  },
  cardHours: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  hoursIcon: {
    marginRight: 8,
  },
  hoursText: {
    fontSize: 14,
    color: '#666666',
  },
  detailsButton: {
    backgroundColor: '#006633',
    borderRadius: 4,
    padding: 8,
    alignItems: 'center',
  },
  detailsButtonText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '500',
  },
});
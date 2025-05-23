import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Calendar, Star } from 'lucide-react-native';
import { useState } from 'react';

interface EventCardProps {
  date: string;
  title: string;
  description: string;
  important: boolean;
}

/**
 * Event card component for calendar events
 */
export function EventCard({ date, title, description, important }: EventCardProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <TouchableOpacity
      style={[
        styles.card,
        important && styles.importantCard
      ]}
      onPress={() => setExpanded(!expanded)}
      activeOpacity={0.8}
    >
      <View style={styles.cardHeader}>
        <View style={styles.dateContainer}>
          <Calendar size={16} color={important ? '#FFCC00' : '#666666'} style={styles.dateIcon} />
          <Text 
            style={[
              styles.dateText,
              important && styles.importantDateText
            ]}
          >
            {date}
          </Text>
        </View>
        
        {important && (
          <View style={styles.starContainer}>
            <Star size={16} color="#FFCC00" fill="#FFCC00" />
          </View>
        )}
      </View>
      
      <Text style={styles.cardTitle}>{title}</Text>
      
      {expanded && (
        <View style={styles.descriptionContainer}>
          <Text style={styles.descriptionText}>{description}</Text>
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
  importantCard: {
    borderLeftWidth: 4,
    borderLeftColor: '#FFCC00',
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  dateContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dateIcon: {
    marginRight: 6,
  },
  dateText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#666666',
  },
  importantDateText: {
    color: '#333333',
  },
  starContainer: {
    backgroundColor: 'rgba(255, 204, 0, 0.1)',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333333',
  },
  descriptionContainer: {
    marginTop: 8,
    paddingTop: 8,
    borderTopWidth: 1,
    borderTopColor: '#EEEEEE',
  },
  descriptionText: {
    fontSize: 14,
    color: '#555555',
    lineHeight: 20,
  },
});
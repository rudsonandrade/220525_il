import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Book, Clock, MapPin } from 'lucide-react-native';

interface CourseCardProps {
  name: string;
  type: string;
  duration: string;
  campus: string;
}

export function CourseCard({ name, type, duration, campus }: CourseCardProps) {
  return (
    <TouchableOpacity style={styles.card} activeOpacity={0.7}>
      <View style={styles.cardHeader}>
        <Text style={styles.courseName}>{name}</Text>
        <View style={styles.courseTypeTag}>
          <Text style={styles.courseTypeText}>{type}</Text>
        </View>
      </View>
      
      <View style={styles.courseDetails}>
        <View style={styles.detailItem}>
          <Clock size={16} color="#666666" style={styles.detailIcon} />
          <Text style={styles.detailText}>{duration}</Text>
        </View>
        
        <View style={styles.detailItem}>
          <MapPin size={16} color="#666666" style={styles.detailIcon} />
          <Text style={styles.detailText}>{campus}</Text>
        </View>
        
        <View style={styles.detailItem}>
          <Book size={16} color="#666666" style={styles.detailIcon} />
          <Text style={styles.detailText}>Integral</Text>
        </View>
      </View>
      
      <TouchableOpacity style={styles.moreButton}>
        <Text style={styles.moreButtonText}>Ver Detalhes</Text>
      </TouchableOpacity>
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
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  courseName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333333',
  },
  courseTypeTag: {
    backgroundColor: '#E6F2ED',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
  },
  courseTypeText: {
    fontSize: 12,
    color: '#006633',
    fontWeight: '500',
  },
  courseDetails: {
    marginBottom: 12,
  },
  detailItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  detailIcon: {
    marginRight: 8,
  },
  detailText: {
    fontSize: 14,
    color: '#666666',
  },
  moreButton: {
    backgroundColor: '#F5F5F5',
    borderRadius: 4,
    padding: 8,
    alignItems: 'center',
  },
  moreButtonText: {
    fontSize: 14,
    color: '#006633',
    fontWeight: '500',
  },
});
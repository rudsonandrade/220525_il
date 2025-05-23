import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { ChevronRight } from 'lucide-react-native';
import { Link } from 'expo-router';

interface FeaturedCardProps {
  title: string;
  description: string;
  imageUrl: string;
  linkText: string;
  linkRoute: string;
}

export function FeaturedCard({ title, description, imageUrl, linkText, linkRoute }: FeaturedCardProps) {
  return (
    <View style={styles.card}>
      <Image source={{ uri: imageUrl }} style={styles.cardImage} />
      <View style={styles.cardContent}>
        <Text style={styles.cardTitle}>{title}</Text>
        <Text style={styles.cardDescription}>{description}</Text>
        <Link href={linkRoute} asChild>
          <TouchableOpacity style={styles.cardLink}>
            <Text style={styles.cardLinkText}>{linkText}</Text>
            <ChevronRight size={16} color="#006633" />
          </TouchableOpacity>
        </Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    overflow: 'hidden',
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  cardImage: {
    width: '100%',
    height: 150,
  },
  cardContent: {
    padding: 16,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 8,
    color: '#006633',
  },
  cardDescription: {
    fontSize: 14,
    lineHeight: 20,
    color: '#555555',
    marginBottom: 12,
  },
  cardLink: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cardLinkText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#006633',
    marginRight: 4,
  },
});
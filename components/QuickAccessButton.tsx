import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Map, Calendar, BookOpen, GraduationCap, Library, Menu, FileText, Clock } from 'lucide-react-native';
import { Link } from 'expo-router';

interface QuickAccessButtonProps {
  icon: string;
  title: string;
  route: string;
}

export function QuickAccessButton({ icon, title, route }: QuickAccessButtonProps) {
  const getIcon = () => {
    switch (icon) {
      case 'map':
        return <Map size={24} color="#006633" />;
      case 'calendar':
        return <Calendar size={24} color="#006633" />;
      case 'book-open':
        return <BookOpen size={24} color="#006633" />;
      case 'graduation-cap':
        return <GraduationCap size={24} color="#006633" />;
      case 'library':
        return <Library size={24} color="#006633" />;
      case 'file-text':
        return <FileText size={24} color="#006633" />;
      case 'clock':
        return <Clock size={24} color="#006633" />;
      case 'menu':
        return <Menu size={24} color="#006633" />;
      default:
        return <Menu size={24} color="#006633" />;
    }
  };

  return (
    <Link href={route} asChild>
      <TouchableOpacity style={styles.button}>
        {getIcon()}
        <Text style={styles.buttonTitle}>{title}</Text>
      </TouchableOpacity>
    </Link>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    padding: 16,
    width: '30%',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
    minHeight: 100,
  },
  buttonTitle: {
    fontSize: 14,
    fontWeight: '500',
    color: '#333333',
    marginTop: 8,
    textAlign: 'center',
  },
});
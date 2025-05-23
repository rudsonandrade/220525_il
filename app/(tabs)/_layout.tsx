import { Tabs } from 'expo-router';
import { Chrome as Home, Calendar, BookOpen, GraduationCap, School, FileText, Clock, ArrowLeft } from 'lucide-react-native';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { useRouter } from 'expo-router';
import { SearchButton } from '@/components/SearchButton';

export default function TabLayout() {
  const router = useRouter();

  return (
    <Tabs
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: '#006633',
        tabBarInactiveTintColor: '#666666',
        tabBarStyle: styles.tabBar,
        tabBarLabelStyle: styles.tabBarLabel,
        headerStyle: styles.header,
        headerTitleStyle: styles.headerTitle,
        headerTintColor: '#FFFFFF',
        headerRight: () => (
          <SearchButton />
        ),
        headerLeft: () => {
          if (route.name === 'index') {
            return null;
          }
          return (
            <TouchableOpacity 
              onPress={() => router.back()}
              style={styles.backButton}
            >
              <ArrowLeft size={24} color="#FFFFFF" />
            </TouchableOpacity>
          );
        },
      })}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Início',
          tabBarIcon: ({ color, size }) => <Home size={size} color={color} />,
          headerTitle: 'Guia do Estudante UFMT',
        }}
      />
      <Tabs.Screen
        name="calendar"
        options={{
          title: 'Calendário',
          tabBarIcon: ({ color, size }) => <Calendar size={size} color={color} />,
          headerTitle: 'Calendário Acadêmico',
        }}
      />
      <Tabs.Screen
        name="classes"
        options={{
          title: 'Minhas Aulas',
          tabBarIcon: ({ color, size }) => <Clock size={size} color={color} />,
          headerTitle: 'Minhas Aulas',
        }}
      />
      <Tabs.Screen
        name="academic"
        options={{
          title: 'Vida Acadêmica',
          tabBarIcon: ({ color, size }) => <BookOpen size={size} color={color} />,
          headerTitle: 'Vida Acadêmica',
        }}
      />
      <Tabs.Screen
        name="support"
        options={{
          title: 'Apoio',
          tabBarIcon: ({ color, size }) => <GraduationCap size={size} color={color} />,
          headerTitle: 'Apoio Estudantil',
        }}
      />
      <Tabs.Screen
        name="sei"
        options={{
          title: 'SEI',
          tabBarIcon: ({ color, size }) => <FileText size={size} color={color} />,
          headerTitle: 'SEI - Sistema Eletrônico de Informações',
        }}
      />
      <Tabs.Screen
        name="more"
        options={{
          title: 'Mais',
          tabBarIcon: ({ color, size }) => <School size={size} color={color} />,
          headerTitle: 'Mais Informações',
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1,
    borderTopColor: '#EEEEEE',
    height: 60,
    paddingBottom: 5,
    paddingTop: 5,
  },
  tabBarLabel: {
    fontSize: 12,
    fontWeight: '500',
  },
  header: {
    backgroundColor: '#006633',
  },
  headerTitle: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '600',
  },
  backButton: {
    marginLeft: 16,
  },
});
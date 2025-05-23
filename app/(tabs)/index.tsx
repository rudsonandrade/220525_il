import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity } from 'react-native';
import { ChevronRight } from 'lucide-react-native';
import { Link } from 'expo-router';
import { useMemo } from 'react';
import { FeaturedCard } from '@/components/FeaturedCard';
import { QuickAccessButton } from '@/components/QuickAccessButton';

export default function HomeScreen() {
  const quickAccessItems = useMemo(() => [
    { icon: 'calendar', title: 'Calendário', route: '/calendar' },
    { icon: 'clock', title: 'Minhas Aulas', route: '/classes' },
    { icon: 'book-open', title: 'Vida Acadêmica', route: '/academic' },
    { icon: 'graduation-cap', title: 'Auxílios', route: '/support' },
    { icon: 'file-text', title: 'SEI', route: '/sei' },
    { icon: 'menu', title: 'Ver Todos', route: '/more' },
  ], []);

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      <View style={styles.welcomeContainer}>
        <Image
          source={{ uri: 'https://cms.ufmt.br/files/galleries/180/Sebe77bf120d217b32d489a0322d81f19f567a6d7.png' }}
          style={styles.welcomeImage}
          resizeMode="cover"
        />
        <View style={styles.welcomeOverlay}>
          <Text style={styles.welcomeTitle}>Bem-vindo à UFMT</Text>
          <Text style={styles.welcomeSubtitle}>Vida Acadêmica na Palma da Mão</Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Acesso Rápido</Text>
        <View style={styles.quickAccessGrid}>
          {quickAccessItems.map((item, index) => (
            <QuickAccessButton 
              key={index}
              icon={item.icon}
              title={item.title}
              route={item.route}
            />
          ))}
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Destaques</Text>
        <FeaturedCard
          title="Matrícula ON-LINE 2025/1"
          description="Período de matrícula web para alunos no Sistema Acadêmico: 27 a 29 de Maio de 2025. Não perca o prazo!"
          imageUrl="https://images.pexels.com/photos/4778611/pexels-photo-4778611.jpeg"
          linkText="Ver Calendário"
          linkRoute="/calendar"
        />
        <FeaturedCard
          title="Início das Aulas 2025/1"
          description="As aulas do primeiro semestre de 2025 começam em 02 de Junho. Ajuste de matrícula ON-LINE: 02 e 03 de Junho."
          imageUrl="https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg"
          linkText="Ver Detalhes"
          linkRoute="/calendar"
        />
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Mensagem da Direção do IL</Text>
        <View style={styles.messageCard}>
          <Text style={styles.messageText}>
            "Seja bem-vindo(a) à Universidade Federal de Mato Grosso! Estamos felizes em recebê-lo(a) 
            e esperamos que sua jornada acadêmica seja repleta de descobertas e crescimento. 
            Este aplicativo foi desenvolvido para auxiliar você durante toda sua trajetória universitária."
          </Text>
          <Text style={styles.messageAuthor}>- Direção do IL</Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Explore Todos os Recursos</Text>
        <Link href="/more" asChild>
          <TouchableOpacity style={styles.exploreButton}>
            <Text style={styles.exploreButtonText}>Ver Todos os Recursos</Text>
            <ChevronRight size={20} color="#FFFFFF" />
          </TouchableOpacity>
        </Link>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  contentContainer: {
    paddingBottom: 40,
  },
  welcomeContainer: {
    height: 200,
    position: 'relative',
  },
  welcomeImage: {
    width: '100%',
    height: '100%',
  },
  welcomeOverlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0, 102, 51, 0.7)',
    padding: 16,
  },
  welcomeTitle: {
    color: '#FFFFFF',
    fontSize: 22,
    fontWeight: 'bold',
  },
  welcomeSubtitle: {
    color: '#FFFFFF',
    fontSize: 16,
  },
  section: {
    marginVertical: 16,
    paddingHorizontal: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 12,
    color: '#333333',
  },
  quickAccessGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  messageCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  messageText: {
    fontSize: 15,
    lineHeight: 22,
    color: '#333333',
    fontStyle: 'italic',
    marginBottom: 8,
  },
  messageAuthor: {
    fontSize: 14,
    fontWeight: '600',
    color: '#006633',
    textAlign: 'right',
  },
  exploreButton: {
    backgroundColor: '#006633',
    borderRadius: 8,
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  exploreButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
    marginRight: 8,
  },
});
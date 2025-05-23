import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';
import { MapPin, Navigation, Info } from 'lucide-react-native';
import { LocationCard } from '@/components/LocationCard';

export default function MapScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.mapContainer}>
        <Image
          source={{ uri: 'https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' }}
          style={styles.mapImage}
          resizeMode="cover"
        />
        <View style={styles.mapOverlay}>
          <Text style={styles.mapTitle}>Campus de Cuiabá</Text>
          <Text style={styles.mapSubtitle}>Universidade Federal de Mato Grosso</Text>
        </View>
      </View>

      <View style={styles.infoContainer}>
        <View style={styles.infoCard}>
          <Info size={20} color="#006633" />
          <Text style={styles.infoText}>
            Toque nos locais abaixo para obter mais informações. Em uma versão futura,
            será possível navegar pelo campus com GPS.
          </Text>
        </View>
      </View>

      <View style={styles.locationsContainer}>
        <Text style={styles.sectionTitle}>Locais Importantes</Text>

        <LocationCard
          name="Biblioteca Central"
          description="Acervo principal da universidade"
          hours="Segunda a Sexta: 7h às 22h, Sábado: 8h às 12h"
          pinColor="#006633"
        />

        <LocationCard
          name="Restaurante Universitário"
          description="RU - Refeições subsidiadas para estudantes"
          hours="Almoço: 11h às 14h, Jantar: 17h30 às 19h30"
          pinColor="#d4500f"
        />

        <LocationCard
          name="Secretaria Acadêmica"
          description="Atendimento a estudantes e professores"
          hours="Segunda a Sexta: 7h às 19h"
          pinColor="#006633"
        />
      </View>

      <View style={styles.addressContainer}>
        <Text style={styles.addressTitle}>Endereço do Campus</Text>
        <View style={styles.addressCard}>
          <MapPin size={20} color="#006633" style={styles.addressIcon} />
          <Text style={styles.addressText}>
            Av. Fernando Corrêa da Costa, nº 2367 - Bairro Boa Esperança. Cuiabá - MT, 78060-900
          </Text>
        </View>
        <View style={styles.transportCard}>
          <Navigation size={20} color="#006633" style={styles.addressIcon} />
          <Text style={styles.transportText}>
            Linhas de ônibus: 607, 609, 304 e linha UFMT
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  mapContainer: {
    height: 200,
    position: 'relative',
  },
  mapImage: {
    width: '100%',
    height: '100%',
  },
  mapOverlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0, 102, 51, 0.7)',
    padding: 16,
  },
  mapTitle: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 'bold',
  },
  mapSubtitle: {
    color: '#FFFFFF',
    fontSize: 14,
  },
  infoContainer: {
    padding: 16,
  },
  infoCard: {
    backgroundColor: '#E6F2ED',
    borderRadius: 8,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  infoText: {
    fontSize: 14,
    color: '#333333',
    marginLeft: 12,
    flex: 1,
  },
  locationsContainer: {
    padding: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 16,
    color: '#333333',
  },
  addressContainer: {
    padding: 16,
    marginBottom: 24,
  },
  addressTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 12,
    color: '#333333',
  },
  addressCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
  },
  addressIcon: {
    marginRight: 12,
  },
  addressText: {
    fontSize: 14,
    color: '#333333',
    flex: 1,
    lineHeight: 20,
  },
  transportCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'flex-start',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
  },
  transportText: {
    fontSize: 14,
    color: '#333333',
    flex: 1,
  },
});
import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity, Linking } from 'react-native';
import { Info, DollarSign, Chrome as Home, Utensils, Building } from 'lucide-react-native';
import { SupportProgramCard } from '@/components/SupportProgramCard';

export default function SupportScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.headerContainer}>
        <Image
          source={{ uri: 'https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' }}
          style={styles.headerImage}
        />
        <View style={styles.headerOverlay}>
          <Text style={styles.headerTitle}>Apoio Estudantil</Text>
          <Text style={styles.headerSubtitle}>
            Programas da PRAE para permanência e assistência ao estudante
          </Text>
        </View>
      </View>

      <View style={styles.infoContainer}>
        <View style={styles.infoCard}>
          <Info size={20} color="#006633" style={styles.infoIcon} />
          <Text style={styles.infoText}>
            A PRAE (Pró-Reitoria de Assistência Estudantil) oferece diversos programas 
            de apoio para garantir a permanência e o sucesso acadêmico dos estudantes.
          </Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Programas de Auxílio</Text>
        
        <SupportProgramCard
          title="Auxílio Permanência"
          description="Auxílio financeiro mensal para estudantes em vulnerabilidade socioeconômica"
          value="R$ 700,00"
          icon={<DollarSign size={24} color="#FFFFFF" />}
          color="#006633"
        />
        
        <SupportProgramCard
          title="Auxílio Moradia"
          description="Auxílio financeiro para estudantes que necessitam de moradia durante os estudos"
          value="R$ 700,00"
          icon={<Home size={24} color="#FFFFFF" />}
          color="#1d60ae"
        />
        
        <SupportProgramCard
          title="Auxílio Alimentação"
          description="Acesso gratuito ao Restaurante Universitário para alunos em vulnerabilidade"
          value="Gratuidade no RU"
          icon={<Utensils size={24} color="#FFFFFF" />}
          color="#d4500f"
        />
        
        <SupportProgramCard
          title="Casa do Estudante Universitário - CEU"
          description="Moradia estudantil para alunos em vulnerabilidade socioeconômica"
          value="Moradia Gratuita"
          icon={<Building size={24} color="#FFFFFF" />}
          color="#b91c1c"
        />
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Requisitos Gerais</Text>
        <View style={styles.requirementsCard}>
          <Text style={styles.requirementText}>
            • Estar regularmente matriculado em curso de graduação presencial
          </Text>
          <Text style={styles.requirementText}>
            • Possuir renda familiar per capita de até 1,5 salário mínimo
          </Text>
          <Text style={styles.requirementText}>
            • Não ter concluído outro curso de graduação
          </Text>
          <Text style={styles.requirementText}>
            • Apresentar documentação comprobatória da situação socioeconômica
          </Text>
          <Text style={styles.requirementText}>
            • Manter frequência mínima de 75% nas disciplinas
          </Text>
        </View>
      </View>

      <View style={styles.section}>
        <TouchableOpacity 
          style={styles.contactButton}
          onPress={() => Linking.openURL('https://wiki.ufmt.br/Pr%C3%B3-Reitoria_de_Assist%C3%AAncia_Estudantil_-_PRAE')}
        >
          <Text style={styles.contactButtonText}>Entre em Contato com a PRAE</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  headerContainer: {
    height: 200,
    position: 'relative',
  },
  headerImage: {
    width: '100%',
    height: '100%',
  },
  headerOverlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0, 102, 51, 0.7)',
    padding: 16,
  },
  headerTitle: {
    color: '#FFFFFF',
    fontSize: 22,
    fontWeight: 'bold',
  },
  headerSubtitle: {
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
  infoIcon: {
    marginRight: 12,
  },
  infoText: {
    fontSize: 14,
    color: '#333333',
    flex: 1,
    lineHeight: 20,
  },
  section: {
    padding: 16,
    marginBottom: 8,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 16,
    color: '#333333',
  },
  requirementsCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
  },
  requirementText: {
    fontSize: 14,
    color: '#333333',
    marginBottom: 12,
    lineHeight: 20,
  },
  contactButton: {
    backgroundColor: '#006633',
    borderRadius: 8,
    padding: 16,
    alignItems: 'center',
  },
  contactButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
});
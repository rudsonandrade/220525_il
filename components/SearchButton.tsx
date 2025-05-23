import { StyleSheet, View, TextInput, TouchableOpacity, Modal, ScrollView, Text } from 'react-native';
import { Search, X } from 'lucide-react-native';
import { useState, useCallback } from 'react';
import { useRouter } from 'expo-router';

interface SearchResult {
  title: string;
  route: string;
  subtitle?: string;
}

export function SearchButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const router = useRouter();

  const searchData: SearchResult[] = [
    // Academic
    { title: 'Vida Acadêmica', route: '/academic', subtitle: 'Informações sobre cursos e procedimentos acadêmicos' },
    { title: 'Matrícula', route: '/academic', subtitle: 'Procedimentos de matrícula semestral' },
    { title: 'Trancamento', route: '/academic', subtitle: 'Processo de trancamento de matrícula' },
    { title: 'Aproveitamento de Estudos', route: '/academic', subtitle: 'Aproveitamento de disciplinas cursadas' },
    { title: 'Direitos do Estudante', route: '/academic', subtitle: 'Seus direitos como estudante' },
    { title: 'Deveres do Estudante', route: '/academic', subtitle: 'Suas responsabilidades como estudante' },
    
    // Calendar
    { title: 'Calendário Acadêmico', route: '/calendar', subtitle: 'Datas importantes do semestre' },
    { title: 'Matrícula Online', route: '/calendar', subtitle: 'Período de matrícula web' },
    { title: 'Início das Aulas', route: '/calendar', subtitle: 'Data de início do semestre' },
    { title: 'Ajuste de Matrícula', route: '/calendar', subtitle: 'Período para ajustes' },
    { title: 'Provas Finais', route: '/calendar', subtitle: 'Período de avaliações finais' },
    
    // Support
    { title: 'Apoio Estudantil', route: '/support', subtitle: 'Programas de assistência estudantil' },
    { title: 'Auxílio Permanência', route: '/support', subtitle: 'Auxílio financeiro mensal' },
    { title: 'Auxílio Moradia', route: '/support', subtitle: 'Apoio para moradia' },
    { title: 'Auxílio Alimentação', route: '/support', subtitle: 'Acesso ao RU' },
    { title: 'Auxílio Saúde', route: '/support', subtitle: 'Atendimento médico e psicológico' },
    
    // SEI
    { title: 'Sistema Eletrônico de Informações', route: '/sei', subtitle: 'Acesso ao SEI' },
    { title: 'Cadastro SEI', route: '/sei', subtitle: 'Como se cadastrar no sistema' },
    { title: 'Peticionamento', route: '/sei', subtitle: 'Como peticionar documentos' },
    
    // Map
    { title: 'Mapa do Campus', route: '/map', subtitle: 'Localização de setores e prédios' },
    { title: 'Biblioteca Central', route: '/map', subtitle: 'Localização e horários' },
    { title: 'Restaurante Universitário', route: '/map', subtitle: 'RU - Localização e horários' },
    { title: 'PRAE', route: '/map', subtitle: 'Localização da assistência estudantil' },
    
    // Classes
    { title: 'Minhas Aulas', route: '/classes', subtitle: 'Horários e locais das aulas' },
    { title: 'Letras LF/LI', route: '/classes', subtitle: 'Grade do curso de Letras' },
    { title: 'Letras Libras', route: '/classes', subtitle: 'Grade do curso de Libras' },
  ];

  const filteredResults = searchQuery
    ? searchData.filter(item => 
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (item.subtitle && item.subtitle.toLowerCase().includes(searchQuery.toLowerCase()))
      )
    : [];

  const handleResultPress = useCallback((route: string) => {
    setIsOpen(false);
    setSearchQuery('');
    router.push(route);
  }, [router]);

  return (
    <>
      <TouchableOpacity
        style={styles.button}
        onPress={() => setIsOpen(true)}
      >
        <Search size={24} color="#FFFFFF" />
      </TouchableOpacity>

      <Modal
        visible={isOpen}
        animationType="fade"
        transparent={true}
        onRequestClose={() => setIsOpen(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.searchContainer}>
            <View style={styles.searchHeader}>
              <View style={styles.searchInputContainer}>
                <Search size={20} color="#666666" />
                <TextInput
                  style={styles.searchInput}
                  placeholder="Buscar..."
                  value={searchQuery}
                  onChangeText={setSearchQuery}
                  autoFocus
                />
              </View>
              <TouchableOpacity
                onPress={() => {
                  setIsOpen(false);
                  setSearchQuery('');
                }}
              >
                <X size={24} color="#666666" />
              </TouchableOpacity>
            </View>

            <ScrollView style={styles.resultsContainer}>
              {searchQuery.length > 0 && filteredResults.length === 0 && (
                <Text style={styles.noResults}>
                  Nenhum resultado encontrado para "{searchQuery}"
                </Text>
              )}
              
              {filteredResults.map((result, index) => (
                <TouchableOpacity
                  key={index}
                  style={styles.resultItem}
                  onPress={() => handleResultPress(result.route)}
                >
                  <Text style={styles.resultTitle}>{result.title}</Text>
                  {result.subtitle && (
                    <Text style={styles.resultSubtitle}>{result.subtitle}</Text>
                  )}
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>
        </View>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  button: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'flex-start',
  },
  searchContainer: {
    backgroundColor: '#FFFFFF',
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
    maxHeight: '80%',
  },
  searchHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#EEEEEE',
  },
  searchInputContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
    borderRadius: 8,
    paddingHorizontal: 12,
    marginRight: 12,
  },
  searchInput: {
    flex: 1,
    height: 40,
    marginLeft: 8,
    fontSize: 16,
  },
  resultsContainer: {
    padding: 16,
  },
  resultItem: {
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#EEEEEE',
  },
  resultTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333333',
    marginBottom: 4,
  },
  resultSubtitle: {
    fontSize: 14,
    color: '#666666',
  },
  noResults: {
    fontSize: 16,
    color: '#666666',
    textAlign: 'center',
    marginTop: 24,
  },
});
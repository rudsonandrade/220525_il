import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Linking } from 'react-native';
import { ExternalLink, FileText, UserPlus, Video } from 'lucide-react-native';

export default function SEIScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Sistema Eletrônico de Informações</Text>
        <Text style={styles.headerSubtitle}>
          Gerencie seus processos e documentos eletrônicos na UFMT
        </Text>
      </View>

      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <FileText size={24} color="#006633" />
          <Text style={styles.sectionTitle}>Acesso ao SEI</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.cardText}>
            O SEI é o sistema oficial para tramitação de processos e documentos eletrônicos na UFMT.
          </Text>
          <TouchableOpacity 
            style={styles.button}
            onPress={() => Linking.openURL('https://sei.ufmt.br')}
          >
            <Text style={styles.buttonText}>Acessar o SEI</Text>
            <ExternalLink size={20} color="#FFFFFF" />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <UserPlus size={24} color="#006633" />
          <Text style={styles.sectionTitle}>Como Cadastrar no SEI</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.stepTitle}>1. Acesse o Portal de Usuários Externos</Text>
          <Text style={styles.stepText}>
            Visite o portal de cadastro de usuários externos do SEI-UFMT.
          </Text>

          <Text style={styles.stepTitle}>2. Preencha o Formulário</Text>
          <Text style={styles.stepText}>
            • Dados pessoais completos{'\n'}
            • E-mail institucional{'\n'}
            • Documento de identificação com foto{'\n'}
            • Comprovante de vínculo com a UFMT
          </Text>

          <Text style={styles.stepTitle}>3. Aguarde a Validação</Text>
          <Text style={styles.stepText}>
            Após o envio, aguarde o e-mail de confirmação da validação do seu cadastro.
          </Text>

          <TouchableOpacity 
            style={styles.button}
            onPress={() => Linking.openURL('https://sei.ufmt.br/sei/controlador_externo.php?acao=usuario_externo_logar&id_orgao_acesso_externo=0')}
          >
            <Text style={styles.buttonText}>Realizar Cadastro</Text>
            <ExternalLink size={20} color="#FFFFFF" />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <FileText size={24} color="#006633" />
          <Text style={styles.sectionTitle}>Como Peticionar Documentos</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.stepTitle}>1. Acesse o SEI</Text>
          <Text style={styles.stepText}>
            Entre no sistema com seu usuário e senha cadastrados.
          </Text>

          <Text style={styles.stepTitle}>2. Inicie o Peticionamento</Text>
          <Text style={styles.stepText}>
            • Clique em "Peticionamento" > "Processo Novo"{'\n'}
            • Selecione o tipo de processo adequado{'\n'}
            • Preencha os dados solicitados{'\n'}
            • Anexe os documentos necessários
          </Text>

          <Text style={styles.stepTitle}>3. Assine e Envie</Text>
          <Text style={styles.stepText}>
            • Confira todas as informações{'\n'}
            • Assine eletronicamente o documento{'\n'}
            • Envie o peticionamento{'\n'}
            • Guarde o número do processo gerado
          </Text>

          <Text style={styles.note}>
            Nota: Mantenha seus documentos originais em papel por 5 anos após o peticionamento.
          </Text>
        </View>
      </View>

      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Video size={24} color="#006633" />
          <Text style={styles.sectionTitle}>Orientações em Vídeo</Text>
        </View>
        <View style={styles.card}>
          <TouchableOpacity 
            style={styles.videoLink}
            onPress={() => Linking.openURL('https://www.youtube.com/watch?v=pTUm_t53q0Y&list=PLQ3CcrUcw2xvKYtwmM-UQGSYNoXZ93hLj&index=55')}
          >
            <Text style={styles.videoTitle}>Cadastro no SEI</Text>
            <Text style={styles.videoDescription}>
              Tutorial passo a passo para realizar seu cadastro no sistema SEI
            </Text>
            <ExternalLink size={20} color="#006633" />
          </TouchableOpacity>

          <View style={styles.divider} />

          <TouchableOpacity 
            style={styles.videoLink}
            onPress={() => Linking.openURL('https://www.youtube.com/watch?v=5ByZS3d3-3s')}
          >
            <Text style={styles.videoTitle}>Peticionar Processos</Text>
            <Text style={styles.videoDescription}>
              Como criar e enviar peticionamentos no sistema SEI
            </Text>
            <ExternalLink size={20} color="#006633" />
          </TouchableOpacity>
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
  header: {
    backgroundColor: '#006633',
    padding: 20,
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 8,
  },
  headerSubtitle: {
    fontSize: 14,
    color: '#FFFFFF',
    opacity: 0.9,
  },
  section: {
    padding: 16,
    marginBottom: 8,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333333',
    marginLeft: 12,
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
  },
  cardText: {
    fontSize: 14,
    color: '#333333',
    lineHeight: 20,
    marginBottom: 16,
  },
  button: {
    backgroundColor: '#006633',
    borderRadius: 8,
    padding: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
  stepTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333333',
    marginBottom: 8,
    marginTop: 16,
  },
  stepText: {
    fontSize: 14,
    color: '#555555',
    lineHeight: 20,
    marginBottom: 12,
  },
  note: {
    fontSize: 14,
    color: '#666666',
    fontStyle: 'italic',
    marginTop: 16,
    paddingTop: 16,
    borderTopWidth: 1,
    borderTopColor: '#EEEEEE',
  },
  videoLink: {
    flexDirection: 'column',
    gap: 4,
  },
  videoTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#006633',
    marginBottom: 4,
  },
  videoDescription: {
    fontSize: 14,
    color: '#555555',
    marginBottom: 8,
  },
  divider: {
    height: 1,
    backgroundColor: '#EEEEEE',
    marginVertical: 12,
  },
});
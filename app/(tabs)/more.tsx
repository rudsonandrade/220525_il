import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Linking } from 'react-native';
import { Library, GraduationCap, Users, Globe, Phone, CreditCard, Mail } from 'lucide-react-native';
import { useMemo } from 'react';
import { MenuCard } from '@/components/MenuCard';

export default function MoreScreen() {
  const menuSections = useMemo(() => [
    {
      title: 'Cartão do Estudante',
      icon: <CreditCard size={24} color="#006633" />,
      items: [
        {
          title: 'Quem pode solicitar',
          description: 'Estudantes de graduação e pós-graduação (mestrado e doutorado).'
        },
        {
          title: 'Como Solicitar - Primeira Via',
          description: 'Instruções para solicitar o cartão...',
          url: 'https://amtu.com.br/cadastro-estudante/'
        },
        {
          title: 'Validação do Cartão',
          description: 'Processo de validação...',
          url: 'https://sei.ufmt.br/sei/controlador_externo.php?acao=usuario_externo_logar&acao_origem=usuario_externo_enviar_cadastro&id_orgao_acesso_externo=0'
        }
      ]
    },
    {
      title: 'Bibliotecas',
      icon: <Library size={24} color="#006633" />,
      items: [
        'Biblioteca Central',
        'Acervo Digital',
        'Horários e Localização',
        'Empréstimos'
      ]
    },
    {
      title: 'Pesquisa e Extensão',
      icon: <GraduationCap size={24} color="#006633" />,
      items: [
        'PIBIC',
        'PROPEq',
        'PROCEV',
        'Monitorias'
      ]
    },
    {
      title: 'Representação Estudantil',
      icon: <Users size={24} color="#006633" />,
      items: [
        'Diretório Central (DCE)',
        'Centros Acadêmicos',
        'Atlética',
        'Ouvidoria'
      ]
    },
    {
      title: 'Mobilidade Acadêmica',
      icon: <Globe size={24} color="#006633" />,
      items: [
        { title: 'Intercâmbio Internacional', url: 'https://ufmt.br/secretaria/secri/pagina/graduacao/2517' },
        'Mobilidade Nacional',
        { title: 'SECRI', url: 'https://www.ufmt.br/secretaria/secri' },
        { title: 'Editais', url: 'https://ufmt.br/secretaria/secri/publicacoes?page=1' }
      ]
    }
  ], []);

  const contacts = [
    {
      title: 'Direção do IL',
      phone: '(65) 3615-8410',
      email: 'direcao.il@ufmt.br'
    },
    {
      title: 'Secretaria do IL',
      phone: '(65) 3615-8402',
      email: 'secretaria.il@ufmt.br'
    },
    {
      title: 'Coordenação de Letras Literatura/Espanhol',
      phone: '(65) 3615-8426',
      emails: [
        { label: 'Literatura', email: 'cegletrasportugues.il@ufmt.br' },
        { label: 'Espanhol', email: 'ceg.espanholufmt@gmail.com' }
      ]
    },
    {
      title: 'Coordenação de Letras Inglês',
      phone: '(65) 3615-8418',
      email: 'coordgradinglesufmt@gmail.com'
    },
    {
      title: 'Coordenação de Letras Francês',
      phone: '(65) 3615-8490',
      email: 'coordfrances-ufmt@outlook.com'
    },
    {
      title: 'Coordenação de Letras Libras',
      phone: '(65) 3615-8392',
      email: 'ceglibras.il@ufmt.br'
    },
    {
      title: 'Chefia de Departamento de Letras Libras',
      phone: '(65) 3615-8392',
      email: 'dlbs.il@ufmt.br'
    },
    {
      title: 'Chefia de Departamento de Letras',
      email: 'dletras.il@ufmt.br'
    }
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Mais Serviços</Text>
        <Text style={styles.headerSubtitle}>
          Recursos adicionais e informações importantes
        </Text>
      </View>

      <View style={styles.menuContainer}>
        {menuSections.map((section, index) => (
          <MenuCard 
            key={index}
            title={section.title}
            icon={section.icon}
            items={section.items}
          />
        ))}
      </View>

      <View style={styles.contactSection}>
        <Text style={styles.sectionTitle}>Contatos da Direção do IL</Text>
        
        {contacts.map((contact, index) => (
          <View key={index} style={styles.contactCard}>
            <Text style={styles.contactTitle}>{contact.title}</Text>
            
            {contact.phone && (
              <TouchableOpacity 
                style={styles.contactRow}
                onPress={() => Linking.openURL(`tel:${contact.phone.replace(/\D/g, '')}`)}
              >
                <Phone size={20} color="#006633" />
                <Text style={styles.contactValue}>{contact.phone}</Text>
              </TouchableOpacity>
            )}
            
            {contact.email && (
              <TouchableOpacity 
                style={styles.contactRow}
                onPress={() => Linking.openURL(`mailto:${contact.email}`)}
              >
                <Mail size={20} color="#006633" />
                <Text style={styles.contactValue}>{contact.email}</Text>
              </TouchableOpacity>
            )}
            
            {contact.emails && contact.emails.map((emailItem, emailIndex) => (
              <TouchableOpacity 
                key={emailIndex}
                style={[
                  styles.contactRow,
                  emailIndex > 0 && styles.emailSpacing
                ]}
                onPress={() => Linking.openURL(`mailto:${emailItem.email}`)}
              >
                <Mail size={20} color="#006633" />
                <View style={styles.emailContainer}>
                  <Text style={styles.emailLabel}>{emailItem.label}</Text>
                  <Text style={styles.emailValue}>{emailItem.email}</Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        ))}
      </View>

      <View style={styles.aboutSection}>
        <Text style={styles.sectionTitle}>Sobre o Aplicativo</Text>
        <View style={styles.aboutCard}>
          <Text style={styles.aboutText}>
            O aplicativo Guia do Estudante UFMT foi desenvolvido para facilitar o acesso
            às informações sobre a vida acadêmica e serviços oferecidos pela Universidade
            Federal de Mato Grosso.
          </Text>
          <Text style={styles.versionText}>Versão 1.0.0</Text>
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
  menuContainer: {
    padding: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 16,
    color: '#333333',
    paddingHorizontal: 16,
  },
  contactSection: {
    marginVertical: 16,
  },
  contactCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    padding: 16,
    marginHorizontal: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
  },
  contactTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333333',
    marginBottom: 12,
  },
  contactRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginTop: 8,
  },
  contactLabel: {
    fontSize: 14,
    color: '#666666',
    marginBottom: 2,
  },
  contactValue: {
    fontSize: 14,
    color: '#333333',
    marginLeft: 12,
  },
  emailSpacing: {
    marginTop: 16,
  },
  emailContainer: {
    marginLeft: 12,
  },
  emailLabel: {
    fontSize: 14,
    color: '#006633',
    fontWeight: '500',
    marginBottom: 4,
  },
  emailValue: {
    fontSize: 14,
    color: '#333333',
  },
  aboutSection: {
    marginVertical: 16,
    marginBottom: 32,
  },
  aboutCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    padding: 16,
    marginHorizontal: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
  },
  aboutText: {
    fontSize: 14,
    color: '#333333',
    lineHeight: 20,
    marginBottom: 16,
  },
  versionText: {
    fontSize: 14,
    color: '#666666',
    textAlign: 'right',
  },
});
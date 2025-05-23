import { StyleSheet, Text, View, TouchableOpacity, Linking } from 'react-native';
import { ReactNode, useState } from 'react';
import { ChevronRight } from 'lucide-react-native';

interface SupportProgramCardProps {
  title: string;
  description: string;
  value: string;
  icon: ReactNode;
  color: string;
}

export function SupportProgramCard({ title, description, value, icon, color }: SupportProgramCardProps) {
  const [showDetails, setShowDetails] = useState(false);
  const [showWhatIs, setShowWhatIs] = useState(false);
  const [showTargetAudience, setShowTargetAudience] = useState(false);
  const [showHowToAccess, setShowHowToAccess] = useState(false);
  const [showResolutions, setShowResolutions] = useState(false);

  const handleResolutionPress = (url: string) => {
    Linking.openURL(url);
  };

  return (
    <View style={styles.card}>
      <View style={[styles.iconContainer, { backgroundColor: color }]}>
        {icon}
      </View>
      
      <View style={styles.contentContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
        <View style={styles.valueContainer}>
          <Text style={styles.valueLabel}>Valor:</Text>
          <Text style={styles.valueText}>{value}</Text>
        </View>
        
        <TouchableOpacity 
          style={styles.detailsButton}
          onPress={() => {
            setShowDetails(!showDetails);
            if (!showDetails) {
              setShowWhatIs(false);
              setShowTargetAudience(false);
              setShowHowToAccess(false);
              setShowResolutions(false);
            }
          }}
        >
          <Text style={styles.detailsButtonText}>Saiba como Solicitar</Text>
          <ChevronRight 
            size={16} 
            color="#006633" 
            style={{ 
              transform: [{ rotate: showDetails ? '90deg' : '0deg' }] 
            }} 
          />
        </TouchableOpacity>

        {showDetails && title === "Casa do Estudante Universitário - CEU" && (
          <View style={styles.detailsContent}>
            <TouchableOpacity 
              style={styles.subtopicButton}
              onPress={() => setShowWhatIs(!showWhatIs)}
            >
              <Text style={styles.subtopicButtonText}>O que é?</Text>
              <ChevronRight 
                size={16} 
                color="#006633" 
                style={{ 
                  transform: [{ rotate: showWhatIs ? '90deg' : '0deg' }] 
                }} 
              />
            </TouchableOpacity>

            {showWhatIs && (
              <View style={styles.subtopicContent}>
                <Text style={styles.subtopicText}>
                  Programa destinado a oferecer moradia a estudantes.
                </Text>
              </View>
            )}

            <TouchableOpacity 
              style={styles.subtopicButton}
              onPress={() => setShowTargetAudience(!showTargetAudience)}
            >
              <Text style={styles.subtopicButtonText}>Público alvo</Text>
              <ChevronRight 
                size={16} 
                color="#006633" 
                style={{ 
                  transform: [{ rotate: showTargetAudience ? '90deg' : '0deg' }] 
                }} 
              />
            </TouchableOpacity>

            {showTargetAudience && (
              <View style={styles.subtopicContent}>
                <Text style={styles.subtopicText}>
                  Estudantes de baixa renda dos campus de Cuiabá cujas famílias residam fora do município-sede da Universidade.
                </Text>
              </View>
            )}

            <TouchableOpacity 
              style={styles.subtopicButton}
              onPress={() => setShowHowToAccess(!showHowToAccess)}
            >
              <Text style={styles.subtopicButtonText}>Como acessar?</Text>
              <ChevronRight 
                size={16} 
                color="#006633" 
                style={{ 
                  transform: [{ rotate: showHowToAccess ? '90deg' : '0deg' }] 
                }} 
              />
            </TouchableOpacity>

            {showHowToAccess && (
              <View style={styles.subtopicContent}>
                <Text style={styles.subtopicText}>
                  Através de edital da PRAE. Para saber quando o edital é aberto fique atento ao calendário acadêmico na aba aluno do site da UFMT.
                </Text>
              </View>
            )}

            <TouchableOpacity 
              style={styles.subtopicButton}
              onPress={() => setShowResolutions(!showResolutions)}
            >
              <Text style={styles.subtopicButtonText}>Documentos e Resoluções</Text>
              <ChevronRight 
                size={16} 
                color="#006633" 
                style={{ 
                  transform: [{ rotate: showResolutions ? '90deg' : '0deg' }] 
                }} 
              />
            </TouchableOpacity>

            {showResolutions && (
              <View style={styles.subtopicContent}>
                <TouchableOpacity 
                  style={styles.resolutionLink}
                  onPress={() => handleResolutionPress('https://www.ufmt.br/unidade/prae/pagina/resolucoes/1610')}
                >
                  <Text style={styles.resolutionText}>
                    Resolução CONSUNI nº. 10, 11 de novembro de 2015
                  </Text>
                </TouchableOpacity>
                
                <TouchableOpacity 
                  style={styles.resolutionLink}
                  onPress={() => handleResolutionPress('https://www.ufmt.br/unidade/prae/pagina/instrucoes-normativas/1611')}
                >
                  <Text style={styles.resolutionText}>
                    Instrução Normativa n.º 4/09/20
                  </Text>
                </TouchableOpacity>
                
                <TouchableOpacity 
                  style={styles.resolutionLink}
                  onPress={() => handleResolutionPress('https://www.ufmt.br/unidade/prae/pagina/guia-de-biosseguranca/1612')}
                >
                  <Text style={styles.resolutionText}>
                    Guia de Biossegurança da CEU
                  </Text>
                </TouchableOpacity>
              </View>
            )}
          </View>
        )}

        {showDetails && title === "Auxílio Permanência" && (
          <View style={styles.detailsContent}>
            <TouchableOpacity 
              style={styles.subtopicButton}
              onPress={() => setShowWhatIs(!showWhatIs)}
            >
              <Text style={styles.subtopicButtonText}>O que é?</Text>
              <ChevronRight 
                size={16} 
                color="#006633" 
                style={{ 
                  transform: [{ rotate: showWhatIs ? '90deg' : '0deg' }] 
                }} 
              />
            </TouchableOpacity>

            {showWhatIs && (
              <View style={styles.subtopicContent}>
                <Text style={styles.subtopicText}>
                  Auxílio Permanência consiste em auxílio financeiro que tem por finalidade minimizar as desigualdades sociais e contribuir para a permanência e a diplomação dos estudantes de graduação em situação de vulnerabilidade socioeconômica.
                </Text>
              </View>
            )}

            <TouchableOpacity 
              style={styles.subtopicButton}
              onPress={() => setShowTargetAudience(!showTargetAudience)}
            >
              <Text style={styles.subtopicButtonText}>Público alvo</Text>
              <ChevronRight 
                size={16} 
                color="#006633" 
                style={{ 
                  transform: [{ rotate: showTargetAudience ? '90deg' : '0deg' }] 
                }} 
              />
            </TouchableOpacity>

            {showTargetAudience && (
              <View style={styles.subtopicContent}>
                <Text style={styles.subtopicText}>
                  Estudantes em situação de vulnerabilidade comprovada mediante análise socioeconômica.
                </Text>
              </View>
            )}

            <TouchableOpacity 
              style={styles.subtopicButton}
              onPress={() => setShowHowToAccess(!showHowToAccess)}
            >
              <Text style={styles.subtopicButtonText}>Como acessar?</Text>
              <ChevronRight 
                size={16} 
                color="#006633" 
                style={{ 
                  transform: [{ rotate: showHowToAccess ? '90deg' : '0deg' }] 
                }} 
              />
            </TouchableOpacity>

            {showHowToAccess && (
              <View style={styles.subtopicContent}>
                <Text style={styles.subtopicText}>
                  Através de edital da PRAE. para saber quando o edital é aberto fique atento ao calendário acadêmico na aba Calendário.
                </Text>
              </View>
            )}
          </View>
        )}

        {showDetails && title === "Auxílio Moradia" && (
          <View style={styles.detailsContent}>
            <TouchableOpacity 
              style={styles.subtopicButton}
              onPress={() => setShowWhatIs(!showWhatIs)}
            >
              <Text style={styles.subtopicButtonText}>O que é?</Text>
              <ChevronRight 
                size={16} 
                color="#006633" 
                style={{ 
                  transform: [{ rotate: showWhatIs ? '90deg' : '0deg' }] 
                }} 
              />
            </TouchableOpacity>

            {showWhatIs && (
              <View style={styles.subtopicContent}>
                <Text style={styles.subtopicText}>
                  Consiste no pagamento/transferência de recurso financeiro que deverá ser utilizado exclusivamente com moradia.
                </Text>
              </View>
            )}

            <TouchableOpacity 
              style={styles.subtopicButton}
              onPress={() => setShowTargetAudience(!showTargetAudience)}
            >
              <Text style={styles.subtopicButtonText}>Público alvo</Text>
              <ChevronRight 
                size={16} 
                color="#006633" 
                style={{ 
                  transform: [{ rotate: showTargetAudience ? '90deg' : '0deg' }] 
                }} 
              />
            </TouchableOpacity>

            {showTargetAudience && (
              <View style={styles.subtopicContent}>
                <Text style={styles.subtopicText}>
                  Estudantes de baixa renda, comprovada mediante estudo de sua situação socioeconômica, cujas famílias residam fora do município-sede da Universidade.
                </Text>
              </View>
            )}

            <TouchableOpacity 
              style={styles.subtopicButton}
              onPress={() => setShowHowToAccess(!showHowToAccess)}
            >
              <Text style={styles.subtopicButtonText}>Como acessar?</Text>
              <ChevronRight 
                size={16} 
                color="#006633" 
                style={{ 
                  transform: [{ rotate: showHowToAccess ? '90deg' : '0deg' }] 
                }} 
              />
            </TouchableOpacity>

            {showHowToAccess && (
              <View style={styles.subtopicContent}>
                <Text style={styles.subtopicText}>
                  Através de edital da PRAE. Para saber quando o edital é aberto fique atento ao calendário acadêmico na aba Calendário.
                </Text>
              </View>
            )}
          </View>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
    overflow: 'hidden',
    flexDirection: 'row',
  },
  iconContainer: {
    width: 60,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
  },
  contentContainer: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333333',
    marginBottom: 4,
  },
  description: {
    fontSize: 14,
    color: '#666666',
    marginBottom: 12,
    lineHeight: 20,
  },
  valueContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  valueLabel: {
    fontSize: 14,
    fontWeight: '500',
    color: '#333333',
    marginRight: 4,
  },
  valueText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#0066CC',
  },
  detailsButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  detailsButtonText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#006633',
    marginRight: 4,
  },
  detailsContent: {
    marginTop: 12,
    paddingTop: 12,
    borderTopWidth: 1,
    borderTopColor: '#EEEEEE',
  },
  subtopicButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 8,
  },
  subtopicButtonText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#006633',
  },
  subtopicContent: {
    backgroundColor: '#F5F5F5',
    borderRadius: 8,
    padding: 12,
    marginBottom: 8,
  },
  subtopicText: {
    fontSize: 14,
    color: '#333333',
    lineHeight: 20,
  },
  resolutionLink: {
    paddingVertical: 8,
  },
  resolutionText: {
    fontSize: 14,
    color: '#006633',
    textDecorationLine: 'underline',
  },
});
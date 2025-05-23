import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { ChevronRight } from 'lucide-react-native';
import { useState } from 'react';

interface AcademicInfoCardProps {
  title: string;
  description: string;
  linkText: string;
}

export function AcademicInfoCard({ title, description, linkText }: AcademicInfoCardProps) {
  const [expanded, setExpanded] = useState(false);
  const [showProcedure, setShowProcedure] = useState(false);
  const [showWhatIs, setShowWhatIs] = useState(false);
  const [showWhoCanRequest, setShowWhoCanRequest] = useState(false);
  const [showRegularEnrollment, setShowRegularEnrollment] = useState(false);
  const [showFreshman, setShowFreshman] = useState(false);
  const [showVeteran, setShowVeteran] = useState(false);
  const [showStudentAdjustment, setShowStudentAdjustment] = useState(false);
  const [showCoordinatorAdjustment, setShowCoordinatorAdjustment] = useState(false);
  const [showCoordinatorResponsibilities, setShowCoordinatorResponsibilities] = useState(false);
  const [showResponsibleUnit, setShowResponsibleUnit] = useState(false);
  const [showHowService, setShowHowService] = useState(false);
  const [showHowTo, setShowHowTo] = useState(false);

  return (
    <View style={styles.card}>
      <TouchableOpacity 
        style={styles.cardHeader}
        onPress={() => {
          setExpanded(!expanded);
          if (!expanded) {
            setShowProcedure(false);
            setShowWhatIs(false);
            setShowWhoCanRequest(false);
            setShowRegularEnrollment(false);
            setShowFreshman(false);
            setShowVeteran(false);
            setShowStudentAdjustment(false);
            setShowCoordinatorAdjustment(false);
            setShowCoordinatorResponsibilities(false);
            setShowResponsibleUnit(false);
            setShowHowService(false);
            setShowHowTo(false);
          }
        }}
        activeOpacity={0.7}
      >
        <Text style={styles.cardTitle}>{title}</Text>
        <ChevronRight 
          size={20} 
          color="#006633" 
          style={{ 
            transform: [{ rotate: expanded ? '90deg' : '0deg' }] 
          }} 
        />
      </TouchableOpacity>
      
      {expanded && (
        <View style={styles.cardContent}>
          <Text style={styles.cardDescription}>{description}</Text>
          
          <TouchableOpacity 
            style={styles.linkButton}
            onPress={() => {
              setShowProcedure(!showProcedure);
              if (!showProcedure) {
                setShowWhatIs(false);
                setShowWhoCanRequest(false);
                setShowRegularEnrollment(false);
                setShowFreshman(false);
                setShowVeteran(false);
                setShowStudentAdjustment(false);
                setShowCoordinatorAdjustment(false);
                setShowCoordinatorResponsibilities(false);
                setShowResponsibleUnit(false);
                setShowHowService(false);
                setShowHowTo(false);
              }
            }}
          >
            <Text style={styles.linkButtonText}>{linkText}</Text>
            <ChevronRight 
              size={16} 
              color="#006633" 
              style={{ 
                transform: [{ rotate: showProcedure ? '90deg' : '0deg' }] 
              }} 
            />
          </TouchableOpacity>

          {showProcedure && title === "Matrícula" && (
            <View style={styles.procedureContent}>
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
                    Vinculação acadêmica, realizada de acordo com as disposições normativas, de um estudante à UFMT.
                  </Text>
                </View>
              )}

              <TouchableOpacity 
                style={styles.subtopicButton}
                onPress={() => setShowWhoCanRequest(!showWhoCanRequest)}
              >
                <Text style={styles.subtopicButtonText}>Quem pode solicitar?</Text>
                <ChevronRight 
                  size={16} 
                  color="#006633" 
                  style={{ 
                    transform: [{ rotate: showWhoCanRequest ? '90deg' : '0deg' }] 
                  }} 
                />
              </TouchableOpacity>

              {showWhoCanRequest && (
                <View style={styles.subtopicContent}>
                  <Text style={styles.subtopicText}>
                    Estudantes da UFMT.
                  </Text>
                </View>
              )}

              <TouchableOpacity 
                style={styles.subtopicButton}
                onPress={() => setShowRegularEnrollment(!showRegularEnrollment)}
              >
                <Text style={styles.subtopicButtonText}>Matrícula em período regular</Text>
                <ChevronRight 
                  size={16} 
                  color="#006633" 
                  style={{ 
                    transform: [{ rotate: showRegularEnrollment ? '90deg' : '0deg' }] 
                  }} 
                />
              </TouchableOpacity>

              {showRegularEnrollment && (
                <View style={styles.nestedContent}>
                  <TouchableOpacity 
                    style={styles.nestedButton}
                    onPress={() => setShowFreshman(!showFreshman)}
                  >
                    <Text style={styles.nestedButtonText}>Calouro</Text>
                    <ChevronRight 
                      size={16} 
                      color="#006633" 
                      style={{ 
                        transform: [{ rotate: showFreshman ? '90deg' : '0deg' }] 
                      }} 
                    />
                  </TouchableOpacity>

                  {showFreshman && (
                    <View style={styles.subtopicContent}>
                      <Text style={styles.subtopicText}>
                        A matrícula para Calouro segue determinação do Edital ENEM/SiSU, onde a primeira fase terá sua matrícula efetivada na coordenação dos cursos de graduação e as demais fases na Gerência de Registro Escolar - GRE/CAE.{'\n\n'}
                        Vale destacar que a instituição possui dois períodos de ingresso, dessa forma, mesmo o aluno matriculado no início do ano, deve estar atento, pois dependendo de sua colocação, deverá ter o início das aulas determinado para o meio do ano, observando o Calendário Acadêmico.{'\n\n'}
                        Dessa forma, o aluno deve atentar para a publicação das chamadas vinculadas ao site da UFMT, observando que estas se baseiam na ordem de classificação e a disponibilidade das vagas fruto de desistências, ensejando a convocatória do classificado subsequente.
                      </Text>
                    </View>
                  )}

                  <TouchableOpacity 
                    style={styles.nestedButton}
                    onPress={() => setShowVeteran(!showVeteran)}
                  >
                    <Text style={styles.nestedButtonText}>Veterano</Text>
                    <ChevronRight 
                      size={16} 
                      color="#006633" 
                      style={{ 
                        transform: [{ rotate: showVeteran ? '90deg' : '0deg' }] 
                      }} 
                    />
                  </TouchableOpacity>

                  {showVeteran && (
                    <View style={styles.subtopicContent}>
                      <Text style={styles.subtopicText}>
                        Aquele aluno que concluiu o primeiro período de estudos, e que agora confirma através de rematrícula on-line, sua permanência na instituição para o próximo período.{'\n\n'}
                        Essa rematrícula tem período previsto no Calendário Acadêmico, sendo imprescindível sua observação para evitar jubilamento e demais consequências que recaem na inobservância deste item.{'\n\n'}
                        É realizada via SIGA.
                      </Text>
                    </View>
                  )}
                </View>
              )}

              <TouchableOpacity 
                style={styles.subtopicButton}
                onPress={() => setShowStudentAdjustment(!showStudentAdjustment)}
              >
                <Text style={styles.subtopicButtonText}>Ajuste de matrícula pelo aluno veterano</Text>
                <ChevronRight 
                  size={16} 
                  color="#006633" 
                  style={{ 
                    transform: [{ rotate: showStudentAdjustment ? '90deg' : '0deg' }] 
                  }} 
                />
              </TouchableOpacity>

              {showStudentAdjustment && (
                <View style={styles.subtopicContent}>
                  <Text style={styles.subtopicText}>
                    Conjunto de procedimentos realizados pelo aluno, com o objetivo de adequar os procedimentos gerais de matrícula às suas necessidades específicas, com a finalidade de adaptar ou otimizar o fluxo do seu percurso acadêmico.{'\n\n'}
                    Deve ser feito no prazo estabelecido pelo calendário acadêmico vigente. Geralmente, inicia-se ao término da primeira semana de aulas. Usualmente, são dois ou três dias. É feito mediante link específico na página principal do portal da universidade.{'\n\n'}
                    Observação: Somente aluno matriculado em curso ofertado por regime de crédito (a maior parte dos cursos da UFMT) dispõe desta possibilidade. Aluno matriculado em curso ofertado em regime seriado apenas confirma a matrícula.
                  </Text>
                </View>
              )}

              <TouchableOpacity 
                style={styles.subtopicButton}
                onPress={() => setShowCoordinatorAdjustment(!showCoordinatorAdjustment)}
              >
                <Text style={styles.subtopicButtonText}>Ajuste de matrícula pelo coordenador</Text>
                <ChevronRight 
                  size={16} 
                  color="#006633" 
                  style={{ 
                    transform: [{ rotate: showCoordinatorAdjustment ? '90deg' : '0deg' }] 
                  }} 
                />
              </TouchableOpacity>

              {showCoordinatorAdjustment && (
                <View style={styles.subtopicContent}>
                  <Text style={styles.subtopicText}>
                    Conjunto de procedimentos realizados pelo coordenador, com o objetivo de adequar os procedimentos gerais de matrícula às necessidades do aluno, não solucionadas no ajuste de matrícula pelo aluno.{'\n\n'}
                    Deve ser feito no prazo estabelecido pelo Calendário Acadêmico. Geralmente, o período inicia-se imediatamente após o término do período de ajuste de matrícula pelo aluno. Usualmente, são dois ou três dias.{'\n\n'}
                    O pedido deve ser feito pelo aluno no Protocolo Virtual do Aluno. A análise da solicitação seguirá as normas estabelecidas pela coordenação de curso. Ao findar o período de ajuste de matrícula pelo coordenador, consulte sua planilha de horário para verificar a situação atual da matrícula.
                  </Text>
                </View>
              )}

              <TouchableOpacity 
                style={styles.subtopicButton}
                onPress={() => setShowCoordinatorResponsibilities(!showCoordinatorResponsibilities)}
              >
                <Text style={styles.subtopicButtonText}>Responsabilidades da Coordenação de Curso</Text>
                <ChevronRight 
                  size={16} 
                  color="#006633" 
                  style={{ 
                    transform: [{ rotate: showCoordinatorResponsibilities ? '90deg' : '0deg' }] 
                  }} 
                />
              </TouchableOpacity>

              {showCoordinatorResponsibilities && (
                <View style={styles.subtopicContent}>
                  <Text style={styles.subtopicText}>
                    Se o curso for ofertado em regime de crédito, após a renovação das matrículas no período estabelecido pelo Calendário Acadêmico, há o período de ajuste do coordenador, no qual deve atender a solicitações de estudantes.{'\n\n'}
                    Estudantes que, por qualquer motivo não estiveram matriculados no período imediatamente precedente, não conseguirão renovar a matrícula on-line, razão pela qual devem solicitá-la, ao colegiado de curso, mediante processo iniciado no protocolo geral da UFMT.{'\n\n'}
                    Ao colegiado cabe a análise do processo, mas o coordenador, de acordo com a cultura institucional do curso, pode deferir a solicitação ad referendum do colegiado de curso;{'\n\n'}
                    No SIGA, com status de Coordenador, é possível verificar os estudantes que não fizeram o requerimento de matrícula.{'\n\n'}
                    Na área do coordenador, clicar em "Relatórios";{'\n'}
                    "Estudantes sem requerimento de matrícula";{'\n'}
                    A lista fornece e-mail e telefone que o estudante cadastrou;{'\n'}
                    O coordenador pode entrar em contato para lembrar/incentivar, conforme o caso, à realização da matrícula ou a seu trancamento.{'\n\n'}
                    Se o curso for seriado, consultar a Resolução CONSEPE nº 14/99, art. 35. Se o curso for ofertado em regime de créditos, consultar a Resolução CONSEPE nº 32/99, art. 1º que modifica o art. 45 da Resolução CONSEPE nº 52/94.{'\n\n'}
                    Matrícula em Disciplina Isolada, como aluno especial{'\n'}
                    Entende-se por aluno especial o aluno exclusivamente vinculado a um ou mais componentes curriculares e não a um determinado curso de graduação da UFMT. A Resolução CONSEPE Nº 67/2017 dispõe sobre as normas para a matrícula de alunos especiais que almejam cursar componentes curriculares isolados da graduação na Universidade Federal de Mato Grosso.{'\n\n'}
                    A solicitação deve ser realizada no prazo estabelecido pelo Calendário Acadêmico, mediante processo via SEI, que deve conter os documentos especificados na Resolução CONSEPE Nº 67/2017.
                  </Text>
                </View>
              )}

              <TouchableOpacity 
                style={styles.subtopicButton}
                onPress={() => setShowResponsibleUnit(!showResponsibleUnit)}
              >
                <Text style={styles.subtopicButtonText}>Unidade responsável</Text>
                <ChevronRight 
                  size={16} 
                  color="#006633" 
                  style={{ 
                    transform: [{ rotate: showResponsibleUnit ? '90deg' : '0deg' }] 
                  }} 
                />
              </TouchableOpacity>

              {showResponsibleUnit && (
                <View style={styles.subtopicContent}>
                  <Text style={styles.subtopicText}>
                    Coordenação de Adminstração Escolar - CAE/UFMT
                  </Text>
                </View>
              )}
            </View>
          )}

          {showProcedure && title === "Trancamento de Matrícula" && (
            <View style={styles.procedureContent}>
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
                    É o ato pelo qual o estudante solicita a suspensão da obrigação de cumprimento das atividades acadêmicas por determinado período letivo, que não será computado para a integralização do curso.
                  </Text>
                  <Text style={styles.subtopicText}>
                    O estudante tem direito ao trancamento de matrícula por até dois anos, sucessivos ou não.
                  </Text>
                  <Text style={styles.subtopicText}>
                    Esse procedimento está normatizado pela Resolução Consepe n.º 52/1994 (artigos 40 a 43) para cursos em regime de crédito, e pela Resolução Consepe n.º 14/1999 (artigos 35 e 36) para cursos em regime seriado.
                  </Text>
                </View>
              )}

              <TouchableOpacity 
                style={styles.subtopicButton}
                onPress={() => setShowHowTo(!showHowTo)}
              >
                <Text style={styles.subtopicButtonText}>Como solicitar?</Text>
                <ChevronRight 
                  size={16} 
                  color="#006633" 
                  style={{ 
                    transform: [{ rotate: showHowTo ? '90deg' : '0deg' }] 
                  }} 
                />
              </TouchableOpacity>

              {showHowTo && (
                <View style={styles.subtopicContent}>
                  <Text style={styles.subtopicText}>
                    O estudante deve solicitar o trancamento de matrícula conforme prazos determinados pelo Calendário Acadêmico vigente. Essa solicitação deve ser efetuada pelo Protocolo Virtual do Aluno, sistema disponível dentro do Portal de Sistemas Integrados.
                  </Text>
                  <Text style={styles.subtopicText}>
                    A solicitação de trancamento de matrícula, se atender as normas estabelecidas nas referidas resoluções, será avaliada pelo sistema acadêmico (ou, em alguns casos, pela coordenação do curso), e o registro será realizado no histórico escolar do estudante.
                  </Text>
                  <Text style={styles.subtopicText}>
                    O trancamento de matrícula não será permitido no período em que o estudante efetuou sua primeira matrícula no curso ou após o prazo estipulado, exceto para os casos previstos no artigo 43 da Resolução Consepe n.º 52/1994 e no artigo 34, § 1º da Resolução Consepe n.º 14/1999, que demandará análise e decisão do Colegiado do Curso. Nestes casos, a solicitação de trancamento deverá ser formalizada via processo pelo SEI por meio do tipo de processo "Trancamento de Matrícula Especial".
                  </Text>
                  
                  <View style={styles.materialsSection}>
                    <Text style={styles.materialsSectionTitle}>Materiais auxiliares</Text>
                    <Text style={styles.materialsText}>
                      Para cursos em Regime Seriado: Resolução Consepe n.º 14/1999.{'\n'}
                      Para cursos em Regime de Crédito: Resolução Consepe n.º 52/1994.
                    </Text>
                  </View>

                  <View style={styles.materialsSection}>
                    <Text style={styles.materialsSectionTitle}>Unidade responsável</Text>
                    <Text style={styles.materialsText}>
                      - Coordenação de Administração Escolar - CAE/UFMT
                    </Text>
                  </View>
                </View>
              )}
            </View>
          )}

          {showProcedure && title === "Aproveitamento de Estudos" && (
            <View style={styles.procedureContent}>
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
                    Quando o estudante já cursou, com aprovação e em nível de ensino superior, disciplina idêntica ou similar à constante no currículo do curso em que está matriculado.
                  </Text>
                </View>
              )}

              <TouchableOpacity 
                style={styles.subtopicButton}
                onPress={() => setShowWhoCanRequest(!showWhoCanRequest)}
              >
                <Text style={styles.subtopicButtonText}>Quem pode solicitar?</Text>
                <ChevronRight 
                  size={16} 
                  color="#006633" 
                  style={{ 
                    transform: [{ rotate: showWhoCanRequest ? '90deg' : '0deg' }] 
                  }} 
                />
              </TouchableOpacity>

              {showWhoCanRequest && (
                <View style={styles.subtopicContent}>
                  <Text style={styles.subtopicText}>
                    Estudante.
                  </Text>
                </View>
              )}

              <TouchableOpacity 
                style={styles.subtopicButton}
                onPress={() => setShowHowService(!showHowService)}
              >
                <Text style={styles.subtopicButtonText}>Como esse serviço é feito?</Text>
                <ChevronRight 
                  size={16} 
                  color="#006633" 
                  style={{ 
                    transform: [{ rotate: showHowService ? '90deg' : '0deg' }] 
                  }} 
                />
              </TouchableOpacity>

              {showHowService && (
                <View style={styles.subtopicContent}>
                  <Text style={styles.subtopicText}>
                    O aproveitamento de estudos é solicitado ao Colegiado de Curso, mediante processo iniciado no SEI. No processo deve constar, com clareza, para quais disciplinas está solicitando aproveitamento de estudos e, para cada uma delas, a comprovação, mediante documentação oficial emitida pela instituição na qual os estudos foram realizados.
                  </Text>
                  
                  <Text style={styles.subtopicText}>
                    A documentação, usualmente, é constituída pelos seguintes documentos:{'\n\n'}
                    I – histórico escolar original emitido pela instituição de origem, desde que de IES brasileira e de curso reconhecido pelo Ministério de Educação, contendo a carga horária, nota ou conceito e período letivo de integralização do componente curricular do qual deseja o aproveitamento de estudos;{'\n\n'}
                    II – quando for o caso, tabela de conversão de conceitos em notas e critérios de aprovação da instituição de origem;{'\n\n'}
                    III – documento original expedido pela instituição de origem em que conste o número e a data do ato de reconhecimento ou autorização do curso em que cursou o componente curricular do qual deseja aproveitamento de estudos;{'\n\n'}
                    IV – Plano de ensino contendo os conteúdos programáticos dos componentes curriculares da IES de origem e por ela cursados com aprovação e dos quais se deseja aproveitamento, devidamente firmados pela mesma.
                  </Text>

                  <Text style={styles.materialsSectionTitle}>Quando pode ser solicitado?</Text>
                  <Text style={styles.subtopicText}>
                    O aproveitamento de estudos poderá ser solicitado quando se tratar de:{'\n\n'}
                    I – transferência compulsória;{'\n\n'}
                    II – transferência facultativa;{'\n\n'}
                    III – mobilidade acadêmica;{'\n\n'}
                    IV – matrícula de estudante portador de diploma de nível superior;{'\n\n'}
                    V – alteração de matriz curricular;{'\n\n'}
                    VI – outras situações, a critério do Colegiado do Curso.
                  </Text>

                  <Text style={styles.subtopicText}>
                    O aproveitamento de estudos, excetuado o disposto nos Incisos I, II,III e VI do art. 5o da Resolução Consepe nº 83/2017, poderá ser solicitado uma única vez pelo acadêmico, durante o curso, conforme prazos estabelecidos pelo Calendário Acadêmico.
                  </Text>

                  <View style={styles.materialsSection}>
                    <Text style={styles.materialsSectionTitle}>Materiais auxiliares</Text>
                    <Text style={styles.materialsText}>
                      O aproveitamento de estudos é normatizado pelas seguintes Resoluções:{'\n\n'}
                      Resolução CONSEPE n.º 83, de 26 de junho de 2017: Dispõe sobre aproveitamento de estudos nos cursos de graduação da Universidade Federal de Mato Grosso.{'\n\n'}
                      Resolução CONSEPE n.º 88, de 11 de julho de 2017: Dispõe sobre retificação do artigo 23 da Resolução Consepe n.º 83, de 26 de junho de 2017, que aprovou as normas referentes ao aproveitamento de estudos nos cursos de graduação nas modalidades presencial e à distância.
                    </Text>
                  </View>

                  <View style={styles.materialsSection}>
                    <Text style={styles.materialsSectionTitle}>Unidades responsáveis</Text>
                    <Text style={styles.materialsText}>
                      Colegiado de Curso
                    </Text>
                  </View>
                </View>
              )}
            </View>
          )}
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
    overflow: 'hidden',
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333333',
  },
  cardContent: {
    padding: 16,
    paddingTop: 0,
    borderTopWidth: 1,
    borderTopColor: '#EEEEEE',
  },
  cardDescription: {
    fontSize: 14,
    color: '#555555',
    lineHeight: 20,
    marginBottom: 12,
  },
  linkButton: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    marginVertical: 8,
  },
  linkButtonText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#006633',
    marginRight: 4,
  },
  procedureContent: {
    paddingLeft: 16,
    marginTop: 8,
  },
  subtopicButton: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    marginVertical: 8,
  },
  subtopicButtonText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#006633',
    marginRight: 4,
  },
  subtopicContent: {
    backgroundColor: '#F5F5F5',
    padding: 12,
    borderRadius: 8,
    marginVertical: 8,
  },
  subtopicText: {
    fontSize: 14,
    color: '#333333',
    lineHeight: 20,
    marginBottom: 8,
  },
  materialsSection: {
    marginTop: 16,
  },
  materialsSectionTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333333',
    marginBottom: 8,
  },
  materialsText: {
    fontSize: 14,
    color: '#333333',
    lineHeight: 20,
  },
  nestedContent: {
    paddingLeft: 16,
  },
  nestedButton: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    marginVertical: 8,
  },
  nestedButtonText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#006633',
    marginRight: 4,
  },
});
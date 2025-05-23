import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { Calendar as CalendarIcon, ChevronDown, CircleAlert as AlertCircle } from 'lucide-react-native';
import { EventCard } from '@/components/EventCard';
import { useState } from 'react';

export default function CalendarScreen() {
  const [selectedPeriod, setSelectedPeriod] = useState('2025/1');
  const [showPeriodPicker, setShowPeriodPicker] = useState(false);
  
  const periods = ['2025/1', '2025/2', '2026/1'];

  return (
    
    <ScrollView style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.calendarHeader}>
          <CalendarIcon size={22} color="#006633" />
          <Text style={styles.headerTitle}>Calendário Acadêmico {selectedPeriod}</Text>
        </View>
        
        <View style={styles.alertContainer}>
          <AlertCircle size={18} color="#FFCC00" style={styles.alertIcon} />
          <Text style={styles.alertText}>
            O período letivo {selectedPeriod} inicia em {selectedPeriod === '2025/1' ? '02/06/2025' : selectedPeriod === '2025/2' ? '27/10/2025' : '27/04/2026'}
          </Text>
        </View>
      </View>

      <View style={styles.periodPickerContainer}>
        <TouchableOpacity
          style={styles.periodSelector}
          onPress={() => setShowPeriodPicker(!showPeriodPicker)}
        >
          <Text style={styles.periodSelectorText}>Período {selectedPeriod}</Text>
          <ChevronDown size={20} color="#006633" />
        </TouchableOpacity>

        {showPeriodPicker && (
          <View style={styles.periodsList}>
            {periods.map((period, index) => (
              <TouchableOpacity
                key={index}
                style={styles.periodItem}
                onPress={() => {
                  setSelectedPeriod(period);
                  setShowPeriodPicker(false);
                }}
              >
                <Text
                  style={[
                    styles.periodItemText,
                    selectedPeriod === period && styles.selectedPeriodText,
                  ]}
                >
                  Período {period}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        )}
      </View>

      <View style={styles.eventsContainer}>
        <Text style={styles.sectionTitle}>Graduação</Text>

        {selectedPeriod === '2025/1' && (
          <>
            <EventCard
              date="27 a 29 Mai"
              title="Matrícula ON-LINE"
              description="Período de matrícula web para alunos no Sistema Acadêmico."
              important={true}
            />

            <EventCard
              date="02 Jun"
              title="Início das Aulas"
              description="Início oficial das aulas do primeiro semestre letivo de 2025."
              important={true}
            />

            <EventCard
              date="02 e 03 Jun"
              title="Ajuste de Matrícula ON-LINE"
              description="Período para ajustes de matrícula pelo aluno no sistema."
              important={true}
            />

            <EventCard
              date="03 Jun"
              title="Matrícula em Disciplina Isolada"
              description="Prazo final para matrícula em disciplina isolada."
              important={false}
            />

            <EventCard
              date="09 a 13 Jun"
              title="Ajuste com Coordenação"
              description="Período para requerimento de ajuste junto à coordenação do curso."
              important={false}
            />

            <EventCard
              date="02 Jul"
              title="Prazo Final - Trancamento"
              description="Data limite para solicitação de trancamento de matrícula."
              important={true}
            />

            <EventCard
              date="14 a 28 Jul"
              title="Férias Docentes"
              description="Período de férias dos professores."
              important={false}
            />

            <EventCard
              date="10 Out"
              title="100º Dia Letivo"
              description="Marca o centésimo dia do período letivo."
              important={false}
            />

            <EventCard
              date="11 a 17 Out"
              title="Provas Finais"
              description="Período de provas finais, exames e segunda época."
              important={true}
            />

            <EventCard
              date="18 Out"
              title="Lançamento de Notas"
              description="Prazo final para lançamento de notas pelos docentes."
              important={true}
            />

            <EventCard
              date="11 a 25 Out"
              title="Período Letivo Especial"
              description="Período para atividades acadêmicas especiais."
              important={false}
            />

            <EventCard
              date="20 a 23 Out"
              title="Matrícula ON-LINE 2025/2"
              description="Período de matrícula web para o segundo semestre."
              important={true}
            />

            <EventCard
              date="20 a 25 Out"
              title="Planejamento Docente"
              description="Período para planejamento das atividades docentes."
              important={false}
            />
          </>
        )}

        {selectedPeriod === '2025/2' && (
          <>
            <EventCard
              date="27 Out"
              title="Início das Aulas"
              description="Início oficial das aulas do segundo semestre letivo de 2025."
              important={true}
            />

            <EventCard
              date="27 e 28 Out"
              title="Ajuste de Matrícula ON-LINE"
              description="Período para ajustes de matrícula pelo aluno no sistema."
              important={true}
            />

            <EventCard
              date="28 Out"
              title="Matrícula em Disciplina Isolada"
              description="Prazo final para matrícula em disciplina isolada."
              important={false}
            />

            <EventCard
              date="03 a 07 Nov"
              title="Ajuste com Coordenação"
              description="Período para requerimento de ajuste junto à coordenação do curso."
              important={false}
            />

            <EventCard
              date="28 Nov"
              title="Prazo Final - Trancamento"
              description="Data limite para solicitação de trancamento de matrícula."
              important={true}
            />
          </>
        )}

        {selectedPeriod === '2026/1' && (
          <>
            <EventCard
              date="18 a 21 Abr"
              title="Matrícula ON-LINE 2026/1"
              description="Período de matrícula web para o primeiro semestre de 2026."
              important={true}
            />

            <EventCard
              date="27 Abr"
              title="Início das Aulas"
              description="Início oficial das aulas do primeiro semestre letivo de 2026."
              important={true}
            />
          </>
        )}
      </View>

      <View style={styles.eventsContainer}>
        <Text style={styles.sectionTitle}>Pós-Graduação Stricto Sensu</Text>

        {selectedPeriod === '2025/1' && (
          <>
            <EventCard
              date="03 a 28 Fev"
              title="Matrícula"
              description="Período de matrícula para alunos da pós-graduação."
              important={true}
            />

            <EventCard
              date="03 a 07 Mar"
              title="Ajuste de Matrícula"
              description="Período para ajustes de matrícula na pós-graduação."
              important={true}
            />

            <EventCard
              date="10 Mar a 18 Jul"
              title="Período Letivo"
              description="Período de aulas e atividades acadêmicas."
              important={true}
            />
          </>
        )}

        {selectedPeriod === '2025/2' && (
          <>
            <EventCard
              date="21 Jul a 01 Ago"
              title="Matrícula"
              description="Período de matrícula para alunos da pós-graduação."
              important={true}
            />

            <EventCard
              date="04 a 08 Ago"
              title="Ajuste de Matrícula"
              description="Período para ajustes de matrícula na pós-graduação."
              important={true}
            />

            <EventCard
              date="11 Ago a 19 Dez"
              title="Período Letivo"
              description="Período de aulas e atividades acadêmicas."
              important={true}
            />
          </>
        )}

        {selectedPeriod === '2026/1' && (
          <EventCard
            date="02 a 27 Fev"
            title="Matrícula"
            description="Período de matrícula para alunos da pós-graduação."
            important={true}
          />
        )}
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
    backgroundColor: '#FFFFFF',
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  calendarHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333333',
    marginLeft: 8,
  },
  alertContainer: {
    backgroundColor: '#FFF9E6',
    borderRadius: 8,
    padding: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },
  alertIcon: {
    marginRight: 8,
  },
  alertText: {
    fontSize: 14,
    color: '#333333',
    flex: 1,
  },
  periodPickerContainer: {
    padding: 16,
    position: 'relative',
    zIndex: 10,
  },
  periodSelector: {
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    padding: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
  },
  periodSelectorText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#333333',
  },
  periodsList: {
    position: 'absolute',
    top: 64,
    left: 16,
    right: 16,
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    zIndex: 20,
  },
  periodItem: {
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#EEEEEE',
  },
  periodItemText: {
    fontSize: 16,
    color: '#333333',
  },
  selectedPeriodText: {
    fontWeight: '600',
    color: '#006633',
  },
  eventsContainer: {
    padding: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 16,
    color: '#333333',
  }
});
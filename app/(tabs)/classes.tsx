import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { ChevronRight, Clock, MapPin, GraduationCap, User } from 'lucide-react-native';
import { useState } from 'react';

interface ClassInfo {
  subject: string;
  day: string;
  startTime: string;
  endTime: string;
  room: string;
  professor: string;
}

interface Semester {
  name: string;
  classes: ClassInfo[];
}

interface Year {
  name: string;
  period: string;
  semesters: Semester[];
}

interface Course {
  name: string;
  years: Year[];
}

export default function ClassesScreen() {
  const [selectedCourse, setSelectedCourse] = useState<string | null>(null);
  const [selectedYear, setSelectedYear] = useState<string | null>(null);
  const [selectedSemester, setSelectedSemester] = useState<string | null>(null);
  const [selectedClass, setSelectedClass] = useState<ClassInfo | null>(null);

  const courses: Course[] = [
    {
      name: 'Letras Português e Literatura 2025',
      years: [
        {
          name: '1º Ano',
          period: 'Noturno',
          semesters: [
            {
              name: '1º Semestre',
              classes: [
                {
                  subject: 'Análise Gramatical e Ensino',
                  day: 'Segunda-feira',
                  startTime: '19:00',
                  endTime: '22:30',
                  room: '19',
                  professor: 'Lirian'
                },
                {
                  subject: 'Estudos Linguísticos e Ensino',
                  day: 'Terça-feira',
                  startTime: '19:00',
                  endTime: '22:30',
                  room: '19',
                  professor: 'Rogério'
                },
                {
                  subject: 'OFEB',
                  day: 'Quarta-feira',
                  startTime: '19:00',
                  endTime: '22:30',
                  room: '19',
                  professor: 'Não especificado'
                },
                {
                  subject: 'Didática',
                  day: 'Quinta-feira',
                  startTime: '19:00',
                  endTime: '22:30',
                  room: '19',
                  professor: 'Não especificado'
                },
                {
                  subject: 'Sociedade, Política e Educação',
                  day: 'Sexta-feira',
                  startTime: '19:00',
                  endTime: '22:30',
                  room: '19',
                  professor: 'Não especificado'
                }
              ]
            },
            {
              name: '2º Semestre',
              classes: [
                {
                  subject: 'Projeto de Extensão - Língua Portuguesa: construindo saberes docentes na escola',
                  day: 'Segunda-feira',
                  startTime: '19:00',
                  endTime: '22:30',
                  room: '19',
                  professor: 'Lirian'
                },
                {
                  subject: 'Fonética e Fonologia da Língua Portuguesa e Ensino',
                  day: 'Terça-feira',
                  startTime: '19:00',
                  endTime: '22:30',
                  room: '19',
                  professor: 'Rogério'
                },
                {
                  subject: 'Psicologia da Educação',
                  day: 'Quarta-feira',
                  startTime: '19:00',
                  endTime: '22:30',
                  room: '19',
                  professor: 'Não especificado'
                },
                {
                  subject: 'Tecnologia da Informação e da Comunicação no Ensino de Língua Portuguesa e Literatura',
                  day: 'Quinta-feira',
                  startTime: '19:00',
                  endTime: '22:30',
                  room: '19',
                  professor: 'Caroline Oliveira'
                },
                {
                  subject: 'Didática de Ensino de Língua Portuguesa e Literatura',
                  day: 'Sexta-feira',
                  startTime: '19:00',
                  endTime: '22:30',
                  room: '19',
                  professor: 'Lindinalva'
                }
              ]
            }
          ]
        },
        {
          name: '2º Ano',
          period: 'Diurno',
          semesters: [
            {
              name: '1º Semestre',
              classes: [
                {
                  subject: 'Literatura, Sociedade e Práticas Culturais',
                  day: 'Segunda-feira',
                  startTime: '07:30',
                  endTime: '11:30',
                  room: '19',
                  professor: 'Leonardo'
                },
                {
                  subject: 'Latim',
                  day: 'Terça-feira',
                  startTime: '07:30',
                  endTime: '11:30',
                  room: '19',
                  professor: 'Carolina Akie'
                },
                {
                  subject: 'Teoria do Poema',
                  day: 'Quarta-feira',
                  startTime: '07:30',
                  endTime: '11:30',
                  room: '19',
                  professor: 'Marinete'
                },
                {
                  subject: 'Leitura e Produção de Textos: Gêneros Acadêmicos',
                  day: 'Quinta-feira',
                  startTime: '07:30',
                  endTime: '11:30',
                  room: '19',
                  professor: 'Lindinalva'
                },
                {
                  subject: 'Morfologia da Língua Portuguesa',
                  day: 'Sexta-feira',
                  startTime: '07:30',
                  endTime: '11:30',
                  room: '19',
                  professor: 'Rogério'
                },
                {
                  subject: 'Projeto de Extensão - Língua Portuguesa na Escola',
                  day: 'Sábado',
                  startTime: '07:30',
                  endTime: '11:30',
                  room: '19',
                  professor: 'Lirian'
                }
              ]
            },
            {
              name: '2º Semestre',
              classes: [
                {
                  subject: 'História da Língua Portuguesa',
                  day: 'Segunda-feira',
                  startTime: '07:30',
                  endTime: '11:30',
                  room: '19',
                  professor: 'Laudino'
                },
                {
                  subject: 'Sintaxe da Língua Portuguesa',
                  day: 'Terça-feira',
                  startTime: '07:30',
                  endTime: '11:30',
                  room: '19',
                  professor: 'Caroline Oliveira'
                },
                {
                  subject: 'Teoria do Drama',
                  day: 'Quarta-feira',
                  startTime: '07:30',
                  endTime: '11:30',
                  room: '19',
                  professor: 'Marinete'
                },
                {
                  subject: 'Literaturas de Língua Portuguesa - Primeiras Manifestações',
                  day: 'Quinta-feira',
                  startTime: '07:30',
                  endTime: '11:30',
                  room: '19',
                  professor: 'Subs'
                },
                {
                  subject: 'LIBRAS',
                  day: 'Sexta-feira',
                  startTime: '07:30',
                  endTime: '11:30',
                  room: '19',
                  professor: 'Não especificado'
                },
                {
                  subject: 'Projeto de Extensão: Estratégias de Leitura e Produção de Texto Argumentativo',
                  day: 'Sábado',
                  startTime: '07:30',
                  endTime: '11:30',
                  room: '19',
                  professor: 'Fernando'
                }
              ]
            }
          ]
        },
        {
          name: '3º Ano',
          period: 'Noturno',
          semesters: [
            {
              name: '1º Semestre',
              classes: [
                {
                  subject: 'Literatura Portuguesa II',
                  day: 'Segunda-feira',
                  startTime: '19:00',
                  endTime: '22:30',
                  room: '21 / 07 BL',
                  professor: 'Subs'
                },
                {
                  subject: 'Sintaxe do Texto',
                  day: 'Terça-feira',
                  startTime: '19:00',
                  endTime: '22:30',
                  room: '21',
                  professor: 'Subs'
                },
                {
                  subject: 'Literatura Infanto-Juvenil',
                  day: 'Quarta-feira',
                  startTime: '19:00',
                  endTime: '22:30',
                  room: '21',
                  professor: 'Subs'
                },
                {
                  subject: 'Didática',
                  day: 'Quinta-feira',
                  startTime: '19:00',
                  endTime: '22:30',
                  room: '09 BL Did',
                  professor: 'Não especificado'
                },
                {
                  subject: 'Estágio Supervisionado I: Língua Portuguesa',
                  day: 'Sexta-feira',
                  startTime: '19:00',
                  endTime: '22:30',
                  room: '21',
                  professor: 'Caroline Oliveira'
                },
                {
                  subject: 'Literatura Brasileira II',
                  day: 'Sábado',
                  startTime: '19:00',
                  endTime: '22:30',
                  room: '21',
                  professor: 'Ma. Perla'
                }
              ]
            },
            {
              name: '2º Semestre',
              classes: [
                {
                  subject: 'Literatura Portuguesa II',
                  day: 'Segunda-feira',
                  startTime: '19:00',
                  endTime: '22:30',
                  room: '21',
                  professor: 'Subs'
                },
                {
                  subject: 'Sintaxe do Texto',
                  day: 'Terça-feira',
                  startTime: '19:00',
                  endTime: '22:30',
                  room: '21',
                  professor: 'Subs'
                },
                {
                  subject: 'Filologia Românica',
                  day: 'Quarta-feira',
                  startTime: '19:00',
                  endTime: '22:30',
                  room: '21',
                  professor: 'Carolina Akie'
                },
                {
                  subject: 'Elaboração de Material Didático',
                  day: 'Quinta-feira',
                  startTime: '19:00',
                  endTime: '22:30',
                  room: '21',
                  professor: 'Fernando'
                },
                {
                  subject: 'Estágio Supervisionado I - Literatura',
                  day: 'Sexta-feira',
                  startTime: '19:00',
                  endTime: '22:30',
                  room: '21',
                  professor: 'Síria'
                },
                {
                  subject: 'Literatura Brasileira II',
                  day: 'Sábado',
                  startTime: '19:00',
                  endTime: '22:30',
                  room: '21',
                  professor: 'Ma. Perla'
                }
              ]
            }
          ]
        },
        {
          name: '4º Ano',
          period: 'Diurno',
          semesters: [
            {
              name: '1º Semestre',
              classes: [
                {
                  subject: 'Literatura Brasileira III',
                  day: 'Segunda-feira',
                  startTime: '07:30',
                  endTime: '11:30',
                  room: '22',
                  professor: 'Não especificado'
                },
                {
                  subject: 'Estágio II: Língua Portuguesa',
                  day: 'Terça-feira',
                  startTime: '07:30',
                  endTime: '11:30',
                  room: '22',
                  professor: 'C. Bottosso e C. Oliveira'
                },
                {
                  subject: 'OFEB',
                  day: 'Quarta-feira',
                  startTime: '07:30',
                  endTime: '11:30',
                  room: '22',
                  professor: 'Não especificado'
                },
                {
                  subject: 'Teorias do Discurso',
                  day: 'Quinta-feira',
                  startTime: '07:30',
                  endTime: '11:30',
                  room: 'Não especificado',
                  professor: 'Não especificado'
                },
                {
                  subject: 'Linguística III',
                  day: 'Sexta-feira',
                  startTime: '07:30',
                  endTime: '11:30',
                  room: 'Não especificado',
                  professor: 'Não especificado'
                },
                {
                  subject: 'LIBRAS II',
                  day: 'Sábado',
                  startTime: '07:30',
                  endTime: '11:30',
                  room: 'Não especificado',
                  professor: 'Não especificado'
                }
              ]
            },
            {
              name: '2º Semestre',
              classes: [
                {
                  subject: 'Literatura Brasileira III',
                  day: 'Segunda-feira',
                  startTime: '07:30',
                  endTime: '11:30',
                  room: '22',
                  professor: 'Não especificado'
                },
                {
                  subject: 'Estágio II: Literatura',
                  day: 'Terça-feira',
                  startTime: '07:30',
                  endTime: '11:30',
                  room: '22',
                  professor: 'Carolina Bottosso'
                },
                {
                  subject: 'Crítica Literária',
                  day: 'Quarta-feira',
                  startTime: '07:30',
                  endTime: '11:30',
                  room: '22',
                  professor: 'Não especificado'
                },
                {
                  subject: 'Teorias do Discurso',
                  day: 'Quinta-feira',
                  startTime: '07:30',
                  endTime: '11:30',
                  room: 'Não especificado',
                  professor: 'Não especificado'
                },
                {
                  subject: 'Linguística III',
                  day: 'Sexta-feira',
                  startTime: '07:30',
                  endTime: '11:30',
                  room: 'Não especificado',
                  professor: 'Não especificado'
                }
              ]
            }
          ]
        }
      ]
    },
    {
      name: 'Letras LF/LI 2025',
      years: [
        // Existing Letras LF/LI course data...
      ]
    },
    {
      name: 'Letras Libras 2025.1',
      years: [
        // Existing Letras Libras course data...
      ]
    }
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Horários de Aula</Text>
        <Text style={styles.headerSubtitle}>
          Selecione seu curso para ver os horários
        </Text>
      </View>

      {courses.map((course, index) => (
        <View key={index} style={styles.courseSection}>
          <TouchableOpacity
            style={styles.courseHeader}
            onPress={() => setSelectedCourse(selectedCourse === course.name ? null : course.name)}
          >
            <GraduationCap size={24} color="#006633" />
            <Text style={styles.courseName}>{course.name}</Text>
            <ChevronRight
              size={24}
              color="#006633"
              style={{
                transform: [{ rotate: selectedCourse === course.name ? '90deg' : '0deg' }]
              }}
            />
          </TouchableOpacity>

          {selectedCourse === course.name && course.years.map((year, yearIndex) => (
            <View key={yearIndex} style={styles.yearSection}>
              <TouchableOpacity
                style={styles.yearHeader}
                onPress={() => setSelectedYear(selectedYear === year.name ? null : year.name)}
              >
                <Text style={styles.yearName}>{year.name} - {year.period}</Text>
                <ChevronRight
                  size={20}
                  color="#666666"
                  style={{
                    transform: [{ rotate: selectedYear === year.name ? '90deg' : '0deg' }]
                  }}
                />
              </TouchableOpacity>

              {selectedYear === year.name && year.semesters.map((semester, semesterIndex) => (
                <View key={semesterIndex} style={styles.semesterSection}>
                  <TouchableOpacity
                    style={styles.semesterHeader}
                    onPress={() => setSelectedSemester(selectedSemester === semester.name ? null : semester.name)}
                  >
                    <Text style={styles.semesterName}>{semester.name}</Text>
                    <ChevronRight
                      size={18}
                      color="#666666"
                      style={{
                        transform: [{ rotate: selectedSemester === semester.name ? '90deg' : '0deg' }]
                      }}
                    />
                  </TouchableOpacity>

                  {selectedSemester === semester.name && semester.classes.map((classInfo, classIndex) => (
                    <TouchableOpacity
                      key={classIndex}
                      style={styles.classItem}
                      onPress={() => setSelectedClass(selectedClass?.subject === classInfo.subject ? null : classInfo)}
                    >
                      <View style={styles.classHeader}>
                        <Text style={styles.classSubject}>{classInfo.subject}</Text>
                        <ChevronRight
                          size={16}
                          color="#666666"
                          style={{
                            transform: [{ rotate: selectedClass?.subject === classInfo.subject ? '90deg' : '0deg' }]
                          }}
                        />
                      </View>

                      {selectedClass?.subject === classInfo.subject && (
                        <View style={styles.classDetails}>
                          <View style={styles.detailRow}>
                            <Clock size={16} color="#666666" />
                            <Text style={styles.detailText}>
                              {classInfo.day} - {classInfo.startTime} às {classInfo.endTime}
                            </Text>
                          </View>
                          <View style={styles.detailRow}>
                            <MapPin size={16} color="#666666" />
                            <Text style={styles.detailText}>Sala {classInfo.room}</Text>
                          </View>
                          <View style={styles.detailRow}>
                            <User size={16} color="#666666" />
                            <Text style={styles.detailText}>Prof. {classInfo.professor}</Text>
                          </View>
                        </View>
                      )}
                    </TouchableOpacity>
                  ))}
                </View>
              ))}
            </View>
          ))}
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 16,
  },
  header: {
    marginBottom: 24,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: 8,
  },
  headerSubtitle: {
    fontSize: 16,
    color: '#666666',
  },
  courseSection: {
    marginBottom: 16,
    backgroundColor: '#ffffff',
    borderRadius: 12,
    overflow: 'hidden',
    elevation: 2,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  courseHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#f8f8f8',
    borderBottomWidth: 1,
    borderBottomColor: '#eeeeee',
  },
  courseName: {
    flex: 1,
    fontSize: 18,
    fontWeight: '600',
    color: '#333333',
    marginLeft: 12,
  },
  yearSection: {
    paddingHorizontal: 16,
  },
  yearHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#eeeeee',
  },
  yearName: {
    flex: 1,
    fontSize: 16,
    fontWeight: '500',
    color: '#444444',
  },
  semesterSection: {
    paddingLeft: 16,
  },
  semesterHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
  },
  semesterName: {
    flex: 1,
    fontSize: 15,
    fontWeight: '500',
    color: '#006633',
  },
  classItem: {
    paddingLeft: 16,
    paddingVertical: 8,
  },
  classHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  classSubject: {
    flex: 1,
    fontSize: 14,
    color: '#666666',
  },
  classDetails: {
    marginTop: 8,
    paddingLeft: 8,
  },
  detailRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },
  detailText: {
    fontSize: 13,
    color: '#777777',
    marginLeft: 8,
  },
});
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { CourseCard } from '@/components/CourseCard';
import { AcademicInfoCard } from '@/components/AcademicInfoCard';
import { useMemo } from 'react';

export default function AcademicScreen() {
  const campuses = useMemo(() => [
    { name: 'Cuiabá', courses: 66 },
    { name: 'Rondonópolis', courses: 25 },
    { name: 'Sinop', courses: 18 },
    { name: 'Araguaia', courses: 14 }
  ], []);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerTitle}>Vida Acadêmica</Text>
        <Text style={styles.headerSubtitle}>
          Informações sobre cursos, procedimentos acadêmicos e direitos estudantis.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Cursos de Graduação</Text>
        <Text style={styles.sectionSubtitle}>Por Campus Universitário</Text>
        
        <ScrollView 
          horizontal 
          showsHorizontalScrollIndicator={false} 
          contentContainerStyle={styles.campusScrollContainer}
        >
          {campuses.map((campus, index) => (
            <View key={index} style={styles.campusCard}>
              <Text style={styles.campusName}>{campus.name}</Text>
              <Text style={styles.campusCount}>{campus.courses} cursos</Text>
            </View>
          ))}
        </ScrollView>

        <View style={styles.featuredCoursesContainer}>
          <CourseCard
            name="Medicina"
            type="Bacharelado"
            duration="6 anos"
            campus="Cuiabá"
          />
          
          <CourseCard
            name="Engenharia Civil"
            type="Bacharelado"
            duration="5 anos"
            campus="Cuiabá"
          />
          
          <CourseCard
            name="Direito"
            type="Bacharelado"
            duration="5 anos"
            campus="Cuiabá"
          />
          
          <CourseCard
            name="Psicologia"
            type="Bacharelado"
            duration="5 anos"
            campus="Cuiabá"
          />
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Procedimentos Acadêmicos</Text>
        
        <AcademicInfoCard
          title="Matrícula"
          description="A matrícula é realizada semestralmente via sistema acadêmico. O período é divulgado no calendário acadêmico."
          linkText="Ver Procedimento"
        />
        
        <AcademicInfoCard
          title="Trancamento de Matrícula"
          description="O trancamento pode ser solicitado até 60 dias após o início do semestre. É permitido trancar a matrícula por até 4 semestres durante o curso."
          linkText="Ver Procedimento"
        />
        
        <AcademicInfoCard
          title="Aproveitamento de Estudos"
          description="Disciplinas cursadas em outras instituições podem ser aproveitadas mediante análise da coordenação do curso."
          linkText="Ver Procedimento"
        />
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Direitos e Deveres</Text>
        
        <View style={styles.rightsContainer}>
          <View style={styles.rightsCard}>
            <Text style={styles.rightsTitle}>Direitos do Estudante</Text>
            <Text style={styles.rightsText}>• Participar de órgãos colegiados</Text>
            <Text style={styles.rightsText}>• Recorrer de decisões acadêmicas</Text>
            <Text style={styles.rightsText}>• Ter acesso às instalações e recursos</Text>
            <Text style={styles.rightsText}>• Participar de programas de assistência</Text>
            <Text style={styles.rightsText}>• Atendimento pelos professores</Text>
          </View>
          
          <View style={styles.rightsCard}>
            <Text style={styles.rightsTitle}>Deveres do Estudante</Text>
            <Text style={styles.rightsText}>• Respeitar as normas institucionais</Text>
            <Text style={styles.rightsText}>• Zelar pelo patrimônio da universidade</Text>
            <Text style={styles.rightsText}>• Manter conduta ética e respeitosa</Text>
            <Text style={styles.rightsText}>• Cumprir prazos acadêmicos</Text>
            <Text style={styles.rightsText}>• Frequentar as aulas regularmente</Text>
          </View>
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
  headerContainer: {
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
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 8,
    color: '#333333',
  },
  sectionSubtitle: {
    fontSize: 14,
    color: '#666666',
    marginBottom: 16,
  },
  campusScrollContainer: {
    paddingVertical: 8,
    paddingRight: 16,
  },
  campusCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    padding: 16,
    marginRight: 12,
    width: 140,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
  },
  campusName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#006633',
    marginBottom: 8,
  },
  campusCount: {
    fontSize: 14,
    color: '#666666',
  },
  featuredCoursesContainer: {
    marginTop: 16,
  },
  rightsContainer: {
    marginTop: 8,
  },
  rightsCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    padding: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
  },
  rightsTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#006633',
    marginBottom: 12,
  },
  rightsText: {
    fontSize: 14,
    color: '#333333',
    marginBottom: 8,
    lineHeight: 20,
  },
});
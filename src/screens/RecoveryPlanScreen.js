import React from 'react';
import { View, Text, StyleSheet, ScrollView, Linking, StatusBar } from 'react-native';
import { colors, spacing, radius, typography } from '../theme';
import { Tag, CTAButton, ExerciseCard } from '../components';
import { getRehabPlan } from '../data/rehabPlans';

const badgeColors = {
  phase1: { bg: `${colors.accent3}20`, color: colors.accent3 },
  phase2: { bg: `${colors.accent}15`, color: colors.accent },
  phase3: { bg: `${colors.accent4}20`, color: colors.accent4 },
};

export default function RecoveryPlanScreen({ navigation, route }) {
  const params = route.params;
  const { topDiagKey, primaryRegion } = params;
  const plan = getRehabPlan(topDiagKey || 'generic');

  const openVideo = (url) => {
    Linking.openURL(url).catch(() => {});
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <ScrollView contentContainerStyle={styles.scroll} showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Text style={styles.backBtn} onPress={() => navigation.goBack()}>← Back</Text>
          <Text style={styles.logo}>rehabit</Text>
        </View>

        <Tag label="Recovery Plan" />
        <Text style={styles.title}>Your <Text style={{ color: colors.accent }}>{plan.title}</Text> Plan</Text>
        <Text style={styles.sub}>Work through each phase. Only progress when pain allows.</Text>

        {plan.insight && (
          <View style={styles.insightBox}>
            <Text style={styles.insightTitle}>⚠️ Key Insight</Text>
            <Text style={styles.insightText}>{plan.insight}</Text>
          </View>
        )}

        {plan.phases.map((phase) => {
          const bc = badgeColors[phase.badge] || badgeColors.phase1;
          return (
            <View key={phase.label} style={styles.phaseSection}>
              <View style={styles.phaseHeader}>
                <View style={[styles.phaseBadge, { backgroundColor: bc.bg }]}>
                  <Text style={[styles.phaseBadgeText, { color: bc.color }]}>{phase.label}</Text>
                </View>
                <Text style={styles.phaseTitle}>{phase.title}</Text>
              </View>
              {phase.exercises.map((ex) => (
                <ExerciseCard
                  key={ex.name}
                  name={ex.name}
                  sets={ex.sets}
                  desc={ex.desc}
                  icon={ex.icon}
                  link={ex.link}
                  onLinkPress={openVideo}
                />
              ))}
            </View>
          );
        })}

        <View style={styles.btnWrap}>
          <CTAButton
            label="Give Feedback →"
            onPress={() => navigation.navigate('Feedback', params)}
          />
          <CTAButton
            label="📅 Book Physio Session"
            secondary
            style={{ marginTop: 10 }}
            onPress={() => {}}
          />
          <CTAButton
            label="Start Over"
            secondary
            style={{ marginTop: 10 }}
            onPress={() => navigation.navigate('Splash')}
          />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.bg },
  scroll: { padding: spacing.lg, paddingTop: spacing.md, flexGrow: 1 },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 4 },
  backBtn: { ...typography.body, color: colors.text2, fontSize: 14 },
  logo: { fontFamily: 'Syne_800ExtraBold', fontSize: 22, color: colors.accent, letterSpacing: -0.5 },
  title: { fontFamily: 'Syne_700Bold', fontSize: 22, color: colors.text, lineHeight: 28, marginBottom: 6 },
  sub: { ...typography.bodySmall, marginBottom: 16 },
  insightBox: { backgroundColor: `${colors.accent3}10`, borderWidth: 1, borderColor: `${colors.accent3}30`, borderRadius: radius.md, padding: 14, marginBottom: 20 },
  insightTitle: { color: colors.accent3, fontFamily: 'DMSans_700Bold', fontSize: 12, marginBottom: 6 },
  insightText: { ...typography.bodySmall, lineHeight: 20 },
  phaseSection: { marginBottom: 20 },
  phaseHeader: { flexDirection: 'row', alignItems: 'center', gap: 10, marginBottom: 12 },
  phaseBadge: { paddingHorizontal: 10, paddingVertical: 4, borderRadius: radius.full },
  phaseBadgeText: { fontFamily: 'DMSans_700Bold', fontSize: 10, letterSpacing: 1, textTransform: 'uppercase' },
  phaseTitle: { fontFamily: 'Syne_600SemiBold', fontSize: 14, color: colors.text, flex: 1 },
  btnWrap: { paddingTop: spacing.md },
});

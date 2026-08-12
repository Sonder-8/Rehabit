import React, { useMemo } from 'react';
import { View, Text, StyleSheet, ScrollView, StatusBar } from 'react-native';
import { colors, spacing, radius, typography } from '../theme';
import { CTAButton, DiagnosisCard, Screen } from '../components';
import { diagnose } from '../data/diagnosisEngine';

const probColors = [colors.accent, colors.accent3, colors.accent2];

export default function ResultsScreen({ navigation, route }) {
  const params = route.params;
  const { mode, primaryRegion, answers, redFlags } = params;
  const hasRedFlags = redFlags && !redFlags.includes('none');

  const diagnoses = useMemo(() =>
    diagnose(primaryRegion?.id || 'generic', answers || {}, mode),
    [primaryRegion, answers, mode]
  );

  const topDiag = diagnoses[0];
  const isReturning = topDiag?.isReturning;

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <ScrollView contentContainerStyle={styles.scroll} showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Text style={styles.logo}>rehabit</Text>
          <Text style={styles.step}>Assessment Complete</Text>
        </View>

        {hasRedFlags && (
          <View style={styles.rfBox}>
            <Text style={styles.rfTitle}>⚠️ Seek Medical Attention Today</Text>
            <Text style={styles.rfBody}>
              Some of your symptoms should be assessed by a doctor before starting rehab.
              Please visit urgent care or a GP first.
            </Text>
          </View>
        )}

        <View style={styles.resultHeader}>
          <View style={styles.checkCircle}>
            <Text style={{ fontSize: 28 }}>🔍</Text>
          </View>
          <Text style={styles.resultTitle}>Assessment Complete</Text>
          <Text style={styles.resultSub}>
            {isReturning
              ? `Recovery assessment for: ${topDiag?.diagnosis || primaryRegion?.name}`
              : `Primary injury: ${primaryRegion?.name}. Ranked by probability.`}
          </Text>
        </View>

        {isReturning ? (
          <>
            <View style={styles.phaseCard}>
              <View style={styles.phaseBadge}>
                <Text style={styles.phaseBadgeText}>PHASE</Text>
              </View>
              <Text style={styles.phaseName}>{topDiag.name}</Text>
              <Text style={styles.phaseDesc}>{topDiag.desc}</Text>
              <View style={styles.nextStepBox}>
                <Text style={styles.nextStepText}>
                  <Text style={{ color: colors.accent, fontFamily: 'DMSans_700Bold' }}>Next step: </Text>
                  {topDiag.nextStep}
                </Text>
              </View>
            </View>
            {topDiag.ceiling && !topDiag.ceiling.includes('Nothing') && (
              <View style={styles.gapCard}>
                <Text style={styles.gapTitle}>🎯 Your specific gap: {topDiag.ceiling}</Text>
                <Text style={styles.gapDesc}>This is the load your recovery plan will build toward.</Text>
              </View>
            )}
          </>
        ) : (
          diagnoses.map((d, i) => (
            <DiagnosisCard
              key={d.key}
              rank={i + 1}
              name={d.name}
              prob={d.prob}
              desc={d.desc}
              isTop={i === 0}
              probColor={probColors[i] || colors.text2}
            />
          ))
        )}

        <View style={styles.nextSteps}>
          <Text style={styles.nsTitle}>RECOMMENDED NEXT STEPS</Text>
          {[
            { n: 1, text: 'Start your recovery plan with phase-appropriate exercises below.' },
            { n: 2, text: 'Book a physio validation session — confirms or refines the diagnosis.' },
            { n: 3, text: 'Log pain and exercises daily to track your progress.' },
          ].map(item => (
            <View key={item.n} style={styles.nsItem}>
              <View style={styles.nsNum}><Text style={styles.nsNumText}>{item.n}</Text></View>
              <Text style={styles.nsText}>{item.text}</Text>
            </View>
          ))}
        </View>

        <View style={styles.btnWrap}>
          <CTAButton
            label="Start Recovery Plan →"
            onPress={() => navigation.navigate('RecoveryPlan', { ...params, topDiagKey: topDiag?.key || 'generic' })}
          />
          <CTAButton
            label="Book Physio Session"
            secondary
            style={{ marginTop: 10 }}
            onPress={() => {}}
          />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.bg },
  scroll: { padding: spacing.lg, paddingTop: spacing.md, flexGrow: 1 },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: spacing.md },
  logo: { fontFamily: 'Syne_800ExtraBold', fontSize: 22, color: colors.accent, letterSpacing: -0.5 },
  step: { ...typography.label, color: colors.text3 },
  rfBox: { backgroundColor: `${colors.accent2}15`, borderWidth: 1.5, borderColor: colors.accent2, borderRadius: radius.md, padding: 15, marginBottom: 16 },
  rfTitle: { fontFamily: 'DMSans_700Bold', color: colors.accent2, fontSize: 14, marginBottom: 5 },
  rfBody: { ...typography.bodySmall, lineHeight: 20 },
  resultHeader: { alignItems: 'center', paddingVertical: spacing.lg },
  checkCircle: { width: 64, height: 64, backgroundColor: `${colors.accent}15`, borderWidth: 2, borderColor: colors.accent, borderRadius: 32, alignItems: 'center', justifyContent: 'center', marginBottom: 14 },
  resultTitle: { fontFamily: 'Syne_700Bold', fontSize: 20, color: colors.text, marginBottom: 5 },
  resultSub: { ...typography.bodySmall, textAlign: 'center', lineHeight: 20 },
  phaseCard: { backgroundColor: colors.surface, borderWidth: 1.5, borderColor: colors.accent, borderRadius: radius.md, padding: 16, marginBottom: 12 },
  phaseBadge: { backgroundColor: `${colors.accent}18`, alignSelf: 'flex-start', paddingHorizontal: 8, paddingVertical: 3, borderRadius: radius.full, marginBottom: 8 },
  phaseBadgeText: { color: colors.accent, fontSize: 9, fontFamily: 'DMSans_700Bold', letterSpacing: 1.5 },
  phaseName: { fontFamily: 'Syne_600SemiBold', fontSize: 16, color: colors.text, marginBottom: 8 },
  phaseDesc: { ...typography.bodySmall, lineHeight: 20, marginBottom: 10 },
  nextStepBox: { backgroundColor: `${colors.accent}08`, borderWidth: 1, borderColor: `${colors.accent}25`, borderRadius: radius.sm, padding: 10 },
  nextStepText: { ...typography.bodySmall, lineHeight: 20 },
  gapCard: { backgroundColor: colors.surface, borderWidth: 1.5, borderColor: colors.border, borderRadius: radius.md, padding: 15, marginBottom: 12 },
  gapTitle: { fontFamily: 'Syne_600SemiBold', fontSize: 14, color: colors.text, marginBottom: 5 },
  gapDesc: { ...typography.bodySmall },
  nextSteps: { backgroundColor: colors.surface, borderWidth: 1, borderColor: colors.border, borderRadius: radius.md, padding: 16, marginBottom: 16 },
  nsTitle: { ...typography.label, color: colors.text3, marginBottom: 12 },
  nsItem: { flexDirection: 'row', gap: 11, alignItems: 'flex-start', marginBottom: 10 },
  nsNum: { width: 22, height: 22, backgroundColor: colors.accent, borderRadius: 6, alignItems: 'center', justifyContent: 'center', flexShrink: 0 },
  nsNumText: { fontFamily: 'DMSans_700Bold', fontSize: 11, color: colors.bg },
  nsText: { flex: 1, ...typography.bodySmall, lineHeight: 20 },
  btnWrap: { paddingTop: spacing.sm },
});

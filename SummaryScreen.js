import React, { useMemo } from 'react';
import { View, Text, StyleSheet, ScrollView, Pressable, Share, StatusBar } from 'react-native';
import { colors, spacing, radius, typography } from '../theme';
import { CTAButton } from '../components';
import { diagnose } from '../data/diagnosisEngine';

export default function SummaryScreen({ navigation, route }) {
  const params = route.params;
  const { mode, activity, sports, primaryRegion, selectedRegions, answers, redFlags, feedback } = params;

  const diagnoses = useMemo(() =>
    diagnose(primaryRegion?.id || 'generic', answers || {}, mode),
    [primaryRegion, answers, mode]
  );

  const summaryText = useMemo(() => {
    const lines = [];
    lines.push('═══ REHABIT — TRIAGE SUMMARY ═══');
    lines.push('');
    lines.push(`Mode: ${mode === 'strengthen' ? 'Strengthen' : mode === 'returning' ? 'Returning from Injury' : 'Injured'}`);
    lines.push(`Activity level: ${activity || '—'}`);
    lines.push(`Sport(s): ${(sports || []).join(', ') || '—'}`);
    lines.push('');
    lines.push('— Body Map —');
    Object.entries(selectedRegions || {}).forEach(([, d]) => {
      lines.push(`• ${d.name} (pain: ${d.intensity})`);
    });
    lines.push('');
    lines.push(`Primary injury: ${primaryRegion?.name || '—'}`);
    lines.push('');
    lines.push('— Triage Answers —');
    Object.entries(answers || {}).forEach(([key, val]) => {
      const v = Array.isArray(val) ? val.join(', ') : val;
      if (v) lines.push(`${key}: ${v}`);
    });
    lines.push('');
    lines.push(`Red flags: ${(redFlags || []).includes('none') ? 'None reported' : (redFlags || []).join(', ')}`);
    lines.push('');
    lines.push('— Diagnosis —');
    diagnoses.slice(0, 3).forEach((d, i) => {
      lines.push(`${i + 1}. ${d.name} (${d.prob}%)`);
    });
    lines.push('');
    lines.push('— User Feedback —');
    lines.push(feedback || '(no feedback entered)');
    lines.push('');
    lines.push('═══ END SUMMARY ═══');
    return lines.join('\n');
  }, [params, diagnoses]);

  const handleShare = async () => {
    try {
      await Share.share({ message: summaryText, title: 'Rehabit Triage Summary' });
    } catch (e) {}
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <ScrollView contentContainerStyle={styles.scroll} showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Text style={styles.logo}>rehabit</Text>
        </View>

        <View style={styles.thankYou}>
          <View style={styles.thankIcon}>
            <Text style={{ fontSize: 28 }}>🙏</Text>
          </View>
          <Text style={styles.thankTitle}>Thank you!</Text>
          <Text style={styles.thankSub}>
            Share the summary below on WhatsApp — this is exactly the training data we need.
          </Text>
        </View>

        <View style={styles.summaryBox}>
          <Text style={styles.summaryText}>{summaryText}</Text>
        </View>

        <View style={styles.btnWrap}>
          <CTAButton
            label="📤 Share Summary"
            onPress={handleShare}
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
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: spacing.lg },
  logo: { fontFamily: 'Syne_800ExtraBold', fontSize: 22, color: colors.accent, letterSpacing: -0.5 },
  thankYou: { alignItems: 'center', paddingVertical: spacing.lg },
  thankIcon: { width: 64, height: 64, backgroundColor: `${colors.accent}15`, borderWidth: 2, borderColor: colors.accent, borderRadius: 32, alignItems: 'center', justifyContent: 'center', marginBottom: 14 },
  thankTitle: { fontFamily: 'Syne_700Bold', fontSize: 20, color: colors.text, marginBottom: 6 },
  thankSub: { ...typography.bodySmall, textAlign: 'center', lineHeight: 20 },
  summaryBox: { backgroundColor: colors.surface, borderWidth: 1.5, borderColor: colors.border, borderRadius: radius.md, padding: 16, marginBottom: 20, maxHeight: 320 },
  summaryText: { fontFamily: 'DMSans_400Regular', fontSize: 12, color: colors.text2, lineHeight: 18 },
  btnWrap: { paddingTop: spacing.sm },
});

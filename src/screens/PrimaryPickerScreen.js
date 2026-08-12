import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Pressable, StatusBar } from 'react-native';
import { colors, spacing, radius, typography } from '../theme';
import { Tag, CTAButton, ProgressBar } from '../components';

export default function PrimaryPickerScreen({ navigation, route }) {
  const params = route.params;
  const { mode, selectedRegions } = params;
  const isStrengthen = mode === 'strengthen';
  const isReturning = mode === 'returning';
  const accentColor = isStrengthen ? colors.accent4 : colors.accent;
  const [primaryId, setPrimaryId] = useState(null);
  const regions = Object.entries(selectedRegions || {});

  // Auto-select if only one region
  React.useEffect(() => {
    if (regions.length === 1) setPrimaryId(regions[0][0]);
  }, []);

  const primaryRegion = primaryId ? { id: primaryId, name: selectedRegions[primaryId]?.name } : null;
  const secondaryNames = regions.filter(([id]) => id !== primaryId).map(([, d]) => d.name);

  const label = isStrengthen ? 'Main Focus' : isReturning ? 'Your Injury' : 'Focus Area';
  const title = isStrengthen ? 'Which muscle is your main focus?' : isReturning ? 'Confirm your injured area' : "What's your primary injury?";
  const btnLabel = isStrengthen ? 'Build My Strength Plan' : isReturning ? 'Start Progression Assessment' : 'Start Triage for This Injury';

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <ProgressBar current={5} total={8} />
      <ScrollView contentContainerStyle={styles.scroll} showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Text style={styles.backBtn} onPress={() => navigation.goBack()}>← Back</Text>
          <Text style={styles.step}>Step 5 of 8</Text>
        </View>

        <Tag label={label} color={accentColor} />
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.sub}>
          {isStrengthen
            ? "Pick the muscle you most want to build strength in."
            : isReturning ? "We'll build your progression plan around this area."
            : "Pick the one bothering you most. Other areas are saved for later."}
        </Text>

        {regions.map(([id, data]) => (
          <Pressable
            key={id}
            onPress={() => setPrimaryId(id)}
            style={[styles.card, primaryId === id && { borderColor: accentColor, backgroundColor: `${accentColor}0A` }]}
          >
            <Text style={{ fontSize: 22 }}>{isStrengthen ? '💪' : '📍'}</Text>
            <View style={{ flex: 1 }}>
              <Text style={[styles.cardName, primaryId === id && { color: accentColor }]}>{data.name}</Text>
              <Text style={styles.cardSub}>
                {isStrengthen ? 'Tap to focus your plan here first' : `Pain intensity: ${data.intensity}`}
              </Text>
            </View>
            {primaryId === id && (
              <View style={[styles.badge, { backgroundColor: `${accentColor}18` }]}>
                <Text style={[styles.badgeText, { color: accentColor }]}>{isStrengthen ? 'FOCUS' : 'PRIMARY'}</Text>
              </View>
            )}
          </Pressable>
        ))}

        {primaryId && secondaryNames.length > 0 && (
          <View style={styles.secondaryNote}>
            <Text style={styles.secondaryText}>
              <Text style={{ color: colors.text, fontFamily: 'DMSans_500Medium' }}>
                {isStrengthen ? 'Other muscles noted: ' : 'Other areas noted: '}
              </Text>
              {secondaryNames.join(', ')}. Saved for your next session.
            </Text>
          </View>
        )}

        <View style={styles.btnWrap}>
          <CTAButton
            label={btnLabel}
            disabled={!primaryId}
            accentColor={accentColor}
            onPress={() => navigation.navigate('Questionnaire', { ...params, primaryRegion })}
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
  step: { ...typography.label, color: colors.text3 },
  title: { fontFamily: 'Syne_700Bold', fontSize: 22, color: colors.text, lineHeight: 28, marginBottom: 6 },
  sub: { ...typography.bodySmall, marginBottom: 20 },
  card: { flexDirection: 'row', alignItems: 'center', gap: 14, backgroundColor: colors.surface, borderWidth: 2, borderColor: colors.border, borderRadius: radius.md, padding: 16, marginBottom: 12 },
  cardName: { fontFamily: 'Syne_600SemiBold', fontSize: 15, color: colors.text, marginBottom: 2 },
  cardSub: { ...typography.bodySmall, fontSize: 12 },
  badge: { paddingHorizontal: 8, paddingVertical: 3, borderRadius: radius.full },
  badgeText: { fontFamily: 'DMSans_700Bold', fontSize: 9, letterSpacing: 1.5 },
  secondaryNote: { backgroundColor: colors.surface2, borderWidth: 1, borderColor: colors.border, borderRadius: radius.sm, padding: 12, marginTop: 4, marginBottom: 8 },
  secondaryText: { ...typography.bodySmall, lineHeight: 20 },
  btnWrap: { marginTop: spacing.xl, paddingTop: spacing.sm },
});

import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput, Pressable, StatusBar } from 'react-native';
import { colors, spacing, radius, typography } from '../theme';
import { Tag, CTAButton, ProgressBar, MultiChip, Divider } from '../components';

const conditions = ['None', 'Scoliosis', 'Hypermobility', 'Arthritis', 'Disc Issue', 'Other'];

export default function HistoryScreen({ navigation, route }) {
  const params = route.params;
  const [hasHistory, setHasHistory] = useState(null);
  const [historyText, setHistoryText] = useState('');
  const [selectedConditions, setSelectedConditions] = useState([]);

  const toggleCondition = (c) => {
    if (c === 'None') { setSelectedConditions(['None']); return; }
    setSelectedConditions(prev => {
      const without = prev.filter(x => x !== 'None');
      return without.includes(c) ? without.filter(x => x !== c) : [...without, c];
    });
  };

  const canContinue = hasHistory !== null;

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <ProgressBar current={3} total={8} />
      <ScrollView contentContainerStyle={styles.scroll} showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Text style={styles.backBtn} onPress={() => navigation.goBack()}>← Back</Text>
          <Text style={styles.step}>Step 3 of 8</Text>
        </View>

        <Tag label="History" />
        <Text style={styles.title}>Any <Text style={{ color: colors.accent }}>previous</Text> injuries?</Text>
        <Text style={styles.sub}>Past injuries — especially to the same area — significantly change the diagnosis.</Text>

        <View style={styles.yesNo}>
          <Pressable
            onPress={() => setHasHistory('yes')}
            style={[styles.ynBtn, hasHistory === 'yes' && styles.ynSelected]}
          >
            <Text style={[styles.ynText, hasHistory === 'yes' && { color: colors.accent }]}>✓  Yes</Text>
          </Pressable>
          <Pressable
            onPress={() => setHasHistory('no')}
            style={[styles.ynBtn, hasHistory === 'no' && styles.ynNoSelected]}
          >
            <Text style={[styles.ynText, hasHistory === 'no' && { color: colors.text }]}>✕  No</Text>
          </Pressable>
        </View>

        {hasHistory === 'yes' && (
          <>
            <TextInput
              style={styles.input}
              placeholder="e.g. Left hamstring pull ×7 in 2024, elbow pain from badminton..."
              placeholderTextColor={colors.text3}
              value={historyText}
              onChangeText={setHistoryText}
              multiline
              numberOfLines={3}
            />
            <Divider />
          </>
        )}

        <Text style={styles.sectionTitle}>Any diagnosed conditions?</Text>
        <View style={styles.chipWrap}>
          {conditions.map((c) => (
            <MultiChip
              key={c}
              label={c}
              selected={selectedConditions.includes(c)}
              onPress={() => toggleCondition(c)}
            />
          ))}
        </View>

        <View style={styles.btnWrap}>
          <CTAButton
            label="Continue"
            disabled={!canContinue}
            onPress={() => navigation.navigate('BodyMap', { ...params, hasHistory, historyText, conditions: selectedConditions })}
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
  title: { fontFamily: 'Syne_700Bold', fontSize: 24, color: colors.text, lineHeight: 30, marginBottom: 6 },
  sub: { ...typography.bodySmall, marginBottom: 20 },
  yesNo: { flexDirection: 'row', gap: 12, marginBottom: 16 },
  ynBtn: { flex: 1, backgroundColor: colors.surface, borderWidth: 1.5, borderColor: colors.border, borderRadius: radius.md, padding: 16, alignItems: 'center' },
  ynSelected: { borderColor: colors.accent, backgroundColor: `${colors.accent}10` },
  ynNoSelected: { borderColor: colors.text3, backgroundColor: colors.surface2 },
  ynText: { fontFamily: 'DMSans_500Medium', fontSize: 15, color: colors.text2 },
  input: { backgroundColor: colors.surface, borderWidth: 1.5, borderColor: colors.border, borderRadius: radius.sm, padding: 14, color: colors.text, fontFamily: 'DMSans_400Regular', fontSize: 14, textAlignVertical: 'top', minHeight: 80, marginBottom: 16 },
  sectionTitle: { fontFamily: 'Syne_600SemiBold', fontSize: 15, color: colors.text, marginBottom: 12 },
  chipWrap: { flexDirection: 'row', flexWrap: 'wrap' },
  btnWrap: { marginTop: spacing.xl, paddingTop: spacing.md },
});

import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, StatusBar } from 'react-native';
import { colors, spacing, typography } from '../theme';
import { Tag, CTAButton, ProgressBar, OptionCard } from '../components';

const flags = [
  { id: 'fever', icon: '🌡️', label: 'Fever or feeling unwell alongside the pain' },
  { id: 'night-pain', icon: '🌙', label: 'Pain woke me suddenly at night', desc: 'Sharp / severe — not just positional discomfort' },
  { id: 'weight-loss', icon: '⚖️', label: 'Unexplained weight loss recently' },
  { id: 'bladder', icon: '🚨', label: 'Bladder or bowel changes' },
  { id: 'none', icon: '✅', label: 'None of these apply', desc: 'I feel generally fine otherwise' },
];

export default function RedFlagScreen({ navigation, route }) {
  const params = route.params;
  const [selected, setSelected] = useState(['none']);

  const toggle = (id) => {
    if (id === 'none') { setSelected(['none']); return; }
    setSelected(prev => {
      const without = prev.filter(x => x !== 'none');
      const updated = without.includes(id) ? without.filter(x => x !== id) : [...without, id];
      return updated.length === 0 ? ['none'] : updated;
    });
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <ProgressBar current={7} total={8} />
      <ScrollView contentContainerStyle={styles.scroll} showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Text style={styles.backBtn} onPress={() => navigation.goBack()}>← Back</Text>
          <Text style={styles.step}>Step 7 of 8</Text>
        </View>

        <Tag label="Safety" />
        <Text style={styles.title}><Text style={{ color: colors.accent }}>Safety</Text> screen</Text>
        <Text style={styles.sub}>Helps us flag anything needing urgent attention. Answer honestly.</Text>

        {flags.map((f) => (
          <OptionCard
            key={f.id}
            icon={f.icon}
            label={f.label}
            desc={f.desc}
            selected={selected.includes(f.id)}
            onPress={() => toggle(f.id)}
          />
        ))}

        <View style={styles.btnWrap}>
          <CTAButton
            label="See My Results"
            onPress={() => navigation.navigate('Results', { ...params, redFlags: selected })}
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
  btnWrap: { marginTop: spacing.xl, paddingTop: spacing.sm },
});

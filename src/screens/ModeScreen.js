import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Pressable, StatusBar } from 'react-native';
import { colors, spacing, radius, typography } from '../theme';
import { Tag, CTAButton, ProgressBar } from '../components';

const modes = [
  { id: 'injury', icon: '🤕', label: 'I\'m Injured', desc: 'Diagnose my pain and get a recovery plan', color: colors.accent },
  { id: 'strengthen', icon: '💪', label: 'Strengthen', desc: 'Build strength in weak muscles', color: colors.accent4 },
  { id: 'returning', icon: '🔄', label: 'Returning from Injury', desc: 'I already know my injury — help me progress my recovery', color: colors.accent3 },
];

export default function ModeScreen({ navigation, route }) {
  const [selected, setSelected] = useState(null);

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <ProgressBar current={1} total={8} />
      <ScrollView contentContainerStyle={styles.scroll} showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Text style={styles.logo}>rehabit</Text>
          <Text style={styles.step}>Step 1 of 8</Text>
        </View>

        <Tag label="Getting Started" />
        <Text style={styles.title}>What are you <Text style={{ color: colors.accent }}>here for</Text>?</Text>
        <Text style={styles.sub}>Choose your path — the experience adapts to you.</Text>

        <View style={styles.modeGrid}>
          {modes.slice(0, 2).map((m) => (
            <Pressable
              key={m.id}
              onPress={() => setSelected(m.id)}
              style={[styles.modeCard, selected === m.id && { borderColor: m.color, backgroundColor: `${m.color}0A` }]}
            >
              <Text style={styles.modeIcon}>{m.icon}</Text>
              <Text style={[styles.modeLabel, selected === m.id && { color: m.color }]}>{m.label}</Text>
              <Text style={styles.modeDesc}>{m.desc}</Text>
            </Pressable>
          ))}
        </View>

        <Pressable
          onPress={() => setSelected('returning')}
          style={[styles.returningCard, selected === 'returning' && { borderColor: colors.accent3, backgroundColor: `${colors.accent3}0A` }]}
        >
          <Text style={{ fontSize: 28 }}>🔄</Text>
          <View style={{ flex: 1 }}>
            <Text style={[styles.modeLabel, selected === 'returning' && { color: colors.accent3 }]}>Returning from Injury</Text>
            <Text style={styles.modeDesc}>I already know my injury — help me progress my recovery</Text>
          </View>
        </Pressable>

        <View style={styles.btnWrap}>
          <CTAButton
            label="Continue"
            disabled={!selected}
            accentColor={selected ? modes.find(m => m.id === selected)?.color : colors.accent}
            onPress={() => navigation.navigate('Profile', { mode: selected })}
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
  logo: { fontFamily: 'Syne_800ExtraBold', fontSize: 22, color: colors.accent, letterSpacing: -0.5 },
  step: { ...typography.label, color: colors.text3 },
  title: { fontFamily: 'Syne_700Bold', fontSize: 24, color: colors.text, lineHeight: 30, marginBottom: 6 },
  sub: { ...typography.bodySmall, marginBottom: 24 },
  modeGrid: { flexDirection: 'row', gap: 12, marginBottom: 12 },
  modeCard: { flex: 1, backgroundColor: colors.surface, borderWidth: 2, borderColor: colors.border, borderRadius: radius.md, padding: 18, alignItems: 'center' },
  modeIcon: { fontSize: 32, marginBottom: 10 },
  modeLabel: { fontFamily: 'Syne_700Bold', fontSize: 14, color: colors.text, textAlign: 'center', marginBottom: 4 },
  modeDesc: { ...typography.bodySmall, fontSize: 11, textAlign: 'center' },
  returningCard: { flexDirection: 'row', alignItems: 'center', gap: 14, backgroundColor: colors.surface, borderWidth: 2, borderColor: colors.border, borderRadius: radius.md, padding: 18, marginBottom: 24 },
  btnWrap: { marginTop: 'auto', paddingTop: spacing.lg },
});

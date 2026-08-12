import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Pressable } from 'react-native';
import { colors, spacing, radius, typography } from '../theme';

// ── PROGRESS BAR ──
export function ProgressBar({ current, total }) {
  const pct = Math.min((current / total) * 100, 100);
  return (
    <View style={progressStyles.track}>
      <View style={[progressStyles.fill, { width: `${pct}%` }]} />
    </View>
  );
}

const progressStyles = StyleSheet.create({
  track: { height: 3, backgroundColor: colors.border, width: '100%' },
  fill: { height: 3, backgroundColor: colors.accent },
});

// ── TAG / BADGE ──
export function Tag({ label, color = colors.accent, bg }) {
  return (
    <View style={[tagStyles.wrap, { backgroundColor: bg || `${color}18` }]}>
      <Text style={[tagStyles.text, { color }]}>{label.toUpperCase()}</Text>
    </View>
  );
}

const tagStyles = StyleSheet.create({
  wrap: { alignSelf: 'flex-start', paddingHorizontal: 10, paddingVertical: 4, borderRadius: radius.full, marginBottom: 12, marginTop: 8 },
  text: { fontFamily: 'DMSans_700Bold', fontSize: 10, letterSpacing: 1 },
});

// ── OPTION CARD ──
export function OptionCard({ icon, label, desc, selected, onPress }) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        optStyles.card,
        selected && optStyles.selected,
        pressed && optStyles.pressed,
      ]}
    >
      <View style={[optStyles.iconWrap, selected && optStyles.iconSelected]}>
        <Text style={{ fontSize: 18 }}>{icon}</Text>
      </View>
      <View style={{ flex: 1 }}>
        <Text style={[optStyles.label, selected && optStyles.labelSelected]}>{label}</Text>
        {desc ? <Text style={optStyles.desc}>{desc}</Text> : null}
      </View>
    </Pressable>
  );
}

const optStyles = StyleSheet.create({
  card: { flexDirection: 'row', alignItems: 'center', gap: 14, backgroundColor: colors.surface, borderWidth: 1.5, borderColor: colors.border, borderRadius: radius.md, padding: 14, marginBottom: 10 },
  selected: { borderColor: colors.accent, backgroundColor: `${colors.accent}10` },
  pressed: { opacity: 0.8 },
  iconWrap: { width: 36, height: 36, borderRadius: 10, backgroundColor: colors.surface2, alignItems: 'center', justifyContent: 'center' },
  iconSelected: { backgroundColor: colors.accent },
  label: { ...typography.body, fontFamily: 'DMSans_500Medium' },
  labelSelected: { color: colors.accent },
  desc: { ...typography.bodySmall, fontSize: 12, marginTop: 2 },
});

// ── MULTI CHIP ──
export function MultiChip({ label, selected, onPress, accentColor }) {
  const ac = accentColor || colors.accent;
  return (
    <Pressable
      onPress={onPress}
      style={[chipStyles.chip, selected && { borderColor: ac, backgroundColor: `${ac}15` }]}
    >
      <Text style={[chipStyles.label, selected && { color: ac }]}>{label}</Text>
    </Pressable>
  );
}

const chipStyles = StyleSheet.create({
  chip: { paddingHorizontal: 14, paddingVertical: 8, borderRadius: radius.full, borderWidth: 1.5, borderColor: colors.border, backgroundColor: colors.surface, marginRight: 8, marginBottom: 8 },
  label: { ...typography.bodySmall, color: colors.text2, fontFamily: 'DMSans_500Medium' },
});

// ── CTA BUTTON ──
export function CTAButton({ label, onPress, disabled, secondary, accentColor, style }) {
  const ac = accentColor || colors.accent;
  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      style={({ pressed }) => [
        btnStyles.btn,
        secondary ? { backgroundColor: 'transparent', borderWidth: 1.5, borderColor: colors.border } : { backgroundColor: ac },
        disabled && btnStyles.disabled,
        pressed && !disabled && { opacity: 0.85 },
        style,
      ]}
    >
      <Text style={[btnStyles.label, secondary && { color: colors.text2 }]}>{label}</Text>
    </Pressable>
  );
}

const btnStyles = StyleSheet.create({
  btn: { width: '100%', paddingVertical: 16, borderRadius: radius.md, alignItems: 'center', justifyContent: 'center' },
  label: { fontFamily: 'Syne_700Bold', fontSize: 15, color: colors.bg, letterSpacing: 0.3 },
  disabled: { opacity: 0.3 },
});

// ── EXERCISE CARD ──
export function ExerciseCard({ name, sets, desc, icon, link, onLinkPress }) {
  return (
    <View style={exStyles.card}>
      <View style={exStyles.thumb}>
        <Text style={{ fontSize: 22 }}>{icon}</Text>
      </View>
      <View style={{ flex: 1 }}>
        <Text style={exStyles.name}>{name}</Text>
        <Text style={exStyles.sets}>{sets}</Text>
        <Text style={exStyles.desc}>{desc}</Text>
        <Pressable onPress={() => onLinkPress(link)} style={exStyles.linkBtn}>
          <Text style={exStyles.linkText}>▶ Watch Video</Text>
        </Pressable>
      </View>
    </View>
  );
}

const exStyles = StyleSheet.create({
  card: { flexDirection: 'row', gap: 12, backgroundColor: colors.surface, borderWidth: 1.5, borderColor: colors.border, borderRadius: radius.md, padding: 13, marginBottom: 10 },
  thumb: { width: 56, height: 42, borderRadius: 8, backgroundColor: colors.surface2, alignItems: 'center', justifyContent: 'center', borderWidth: 1, borderColor: colors.border },
  name: { fontFamily: 'DMSans_500Medium', fontSize: 14, color: colors.text, marginBottom: 2 },
  sets: { ...typography.bodySmall, fontSize: 12, color: colors.text2, marginBottom: 3 },
  desc: { ...typography.bodySmall, fontSize: 11, color: colors.text3, marginBottom: 6, lineHeight: 16 },
  linkBtn: { alignSelf: 'flex-start', backgroundColor: `${colors.accent}12`, borderWidth: 1, borderColor: `${colors.accent}30`, paddingHorizontal: 10, paddingVertical: 4, borderRadius: radius.full },
  linkText: { color: colors.accent, fontSize: 12, fontFamily: 'DMSans_500Medium' },
});

// ── DIAGNOSIS CARD ──
export function DiagnosisCard({ rank, name, prob, desc, isTop, probColor }) {
  const pc = probColor || colors.accent;
  return (
    <View style={[dStyles.card, isTop && dStyles.topCard]}>
      {isTop && (
        <View style={dStyles.badge}>
          <Text style={dStyles.badgeText}>MOST LIKELY</Text>
        </View>
      )}
      <View style={{ flexDirection: 'row', alignItems: 'flex-start', gap: 11, marginBottom: 8 }}>
        <View style={[dStyles.rank, { backgroundColor: `${pc}20` }]}>
          <Text style={[dStyles.rankText, { color: pc }]}>{rank}</Text>
        </View>
        <View style={{ flex: 1 }}>
          <Text style={dStyles.name}>{name}</Text>
          <Text style={dStyles.prob}>{prob}% probability match</Text>
        </View>
      </View>
      <View style={dStyles.probBar}>
        <View style={[dStyles.probFill, { width: `${prob}%`, backgroundColor: pc }]} />
      </View>
      <Text style={dStyles.desc}>{desc}</Text>
    </View>
  );
}

const dStyles = StyleSheet.create({
  card: { backgroundColor: colors.surface, borderWidth: 1.5, borderColor: colors.border, borderRadius: radius.md, padding: 15, marginBottom: 10 },
  topCard: { borderColor: colors.accent },
  badge: { position: 'absolute', top: 10, right: 10, backgroundColor: `${colors.accent}18`, paddingHorizontal: 8, paddingVertical: 3, borderRadius: radius.full },
  badgeText: { color: colors.accent, fontSize: 9, fontFamily: 'DMSans_700Bold', letterSpacing: 1.5 },
  rank: { width: 28, height: 28, borderRadius: 8, alignItems: 'center', justifyContent: 'center' },
  rankText: { fontFamily: 'Syne_700Bold', fontSize: 14 },
  name: { fontFamily: 'Syne_600SemiBold', fontSize: 15, color: colors.text, lineHeight: 20 },
  prob: { ...typography.bodySmall, fontSize: 12, marginTop: 2 },
  probBar: { height: 4, backgroundColor: colors.surface2, borderRadius: 2, overflow: 'hidden', marginBottom: 8 },
  probFill: { height: 4, borderRadius: 2 },
  desc: { ...typography.bodySmall, lineHeight: 20 },
});

// ── SCREEN WRAPPER ──
export function Screen({ children, style }) {
  return (
    <View style={[screenStyles.screen, style]}>
      {children}
    </View>
  );
}

const screenStyles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: colors.bg },
});

// ── SECTION DIVIDER ──
export function Divider({ style }) {
  return <View style={[{ height: 1, backgroundColor: colors.border, marginVertical: 16 }, style]} />;
}

// ── INSIGHT BOX ──
export function InsightBox({ text }) {
  return (
    <View style={insightStyles.box}>
      <Text style={insightStyles.title}>💡 Clinical Insight</Text>
      <Text style={insightStyles.text}>{text}</Text>
    </View>
  );
}

const insightStyles = StyleSheet.create({
  box: { backgroundColor: `${colors.accent}08`, borderWidth: 1, borderColor: `${colors.accent}25`, borderRadius: radius.md, padding: 14, marginTop: 12 },
  title: { color: colors.accent, fontFamily: 'DMSans_700Bold', fontSize: 11, letterSpacing: 1, textTransform: 'uppercase', marginBottom: 6 },
  text: { ...typography.bodySmall, lineHeight: 20 },
});

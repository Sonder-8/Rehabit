import React from 'react';
import { View, Text, StyleSheet, ScrollView, StatusBar } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { colors, spacing, radius, typography } from '../theme';
import { CTAButton } from '../components';

const features = [
  { icon: '🗺️', title: 'Visual Body Map', desc: 'Tap exactly where it hurts on an anatomical map' },
  { icon: '🧠', title: 'Smart Triage', desc: 'Questions that adapt to your injury — under 3 mins' },
  { icon: '🏃', title: 'Recovery Plan', desc: 'Phase-by-phase exercises with video guides' },
];

export default function SplashScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <LinearGradient
        colors={['#0a0a0f', '#0d0d18', '#0a0a0f']}
        style={StyleSheet.absoluteFill}
      />
      <ScrollView contentContainerStyle={styles.scroll} showsVerticalScrollIndicator={false}>
        <View style={styles.hero}>
          <Text style={styles.logo}>rehabit</Text>
          <Text style={styles.tagline}>Know your injury. Start your recovery.</Text>
        </View>

        <View style={styles.features}>
          {features.map((f) => (
            <View key={f.title} style={styles.featureCard}>
              <View style={styles.featureIcon}>
                <Text style={{ fontSize: 22 }}>{f.icon}</Text>
              </View>
              <View style={{ flex: 1 }}>
                <Text style={styles.featureTitle}>{f.title}</Text>
                <Text style={styles.featureDesc}>{f.desc}</Text>
              </View>
            </View>
          ))}
        </View>

        <CTAButton
          label="Start Assessment"
          onPress={() => navigation.navigate('Mode')}
        />

        <Text style={styles.disclaimer}>
          For guidance only — not a clinical diagnosis.{'\n'}
          Always consult a physiotherapist for serious injuries.
        </Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.bg },
  scroll: { flexGrow: 1, justifyContent: 'center', padding: spacing.lg, paddingVertical: spacing.xxl },
  hero: { alignItems: 'center', marginBottom: spacing.xxl },
  logo: { fontFamily: 'Syne_800ExtraBold', fontSize: 52, color: colors.accent, letterSpacing: -2, marginBottom: 8 },
  tagline: { ...typography.body, color: colors.text2, textAlign: 'center', fontFamily: 'DMSans_300Light' },
  features: { gap: 12, marginBottom: spacing.xl },
  featureCard: { flexDirection: 'row', alignItems: 'center', gap: 14, backgroundColor: colors.surface, borderWidth: 1, borderColor: colors.border, borderRadius: radius.md, padding: 14 },
  featureIcon: { width: 42, height: 42, backgroundColor: colors.surface2, borderRadius: 10, alignItems: 'center', justifyContent: 'center', flexShrink: 0 },
  featureTitle: { fontFamily: 'DMSans_500Medium', fontSize: 14, color: colors.text, marginBottom: 2 },
  featureDesc: { ...typography.bodySmall, fontSize: 12 },
  disclaimer: { ...typography.bodySmall, fontSize: 11, color: colors.text3, textAlign: 'center', marginTop: spacing.md, lineHeight: 18 },
});

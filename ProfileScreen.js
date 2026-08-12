import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, StatusBar } from 'react-native';
import { colors, spacing, radius, typography } from '../theme';
import { Tag, CTAButton, ProgressBar, OptionCard, MultiChip, Divider } from '../components';

const activityLevels = [
  { id: 'recreational', icon: '🎯', label: 'Recreational', desc: 'Gym, weekend sport, casual fitness' },
  { id: 'competitive', icon: '🏅', label: 'Competitive Amateur', desc: 'Regular training, club or league level' },
  { id: 'professional', icon: '⚡', label: 'Professional / Elite', desc: 'Full-time athlete or coach' },
];

const sports = ['Football', 'Cricket', 'Gym / Lifting', 'Running', 'Badminton', 'Swimming', 'Tennis', 'Cycling', 'Other'];

export default function ProfileScreen({ navigation, route }) {
  const { mode } = route.params;
  const [activity, setActivity] = useState(null);
  const [selectedSports, setSelectedSports] = useState([]);

  const toggleSport = (s) => {
    setSelectedSports(prev => prev.includes(s) ? prev.filter(x => x !== s) : [...prev, s]);
  };

  const canContinue = activity && selectedSports.length > 0;
  const nextScreen = mode === 'injury' ? 'History' : 'BodyMap';

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <ProgressBar current={2} total={8} />
      <ScrollView contentContainerStyle={styles.scroll} showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Text style={styles.backBtn} onPress={() => navigation.goBack()}>← Back</Text>
          <Text style={styles.step}>Step 2 of 8</Text>
        </View>

        <Tag label="Profile" />
        <Text style={styles.title}>Quick <Text style={{ color: colors.accent }}>profile</Text></Text>
        <Text style={styles.sub}>Saves to your account. Personalises everything.</Text>

        <Text style={styles.sectionTitle}>Activity level</Text>
        {activityLevels.map((a) => (
          <OptionCard
            key={a.id}
            icon={a.icon}
            label={a.label}
            desc={a.desc}
            selected={activity === a.id}
            onPress={() => setActivity(a.id)}
          />
        ))}

        <Divider />

        <Text style={styles.sectionTitle}>Primary sport or activity</Text>
        <View style={styles.chipWrap}>
          {sports.map((s) => (
            <MultiChip
              key={s}
              label={s}
              selected={selectedSports.includes(s)}
              onPress={() => toggleSport(s)}
            />
          ))}
        </View>

        <View style={styles.btnWrap}>
          <CTAButton
            label="Continue"
            disabled={!canContinue}
            onPress={() => navigation.navigate(nextScreen, { mode, activity, sports: selectedSports })}
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
  sectionTitle: { fontFamily: 'Syne_600SemiBold', fontSize: 15, color: colors.text, marginBottom: 12 },
  chipWrap: { flexDirection: 'row', flexWrap: 'wrap' },
  btnWrap: { marginTop: spacing.xl, paddingTop: spacing.md },
});

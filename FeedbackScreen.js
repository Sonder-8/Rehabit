import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput, StatusBar } from 'react-native';
import { colors, spacing, radius, typography } from '../theme';
import { Tag, CTAButton, ProgressBar } from '../components';

export default function FeedbackScreen({ navigation, route }) {
  const params = route.params;
  const [feedback, setFeedback] = useState('');

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <ScrollView contentContainerStyle={styles.scroll} showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Text style={styles.backBtn} onPress={() => navigation.goBack()}>← Back</Text>
          <Text style={styles.logo}>rehabit</Text>
        </View>

        <Tag label="Feedback" />
        <Text style={styles.title}>How did this <Text style={{ color: colors.accent }}>feel</Text>?</Text>
        <Text style={styles.sub}>
          Be honest — this is what helps us improve the diagnosis and the app.
          Anything at all: confusing questions, wrong diagnosis, missing exercises, whatever stood out.
        </Text>

        <TextInput
          style={styles.textarea}
          placeholder="e.g. The hamstring questions were spot on, but I wish it asked about my warm-up routine too. The diagnosis felt about 80% right..."
          placeholderTextColor={colors.text3}
          value={feedback}
          onChangeText={setFeedback}
          multiline
          numberOfLines={6}
          textAlignVertical="top"
        />

        <View style={styles.btnWrap}>
          <CTAButton
            label="Submit Feedback"
            onPress={() => navigation.navigate('Summary', { ...params, feedback })}
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
  sub: { ...typography.bodySmall, marginBottom: 20, lineHeight: 20 },
  textarea: { backgroundColor: colors.surface, borderWidth: 1.5, borderColor: colors.border, borderRadius: radius.md, padding: 14, color: colors.text, fontFamily: 'DMSans_400Regular', fontSize: 14, minHeight: 140, marginBottom: 20 },
  btnWrap: { marginTop: 'auto', paddingTop: spacing.sm },
});

import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Pressable, StatusBar } from 'react-native';
import { colors, spacing, radius, typography } from '../theme';
import { Tag, CTAButton, ProgressBar, MultiChip, InsightBox, Divider } from '../components';
import { getQuestionBank } from '../data/questionBanks';

export default function QuestionnaireScreen({ navigation, route }) {
  const params = route.params;
  const { mode, primaryRegion } = params;
  const isStrengthen = mode === 'strengthen';
  const isReturning = mode === 'returning';
  const accentColor = isStrengthen ? colors.accent4 : isReturning ? colors.accent3 : colors.accent;

  const bank = getQuestionBank(primaryRegion?.id, mode);
  const [answers, setAnswers] = useState({});
  const [shownInsights, setShownInsights] = useState({});

  const setAnswer = (qId, value, type) => {
    setAnswers(prev => {
      if (type === 'single') return { ...prev, [qId]: value };
      const current = prev[qId] || [];
      const updated = current.includes(value)
        ? current.filter(v => v !== value)
        : [...current, value];
      return { ...prev, [qId]: updated };
    });
  };

  const isSelected = (qId, opt, type) => {
    if (type === 'single') return answers[qId] === opt;
    return (answers[qId] || []).includes(opt);
  };

  const handleChipPress = (q, opt) => {
    setAnswer(q.id, opt, q.type);
    if (q.insight && q.insight.trigger === opt) {
      setShownInsights(prev => ({ ...prev, [q.id]: !prev[q.id] }));
    }
  };

  const tagLabel = isReturning ? 'Progression Assessment' : bank.label + (isStrengthen ? ' Strength Plan' : ' Triage');
  const titleMain = isReturning ? 'Your Recovery Status' : isStrengthen ? `Building your ${bank.label} plan` : `About your ${bank.label}`;
  const sub = isReturning
    ? "Tell us where you are in your recovery — we'll show you the right next phase."
    : isStrengthen ? 'Tell us about your goals and training access.'
    : 'Answer what applies. More detail = better diagnosis.';

  const nextScreen = mode === 'injury' ? 'RedFlags' : 'Results';

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <ProgressBar current={6} total={8} />
      <ScrollView contentContainerStyle={styles.scroll} showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Text style={styles.backBtn} onPress={() => navigation.goBack()}>← Back</Text>
          <Text style={styles.step}>Step 6 of 8</Text>
        </View>

        <Tag label={tagLabel} color={accentColor} />
        <Text style={styles.title}>{titleMain}</Text>
        <Text style={styles.sub}>{sub}</Text>

        {bank.questions.map((q, i) => (
          <View key={q.id}>
            <View style={styles.qBlock}>
              <View style={styles.qLabel}>
                <View style={[styles.qNum, { backgroundColor: accentColor }]}>
                  <Text style={styles.qNumText}>{i + 1}</Text>
                </View>
                <Text style={styles.qText}>{q.text}</Text>
              </View>

              <View style={styles.chips}>
                {q.options.map(opt => (
                  <MultiChip
                    key={opt}
                    label={opt}
                    selected={isSelected(q.id, opt, q.type)}
                    onPress={() => handleChipPress(q, opt)}
                    accentColor={accentColor}
                  />
                ))}
              </View>

              {shownInsights[q.id] && q.insight && (
                <InsightBox text={q.insight.text} />
              )}
            </View>
            {i < bank.questions.length - 1 && <Divider />}
          </View>
        ))}

        <View style={styles.btnWrap}>
          <CTAButton
            label={isStrengthen || isReturning ? 'Continue to Results' : 'Continue'}
            accentColor={accentColor}
            onPress={() => navigation.navigate(nextScreen, { ...params, answers })}
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
  qBlock: { marginBottom: 4 },
  qLabel: { flexDirection: 'row', alignItems: 'flex-start', gap: 10, marginBottom: 12 },
  qNum: { width: 24, height: 24, borderRadius: 6, alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 1 },
  qNumText: { fontFamily: 'DMSans_700Bold', fontSize: 12, color: colors.bg },
  qText: { flex: 1, fontFamily: 'DMSans_500Medium', fontSize: 14, color: colors.text, lineHeight: 20 },
  chips: { flexDirection: 'row', flexWrap: 'wrap', paddingLeft: 34 },
  btnWrap: { marginTop: spacing.xl, paddingTop: spacing.sm },
});

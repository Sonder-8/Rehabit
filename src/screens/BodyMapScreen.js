import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Pressable, StatusBar } from 'react-native';
import Svg, { Path, Ellipse, Rect, Text as SvgText, Circle } from 'react-native-svg';
import { colors, spacing, radius, typography } from '../theme';
import { Tag, CTAButton, ProgressBar } from '../components';

const ACCENT = colors.accent;
const ACCENT4 = colors.accent4;

// Body regions with id, name, and SVG shape info
const FRONT_REGIONS = [
  { id: 'head', name: 'Head / Neck', shape: 'ellipse', cx: 100, cy: 28, rx: 21, ry: 24 },
  { id: 'shoulder-l', name: 'Left Shoulder', shape: 'ellipse', cx: 59, cy: 74, rx: 13, ry: 13 },
  { id: 'shoulder-r', name: 'Right Shoulder', shape: 'ellipse', cx: 141, cy: 74, rx: 13, ry: 13 },
  { id: 'chest-l', name: 'Left Chest', shape: 'path', d: 'M72,62 Q65,60 62,74 Q60,88 73,90 Q82,91 84,78 Z' },
  { id: 'chest-r', name: 'Right Chest', shape: 'path', d: 'M128,62 Q135,60 138,74 Q140,88 127,90 Q118,91 116,78 Z' },
  { id: 'elbow-l', name: 'Left Elbow', shape: 'ellipse', cx: 38, cy: 138, rx: 10, ry: 10 },
  { id: 'elbow-r', name: 'Right Elbow', shape: 'ellipse', cx: 162, cy: 138, rx: 10, ry: 10 },
  { id: 'wrist-l', name: 'Left Wrist', shape: 'ellipse', cx: 38, cy: 192, rx: 10, ry: 8 },
  { id: 'wrist-r', name: 'Right Wrist', shape: 'ellipse', cx: 162, cy: 192, rx: 10, ry: 8 },
  { id: 'abs', name: 'Abdomen', shape: 'rect', x: 84, y: 91, width: 32, height: 42, rx: 6 },
  { id: 'hip-l', name: 'Left Hip / Groin', shape: 'path', d: 'M72,132 Q58,132 55,148 Q53,165 68,168 Q80,170 84,158 Q86,145 80,133 Z' },
  { id: 'hip-r', name: 'Right Hip / Groin', shape: 'path', d: 'M128,132 Q142,132 145,148 Q147,165 132,168 Q120,170 116,158 Q114,145 120,133 Z' },
  { id: 'groin-l', name: 'Left Adductor / Inner Groin', shape: 'path', d: 'M84,158 Q82,168 80,182 Q82,192 90,192 Q96,192 97,182 Q98,168 96,158 Q90,154 84,158 Z' },
  { id: 'groin-r', name: 'Right Adductor / Inner Groin', shape: 'path', d: 'M116,158 Q118,168 120,182 Q118,192 110,192 Q104,192 103,182 Q102,168 104,158 Q110,154 116,158 Z' },
  { id: 'quad-l', name: 'Left Quad', shape: 'rect', x: 72, y: 164, width: 27, height: 56, rx: 8 },
  { id: 'quad-r', name: 'Right Quad', shape: 'rect', x: 101, y: 164, width: 27, height: 56, rx: 8 },
  { id: 'knee-l', name: 'Left Knee', shape: 'ellipse', cx: 83, cy: 232, rx: 14, ry: 11 },
  { id: 'knee-r', name: 'Right Knee', shape: 'ellipse', cx: 117, cy: 232, rx: 14, ry: 11 },
  { id: 'shin-l', name: 'Left Shin', shape: 'rect', x: 72, y: 245, width: 23, height: 54, rx: 8 },
  { id: 'shin-r', name: 'Right Shin', shape: 'rect', x: 105, y: 245, width: 23, height: 54, rx: 8 },
  { id: 'foot-l', name: 'Left Ankle/Foot', shape: 'path', d: 'M70,301 Q66,310 68,320 Q70,328 84,328 Q91,328 93,322 Q95,312 93,301 Z' },
  { id: 'foot-r', name: 'Right Ankle/Foot', shape: 'path', d: 'M107,301 Q103,310 105,320 Q107,328 121,328 Q128,328 130,322 Q132,312 130,301 Z' },
  { id: 'bicep-l', name: 'Left Bicep', shape: 'rect', x: 38, y: 86, width: 16, height: 38, rx: 6 },
  { id: 'bicep-r', name: 'Right Bicep', shape: 'rect', x: 146, y: 86, width: 16, height: 38, rx: 6 },
  { id: 'forearm-l', name: 'Left Forearm', shape: 'rect', x: 30, y: 150, width: 16, height: 36, rx: 6 },
  { id: 'forearm-r', name: 'Right Forearm', shape: 'rect', x: 154, y: 150, width: 16, height: 36, rx: 6 },
];

const BACK_REGIONS = [
  { id: 'head', name: 'Head / Neck', shape: 'ellipse', cx: 100, cy: 28, rx: 21, ry: 24 },
  { id: 'shoulder-l', name: 'Left Shoulder', shape: 'ellipse', cx: 59, cy: 74, rx: 13, ry: 13 },
  { id: 'shoulder-r', name: 'Right Shoulder', shape: 'ellipse', cx: 141, cy: 74, rx: 13, ry: 13 },
  { id: 'upper-back', name: 'Upper Back / Trapezius', shape: 'path', d: 'M72,62 Q100,54 128,62 Q134,74 128,92 Q100,98 72,92 Q66,74 72,62 Z' },
  { id: 'rhomboids', name: 'Rhomboids', shape: 'path', d: 'M84,94 Q100,90 116,94 Q120,104 116,114 Q100,118 84,114 Q80,104 84,94 Z' },
  { id: 'lower-back', name: 'Lower Back', shape: 'rect', x: 83, y: 116, width: 34, height: 32, rx: 6 },
  { id: 'glute-l', name: 'Left Glute', shape: 'path', d: 'M78,150 Q66,148 63,163 Q61,178 78,178 Q90,178 90,163 Z' },
  { id: 'glute-r', name: 'Right Glute', shape: 'path', d: 'M122,150 Q134,148 137,163 Q139,178 122,178 Q110,178 110,163 Z' },
  { id: 'hamstring-l', name: 'Left Hamstring', shape: 'rect', x: 72, y: 180, width: 27, height: 54, rx: 8 },
  { id: 'hamstring-r', name: 'Right Hamstring', shape: 'rect', x: 101, y: 180, width: 27, height: 54, rx: 8 },
  { id: 'knee-l', name: 'Left Knee', shape: 'ellipse', cx: 83, cy: 246, rx: 14, ry: 11 },
  { id: 'knee-r', name: 'Right Knee', shape: 'ellipse', cx: 117, cy: 246, rx: 14, ry: 11 },
  { id: 'calf-l', name: 'Left Calf', shape: 'rect', x: 72, y: 259, width: 23, height: 52, rx: 8 },
  { id: 'calf-r', name: 'Right Calf', shape: 'rect', x: 105, y: 259, width: 23, height: 52, rx: 8 },
  { id: 'elbow-l', name: 'Left Elbow', shape: 'ellipse', cx: 38, cy: 138, rx: 10, ry: 10 },
  { id: 'elbow-r', name: 'Right Elbow', shape: 'ellipse', cx: 162, cy: 138, rx: 10, ry: 10 },
  { id: 'wrist-l', name: 'Left Wrist', shape: 'ellipse', cx: 38, cy: 192, rx: 10, ry: 8 },
  { id: 'wrist-r', name: 'Right Wrist', shape: 'ellipse', cx: 162, cy: 192, rx: 10, ry: 8 },
  { id: 'tricep-l', name: 'Left Tricep', shape: 'rect', x: 38, y: 86, width: 16, height: 38, rx: 6 },
  { id: 'tricep-r', name: 'Right Tricep', shape: 'rect', x: 146, y: 86, width: 16, height: 40, rx: 6 },
];

function BodyRegion({ region, selected, mode, onPress }) {
  const isStrengthen = mode === 'strengthen';
  const fill = selected
    ? isStrengthen ? `${ACCENT4}55` : `${ACCENT}55`
    : '#1e2035';
  const stroke = selected
    ? isStrengthen ? ACCENT4 : ACCENT
    : '#3a3a5a';
  const strokeWidth = selected ? 2 : 1;

  const props = { fill, stroke, strokeWidth, onPress };

  if (region.shape === 'ellipse') return <Ellipse cx={region.cx} cy={region.cy} rx={region.rx} ry={region.ry} {...props} />;
  if (region.shape === 'rect') return <Rect x={region.x} y={region.y} width={region.width} height={region.height} rx={region.rx} {...props} />;
  return <Path d={region.d} {...props} />;
}

export default function BodyMapScreen({ navigation, route }) {
  const params = route.params;
  const { mode } = params;
  const isStrengthen = mode === 'strengthen';
  const isReturning = mode === 'returning';
  const [view, setView] = useState('front');
  const [selectedRegions, setSelectedRegions] = useState({});

  const toggleRegion = (id, name) => {
    setSelectedRegions(prev => {
      const next = { ...prev };
      if (next[id]) delete next[id];
      else next[id] = { name, intensity: 'moderate' };
      return next;
    });
  };

  const selectedCount = Object.keys(selectedRegions).length;
  const regions = view === 'front' ? FRONT_REGIONS : BACK_REGIONS;
  const accentColor = isStrengthen ? ACCENT4 : ACCENT;

  const title = isStrengthen
    ? 'Which muscles do you want to strengthen?'
    : isReturning ? 'Which area was injured?'
    : 'Where does it hurt?';

  const sub = isStrengthen
    ? 'Tap all muscles you want to work on.'
    : isReturning ? 'Select your injured area to build your progression plan.'
    : 'Tap all painful areas. You\'ll pick your primary injury next.';

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <ProgressBar current={4} total={8} />
      <ScrollView contentContainerStyle={styles.scroll} showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Text style={styles.backBtn} onPress={() => navigation.goBack()}>← Back</Text>
          <Text style={styles.step}>Step 4 of 8</Text>
        </View>

        <Tag label={isStrengthen ? 'Muscle Selection' : isReturning ? 'Affected Area' : 'Body Map'} color={accentColor} />
        <Text style={styles.title}>{title.split(' ').map((word, i) => {
          const accent = ['hurt?', 'strengthen?', 'injured?'].includes(word);
          return <Text key={i} style={accent ? { color: accentColor } : {}}>{word} </Text>;
        })}</Text>
        <Text style={styles.sub}>{sub}</Text>

        {/* View toggle */}
        <View style={styles.toggle}>
          {['front', 'back'].map(v => (
            <Pressable
              key={v}
              onPress={() => setView(v)}
              style={[styles.toggleBtn, view === v && { backgroundColor: accentColor }]}
            >
              <Text style={[styles.toggleText, view === v && { color: colors.bg }]}>
                {v.charAt(0).toUpperCase() + v.slice(1)}
              </Text>
            </Pressable>
          ))}
        </View>

        {/* Body SVG */}
        <View style={styles.svgWrap}>
          <Svg viewBox="0 0 200 400" width="100%" height={380}>
            {regions.map(region => (
              <BodyRegion
                key={region.id}
                region={region}
                selected={!!selectedRegions[region.id]}
                mode={mode}
                onPress={() => toggleRegion(region.id, region.name)}
              />
            ))}
          </Svg>
        </View>

        <Text style={styles.mapHint}>
          {selectedCount === 0
            ? '👆 Tap a muscle or region to select it'
            : `${selectedCount} area${selectedCount > 1 ? 's' : ''} selected — tap again to deselect`}
        </Text>

        {/* Selected chips */}
        {Object.entries(selectedRegions).map(([id, data]) => (
          <View key={id} style={[styles.selChip, { borderColor: accentColor }]}>
            <Text style={[styles.selChipName, { color: accentColor }]}>{data.name}</Text>
            <Pressable onPress={() => toggleRegion(id, data.name)}>
              <Text style={{ color: colors.text3, fontSize: 18, lineHeight: 20 }}>×</Text>
            </Pressable>
          </View>
        ))}

        <View style={styles.btnWrap}>
          <CTAButton
            label="Continue"
            disabled={selectedCount === 0}
            accentColor={accentColor}
            onPress={() => navigation.navigate('PrimaryPicker', { ...params, selectedRegions })}
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
  toggle: { flexDirection: 'row', backgroundColor: colors.surface, borderRadius: radius.full, padding: 4, gap: 4, borderWidth: 1, borderColor: colors.border, alignSelf: 'center', marginBottom: 16 },
  toggleBtn: { paddingHorizontal: 24, paddingVertical: 8, borderRadius: radius.full },
  toggleText: { fontFamily: 'DMSans_500Medium', fontSize: 13, color: colors.text2 },
  svgWrap: { width: '100%', maxWidth: 260, alignSelf: 'center', marginBottom: 12 },
  mapHint: { ...typography.bodySmall, textAlign: 'center', backgroundColor: colors.surface, borderWidth: 1, borderColor: colors.border, borderRadius: radius.sm, padding: 12, marginBottom: 12 },
  selChip: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor: colors.surface, borderWidth: 1, borderRadius: radius.sm, padding: 10, paddingHorizontal: 14, marginBottom: 8 },
  selChipName: { fontFamily: 'DMSans_500Medium', fontSize: 14 },
  btnWrap: { marginTop: spacing.lg, paddingTop: spacing.sm },
});

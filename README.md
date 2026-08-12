# Rehabit — AI-Powered Injury Assessment & Rehabilitation App

A React Native / Expo app for injury triage, diagnosis, and recovery planning.

## Tech Stack
- Expo (managed workflow) ~51
- React Native 0.74
- React Navigation (stack)
- react-native-svg (body map)
- expo-linear-gradient
- @expo-google-fonts/dm-sans + syne

## Setup

### 1. Clone and install
```bash
git clone https://github.com/YOUR_USERNAME/rehabit.git
cd rehabit
npm install
```

### 2. Run on iOS (Mac + Xcode required)
```bash
npx expo start --ios
```

### 3. Run on Android
```bash
npx expo start --android
```

### 4. Run with Expo Go (fastest for testing)
```bash
npx expo start
```
Then scan the QR code with the Expo Go app on your phone.

## Project Structure
```
rehabit/
├── App.js                    ← Entry point + navigation
├── src/
│   ├── theme.js              ← Colours, typography, spacing
│   ├── data/
│   │   ├── questionBanks.js  ← All question banks (injury, strengthen, returning)
│   │   ├── diagnosisEngine.js← Diagnosis logic
│   │   └── rehabPlans.js     ← Recovery protocols with video links
│   ├── screens/              ← 12 screens
│   └── components/           ← Reusable UI components
```

## User Flows
- **Injured** → Profile → History → Body Map → Primary Picker → Questionnaire → Red Flags → Results → Recovery Plan → Feedback → Summary
- **Strengthen** → Profile → Body Map → Primary Picker → Questionnaire → Results → Recovery Plan
- **Returning from Injury** → Profile → Body Map → Primary Picker → Questionnaire → Results → Recovery Plan

## Adding to GitHub
```bash
git init
git add .
git commit -m "Initial Rehabit React Native project"
git remote add origin https://github.com/YOUR_USERNAME/rehabit.git
git push -u origin main
```

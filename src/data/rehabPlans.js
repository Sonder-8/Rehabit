export const REHAB_PLANS = {
  'hamstring-strain': {
    title: 'Hamstring Strain',
    insight: 'Based on your answers, the key gaps are likely lack of eccentric loading (Nordic curls, RDLs) and returning too quickly. This plan specifically addresses those gaps.',
    phases: [
      {
        label: 'Phase 1', badge: 'phase1', title: 'Pain Relief & Tissue Protection (Week 1–2)',
        exercises: [
          { name: 'Isometric Hamstring Holds', sets: '5 × 10 sec holds, 3× daily', icon: '🦵', link: 'https://www.youtube.com/watch?v=sMv1JFzCy_c', desc: 'Pain-free isometric to maintain neural drive without stressing the tear.' },
          { name: 'Prone Hamstring Curl (Bodyweight)', sets: '10 reps × 2 sets', icon: '🔵', link: 'https://www.youtube.com/watch?v=WL9RQDXU_cY', desc: 'Pain-free range only.' },
          { name: 'Glute Bridge', sets: '15 reps × 3 sets', icon: '🍑', link: 'https://www.youtube.com/watch?v=wPM8icPu6H8', desc: 'Hip extension without hamstring strain.' },
        ]
      },
      {
        label: 'Phase 2', badge: 'phase2', title: 'Eccentric Loading — The Missing Link (Week 3–6)',
        exercises: [
          { name: 'Nordic Hamstring Curl', sets: '3 × 6 reps (progress to 3×10)', icon: '⚡', link: 'https://www.youtube.com/watch?v=d1NPDTMFqYs', desc: 'THE most critical hamstring rehab exercise. Proven to reduce re-injury risk by 50%+. Non-negotiable.' },
          { name: 'Romanian Deadlift', sets: '3 × 10 reps @ light load', icon: '🏋️', link: 'https://www.youtube.com/watch?v=7j-2w1J6Afo', desc: 'Full range eccentric hamstring loading. Start very light, increase weekly.' },
          { name: 'Hip Thrust', sets: '3 × 12 reps', icon: '🦴', link: 'https://www.youtube.com/watch?v=SEdqd1n0cvg', desc: 'Glute + hamstring co-activation. Builds the hip extension pattern needed for sprinting.' },
          { name: 'Single Leg RDL', sets: '3 × 8 each leg', icon: '⚖️', link: 'https://www.youtube.com/watch?v=1mMElnmLbhs', desc: 'Addresses left-right strength asymmetry — critical for recurrence prevention.' },
        ]
      },
      {
        label: 'Phase 3', badge: 'phase3', title: 'Sprint Progression — Return to Football (Week 6–10)',
        exercises: [
          { name: 'A-Skip & B-Skip Drills', sets: '3 × 20m each', icon: '🏃', link: 'https://www.youtube.com/watch?v=W1LkWMITbpQ', desc: 'Running mechanics drills before any sprint work. Do not skip this.' },
          { name: 'Progressive Sprint Protocol', sets: '60% → 70% → 80% → 90% → 100%', icon: '💨', link: 'https://www.youtube.com/watch?v=4rjBHdsDNMQ', desc: 'Each speed tier gets 2 sessions before progressing.' },
          { name: 'Resisted Sprint (Sled)', sets: '6 × 20m', icon: '🛷', link: 'https://www.youtube.com/watch?v=Q26GzSB08hk', desc: 'Loaded sprint to expose hamstring to match-specific eccentric forces.' },
          { name: 'Change of Direction Drills', sets: '4 × 30 sec', icon: '🔀', link: 'https://www.youtube.com/watch?v=a1sKqOtISmg', desc: 'Practice before match return.' },
        ]
      },
    ]
  },

  'lateral-epicondylopathy': {
    title: 'Lateral Epicondylopathy (Tennis Elbow)',
    insight: 'Your pattern — pain after smashes that resolves with rest then returns — is classic tendinopathy load cycling. Rest alone will not fix this. The tendon needs progressive loading to remodel.',
    phases: [
      {
        label: 'Phase 1', badge: 'phase1', title: 'Load Management & Pain Relief (Week 1–2)',
        exercises: [
          { name: 'Wrist Extensor Stretch', sets: '3 × 30 sec each arm', icon: '🖐️', link: 'https://www.youtube.com/watch?v=pjR_vNe7HT4', desc: 'Arm straight, palm down, gently pull hand downward.' },
          { name: 'Forearm Self-Massage', sets: '2 min each side daily', icon: '💆', link: 'https://www.youtube.com/watch?v=T_H3skW5OeU', desc: 'Deep pressure along the forearm toward the outer elbow.' },
        ]
      },
      {
        label: 'Phase 2', badge: 'phase2', title: 'Eccentric Wrist Loading (Week 3–6)',
        exercises: [
          { name: 'Tyler Twist (Therabar)', sets: '3 × 15 reps daily', icon: '🌀', link: 'https://www.youtube.com/watch?v=Q43W_PbGMgI', desc: 'Gold standard exercise — shown to resolve 80%+ of cases when done consistently.' },
          { name: 'Eccentric Wrist Extension', sets: '3 × 15 reps (slow lowering)', icon: '⚡', link: 'https://www.youtube.com/watch?v=t8vcXQvqQ3I', desc: 'Use opposite hand to lift, lower slowly with injured hand only.' },
          { name: 'Forearm Pronation / Supination', sets: '3 × 20 reps', icon: '🔄', link: 'https://www.youtube.com/watch?v=JUXs4KNGY08', desc: 'Restores the rotational movement loaded during smash.' },
        ]
      },
      {
        label: 'Phase 3', badge: 'phase3', title: 'Return to Badminton (Week 6–10)',
        exercises: [
          { name: 'Grip Strengthening', sets: '3 × 20 squeezes', icon: '✊', link: 'https://www.youtube.com/watch?v=LBhP_QwjxrM', desc: 'Progressive grip load before returning to racket.' },
          { name: 'Shadow Badminton (No Shuttle)', sets: '10 min — smash motion only', icon: '🏸', link: 'https://www.youtube.com/watch?v=7Ly7QfCERiM', desc: 'Practice smash mechanics without load. Technique check too.' },
          { name: 'Smash Progression', sets: '20 → 40 → 60 smashes per session', icon: '💥', link: 'https://www.youtube.com/watch?v=g6QLqgdOqyQ', desc: 'Stop if pain exceeds 3/10. Never play through pain.' },
        ]
      },
    ]
  },

  'lateral-ankle': {
    title: 'Lateral Ankle Sprain',
    insight: 'Ankle sprains are the most under-rehabbed injury in sport. Most people rest, feel better, and return without retraining proprioception — which is why recurrence rates are so high.',
    phases: [
      {
        label: 'Phase 1', badge: 'phase1', title: 'Pain Relief & Early Activation (Week 1–2)',
        exercises: [
          { name: 'Ankle Pumps', sets: '30 reps, 3–4× daily', icon: '🦶', link: 'https://www.youtube.com/watch?v=Ml7VxHWXl2o', desc: 'Point and flex the foot repeatedly. Reduces swelling, maintains circulation.' },
          { name: 'Towel Scrunches', sets: '3 × 30 reps daily', icon: '🧺', link: 'https://www.youtube.com/watch?v=R8vlQSjM6Q0', desc: 'Reactivates the small intrinsic foot muscles that get inhibited after a sprain.' },
          { name: 'Ankle Eversion with Theraband (Light)', sets: '3 × 15 reps', icon: '🎗️', link: 'https://www.youtube.com/watch?v=YqBkFhXTgfM', desc: 'Directly strengthens the peroneal muscles — the primary ankle stabilisers.' },
          { name: 'Calf Stretch', sets: '3 × 30 sec each', icon: '🧘', link: 'https://www.youtube.com/watch?v=g_tea8ZVlL8', desc: 'Calf tightness is the most common compensation pattern — address it early.' },
        ]
      },
      {
        label: 'Phase 2', badge: 'phase2', title: 'Lower-Limb Chain + Proprioception (Week 2–5)',
        exercises: [
          { name: 'IT Band / TFL Self-Release', sets: '60 sec each side', icon: '🔵', link: 'https://www.youtube.com/watch?v=R8vlQSjM6Q0', desc: 'IT band and TFL tightness commonly develops as compensation after ankle sprain.' },
          { name: 'Glute Activation (Clamshells)', sets: '3 × 20 reps each side', icon: '🦀', link: 'https://www.youtube.com/watch?v=5DUTiIgjbpM', desc: 'Reactivating the glutes improves load distribution up the entire chain.' },
          { name: 'Single Leg Balance', sets: '3 × 30 sec each leg', icon: '🧍', link: 'https://www.youtube.com/watch?v=JOlGp8JY-kM', desc: 'THE most important ankle rehab exercise. Retrains proprioception. Progress: eyes open → closed → unstable surface.' },
          { name: 'Eccentric Calf Raises', sets: '3 × 15 reps', icon: '💪', link: 'https://www.youtube.com/watch?v=gwLzBJYoWlI', desc: 'Rise on both feet, lower slowly on the injured foot only.' },
        ]
      },
      {
        label: 'Phase 3', badge: 'phase3', title: 'Reactive Stability + Return to Sport (Week 5–8)',
        exercises: [
          { name: 'Single Leg Hop & Stick', sets: '3 × 10 reps each', icon: '🦘', link: 'https://www.youtube.com/watch?v=ycRywgIH35Q', desc: 'Hop and land on one foot, hold the landing for 3 seconds. Trains reactive stability.' },
          { name: 'Lateral Shuffle Drills', sets: '4 × 20m', icon: '↔️', link: 'https://www.youtube.com/watch?v=HbMuRaFcuFc', desc: 'Retrains the ankle in the lateral loading pattern that caused the original sprain.' },
          { name: 'Figure-8 Running', sets: '5 × reps', icon: '🔄', link: 'https://www.youtube.com/watch?v=a1sKqOtISmg', desc: 'Tests multi-directional ankle stability before return to sport.' },
        ]
      },
    ]
  },

  'adductor-strain': {
    title: 'Adductor (Groin) Strain',
    insight: 'Adductor strains recur often when strengthening stops too early. The Copenhagen plank protocol is specifically proven to reduce re-injury risk in football and field sports.',
    phases: [
      {
        label: 'Phase 1', badge: 'phase1', title: 'Pain Relief & Protection (Week 1–2)',
        exercises: [
          { name: 'Isometric Adduction Squeeze', sets: '5 × 10 sec holds', icon: '🦵', link: 'https://www.youtube.com/watch?v=ekvT3pXxpDo', desc: 'Ball between knees, gentle squeeze. Pain-free isometric to maintain activation.' },
          { name: 'Gentle Adductor Stretch', sets: '3 × 30 sec', icon: '🧘', link: 'https://www.youtube.com/watch?v=lLk7ddPACkE', desc: 'Seated butterfly stretch, gentle only — never stretch into sharp pain.' },
        ]
      },
      {
        label: 'Phase 2', badge: 'phase2', title: 'Progressive Strengthening (Week 3–6)',
        exercises: [
          { name: 'Copenhagen Plank (Progression)', sets: '3 × 10–20 sec, build up', icon: '⚡', link: 'https://www.youtube.com/watch?v=4Yk6BSY8z3k', desc: 'Gold standard adductor exercise, proven to reduce groin injury risk significantly in field sports.' },
          { name: 'Standing Hip Adduction (Cable/Band)', sets: '3 × 15 each side', icon: '🎯', link: 'https://www.youtube.com/watch?v=daKtKCxYbVQ', desc: 'Direct adductor strengthening through full range.' },
          { name: 'Lateral Lunge', sets: '3 × 10 each side', icon: '↔️', link: 'https://www.youtube.com/watch?v=A2pyVjY-yyk', desc: 'Builds adductor strength in a sport-specific, multi-planar pattern.' },
        ]
      },
      {
        label: 'Phase 3', badge: 'phase3', title: 'Return to Sport (Week 6–8)',
        exercises: [
          { name: 'Change of Direction Drills', sets: '4 × 30 sec', icon: '🔀', link: 'https://www.youtube.com/watch?v=a1sKqOtISmg', desc: 'Progressive reintroduction of cutting and directional changes before full match return.' },
          { name: 'Progressive Kicking Drills', sets: 'Build up volume gradually', icon: '⚽', link: 'https://www.youtube.com/watch?v=g6QLqgdOqyQ', desc: 'Start with passing, build to full-power striking.' },
        ]
      },
    ]
  },

  'pfps': {
    title: 'Patellofemoral Pain / Plyometric Return',
    insight: 'Strength is present but impact tolerance lags. Your tissue needs progressive impact loading before sprint or sport return — this is the plyometric readiness gap.',
    phases: [
      {
        label: 'Phase 2', badge: 'phase2', title: 'Strength & VMO Activation',
        exercises: [
          { name: 'Terminal Knee Extension (Band)', sets: '15 reps × 3 sets', icon: '🎯', link: 'https://www.youtube.com/watch?v=pRMeOWQRiA0', desc: 'VMO activation and knee stability.' },
          { name: 'Step-Downs (Eccentric)', sets: '10 reps × 3 sets', icon: '🪜', link: 'https://www.youtube.com/watch?v=B3CuAFBvJLE', desc: 'Eccentric quad loading in a controlled range.' },
          { name: 'Clamshells (Banded)', sets: '20 reps × 3 sets', icon: '🦀', link: 'https://www.youtube.com/watch?v=5DUTiIgjbpM', desc: 'Hip abductor strengthening to reduce valgus collapse.' },
        ]
      },
      {
        label: 'Phase 3', badge: 'phase3', title: 'Plyometric Loading',
        exercises: [
          { name: 'Double-Leg Box Jump', sets: '3 × 8 reps', icon: '🦘', link: 'https://www.youtube.com/watch?v=52lowp_1x5E', desc: 'Start bilateral. Progress to single leg once strength is symmetric.' },
          { name: 'Nordic Hamstring Curl', sets: '6 reps × 3 sets', icon: '⚡', link: 'https://www.youtube.com/watch?v=d1NPDTMFqYs', desc: 'Balances quad-hamstring strength — critical to protect the knee.' },
        ]
      },
      {
        label: 'Phase 4', badge: 'phase3', title: 'Return to Sport',
        exercises: [
          { name: 'T-Agility Drill', sets: '5 × reps', icon: '🔀', link: 'https://www.youtube.com/watch?v=a1sKqOtISmg', desc: 'Multi-directional movement to re-expose the knee to sport-specific patterns.' },
          { name: 'Run-Walk Progression', sets: 'Progressive volume', icon: '🏃', link: 'https://www.youtube.com/watch?v=K4EQnGriGlI', desc: 'Never increase weekly volume >10% per week.' },
        ]
      },
    ]
  },

  'acl': {
    title: 'ACL Rehabilitation',
    insight: null,
    phases: [
      {
        label: 'Phase 1', badge: 'phase1', title: 'Swelling Control & Quad Activation',
        exercises: [
          { name: 'Quad Sets (Isometric)', sets: '10 × 10 sec, 3 sets', icon: '💪', link: 'https://www.youtube.com/watch?v=MYFiuCPCqaQ', desc: 'Push knee into bed. Critical to maintain quad activation after ACL.' },
          { name: 'Straight Leg Raises', sets: '15 × 3 sets', icon: '🦵', link: 'https://www.youtube.com/watch?v=ZZBKZGlq8es', desc: 'Quad strength without joint loading while swelling is present.' },
          { name: 'Heel Slides', sets: '15 × 3', icon: '🔵', link: 'https://www.youtube.com/watch?v=E2T8B_BVKQ4', desc: 'Restores knee flexion range of motion.' },
        ]
      },
      {
        label: 'Phase 2', badge: 'phase2', title: 'Strength & Stability',
        exercises: [
          { name: 'Terminal Knee Extension (Band)', sets: '15 × 3 sets', icon: '🎯', link: 'https://www.youtube.com/watch?v=pRMeOWQRiA0', desc: 'VMO activation and knee stability.' },
          { name: 'Nordic Hamstring Curl', sets: '6 × 3 sets', icon: '⚡', link: 'https://www.youtube.com/watch?v=d1NPDTMFqYs', desc: 'Balances quad-hamstring strength — critical to protect the ACL.' },
        ]
      },
      {
        label: 'Phase 3', badge: 'phase3', title: 'Return to Sport',
        exercises: [
          { name: 'Box Jump Progressions', sets: '3 × 8 reps', icon: '🦘', link: 'https://www.youtube.com/watch?v=52lowp_1x5E', desc: 'Bilateral to unilateral. Only when strength is symmetric.' },
          { name: 'T-Agility Drill', sets: '5 reps', icon: '🔀', link: 'https://www.youtube.com/watch?v=a1sKqOtISmg', desc: 'Multi-directional cutting patterns.' },
        ]
      },
    ]
  },

  'plantar-fasciitis': {
    title: 'Plantar Fasciitis',
    insight: 'The first-step morning pain pattern responds well to consistent calf and plantar fascia stretching — but it requires weeks of consistency, not days.',
    phases: [
      {
        label: 'Phase 1', badge: 'phase1', title: 'Pain Relief (Week 1–2)',
        exercises: [
          { name: 'Frozen Water Bottle Roll', sets: '5 min, 2× daily', icon: '🧊', link: 'https://www.youtube.com/watch?v=Y1KSlW9JIIM', desc: 'Roll the arch over a frozen water bottle. Reduces inflammation.' },
          { name: 'Plantar Fascia Stretch', sets: '3 × 30 sec', icon: '🦶', link: 'https://www.youtube.com/watch?v=jSXOtl925ZQ', desc: 'Pull toes back toward shin. Do this BEFORE getting out of bed in the morning.' },
          { name: 'Calf Stretch (Both Gastroc & Soleus)', sets: '3 × 30 sec each', icon: '🧘', link: 'https://www.youtube.com/watch?v=g_tea8ZVlL8', desc: 'Stretch both the straight-knee and bent-knee variations.' },
        ]
      },
      {
        label: 'Phase 2', badge: 'phase2', title: 'Strengthening (Week 3–6)',
        exercises: [
          { name: 'Towel Scrunches', sets: '3 × 20 reps', icon: '🦶', link: 'https://www.youtube.com/watch?v=R8vlQSjM6Q0', desc: 'Strengthens the small intrinsic foot muscles that support the arch.' },
          { name: 'Single Leg Calf Raise (Eccentric)', sets: '3 × 15 reps', icon: '💪', link: 'https://www.youtube.com/watch?v=gwLzBJYoWlI', desc: 'Builds calf and Achilles strength to reduce load on the plantar fascia.' },
        ]
      },
      {
        label: 'Phase 3', badge: 'phase3', title: 'Return to Activity',
        exercises: [
          { name: 'Graduated Return to Running', sets: 'Progressive volume increase', icon: '🏃', link: 'https://www.youtube.com/watch?v=K4EQnGriGlI', desc: 'Resume activity gradually. Consider supportive footwear or orthotics if symptoms persist.' },
        ]
      },
    ]
  },

  'upper-back-myofascial': {
    title: 'Thoracic Myofascial & Upper Back',
    insight: null,
    phases: [
      {
        label: 'Phase 1', badge: 'phase1', title: 'Pain Relief & Release (Week 1–2)',
        exercises: [
          { name: 'Upper Back Self-Release (Foam Roll)', sets: '2 min daily', icon: '🔵', link: 'https://www.youtube.com/watch?v=YEbq2TzXhQQ', desc: 'Foam roll mid-thoracic spine — hold on tender spots for 20–30s.' },
          { name: 'Trapezius Self-Massage (Tennis Ball)', sets: '45 sec each side', icon: '🟡', link: 'https://www.youtube.com/watch?v=T_H3skW5OeU', desc: 'Place ball between upper trap and wall, find trigger points.' },
        ]
      },
      {
        label: 'Phase 2', badge: 'phase2', title: 'Mobility & Scapular Activation',
        exercises: [
          { name: 'Scapular Retractions', sets: '12 reps × 2 sets, 2.5kg', icon: '💪', link: 'https://www.youtube.com/watch?v=UkKnHpGLJTo', desc: 'Squeeze shoulder blades together, hold 2s.' },
          { name: 'Sitting W Scapular Movement', sets: '12 reps × 2 sets', icon: '🔤', link: 'https://www.youtube.com/watch?v=cDmBuLSBGkw', desc: 'Form the letter W with arms. Activates lower trapezius and rhomboids.' },
        ]
      },
      {
        label: 'Phase 3', badge: 'phase3', title: 'Strength & Control',
        exercises: [
          { name: 'Face Pulls (Band / Cable)', sets: '15 reps × 3 sets', icon: '🎯', link: 'https://www.youtube.com/watch?v=rep-qVOkqgk', desc: 'Targets posterior deltoid, rhomboids, external rotators.' },
          { name: 'Band Pull-Aparts', sets: '20 reps × 3 sets', icon: '🏋️', link: 'https://www.youtube.com/watch?v=EbN_OB_qXPs', desc: 'Highly effective for scapular stability and posture correction.' },
        ]
      },
    ]
  },

  generic: {
    title: 'General Rehabilitation',
    insight: null,
    phases: [
      {
        label: 'Phase 1', badge: 'phase1', title: 'Pain Relief & Protection',
        exercises: [
          { name: 'Active Rest & Ice/Heat', sets: '10 min ice, 3× daily', icon: '🧊', link: 'https://www.youtube.com/watch?v=qeWzaFYnFsQ', desc: 'Ice for acute inflammation, heat for stiffness.' },
          { name: 'Gentle Range of Motion', sets: '2 × 10 reps, pain-free', icon: '🔄', link: 'https://www.youtube.com/watch?v=FsOfxOd8XAU', desc: 'Maintain movement without loading the injured structure.' },
        ]
      },
      {
        label: 'Phase 2', badge: 'phase2', title: 'Strength & Stability',
        exercises: [
          { name: 'Isometric Strengthening', sets: '5 × 10 sec, 3 sets', icon: '💪', link: 'https://www.youtube.com/watch?v=sMv1JFzCy_c', desc: 'Pain-free isometric contraction to build strength without movement stress.' },
          { name: 'Core Stability', sets: '3 × 30 sec', icon: '🎯', link: 'https://www.youtube.com/watch?v=44ScXWFaVBs', desc: 'Foundation for all rehab.' },
        ]
      },
      {
        label: 'Phase 3', badge: 'phase3', title: 'Return to Sport',
        exercises: [
          { name: 'Sport-Specific Drills', sets: 'Progressive', icon: '🏃', link: 'https://www.youtube.com/watch?v=W1LkWMITbpQ', desc: 'Gradually reintroduce sport-specific movement patterns.' },
        ]
      },
    ]
  },
};

export function getRehabPlan(diagnosisKey) {
  return REHAB_PLANS[diagnosisKey] || REHAB_PLANS.generic;
}

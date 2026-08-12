export function diagnose(regionId, answers, mode) {
  if (mode === 'returning') return diagnoseReturning(answers);
  const r = (regionId || '').toLowerCase();
  const ans = answers || {};

  // ── HAMSTRING ──
  if (r.includes('hamstring')) {
    const loc = ans.hs_location || '';
    const moment = ans.hs_moment || '';
    const recur = ans.hs_recurrence || '';
    const rehab = ans.hs_rehab || [];
    const returnTime = ans.hs_return || '';
    const noEccentric = !rehab.includes('Nordic curls / eccentric exercises');
    const quickReturn = ['Less than 1 week', '1–2 weeks', '2–3 weeks'].includes(returnTime);
    const highRecur = recur.includes('more than');
    let p1 = 55, p3 = 17;
    if (moment.includes('sprint') || moment.includes('top speed')) p1 = 68;
    if (highRecur && noEccentric && quickReturn) p1 = 72;
    const p2 = 100 - p1 - p3;
    return [
      { key: 'hamstring-strain', name: 'Hamstring Strain (Grade II)', prob: p1, desc: `Mid-belly sprint-related tear. ${highRecur ? 'High recurrence rate detected — likely driven by incomplete eccentric loading and early return to sprint load.' : 'The hamstring is maximally loaded eccentrically at late swing phase in full-stride running.'}` },
      { key: 'proximal-hamstring', name: 'Proximal Hamstring Tendinopathy', prob: loc.includes('Upper') ? 38 : p2, desc: 'Degeneration at the hamstring origin (sits bone). Deep, diffuse ache at top of hamstring, worse sitting on hard surfaces and forward bending.' },
      { key: 'hamstring-cramp', name: 'Fatigue-Related / Neural Inhibition', prob: p3, desc: 'After repeated tears, the nervous system can turn down activation of the injured muscle as a protective response.' },
    ];
  }

  // ── ELBOW ──
  if (r.includes('elbow')) {
    const loc = ans.el_location || '';
    const timing = ans.el_timing || '';
    const grip = ans.el_grip || '';
    const loadAccumulates = timing.includes('accumulates');
    const gripHurts = grip.includes('gripping a cup');
    let p1 = 45, p2 = 35, p3 = 15, p4 = 5;
    if (loc.includes('Outer')) p1 = 58;
    if (loc.includes('Back of elbow') || loc.includes('tip')) { p2 = 52; p1 = 30; }
    if (loc.includes('Inner')) { p3 = 48; p1 = 30; p2 = 17; }
    return [
      { key: 'lateral-epicondylopathy', name: 'Lateral Epicondylopathy (Tennis Elbow)', prob: p1, desc: `Extensor carpi radialis brevis tendon overload. ${gripHurts ? 'Off-court grip pain confirms tendon involvement.' : ''}` },
      { key: 'posterior-impingement', name: 'Posterior Elbow Impingement', prob: p2, desc: `Olecranon impingement at full extension under load. ${loadAccumulates ? 'Load-threshold pattern fits perfectly.' : ''}` },
      { key: 'medial-epicondylopathy', name: 'Medial Epicondylopathy (Golfer\'s Elbow)', prob: p3, desc: 'Flexor-pronator mass overload. Pain on inner elbow, worse with wrist flexion under load.' },
    ].filter(d => d.prob > 0);
  }

  // ── KNEE ──
  if (r.includes('knee')) {
    const inst = ans.kn_instability || '';
    const pop = ans.kn_pop || '';
    const mech = ans.kn_mechanism || '';
    if (inst.includes('give way') && pop.includes('pop') && mech.includes('twist'))
      return [
        { key: 'acl', name: 'ACL Tear', prob: 62, desc: 'High probability based on pivot mechanism, pop sensation, and instability. Immediate MRI recommended.' },
        { key: 'meniscus', name: 'Meniscus Tear', prob: 25, desc: 'Often co-exists with ACL injury. Twisting on a planted foot, joint line pain, possible locking.' },
        { key: 'mcl', name: 'MCL Sprain', prob: 13, desc: 'Medial collateral ligament from valgus force.' },
      ];
    return [
      { key: 'pfps', name: 'Patellofemoral Pain Syndrome', prob: 48, desc: 'Overuse — kneecap tracking issue. Worse going downstairs, prolonged sitting, squatting.' },
      { key: 'patellar-tendinopathy', name: 'Patellar Tendinopathy', prob: 32, desc: 'Below kneecap pain, worse with jumping and squatting.' },
      { key: 'itb', name: 'IT Band Syndrome', prob: 20, desc: 'Outer knee pain from friction at a specific degree of flexion. Classic in runners.' },
    ];
  }

  // ── SHOULDER ──
  if (r.includes('shoulder')) {
    return [
      { key: 'rotator-cuff', name: 'Rotator Cuff Strain / Tendinopathy', prob: 52, desc: 'Pain on overhead movement, difficulty reaching behind back, possible night pain.' },
      { key: 'impingement', name: 'Shoulder Impingement Syndrome', prob: 28, desc: 'Arc of pain 60–120° of elevation. Common in overhead athletes.' },
      { key: 'ac-joint', name: 'AC Joint Sprain', prob: 20, desc: 'Point tenderness at the top of the shoulder from direct falls or contact.' },
    ];
  }

  // ── UPPER BACK ──
  if (r.includes('upper-back') || r.includes('upper back') || r.includes('rhomboid') || r.includes('trapezius')) {
    const neck = ans.ub_neck || '';
    const timing = ans.ub_timing || '';
    const hasNeck = neck.includes('neck and upper back');
    return [
      { key: 'upper-back-myofascial', name: 'Thoracic Myofascial Syndrome', prob: 62, desc: 'Muscle tension and trigger points. Classic morning stiffness that eases with movement. Strongly postural in origin.' },
      { key: 'cervicothoracic', name: 'Cervicothoracic Junction Dysfunction', prob: hasNeck ? 30 : 24, desc: 'Reduced mobility at C7–T1/T2 junction. Morning stiffness, neck co-involvement are hallmarks.' },
      { key: 'thoracic-facet', name: 'Thoracic Facet Joint Irritation', prob: 14, desc: 'Irritation of small spinal joints from sustained postures. Diffuse ache that loosens with movement.' },
    ];
  }

  // ── LOWER BACK ──
  if (r.includes('lower-back') || r.includes('lower back')) {
    const radiation = ans.lb_radiation || '';
    const hasTingling = radiation.includes('Tingling');
    return [
      { key: 'lumbar-strain', name: 'Lumbar Muscle Strain', prob: hasTingling ? 35 : 50, desc: 'Most common cause of acute lower back pain. Muscle overstress from lifting or sudden movement.' },
      { key: 'lumbar-disc', name: 'Lumbar Disc Irritation (L4–S1)', prob: hasTingling ? 45 : 30, desc: 'Disc bulge causing local and referred pain. Tingling or radiation into the leg points to disc involvement.' },
      { key: 'facet', name: 'Facet Joint Syndrome', prob: 20, desc: 'Typically one-sided lower back pain, worse with extension and rotation, better with flexion.' },
    ];
  }

  // ── HIP / GROIN ──
  if (r.includes('hip') || r.includes('groin') || r.includes('adductor')) {
    const loc = ans.gr_location || '';
    const recur = ans.gr_recurrence || '';
    const highRecur = recur.includes('more than');
    if (loc.includes('Inner thigh'))
      return [
        { key: 'adductor-strain', name: 'Adductor (Groin) Strain', prob: highRecur ? 68 : 55, desc: `Strain of the adductor muscle group. ${highRecur ? 'High recurrence suggests incomplete adductor strengthening between episodes.' : 'Common with sudden change of direction or kicking.'}` },
        { key: 'osteitis-pubis', name: 'Osteitis Pubis', prob: 25, desc: 'Chronic overuse at the pubic symphysis from repetitive kicking and cutting. More gradual onset, often bilateral.' },
        { key: 'sports-hernia', name: 'Sports Hernia (Athletic Pubalgia)', prob: 17, desc: 'Soft tissue injury in the groin without a true hernia. Pain with exertion, coughing, or sit-ups.' },
      ];
    return [
      { key: 'hip-flexor-strain', name: 'Hip Flexor Strain', prob: 50, desc: 'Strain of iliopsoas or rectus femoris. Common with kicking and sprinting acceleration.' },
      { key: 'hip-impingement', name: 'Femoroacetabular Impingement (FAI)', prob: 30, desc: 'Bony impingement deep in the hip joint. Pain with deep flexion, sitting, or pivoting.' },
      { key: 'adductor-strain', name: 'Adductor Strain', prob: 20, desc: 'Possible groin muscle involvement.' },
    ];
  }

  // ── SHIN ──
  if (r.includes('shin')) {
    const pattern = ans.sh2_pattern || '';
    const isStressFracture = pattern.includes('does NOT ease');
    if (isStressFracture)
      return [
        { key: 'tibial-stress-fracture', name: 'Tibial Stress Fracture', prob: 58, desc: 'Progressive pain that worsens with running and does not ease with warmup. Needs rest from impact and imaging to confirm.' },
        { key: 'mtss', name: 'Medial Tibial Stress Syndrome (Shin Splints)', prob: 30, desc: 'Still possible in early stages, but progressive-worsening pattern points toward stress reaction.' },
        { key: 'compartment-syndrome', name: 'Chronic Exertional Compartment Syndrome', prob: 12, desc: 'Pressure buildup in lower leg compartments during exercise. Tight, bursting pain that resolves quickly with rest.' },
      ];
    return [
      { key: 'mtss', name: 'Medial Tibial Stress Syndrome (Shin Splints)', prob: 62, desc: 'Pain that starts early in a run, eases with warmup, then returns. Almost always from a rapid increase in training load.' },
      { key: 'tibial-stress-fracture', name: 'Early Tibial Stress Reaction', prob: 23, desc: 'Worth monitoring — if the pattern shifts to progressive worsening, reassess for stress fracture.' },
      { key: 'periostitis', name: 'Periostitis', prob: 15, desc: 'Inflammation of the connective tissue around the shin bone, often a precursor stage to shin splints.' },
    ];
  }

  // ── ANKLE / FOOT ──
  if (r.includes('foot') || r.includes('ankle')) {
    const ankArea = ans.ank_area || '';
    const ankMech = ans.ank_mechanism || '';
    const ankWeight = ans.ank_weightbear || '';
    const ankRecur = ans.ank_recurrence || '';
    const ankChain = ans.ank_chain || [];
    const cannotBear = ankWeight.includes('cannot bear weight');
    const isLateral = ankArea.includes('outer') || ankMech.includes('Rolled outward') || ankMech.includes('inversion');
    const isRecurring = ankRecur.includes('more than') || ankRecur.includes('chronic');
    const hasChainTightness = ankChain.length > 0 && !ankChain.includes('No — isolated to the ankle');

    if (cannotBear)
      return [
        { key: 'ankle-fracture-flag', name: 'Possible Fracture — Seek Imaging', prob: 55, desc: 'Inability to bear weight triggers Ottawa Ankle Rules — X-ray needed before soft tissue rehab to rule out fracture.' },
        { key: 'lateral-ankle-grade3', name: 'Grade III Lateral Ankle Sprain', prob: 30, desc: 'Complete ATFL rupture. Severe instability, significant swelling.' },
        { key: 'syndesmosis', name: 'High Ankle Sprain (Syndesmosis)', prob: 15, desc: 'Injury to ligaments holding tibia and fibula together. Slower recovery than standard lateral sprain.' },
      ];

    if (isLateral || ankArea.includes('Ankle joint'))
      return [
        {
          key: 'lateral-ankle',
          name: `Lateral Ankle Sprain${isRecurring ? ' (Recurring)' : ''}`,
          prob: isLateral ? 65 : 50,
          desc: 'Anterior talofibular ligament (ATFL) sprain from inversion mechanism. ' +
            (isRecurring ? 'High recurrence suggests incomplete proprioception rehabilitation. ' : 'Graded I–III by severity. ') +
            (hasChainTightness ? 'Lower limb compensation pattern detected — full kinetic chain needs treatment.' : '')
        },
        { key: 'peroneal-tendon', name: 'Peroneal Tendon Injury', prob: 22, desc: 'Peroneal tendons frequently strained alongside ATFL sprains. Outer ankle pain with eversion loading.' },
        { key: 'syndesmosis', name: 'High Ankle Sprain (Syndesmosis)', prob: 13, desc: 'More pain with external rotation, slower recovery than a standard lateral sprain.' },
      ];

    const morning = ans.ft_morning || '';
    const loc = ans.ft_location || '';
    if (morning.includes('worse first thing') || loc.includes('Bottom of the heel'))
      return [
        { key: 'plantar-fasciitis', name: 'Plantar Fasciitis', prob: 70, desc: 'First-step morning heel pain that eases within minutes — near-diagnostic for plantar fasciitis.' },
        { key: 'heel-spur', name: 'Heel Spur', prob: 18, desc: 'Bony growth on the heel bone, often coexists with plantar fasciitis.' },
        { key: 'fat-pad-syndrome', name: 'Heel Fat Pad Syndrome', prob: 12, desc: 'Degeneration of the protective fat pad under the heel.' },
      ];

    return [
      { key: 'lateral-ankle', name: 'Ankle Sprain', prob: 45, desc: 'Ligament sprain of the ankle — most common sports injury overall.' },
      { key: 'metatarsalgia', name: 'Metatarsalgia', prob: 30, desc: 'Pain in the ball of the foot from repetitive impact loading.' },
      { key: 'stress-fracture-foot', name: 'Metatarsal Stress Fracture', prob: 25, desc: 'Progressive, localised forefoot pain from repetitive impact.' },
    ];
  }

  // ── CALF ──
  if (r.includes('calf')) {
    const moment = ans.cf_moment || '';
    const achilles = ans.cf_achilles || '';
    if (moment.includes('kicked'))
      return [
        { key: 'calf-strain', name: 'Gastrocnemius Strain (Grade I–II)', prob: 65, desc: '"Felt like being kicked with no contact" is the classic presentation of an acute calf muscle tear.' },
        { key: 'soleus-strain', name: 'Soleus Strain', prob: 20, desc: 'Deeper calf muscle strain, often less dramatic onset but slower to heal.' },
        { key: 'achilles-tendinopathy', name: 'Achilles Tendinopathy', prob: 15, desc: 'Possible if pain is closer to the tendon than the muscle belly.' },
      ];
    if (achilles.includes('distinctly'))
      return [
        { key: 'achilles-tendinopathy', name: 'Achilles Tendinopathy', prob: 58, desc: 'Overuse degeneration of the Achilles tendon.' },
        { key: 'calf-strain', name: 'Calf Muscle Strain', prob: 25, desc: 'Muscle-tendon junction can refer pain toward the Achilles area.' },
        { key: 'retrocalcaneal-bursitis', name: 'Retrocalcaneal Bursitis', prob: 17, desc: 'Inflammation at the heel-Achilles junction, often footwear-related.' },
      ];
    return [
      { key: 'calf-strain', name: 'Calf Muscle Strain', prob: 55, desc: 'Strain of the gastrocnemius or soleus muscle.' },
      { key: 'achilles-tendinopathy', name: 'Achilles Tendinopathy', prob: 28, desc: 'Overuse pattern, especially if pain sits lower toward the heel.' },
      { key: 'dvt-flag', name: 'DVT — Rule Out', prob: 17, desc: 'Calf pain with warmth, redness, and swelling without a clear sporting mechanism warrants urgent medical review.' },
    ];
  }

  // ── WRIST ──
  if (r.includes('wrist')) {
    const loc = ans.wr_location || '';
    const rotation = ans.wr_rotation || '';
    const clicking = ans.wr_clicking || '';
    const activity = ans.wr_activity || '';
    const snuffbox = ans.wr_snuffbox || '';
    const isUlnar = loc.includes('pinky') || loc.includes('ulnar');
    const isRadial = loc.includes('thumb') || loc.includes('radial');
    const rotationPain = rotation.includes('rotating is painful');
    const clickingPresent = clicking.includes('distinct');
    const snuffboxTender = snuffbox.includes('very tender');

    if (snuffboxTender && activity.includes('Fall'))
      return [
        { key: 'scaphoid-fracture', name: 'Scaphoid Fracture — Seek Imaging', prob: 70, desc: 'Anatomical snuffbox tenderness after a fall is the classic presentation of scaphoid fracture. Must be imaged before returning to activity.' },
        { key: 'radial-sprain', name: 'Radial Wrist Sprain', prob: 20, desc: 'Sprain of the radial-sided ligaments from fall mechanism.' },
        { key: 'de-quervain', name: 'De Quervain\'s Tenosynovitis', prob: 10, desc: 'Thumb tendon inflammation — less likely with fall mechanism.' },
      ];
    if (isUlnar)
      return [
        { key: 'ecu-tendinopathy', name: 'ECU Tendinopathy / Tenosynovitis', prob: rotationPain ? 40 : 52, desc: 'Inflammation of the extensor carpi ulnaris tendon. Common in gym pushing and racket sports.' },
        {
          key: 'tfcc-injury', name: 'TFCC Tear / Injury', prob: (rotationPain && clickingPresent) ? 50 : 30,
          desc: 'Triangular fibrocartilage complex injury. ' + (rotationPain ? 'Pain with rotation is a strong signal. ' : '') + (clickingPresent ? 'A click on rotation further supports TFCC pathology. ' : '') + 'Note: TFCC tears rarely cause visible swelling.'
        },
        { key: 'druj-instability', name: 'DRUJ Instability', prob: 18, desc: 'Distal radioulnar joint instability. Clicking, loss of grip, and pain with rotation are common signs.' },
      ];
    if (isRadial)
      return [
        { key: 'de-quervain', name: 'De Quervain\'s Tenosynovitis', prob: 55, desc: 'Inflammation of the tendons that move the thumb. Pain on the thumb side, worse with gripping.' },
        { key: 'scaphoid-stress', name: 'Scaphoid Stress / Fracture (rule out)', prob: 28, desc: 'The scaphoid bone is vulnerable to stress and fracture. If anatomical snuffbox is tender, imaging is needed.' },
        { key: 'radial-styloid', name: 'Radial Styloid Bursitis / Impingement', prob: 17, desc: 'Impingement at the radial styloid from repetitive wrist extension or gripping.' },
      ];
    return [
      { key: 'wrist-sprain', name: 'Wrist Ligament Sprain', prob: 50, desc: 'Stretch or partial tear of one of the many wrist ligaments.' },
      { key: 'extensor-tendon', name: 'Extensor Tendon Injury', prob: 30, desc: 'Strain or tenosynovitis of one of the extensor tendons. Common in gym pushing movements.' },
      { key: 'tfcc-injury', name: 'TFCC Injury', prob: 20, desc: 'Worth considering if pain is deep and worsens with rotation.' },
    ];
  }

  // ── GENERIC ──
  return [
    { key: 'generic', name: 'Soft Tissue Strain / Sprain', prob: 55, desc: 'Injury to muscles, tendons, or ligaments in the affected area.' },
    { key: 'overuse', name: 'Overuse / Repetitive Stress Injury', prob: 28, desc: 'Cumulative microtrauma from repeated loading without adequate recovery.' },
    { key: 'bursitis', name: 'Joint Inflammation / Bursitis', prob: 17, desc: 'Inflammation of the joint lining or bursa from acute injury or repetitive friction.' },
  ];
}

function diagnoseReturning(answers) {
  const functional = answers.rc_functional || '';
  const ceiling = answers.rc_ceiling || '';
  const diagnosis = answers.rc_diagnosis || 'your injury';

  let phase = '', phaseDesc = '', nextStep = '';
  if (functional.includes('daily life')) {
    phase = 'Phase 1 — Pain Relief & Protection';
    phaseDesc = 'You\'re in early recovery — focus on pain management and gentle movement before any loading.';
    nextStep = 'Start Phase 1 rehab exercises. Do not attempt running or sport yet.';
  } else if (functional.includes('Light gym')) {
    phase = 'Phase 2 — Strength & Stability';
    phaseDesc = 'You can strength train but impact is still problematic. Focus on strength and neuromuscular control.';
    nextStep = 'Progress strength work and begin proprioception training. Introduce walking intervals.';
  } else if (functional.includes('Moderate cardio')) {
    phase = 'Phase 3 — Plyometric Loading';
    phaseDesc = 'Strength is returning but impact tolerance lags — the classic plyometric readiness gap.';
    nextStep = 'Begin low-level plyometrics (double-leg hops), progress to single-leg, then reactive drills.';
  } else if (functional.includes('Moderate impact')) {
    phase = 'Phase 4 — Sport-Specific Training';
    phaseDesc = 'You can handle moderate impact. Ready for sport-specific movement at sub-maximal intensity.';
    nextStep = 'Introduce agility drills and sport-specific movements at 70–80% intensity.';
  } else {
    phase = 'Phase 4–5 — Return to Competition';
    phaseDesc = 'Excellent recovery. You\'re near or at full return. Focus on maintaining strength and monitoring for recurring symptoms.';
    nextStep = 'Graduated return to full match play.';
  }

  return [{
    key: 'returning',
    name: phase,
    prob: 100,
    desc: phaseDesc,
    nextStep,
    ceiling,
    diagnosis,
    isReturning: true,
  }];
}

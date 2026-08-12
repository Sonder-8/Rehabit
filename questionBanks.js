// ── INJURY QUESTION BANKS ──
export const Q_BANKS = {
  hamstring: {
    label: 'Hamstring',
    questions: [
      {
        id: 'hs_side', text: 'Which side is it?', type: 'single',
        options: ['Left hamstring', 'Right hamstring', 'Both'],
        insight: { trigger: 'Left hamstring', text: 'Left hamstring injuries are more common in right-footed players due to higher sprint load on the dominant standing leg.' }
      },
      {
        id: 'hs_location', text: 'Where in the hamstring does it hurt most?', type: 'single',
        options: ['Upper hamstring (near the sits bone)', 'Mid-hamstring', 'Lower mid hamstring', 'Lower hamstring (near knee)'],
        insight: { trigger: 'Mid-hamstring', text: 'Mid-belly tears are almost always sprint-related eccentric overload injuries — the hamstring is maximally loaded just before foot strike in full stride.' }
      },
      {
        id: 'hs_moment', text: 'At what exact moment does it happen?', type: 'single',
        options: ['At full sprint / top speed', 'Accelerating from standing', 'Stretching / lunging / wide stride', 'During a tackle or contact', 'After a long session (fatigue)', 'No specific moment — gradual']
      },
      {
        id: 'hs_recurrence', text: 'Has this hamstring been injured before?', type: 'single',
        options: ['First time', 'Yes — once or twice before', 'Yes — more than 3 times', 'Yes — more than 5 times'],
        insight: { trigger: 'Yes — more than 5 times', text: 'High recurrence strongly suggests incomplete rehab — specifically lack of eccentric loading and sprint-specific return-to-sport progressions.' }
      },
      {
        id: 'hs_rehab', text: 'What did your rehab involve last time?', type: 'multi',
        options: ['Rest only', 'Stretching', 'Light gym work', 'Nordic curls / eccentric exercises', 'Sprint progressions before returning', 'Physio-guided protocol', 'Did not do any rehab']
      },
      {
        id: 'hs_return', text: 'How long before you returned to sport after last injury?', type: 'single',
        options: ['Less than 1 week', '1–2 weeks', '2–3 weeks', '4–6 weeks', '6+ weeks']
      },
      {
        id: 'hs_format', text: 'What format were you playing when it happened?', type: 'single',
        options: ['11v11 full field', '7-a-side', '5-a-side / futsal', 'Training drill', 'Gym / sprint session']
      },
      {
        id: 'hs_fatigue', text: 'When in the session did it happen?', type: 'single',
        options: ['First 20 mins (cold muscle)', 'Mid-game (20–60 mins)', 'Late game / second half (fatigue)', 'During warmup', 'After the session']
      },
      {
        id: 'hs_pain_type', text: 'What does the pain feel like right now?', type: 'multi',
        options: ['Sharp pain at a specific spot', 'Dull ache across the whole hamstring', 'Tight / stiff', 'Burning sensation', 'Weak — hard to contract the muscle']
      },
    ]
  },

  elbow: {
    label: 'Elbow',
    questions: [
      { id: 'el_side', text: 'Which elbow?', type: 'single', options: ['Left elbow', 'Right elbow', 'Both'] },
      {
        id: 'el_location', text: 'Where on the elbow does it hurt?', type: 'single',
        options: ['Outer elbow (lateral side — bony bump)', 'Inner elbow (medial side)', 'Back of elbow (tip / olecranon)', 'Deep inside the joint', 'Hard to pinpoint'],
        insight: { trigger: 'Outer elbow (lateral side — bony bump)', text: 'Outer elbow pain in a badminton player strongly suggests Lateral Epicondylopathy. The ECRB tendon is heavily loaded during smash follow-through.' }
      },
      {
        id: 'el_trigger', text: 'Which shots specifically trigger the pain?', type: 'multi',
        options: ['Smash / overhead', 'Clear (deep shots)', 'Drop shot', 'Drive', 'Any grip / all shots', 'Pain even off-court with gripping']
      },
      {
        id: 'el_timing', text: 'When does the pain occur?', type: 'single',
        options: ['During the shot itself', 'Immediately after the shot', 'After several smashes (load accumulates)', 'After the session — pain comes later', 'Always there — even without playing'],
        insight: { trigger: 'After several smashes (load accumulates)', text: 'Load-threshold pain pattern suggests tendinopathy rather than acute structural damage.' }
      },
      {
        id: 'el_rest', text: 'How quickly does it resolve with rest?', type: 'single',
        options: ['Within hours', '1–2 days', '3–5 days', 'A week or more', 'Doesn\'t fully resolve with rest']
      },
      {
        id: 'el_grip', text: 'Does gripping or squeezing hurt even off-court?', type: 'single',
        options: ['Yes — even gripping a cup or shaking hands hurts', 'Mild discomfort with strong gripping', 'No — only during racket sport', 'No pain off-court at all']
      },
      {
        id: 'el_recurrence', text: 'How long has this been happening?', type: 'single',
        options: ['This is the first time', 'A few weeks', '1–3 months', 'More than 3 months — it keeps coming back']
      },
      {
        id: 'el_equipment', text: 'Has anyone assessed your grip or technique?', type: 'single',
        options: ['Yes — coach or physio has looked at it', 'No — never been assessed', 'I suspect my technique might be contributing', 'I recently changed racket or grip size']
      },
    ]
  },

  knee: {
    label: 'Knee',
    questions: [
      { id: 'kn_side', text: 'Which knee?', type: 'single', options: ['Left knee', 'Right knee', 'Both'] },
      {
        id: 'kn_location', text: 'Where on the knee?', type: 'single',
        options: ['Front of knee / kneecap area', 'Inner side (medial)', 'Outer side (lateral)', 'Back of knee', 'Deep inside the joint', 'All around']
      },
      {
        id: 'kn_mechanism', text: 'How did it start?', type: 'single',
        options: ['Sudden twist / pivot', 'Direct impact or fall', 'Gradual onset over weeks', 'Woke up with it / no clear cause']
      },
      {
        id: 'kn_instability', text: 'Does the knee feel unstable or give way?', type: 'single',
        options: ['Yes — feels like it might give way', 'Occasionally buckles', 'No — feels stable', 'Haven\'t tested it yet']
      },
      {
        id: 'kn_swelling', text: 'Is there visible swelling?', type: 'single',
        options: ['Yes — significant swelling within hours', 'Mild swelling after activity', 'No swelling', 'Swelling comes and goes']
      },
      {
        id: 'kn_pop', text: 'Did you hear or feel a pop?', type: 'single',
        options: ['Yes — heard / felt a pop', 'Not sure — happened very fast', 'No pop']
      },
      {
        id: 'kn_activity', text: 'What makes it worse?', type: 'multi',
        options: ['Stairs (going down)', 'Squatting / deep bending', 'Running', 'Twisting / changing direction', 'Sitting for a long time then standing', 'Direct pressure on kneecap']
      },
    ]
  },

  shoulder: {
    label: 'Shoulder',
    questions: [
      { id: 'sh_side', text: 'Which shoulder?', type: 'single', options: ['Left', 'Right', 'Both'] },
      {
        id: 'sh_location', text: 'Where does it hurt?', type: 'single',
        options: ['Top of shoulder (AC joint)', 'Front of shoulder', 'Outer / lateral shoulder', 'Deep inside the joint', 'Back of shoulder', 'Radiates down the arm']
      },
      {
        id: 'sh_movement', text: 'Which movements hurt most?', type: 'multi',
        options: ['Raising arm overhead', 'Reaching behind back', 'Lifting away from body (90°)', 'At one specific angle only', 'Lying on that shoulder', 'All shoulder movement']
      },
      {
        id: 'sh_mechanism', text: 'How did it start?', type: 'single',
        options: ['Sudden — during throwing / overhead', 'Sudden — fall or impact', 'Gradual — built up over time', 'Woke up with it']
      },
      {
        id: 'sh_weakness', text: 'Any weakness in the shoulder?', type: 'single',
        options: ['Yes — hard to lift arm', 'Mild weakness', 'No weakness']
      },
    ]
  },

  'lower-back': {
    label: 'Lower Back',
    questions: [
      {
        id: 'lb_location', text: 'Where in the lower back?', type: 'single',
        options: ['Centre of the spine', 'Left of centre', 'Right of centre', 'Across the whole lower back', 'Pain radiates into the buttock or leg']
      },
      {
        id: 'lb_mechanism', text: 'How did it start?', type: 'single',
        options: ['Specific lifting / bending incident', 'Sudden twist', 'Woke up with it', 'Gradual — no clear cause', 'After long periods of sitting / driving']
      },
      {
        id: 'lb_radiation', text: 'Does the pain travel anywhere?', type: 'single',
        options: ['No — stays in the back only', 'Into one buttock', 'Down one leg to the knee', 'All the way to the foot', 'Tingling / numbness in the leg or foot']
      },
      {
        id: 'lb_worse', text: 'What makes it worse?', type: 'multi',
        options: ['Bending forward', 'Bending backward (extension)', 'Sitting for long periods', 'Standing for long periods', 'Morning — stiff on waking', 'Coughing or sneezing']
      },
    ]
  },

  'upper-back': {
    label: 'Upper Back',
    questions: [
      {
        id: 'ub_location', text: 'Where exactly?', type: 'single',
        options: ['Centre of the spine', 'Left of centre', 'Right of centre', 'Across whole upper back (diffuse)', 'Between shoulder blades']
      },
      {
        id: 'ub_neck', text: 'Is your neck also stiff or painful?', type: 'single',
        options: ['Yes — neck and upper back both', 'Mainly the back, mild neck tightness', 'No neck involvement']
      },
      {
        id: 'ub_mechanism', text: 'How did it start?', type: 'single',
        options: ['Woke up with it', 'Gradual — posture / desk work', 'After heavy lifting or gym session', 'Sudden twist or impact']
      },
      {
        id: 'ub_timing', text: 'When is it worst?', type: 'single',
        options: ['First thing in the morning', 'End of day / after work', 'During / after sport', 'Sitting for long periods', 'Constant — no pattern']
      },
      {
        id: 'ub_posture', text: 'Postural check — in the mirror, do you notice:', type: 'multi',
        options: ['One shoulder sits higher than the other', 'Head sits forward of shoulders', 'One shoulder appears more rounded', 'Back rounds significantly when sitting', 'Nothing obvious']
      },
    ]
  },

  'hip-groin': {
    label: 'Groin / Hip',
    questions: [
      { id: 'gr_side', text: 'Which side?', type: 'single', options: ['Left groin/hip', 'Right groin/hip', 'Both'] },
      {
        id: 'gr_location', text: 'Where exactly?', type: 'single',
        options: ['Inner thigh near groin crease (adductor)', 'Front of hip (hip flexor)', 'Deep inside the hip joint', 'Lower abdomen near groin'],
        insight: { trigger: 'Inner thigh near groin crease (adductor)', text: 'Adductor strains are the second most common muscle injury in football. The mechanism is almost always a sudden change of direction or kicking action.' }
      },
      {
        id: 'gr_moment', text: 'At what exact moment does it happen?', type: 'single',
        options: ['Kicking a ball', 'Sudden change of direction / cutting', 'Sprinting', 'Stretching too wide (e.g. lunge, split)', 'Gradual ache building over a session', 'No specific moment']
      },
      {
        id: 'gr_recurrence', text: 'Has this groin/hip been injured before?', type: 'single',
        options: ['First time', 'Once or twice before', 'More than 3 times', 'More than 5 times'],
        insight: { trigger: 'More than 5 times', text: 'Recurring adductor strains are often linked to incomplete strengthening — specifically no Copenhagen plank work — and returning to kicking/sprinting before full eccentric strength is restored.' }
      },
      {
        id: 'gr_pain_type', text: 'What does the pain feel like?', type: 'multi',
        options: ['Sharp pain at a specific spot', 'Dull ache', 'Tight / pulling sensation', 'Pain when squeezing knees together', 'Pain when kicking or striking a ball']
      },
      {
        id: 'gr_walk', text: 'Does it affect normal walking?', type: 'single',
        options: ['No — only during sport', 'Slight discomfort walking', 'Significant — limping']
      },
    ]
  },

  shin: {
    label: 'Shin / Lower Leg',
    questions: [
      { id: 'sh2_side', text: 'Which shin?', type: 'single', options: ['Left shin', 'Right shin', 'Both'] },
      {
        id: 'sh2_location', text: 'Where exactly on the shin?', type: 'single',
        options: ['Inside edge of the shin bone (most common)', 'Front of the shin bone, more central', 'Outer/lateral lower leg', 'Hard to pinpoint — spread along the bone']
      },
      {
        id: 'sh2_pattern', text: 'Describe the pain pattern carefully:', type: 'single',
        options: [
          'Pain starts at the beginning of a run, eases once warmed up, then returns afterward',
          'Pain progressively worsens the more I run and does NOT ease with warmup',
          'Constant ache regardless of activity',
          'Sharp, localised pain at one specific point on the bone'
        ],
        insight: { trigger: 'Pain progressively worsens the more I run and does NOT ease with warmup', text: 'This pattern is the key red flag that distinguishes a possible stress fracture from shin splints. Stress fractures need rest from impact and imaging before continuing to run.' }
      },
      {
        id: 'sh2_mechanism', text: 'Has anything changed in your training recently?', type: 'multi',
        options: ['Increased running distance recently', 'Increased running frequency recently', 'Changed running surface', 'Changed or worn-out shoes', 'Nothing changed']
      },
    ]
  },

  ankle: {
    label: 'Ankle',
    questions: [
      { id: 'ank_side', text: 'Which ankle?', type: 'single', options: ['Left ankle', 'Right ankle', 'Both'] },
      {
        id: 'ank_area', text: 'Is it primarily the ankle joint or heel/arch?', type: 'single',
        options: ['Ankle joint — outer side (most common sprain)', 'Ankle joint — inner side', 'Ankle joint — front', 'Heel / arch / bottom of foot', 'Achilles area (back of ankle)', 'All around the ankle'],
        insight: { trigger: 'Ankle joint — outer side (most common sprain)', text: 'Outer ankle (lateral) sprains are the most common sports injury of any kind. The ATFL ligament is torn when the foot rolls inward.' }
      },
      {
        id: 'ank_mechanism', text: 'How did it happen?', type: 'single',
        options: ['Rolled outward (foot turned in — inversion)', 'Rolled inward (foot turned out — eversion)', 'Direct impact / collision', 'Landed awkwardly from a jump', 'Landed on someone else\'s foot', 'No specific event — gradual pain']
      },
      {
        id: 'ank_weightbear', text: 'Can you put weight on it?', type: 'single',
        options: ['Yes — walking normally', 'Yes — but limping / painful', 'Barely — very painful to stand on', 'No — cannot bear weight at all'],
        insight: { trigger: 'No — cannot bear weight at all', text: 'Inability to bear weight is a red flag for fracture (Ottawa Ankle Rules). This should be assessed with X-ray before proceeding with soft tissue rehab.' }
      },
      {
        id: 'ank_swelling', text: 'Swelling or bruising?', type: 'single',
        options: ['Yes — significant swelling within hours', 'Mild swelling / puffiness', 'Bruising appeared later', 'No visible swelling']
      },
      {
        id: 'ank_recurrence', text: 'Has this ankle been sprained before?', type: 'single',
        options: ['First time', 'Yes — once or twice', 'Yes — more than 3 times', 'Yes — this is chronic / recurring'],
        insight: { trigger: 'Yes — more than 3 times', text: 'Recurrent ankle sprains are strongly linked to incomplete proprioception rehab. Strength alone is not enough — balance and reactive stability must also be retrained.' }
      },
      {
        id: 'ank_chain', text: 'Any tightness or discomfort anywhere above the ankle?', type: 'multi',
        options: ['Calf tightness', 'IT band / outer knee tightness', 'Glute / hip tightness', 'TFL / outer hip tightness', 'Shin tightness (tibialis anterior)', 'Knee pain', 'No — isolated to the ankle'],
        insight: { trigger: 'Calf tightness', text: 'Lower limb tightness above the ankle is extremely common with ankle sprains — the body guards the injured joint by tensing the muscles above it. The whole chain needs treating, not just the ankle.' }
      },
      {
        id: 'ank_stability', text: 'Does the ankle feel unstable?', type: 'single',
        options: ['Yes — feels very unstable', 'Occasional wobble', 'Feels reasonably stable', 'Not sure yet']
      },
    ]
  },

  'foot-heel': {
    label: 'Foot / Heel',
    questions: [
      { id: 'ft_side', text: 'Which foot?', type: 'single', options: ['Left foot', 'Right foot', 'Both'] },
      {
        id: 'ft_location', text: 'Where exactly does it hurt?', type: 'single',
        options: ['Bottom of the heel', 'Back of the heel (Achilles area)', 'Arch of the foot', 'Ball of the foot', 'Top of the foot']
      },
      {
        id: 'ft_morning', text: 'Is it worse with your first few steps in the morning?', type: 'single',
        options: ['Yes — distinctly worse first thing, eases after a few minutes', 'No particular morning pattern', 'Worse after activity, not in the morning'],
        insight: { trigger: 'Yes — distinctly worse first thing, eases after a few minutes', text: 'First-step morning heel pain that eases within minutes is the classic, near-diagnostic pattern for plantar fasciitis — one of the most reliable symptoms in sports medicine triage.' }
      },
      {
        id: 'ft_activity', text: 'What activity brings it on?', type: 'multi',
        options: ['Running', 'Jumping / landing', 'Standing for long periods', 'Walking barefoot on hard floors', 'Lunging (badminton/tennis)']
      },
    ]
  },

  calf: {
    label: 'Calf',
    questions: [
      { id: 'cf_side', text: 'Which calf?', type: 'single', options: ['Left calf', 'Right calf', 'Both'] },
      {
        id: 'cf_location', text: 'Where in the calf?', type: 'single',
        options: ['Upper/mid calf (muscle belly)', 'Lower calf near the Achilles', 'Inner calf', 'Outer calf']
      },
      {
        id: 'cf_moment', text: 'At what moment did it happen?', type: 'single',
        options: ['Sudden — sprinting or pushing off explosively', 'Sudden — felt like being kicked or hit (no contact)', 'Gradual ache building during/after activity', 'Morning stiffness that eases with movement'],
        insight: { trigger: 'Sudden — felt like being kicked or hit (no contact)', text: '"Felt like being kicked with no contact" is the classic description of an acute calf muscle tear — very common in racket sports and sprinting.' }
      },
      {
        id: 'cf_achilles', text: 'Any pain or stiffness right at the Achilles tendon (above the heel)?', type: 'single',
        options: ['Yes, distinctly at the Achilles', 'No, it\'s higher up in the muscle', 'Both areas']
      },
      {
        id: 'cf_recurrence', text: 'Has this calf been injured before?', type: 'single',
        options: ['First time', 'Once or twice before', 'More than 3 times']
      },
    ]
  },

  wrist: {
    label: 'Wrist',
    questions: [
      { id: 'wr_side', text: 'Which wrist?', type: 'single', options: ['Left wrist', 'Right wrist', 'Both'] },
      {
        id: 'wr_location', text: 'Which part of the wrist hurts most?', type: 'single',
        options: ['Outer/pinky side (ulnar)', 'Thumb/radial side', 'Back of the wrist (dorsal)', 'Palm side (volar)', 'Deep inside the joint — hard to pinpoint'],
        insight: { trigger: 'Outer/pinky side (ulnar)', text: 'Ulnar-sided wrist pain is the most common wrist complaint in gym and racket sport athletes. The two main culprits are ECU tendinopathy and TFCC injury.' }
      },
      {
        id: 'wr_rotation', text: 'Does rotating your forearm — like turning a doorknob — cause pain?', type: 'single',
        options: ['Yes — rotating is painful', 'Only at the end of range', 'No — rotation is fine'],
        insight: { trigger: 'Yes — rotating is painful', text: 'Pain with forearm rotation is a key clinical sign for TFCC involvement — the TFCC stabilises the joint between your forearm bones and is maximally loaded during rotation under grip.' }
      },
      {
        id: 'wr_clicking', text: 'Any clicking, clunking or snapping when you rotate the wrist?', type: 'single',
        options: ['Yes — a distinct click or clunk', 'Occasional mild clicking', 'No clicking']
      },
      {
        id: 'wr_activity', text: 'What activity brought this on?', type: 'single',
        options: ['Gym pushing (bench press, push-ups, overhead press)', 'Gym pulling/gripping (deadlift, rows, pull-ups)', 'Fall on outstretched hand', 'Racket sport (tennis/badminton)', 'Gymnastics / handstands / yoga', 'Repetitive twisting (tools, throwing)', 'No specific event — gradual onset']
      },
      {
        id: 'wr_grip', text: 'Does gripping hard cause pain?', type: 'single',
        options: ['Yes — gripping is painful', 'Mild discomfort with strong grip', 'No — grip is fine']
      },
      {
        id: 'wr_snuffbox', text: 'Is there tenderness in the small hollow on the thumb side (anatomical snuffbox)?', type: 'single',
        options: ['Yes — very tender there', 'Mild tenderness', 'No'],
        insight: { trigger: 'Yes — very tender there', text: 'Anatomical snuffbox tenderness after a fall is a red flag for scaphoid fracture — one of the most commonly missed wrist fractures. Needs imaging before continuing activity.' }
      },
    ]
  },

  generic: {
    label: 'Injury',
    questions: [
      {
        id: 'gen_mechanism', text: 'How did it start?', type: 'single',
        options: ['Sudden — during activity', 'Sudden — impact or fall', 'Gradual over days/weeks', 'Woke up with it', 'No clear cause']
      },
      {
        id: 'gen_pain_type', text: 'What does it feel like?', type: 'multi',
        options: ['Dull ache', 'Stiffness', 'Sharp / catching pain', 'Burning', 'Tingling or electric', 'Throbbing']
      },
      {
        id: 'gen_worse', text: 'What makes it worse?', type: 'multi',
        options: ['Movement', 'Rest', 'Morning', 'Specific position', 'Loading / impact', 'Night']
      },
    ]
  },
};

// ── STRENGTHEN QUESTION BANKS ──
export const STRENGTHEN_Q_BANKS = {
  hamstring: {
    label: 'Hamstring', questions: [
      { id: 'shs_side', text: 'Which hamstring would you like to strengthen?', type: 'single', options: ['Left hamstring', 'Right hamstring', 'Both equally'] },
      { id: 'shs_goal', text: 'What\'s your main goal?', type: 'single', options: ['Injury prevention (no current issue)', 'Recovering strength after a past injury', 'Improve sprint speed / power', 'General leg strength'] },
      { id: 'shs_level', text: 'Current hamstring training level?', type: 'single', options: ['Never trained it directly', 'Some bodyweight work', 'Regular gym training', 'Advanced — already do Nordic curls'] },
      { id: 'shs_frequency', text: 'How often can you train per week?', type: 'single', options: ['1–2 times', '3–4 times', '5+ times'] },
      { id: 'shs_equipment', text: 'What equipment do you have access to?', type: 'multi', options: ['Bodyweight only', 'Resistance bands', 'Dumbbells', 'Barbell / gym', 'Nordic curl bench'] },
    ]
  },
  elbow: {
    label: 'Elbow', questions: [
      { id: 'sel_side', text: 'Which elbow would you like to strengthen?', type: 'single', options: ['Left elbow', 'Right elbow', 'Both equally'] },
      { id: 'sel_goal', text: 'What\'s your main goal?', type: 'single', options: ['Prevent overuse injury (e.g. tennis elbow)', 'Recovering after a past elbow issue', 'Improve racket sport power', 'General forearm/elbow strength'] },
      { id: 'sel_frequency', text: 'How often can you train per week?', type: 'single', options: ['1–2 times', '3–4 times', '5+ times'] },
    ]
  },
  'hip-groin': {
    label: 'Groin / Hip', questions: [
      { id: 'sgr_side', text: 'Which side?', type: 'single', options: ['Left groin/hip', 'Right groin/hip', 'Both equally'] },
      { id: 'sgr_goal', text: 'What\'s your main goal?', type: 'single', options: ['Injury prevention (e.g. adductor strain)', 'Recovering after a past groin issue', 'Improve kicking / change of direction power', 'General hip strength'] },
      { id: 'sgr_frequency', text: 'How often can you train per week?', type: 'single', options: ['1–2 times', '3–4 times', '5+ times'] },
    ]
  },
  calf: {
    label: 'Calf', questions: [
      { id: 'scf_side', text: 'Which calf?', type: 'single', options: ['Left calf', 'Right calf', 'Both equally'] },
      { id: 'scf_goal', text: 'What\'s your main goal?', type: 'single', options: ['Injury prevention (e.g. calf strain, Achilles issues)', 'Recovering after a past calf issue', 'Improve sprint / jump power', 'General calf strength'] },
      { id: 'scf_frequency', text: 'How often can you train per week?', type: 'single', options: ['1–2 times', '3–4 times', '5+ times'] },
    ]
  },
  generic: {
    label: 'Muscle', questions: [
      { id: 'sgen_goal', text: 'What\'s your main goal for this muscle?', type: 'single', options: ['Injury prevention', 'Recovering after a past issue', 'Improve sport performance', 'General strength'] },
      { id: 'sgen_level', text: 'Current training level for this area?', type: 'single', options: ['Never trained directly', 'Some bodyweight work', 'Regular gym training', 'Advanced'] },
      { id: 'sgen_frequency', text: 'How often can you train per week?', type: 'single', options: ['1–2 times', '3–4 times', '5+ times'] },
    ]
  },
};

// ── RETURNING / REHAB PROGRESSION BANK ──
export const RETURNING_Q_BANKS = {
  default: {
    label: 'Returning', questions: [
      {
        id: 'rc_diagnosis', text: 'What is your existing injury / diagnosis?', type: 'single',
        options: ['Meniscus tear', 'ACL tear / reconstruction', 'Hamstring strain (recurring)', 'Knee ligament (MCL/PCL)', 'Ankle sprain (recurring)', 'Rotator cuff injury', 'Lower back disc / pain', 'Plantar fasciitis', 'Other soft tissue injury', 'Not sure — I know something is wrong but no formal diagnosis']
      },
      {
        id: 'rc_time', text: 'How long ago was the injury / diagnosis?', type: 'single',
        options: ['Less than 4 weeks ago', '1–3 months ago', '3–6 months ago', '6–12 months ago', 'More than 1 year ago']
      },
      {
        id: 'rc_rehab', text: 'What rehab have you already done?', type: 'multi',
        options: ['No structured rehab', 'Physio-guided programme', 'Self-directed gym work', 'Strength training (squats, deadlifts, etc.)', 'Sport-specific drills', 'I was told to rest and came back to sport without rehab']
      },
      {
        id: 'rc_functional', text: 'What can you currently do pain-free?', type: 'single',
        options: ['Normal daily life (walking, stairs)', 'Light gym / strength training', 'Moderate cardio (jogging, cycling)', 'Moderate impact (skipping, light plyometrics)', 'High impact (sprinting, jumping, cutting)', 'Full sport participation'],
        insight: { trigger: 'Moderate cardio (jogging, cycling)', text: 'Being able to jog pain-free but struggling with impact is a classic plyometric readiness gap — your strength has recovered but your tissue hasn\'t been progressively loaded for explosive forces yet. This is Phase 3 territory.' }
      },
      {
        id: 'rc_ceiling', text: 'What activity specifically triggers pain or stops you?', type: 'single',
        options: ['Skipping / jump rope', 'Depth jumps / box jumps', 'Sprinting / top-speed running', 'Cutting / change of direction', 'Returning to sport (match play)', 'Heavy gym loading', 'Nothing currently — I want to prevent re-injury']
      },
      {
        id: 'rc_goal', text: 'What is your primary goal right now?', type: 'single',
        options: ['Return to my sport fully', 'Eliminate pain in daily life', 'Progress my rehab to the next phase', 'Prepare for a physio session', 'Understand what I should be doing']
      },
    ]
  }
};

// ── BANK SELECTOR ──
export function getQuestionBank(regionId, mode) {
  if (mode === 'returning') return RETURNING_Q_BANKS.default;
  const banks = mode === 'strengthen' ? STRENGTHEN_Q_BANKS : Q_BANKS;
  if (!regionId) return banks.generic;
  const r = regionId.toLowerCase();
  if (r.includes('hamstring')) return banks.hamstring || banks.generic;
  if (r.includes('elbow')) return banks.elbow || banks.generic;
  if (r.includes('knee')) return banks.knee || banks.generic;
  if (r.includes('shoulder')) return banks.shoulder || banks.generic;
  if (r.includes('lower-back') || r.includes('lower back')) return banks['lower-back'] || banks.generic;
  if (r.includes('upper-back') || r.includes('upper back') || r.includes('rhomboid') || r.includes('trapezius')) return banks['upper-back'] || banks.generic;
  if (r.includes('hip') || r.includes('groin') || r.includes('adductor')) return banks['hip-groin'] || banks.generic;
  if (r.includes('shin')) return banks.shin || banks.generic;
  if (r.includes('foot') || r.includes('ankle')) return banks.ankle || banks['foot-heel'] || banks.generic;
  if (r.includes('calf')) return banks.calf || banks.generic;
  if (r.includes('wrist')) return banks.wrist || banks.generic;
  return banks.generic;
}

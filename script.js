/* ===================== 데이터 ===================== */
const rawData = { /* ── merged with CSV frames; colors + hoverText preserved ── */
  'P01':{type:'person',colors:['#d3dcdd','#bcb93d','#eab4c9'],hoverText:'Came in a pair - they look calm, maybe used to this commute. Kept checking the time but not in a rushed way.',frames:[
    {time:0,angleDeg:140,radiusFactor:0.92,motion:'STILL',behavior:'arrive together'},{time:10,angleDeg:140,radiusFactor:0.92,motion:'STILL',behavior:'quick chat'},{time:20,angleDeg:140,radiusFactor:0.92,motion:'STILL',behavior:'checking time'},{time:30,angleDeg:140,radiusFactor:0.92,motion:'STILL',behavior:'quick chat'},{time:40,angleDeg:140,radiusFactor:0.92,motion:'STILL',behavior:'quick chat'},{time:50,angleDeg:140,radiusFactor:0.92,motion:'STILL',behavior:'looks at phone'},{time:60,angleDeg:140,radiusFactor:0.92,motion:'STILL',behavior:'looks at phone'},{time:70,angleDeg:140,radiusFactor:0.92,motion:'STILL',behavior:'listening to music'},{time:80,angleDeg:140,radiusFactor:0.92,motion:'STILL',behavior:'looks at phone'},{time:90,angleDeg:140,radiusFactor:0.92,motion:'STILL',behavior:'looks at phone'},{time:100,angleDeg:140,radiusFactor:0.92,motion:'STILL',behavior:'looks at phone'},{time:110,angleDeg:140,radiusFactor:0.92,motion:'STILL',behavior:'looks at phone'},{time:120,angleDeg:140,radiusFactor:0.92,motion:'STILL',behavior:'glances at train time'},{time:130,angleDeg:140,radiusFactor:0.92,motion:'STILL',behavior:'looks at phone'},{time:140,angleDeg:140,radiusFactor:0.92,motion:'STILL',behavior:'looks at phone'},{time:150,angleDeg:140,radiusFactor:0.92,motion:'STILL',behavior:'looks at phone'},{time:160,angleDeg:140,radiusFactor:0.92,motion:'MOVING',behavior:'gets up'},{time:170,angleDeg:65,radiusFactor:0.8,motion:'MOVING',behavior:'walks toward exit'},{time:180,angleDeg:65,radiusFactor:1.08,motion:'STILL',behavior:'nan'}
  ]},
  'P02':{type:'person',colors:['#e4c7d0','#a46269','#795664'],hoverText:'The planner of the two. Did the quick timetable check and nodded.',frames:[
    {time:0,angleDeg:135,radiusFactor:0.92,motion:'STILL',behavior:'arrive with partner'},{time:10,angleDeg:135,radiusFactor:0.92,motion:'STILL',behavior:'munching on sandwich'},{time:20,angleDeg:135,radiusFactor:0.92,motion:'STILL',behavior:'munching on sandwich'},{time:30,angleDeg:135,radiusFactor:0.92,motion:'STILL',behavior:'munching on sandwich'},{time:40,angleDeg:135,radiusFactor:0.92,motion:'MOVING',behavior:'gets up'},{time:50,angleDeg:80,radiusFactor:0.7,motion:'MOVING',behavior:'scans timetable'},{time:60,angleDeg:135,radiusFactor:0.92,motion:'STILL',behavior:'munching on sandwich'},{time:70,angleDeg:135,radiusFactor:0.92,motion:'STILL',behavior:'munching on sandwich'},{time:80,angleDeg:135,radiusFactor:0.92,motion:'STILL',behavior:'munching on sandwich'},{time:90,angleDeg:135,radiusFactor:0.92,motion:'STILL',behavior:'nods yes'},{time:100,angleDeg:135,radiusFactor:0.92,motion:'STILL',behavior:'drink water'},{time:110,angleDeg:135,radiusFactor:0.92,motion:'STILL',behavior:'glances at stroller'},{time:120,angleDeg:135,radiusFactor:0.92,motion:'STILL',behavior:'smiles at stroller'},{time:130,angleDeg:135,radiusFactor:0.92,motion:'STILL',behavior:'scrolls on phone'},{time:140,angleDeg:135,radiusFactor:0.92,motion:'STILL',behavior:'scrolls on phone'},{time:150,angleDeg:135,radiusFactor:0.92,motion:'STILL',behavior:'scrolls on phone'},{time:160,angleDeg:135,radiusFactor:0.92,motion:'MOVING',behavior:'gets up, checks baby'},{time:170,angleDeg:68,radiusFactor:0.8,motion:'MOVING',behavior:'leaves to train'},{time:180,angleDeg:68,radiusFactor:1.08,motion:'STILL',behavior:'nan'}
  ]},
  'P03':{type:'person',colors:['#55533e','#a4ac72','#fadf85'],hoverText:'Wandered a lot, could not sit still. Just curious about everything.',frames:[
    {time:0,angleDeg:240,radiusFactor:1.08,motion:'STILL',behavior:'nan'},{time:10,angleDeg:240,radiusFactor:1.08,motion:'STILL',behavior:'nan'},{time:20,angleDeg:240,radiusFactor:1.08,motion:'STILL',behavior:'nan'},{time:30,angleDeg:240,radiusFactor:1.08,motion:'STILL',behavior:'nan'},{time:40,angleDeg:240,radiusFactor:1.08,motion:'MOVING',behavior:'nan'},{time:50,angleDeg:50,radiusFactor:0.4,motion:'MOVING',behavior:'slow walk'},{time:60,angleDeg:40,radiusFactor:0.4,motion:'MOVING',behavior:'circling benches'},{time:70,angleDeg:20,radiusFactor:0.45,motion:'MOVING',behavior:'peeks outside'},{time:80,angleDeg:30,radiusFactor:0.92,motion:'STILL',behavior:'checks time'},{time:90,angleDeg:30,radiusFactor:0.92,motion:'STILL',behavior:'stretches legs'},{time:100,angleDeg:30,radiusFactor:0.92,motion:'STILL',behavior:'loops around'},{time:110,angleDeg:30,radiusFactor:0.92,motion:'STILL',behavior:'sips water'},{time:120,angleDeg:30,radiusFactor:0.92,motion:'STILL',behavior:'heads back'},{time:130,angleDeg:30,radiusFactor:0.92,motion:'MOVING',behavior:'grabs backpack'},{time:140,angleDeg:43,radiusFactor:1.08,motion:'STILL',behavior:'nan'},{time:150,angleDeg:43,radiusFactor:1.08,motion:'STILL',behavior:'nan'},{time:160,angleDeg:43,radiusFactor:1.08,motion:'STILL',behavior:'nan'},{time:170,angleDeg:43,radiusFactor:1.08,motion:'STILL',behavior:'nan'},{time:180,angleDeg:43,radiusFactor:1.08,motion:'STILL',behavior:'nan'}
  ]},
  'P04':{type:'person',colors:['#a28948','#733e2e','#7184b9'],hoverText:'Sat for a while then got coffee. Calm routine.',frames:[
    {time:0,angleDeg:210,radiusFactor:0.92,motion:'MOVING',behavior:'already seated'},{time:10,angleDeg:235,radiusFactor:1.08,motion:'STILL',behavior:'nan'},{time:20,angleDeg:235,radiusFactor:1.08,motion:'STILL',behavior:'nan'},{time:30,angleDeg:235,radiusFactor:1.08,motion:'STILL',behavior:'nan'},{time:40,angleDeg:235,radiusFactor:1.08,motion:'STILL',behavior:'nan'},{time:50,angleDeg:235,radiusFactor:1.08,motion:'STILL',behavior:'nan'},{time:60,angleDeg:235,radiusFactor:1.08,motion:'STILL',behavior:'nan'},{time:70,angleDeg:235,radiusFactor:1.08,motion:'STILL',behavior:'nan'},{time:80,angleDeg:235,radiusFactor:1.08,motion:'STILL',behavior:'nan'},{time:90,angleDeg:235,radiusFactor:1.08,motion:'MOVING',behavior:'nan'},{time:100,angleDeg:118,radiusFactor:0.58,motion:'STILL',behavior:'adjusts coat'},{time:110,angleDeg:118,radiusFactor:0.58,motion:'STILL',behavior:'stands slowly'},{time:120,angleDeg:118,radiusFactor:0.58,motion:'MOVING',behavior:'looks to board'},{time:130,angleDeg:100,radiusFactor:0.5,motion:'MOVING',behavior:'nods to self'},{time:140,angleDeg:350,radiusFactor:1.08,motion:'MOVING',behavior:'nan'},{time:150,angleDeg:230,radiusFactor:1.08,motion:'MOVING',behavior:'nan'},{time:160,angleDeg:350,radiusFactor:1.08,motion:'STILL',behavior:'nan'},{time:170,angleDeg:350,radiusFactor:1.08,motion:'STILL',behavior:'nan'},{time:180,angleDeg:350,radiusFactor:1.08,motion:'STILL',behavior:'nan'}
  ]},
  'P05':{type:'person',colors:['#5a3b4f','#edceb7','#ce6641'],hoverText:'Waiting for someone, kept checking the door and pacing. Big smile when partner showed up.',frames:[
    {time:0,angleDeg:65,radiusFactor:1.08,motion:'STILL',behavior:'nan'},{time:10,angleDeg:65,radiusFactor:1.08,motion:'MOVING',behavior:'nan'},{time:20,angleDeg:320,radiusFactor:0.92,motion:'STILL',behavior:'scans doorway'},{time:30,angleDeg:320,radiusFactor:0.92,motion:'STILL',behavior:'sits briefly'},{time:40,angleDeg:320,radiusFactor:0.92,motion:'MOVING',behavior:'stands again'},{time:50,angleDeg:335,radiusFactor:0.93,motion:'STILL',behavior:'pacing slowly'},{time:60,angleDeg:335,radiusFactor:0.93,motion:'MOVING',behavior:'eyes on entrance'},{time:70,angleDeg:230,radiusFactor:1.08,motion:'STILL',behavior:'nan'},{time:80,angleDeg:230,radiusFactor:1.08,motion:'STILL',behavior:'nan'},{time:90,angleDeg:230,radiusFactor:1.08,motion:'STILL',behavior:'nan'},{time:100,angleDeg:230,radiusFactor:1.08,motion:'STILL',behavior:'nan'},{time:110,angleDeg:230,radiusFactor:1.08,motion:'STILL',behavior:'nan'},{time:120,angleDeg:230,radiusFactor:1.08,motion:'STILL',behavior:'nan'},{time:130,angleDeg:230,radiusFactor:1.08,motion:'STILL',behavior:'nan'},{time:140,angleDeg:230,radiusFactor:1.08,motion:'STILL',behavior:'nan'},{time:150,angleDeg:230,radiusFactor:1.08,motion:'STILL',behavior:'nan'},{time:160,angleDeg:230,radiusFactor:1.08,motion:'STILL',behavior:'nan'},{time:170,angleDeg:230,radiusFactor:1.08,motion:'STILL',behavior:'nan'},{time:180,angleDeg:230,radiusFactor:1.08,motion:'STILL',behavior:'nan'}
  ]},
  'P06':{type:'person',colors:['#192f46','#ab4539','#592828'],hoverText:'Got off the train, spotted P05 immediately. Quick hug, both smiling.',frames:[
    {time:0,angleDeg:352,radiusFactor:1.08,motion:'STILL',behavior:'nan'},{time:10,angleDeg:352,radiusFactor:1.08,motion:'STILL',behavior:'nan'},{time:20,angleDeg:352,radiusFactor:1.08,motion:'STILL',behavior:'nan'},{time:30,angleDeg:352,radiusFactor:1.08,motion:'STILL',behavior:'nan'},{time:40,angleDeg:352,radiusFactor:1.08,motion:'STILL',behavior:'nan'},{time:50,angleDeg:352,radiusFactor:1.08,motion:'MOVING',behavior:'nan'},{time:60,angleDeg:337,radiusFactor:0.93,motion:'MOVING',behavior:'hugs p5'},{time:70,angleDeg:232,radiusFactor:1.08,motion:'STILL',behavior:'nan'},{time:80,angleDeg:232,radiusFactor:1.08,motion:'STILL',behavior:'nan'},{time:90,angleDeg:232,radiusFactor:1.08,motion:'STILL',behavior:'nan'},{time:100,angleDeg:232,radiusFactor:1.08,motion:'STILL',behavior:'nan'},{time:110,angleDeg:232,radiusFactor:1.08,motion:'STILL',behavior:'nan'},{time:120,angleDeg:232,radiusFactor:1.08,motion:'STILL',behavior:'nan'},{time:130,angleDeg:232,radiusFactor:1.08,motion:'STILL',behavior:'nan'},{time:140,angleDeg:232,radiusFactor:1.08,motion:'STILL',behavior:'nan'},{time:150,angleDeg:232,radiusFactor:1.08,motion:'STILL',behavior:'nan'},{time:160,angleDeg:232,radiusFactor:1.08,motion:'STILL',behavior:'nan'},{time:170,angleDeg:232,radiusFactor:1.08,motion:'STILL',behavior:'nan'},{time:180,angleDeg:232,radiusFactor:1.08,motion:'STILL',behavior:'nan'}
  ]},
  'P07':{type:'person',colors:['#859bcc','#ffffff','#282e75'],hoverText:'Stayed almost the whole time. Looked relaxed, maybe waiting for someone.',frames:[
    {time:0,angleDeg:226,radiusFactor:1.08,motion:'STILL',behavior:'nan'},{time:10,angleDeg:226,radiusFactor:1.08,motion:'STILL',behavior:'nan'},{time:20,angleDeg:226,radiusFactor:1.08,motion:'STILL',behavior:'nan'},{time:30,angleDeg:226,radiusFactor:1.08,motion:'STILL',behavior:'nan'},{time:40,angleDeg:226,radiusFactor:1.08,motion:'STILL',behavior:'nan'},{time:50,angleDeg:226,radiusFactor:1.08,motion:'MOVING',behavior:'nan'},{time:60,angleDeg:213,radiusFactor:0.92,motion:'STILL',behavior:'shifts weight'},{time:70,angleDeg:213,radiusFactor:0.92,motion:'STILL',behavior:'glances left'},{time:80,angleDeg:213,radiusFactor:0.92,motion:'STILL',behavior:'glances right'},{time:90,angleDeg:213,radiusFactor:0.92,motion:'STILL',behavior:'adjusts strap'},{time:100,angleDeg:213,radiusFactor:0.92,motion:'STILL',behavior:'stretches neck'},{time:110,angleDeg:213,radiusFactor:0.92,motion:'STILL',behavior:'tiny step'},{time:120,angleDeg:213,radiusFactor:0.92,motion:'STILL',behavior:'stays put'},{time:130,angleDeg:213,radiusFactor:0.92,motion:'STILL',behavior:'scrolling phone'},{time:140,angleDeg:213,radiusFactor:0.92,motion:'STILL',behavior:'pockets hands'},{time:150,angleDeg:213,radiusFactor:0.92,motion:'STILL',behavior:'watching people'},{time:160,angleDeg:213,radiusFactor:0.92,motion:'STILL',behavior:'still waiting'},{time:170,angleDeg:213,radiusFactor:0.92,motion:'STILL',behavior:'still waiting'},{time:180,angleDeg:213,radiusFactor:0.92,motion:'STILL',behavior:'still waiting'}
  ]},
  'P08':{type:'person',colors:['#5550e9','#5f0f39','#1f4d51'],hoverText:'Two students, probably friends. Checked their phones a lot, laughed at something.',frames:[
    {time:0,angleDeg:260,radiusFactor:0.92,motion:'STILL',behavior:'students enter'},{time:10,angleDeg:260,radiusFactor:0.92,motion:'MOVING',behavior:'backpack shuffle'},{time:20,angleDeg:108,radiusFactor:0.38,motion:'STILL',behavior:'checks time'},{time:30,angleDeg:108,radiusFactor:0.38,motion:'MOVING',behavior:'points to seats'},{time:40,angleDeg:260,radiusFactor:0.92,motion:'STILL',behavior:'sits down'},{time:50,angleDeg:260,radiusFactor:0.92,motion:'STILL',behavior:'whispers chat'},{time:60,angleDeg:260,radiusFactor:0.92,motion:'STILL',behavior:'texting friend'},{time:70,angleDeg:260,radiusFactor:0.92,motion:'STILL',behavior:'checks door'},{time:80,angleDeg:260,radiusFactor:0.92,motion:'STILL',behavior:'small laugh'},{time:90,angleDeg:260,radiusFactor:0.92,motion:'STILL',behavior:'adjusts backpack'},{time:100,angleDeg:260,radiusFactor:0.92,motion:'STILL',behavior:'still waiting'},{time:110,angleDeg:260,radiusFactor:0.92,motion:'STILL',behavior:'glances at board'},{time:120,angleDeg:260,radiusFactor:0.92,motion:'STILL',behavior:'waves at someone'},{time:130,angleDeg:260,radiusFactor:0.92,motion:'STILL',behavior:'stands slightly'},{time:140,angleDeg:260,radiusFactor:0.92,motion:'STILL',behavior:'sits again'},{time:150,angleDeg:260,radiusFactor:0.92,motion:'STILL',behavior:'looks relaxed'},{time:160,angleDeg:260,radiusFactor:0.92,motion:'STILL',behavior:'scrolling phone'},{time:170,angleDeg:260,radiusFactor:0.92,motion:'MOVING',behavior:'friend near?'},{time:180,angleDeg:52,radiusFactor:1.08,motion:'STILL',behavior:'still waiting'}
  ]},
  'P09':{type:'person',colors:['#ffffff','#aab5a6','#2d2726'],hoverText:'Student. Sat for a while, bathroom break, then came back. Very chill.',frames:[
    {time:0,angleDeg:265,radiusFactor:0.92,motion:'STILL',behavior:'walk in'},{time:10,angleDeg:265,radiusFactor:0.92,motion:'STILL',behavior:'sit down'},{time:20,angleDeg:265,radiusFactor:0.92,motion:'STILL',behavior:'backpack off'},{time:30,angleDeg:265,radiusFactor:0.92,motion:'STILL',behavior:'quick joke'},{time:40,angleDeg:265,radiusFactor:0.92,motion:'STILL',behavior:'stands up'},{time:50,angleDeg:265,radiusFactor:0.92,motion:'MOVING',behavior:'heads bathroom'},{time:60,angleDeg:175,radiusFactor:1.08,motion:'STILL',behavior:'nan'},{time:70,angleDeg:175,radiusFactor:1.08,motion:'STILL',behavior:'nan'},{time:80,angleDeg:175,radiusFactor:1.08,motion:'STILL',behavior:'nan'},{time:90,angleDeg:175,radiusFactor:1.08,motion:'STILL',behavior:'nan'},{time:100,angleDeg:175,radiusFactor:1.08,motion:'STILL',behavior:'nan'},{time:110,angleDeg:175,radiusFactor:1.08,motion:'STILL',behavior:'nan'},{time:120,angleDeg:175,radiusFactor:1.08,motion:'STILL',behavior:'nan'},{time:130,angleDeg:175,radiusFactor:1.08,motion:'STILL',behavior:'nan'},{time:140,angleDeg:175,radiusFactor:1.08,motion:'STILL',behavior:'nan'},{time:150,angleDeg:175,radiusFactor:1.08,motion:'STILL',behavior:'nan'},{time:160,angleDeg:175,radiusFactor:1.08,motion:'MOVING',behavior:'nan'},{time:170,angleDeg:269,radiusFactor:0.8,motion:'MOVING',behavior:'quick wave'},{time:180,angleDeg:55,radiusFactor:1.08,motion:'STILL',behavior:'nan'}
  ]},
  'Dog 1':{type:'companion',colors:['#8B4513','#8B4513','#8B4513'],hoverText:'Quiet, well-behaved. Barely moved, just followed with its eyes.',frames:[
    {time:0,angleDeg:228,radiusFactor:1.08,motion:'STILL',behavior:'nan'},{time:10,angleDeg:228,radiusFactor:1.08,motion:'STILL',behavior:'nan'},{time:20,angleDeg:228,radiusFactor:1.08,motion:'STILL',behavior:'nan'},{time:30,angleDeg:228,radiusFactor:1.08,motion:'STILL',behavior:'nan'},{time:40,angleDeg:228,radiusFactor:1.08,motion:'STILL',behavior:'nan'},{time:50,angleDeg:228,radiusFactor:1.08,motion:'MOVING',behavior:'nan'},{time:60,angleDeg:215,radiusFactor:0.92,motion:'STILL',behavior:'leans closer'},{time:70,angleDeg:215,radiusFactor:0.92,motion:'STILL',behavior:'quiet watch'},{time:80,angleDeg:215,radiusFactor:0.92,motion:'STILL',behavior:'small sniff'},{time:90,angleDeg:215,radiusFactor:0.92,motion:'STILL',behavior:'perks ears'},{time:100,angleDeg:215,radiusFactor:0.92,motion:'STILL',behavior:'perks ears'},{time:110,angleDeg:215,radiusFactor:0.92,motion:'STILL',behavior:'looks left'},{time:120,angleDeg:215,radiusFactor:0.92,motion:'STILL',behavior:'looks right'},{time:130,angleDeg:215,radiusFactor:0.92,motion:'STILL',behavior:'sits calmly'},{time:140,angleDeg:215,radiusFactor:0.92,motion:'STILL',behavior:'sits calmly'},{time:150,angleDeg:215,radiusFactor:0.92,motion:'STILL',behavior:'still waiting'},{time:160,angleDeg:215,radiusFactor:0.92,motion:'STILL',behavior:'still waiting'},{time:170,angleDeg:215,radiusFactor:0.92,motion:'STILL',behavior:'still waiting'},{time:180,angleDeg:215,radiusFactor:0.92,motion:'STILL',behavior:'still waiting'}
  ]},
  'Dog 2':{type:'companion',colors:['#A0522D','#A0522D','#A0522D'],hoverText:'Waited patiently while owner got coffee. Used to this routine.',frames:[
    {time:0,angleDeg:212,radiusFactor:0.92,motion:'MOVING',behavior:'heel by owner'},{time:10,angleDeg:237,radiusFactor:1.08,motion:'STILL',behavior:'nan'},{time:20,angleDeg:237,radiusFactor:1.08,motion:'STILL',behavior:'nan'},{time:30,angleDeg:237,radiusFactor:1.08,motion:'STILL',behavior:'nan'},{time:40,angleDeg:237,radiusFactor:1.08,motion:'STILL',behavior:'nan'},{time:50,angleDeg:237,radiusFactor:1.08,motion:'STILL',behavior:'nan'},{time:60,angleDeg:237,radiusFactor:1.08,motion:'STILL',behavior:'nan'},{time:70,angleDeg:237,radiusFactor:1.08,motion:'STILL',behavior:'nan'},{time:80,angleDeg:237,radiusFactor:1.08,motion:'STILL',behavior:'nan'},{time:90,angleDeg:237,radiusFactor:1.08,motion:'MOVING',behavior:'nan'},{time:100,angleDeg:120,radiusFactor:0.58,motion:'STILL',behavior:'sits near'},{time:110,angleDeg:120,radiusFactor:0.58,motion:'STILL',behavior:'watches feet'},{time:120,angleDeg:120,radiusFactor:0.58,motion:'MOVING',behavior:'alert ears'},{time:130,angleDeg:102,radiusFactor:0.5,motion:'MOVING',behavior:'ready to go'},{time:140,angleDeg:352,radiusFactor:1.08,motion:'MOVING',behavior:'nan'},{time:150,angleDeg:232,radiusFactor:1.08,motion:'MOVING',behavior:'nan'},{time:160,angleDeg:352,radiusFactor:1.08,motion:'STILL',behavior:'nan'},{time:170,angleDeg:352,radiusFactor:1.08,motion:'STILL',behavior:'nan'},{time:180,angleDeg:352,radiusFactor:1.08,motion:'STILL',behavior:'nan'}
  ]},
  'Bike 1':{type:'companion',colors:['#4682B4','#4682B4','#4682B4'],hoverText:'Leaned against a wall. Signs of wear from constant use.',frames:[
    {time:0,angleDeg:242,radiusFactor:1.08,motion:'STILL',behavior:'nan'},{time:10,angleDeg:242,radiusFactor:1.08,motion:'STILL',behavior:'nan'},{time:20,angleDeg:242,radiusFactor:1.08,motion:'STILL',behavior:'nan'},{time:30,angleDeg:242,radiusFactor:1.08,motion:'STILL',behavior:'nan'},{time:40,angleDeg:242,radiusFactor:1.08,motion:'MOVING',behavior:'nan'},{time:50,angleDeg:52,radiusFactor:0.4,motion:'MOVING',behavior:'rolling along'},{time:60,angleDeg:42,radiusFactor:0.4,motion:'MOVING',behavior:'rolling along'},{time:70,angleDeg:22,radiusFactor:0.45,motion:'MOVING',behavior:'rolling along'},{time:80,angleDeg:32,radiusFactor:0.92,motion:'STILL',behavior:'parked briefly'},{time:90,angleDeg:32,radiusFactor:0.92,motion:'STILL',behavior:'parked briefly'},{time:100,angleDeg:32,radiusFactor:0.92,motion:'STILL',behavior:'hand on bar'},{time:110,angleDeg:32,radiusFactor:0.92,motion:'STILL',behavior:'parked briefly'},{time:120,angleDeg:32,radiusFactor:0.92,motion:'STILL',behavior:'parked briefly'},{time:130,angleDeg:32,radiusFactor:0.92,motion:'MOVING',behavior:'careful steer'},{time:140,angleDeg:45,radiusFactor:1.08,motion:'STILL',behavior:'nan'},{time:150,angleDeg:45,radiusFactor:1.08,motion:'STILL',behavior:'nan'},{time:160,angleDeg:45,radiusFactor:1.08,motion:'STILL',behavior:'nan'},{time:170,angleDeg:45,radiusFactor:1.08,motion:'STILL',behavior:'nan'},{time:180,angleDeg:45,radiusFactor:1.08,motion:'STILL',behavior:'nan'}
  ]},
  'Stroller 1':{type:'companion',colors:['#FFB6C1','#FFB6C1','#FFB6C1'],hoverText:'The baby was quiet the whole time. Maybe sleeping.',frames:[
    {time:0,angleDeg:142,radiusFactor:0.92,motion:'STILL',behavior:'rolled beside mom'},{time:10,angleDeg:142,radiusFactor:0.92,motion:'STILL',behavior:'gentle rock'},{time:20,angleDeg:142,radiusFactor:0.92,motion:'STILL',behavior:'quiet fuss'},{time:30,angleDeg:142,radiusFactor:0.92,motion:'STILL',behavior:'gentle rock'},{time:40,angleDeg:142,radiusFactor:0.92,motion:'STILL',behavior:'still now'},{time:50,angleDeg:142,radiusFactor:0.92,motion:'STILL',behavior:'p1 checks time'},{time:60,angleDeg:142,radiusFactor:0.92,motion:'STILL',behavior:'soft coo'},{time:70,angleDeg:142,radiusFactor:0.92,motion:'STILL',behavior:'settles again'},{time:80,angleDeg:142,radiusFactor:0.92,motion:'STILL',behavior:'light sway'},{time:90,angleDeg:142,radiusFactor:0.92,motion:'STILL',behavior:'wheels locked'},{time:100,angleDeg:142,radiusFactor:0.92,motion:'STILL',behavior:'unlock wheels'},{time:110,angleDeg:142,radiusFactor:0.92,motion:'STILL',behavior:'slow roll'},{time:120,angleDeg:142,radiusFactor:0.92,motion:'STILL',behavior:'follow p2'},{time:130,angleDeg:142,radiusFactor:0.92,motion:'STILL',behavior:'steady roll'},{time:140,angleDeg:142,radiusFactor:0.92,motion:'STILL',behavior:'weaving gently'},{time:150,angleDeg:142,radiusFactor:0.92,motion:'STILL',behavior:'careful pace'},{time:160,angleDeg:142,radiusFactor:0.92,motion:'MOVING',behavior:'near platform'},{time:170,angleDeg:67,radiusFactor:0.8,motion:'MOVING',behavior:'short wait'},{time:180,angleDeg:67,radiusFactor:1.08,motion:'STILL',behavior:'nan'}
  ]}
};
/* ===================== 상태/DOM ===================== */
/* ===================== 상태/DOM ===================== */
let currentTime = 0;
let showVideo = 'opening';
let isBlinking = false;

const activeViews = { outfitColor:true, dwellTime:false, behaviour:false, path:false, companions:false };
let viewMode = 'aerial';               // 'aerial' | 'exploded'
let selectedFeature = 'outfitColor';

const trails = {};
const dwellState = {};
const dwellSizes = {};

const app = document.getElementById('app');
const screen = document.getElementById('screen');
const screenTitle = document.getElementById('screen-title');
const clockEl = document.getElementById('clock');
const overlay = document.getElementById('overlay');
const overlayTitle = document.getElementById('overlay-title');
const overlayBody = document.getElementById('overlay-body');

const stage = document.getElementById('stage');
const gridCircles = document.getElementById('grid-circles');
const gridSpokes = document.getElementById('grid-spokes');
const outerSegments = document.getElementById('outer-segments');
const entitiesLayer = document.getElementById('entities');

const hoverOverlay = document.getElementById('hover-overlay');
const hoverText = document.getElementById('hover-text');

/* ===================== 유틸 ===================== */
function svg(tag, attrs){ const el=document.createElementNS('http://www.w3.org/2000/svg',tag); for(const k in attrs) el.setAttribute(k, attrs[k]); return el; }
function clear(node){ while(node.firstChild) node.removeChild(node.firstChild); }
function formatTime(sec){ const base=4*60+56; const total=base*60+sec; const h=Math.floor(total/3600), m=Math.floor((total%3600)/60), s=total%60; return `${String(h).padStart(2,'0')}:${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}`; }
function polar(angleDeg, rf){ const t=angleDeg*Math.PI/180, R=80*rf; return {x:100+Math.cos(t)*R, y:100+Math.sin(t)*R, opacity: rf>1? Math.max(0,1-(rf-1)*10):1}; }
function getFrame(ent, t){ const slot=Math.floor(t/10)*10; return ent.frames.find(f=>f.time===slot) || ent.frames.at(-1); }
function interp(ent, t){
  let a=null,b=null;
  for(let i=0;i<ent.frames.length-1;i++){ if(ent.frames[i].time<=t && ent.frames[i+1].time>=t){ a=ent.frames[i]; b=ent.frames[i+1]; break; } }
  if(!a) return polar(ent.frames[0].angleDeg, ent.frames[0].radiusFactor);
  if(!b) return polar(ent.frames.at(-1).angleDeg, ent.frames.at(-1).radiusFactor);
  const r=(t-a.time)/(b.time-a.time);
  return polar(a.angleDeg + (b.angleDeg - a.angleDeg)*r, a.radiusFactor + (b.radiusFactor - a.radiusFactor)*r);
}
function polar(angleDeg, radiusFactor, cx = 100, cy = 100, R = 80) {
  const theta = angleDeg * Math.PI / 180;   // 0° right, 90° up (with the -sin below)
  const r = radiusFactor * R;
  const x = cx + Math.cos(theta) * r;
  const y = cy - Math.sin(theta) * r;       // NOTE: minus makes 90° go UP on screen
  return { x, y };
}
function svgToClient(x, y){
  const rect = stage.getBoundingClientRect();
  const vb = stage.viewBox.baseVal;
  const nx = (x - vb.x) / vb.width;
  const ny = (y - vb.y) / vb.height;
  return { cx: rect.left + nx * rect.width, cy: rect.top + ny * rect.height };
}
function readCssNumber(varName, fallback){
  const raw = getComputedStyle(document.documentElement).getPropertyValue(varName);
  const num = parseFloat(String(raw || '').trim());
  return Number.isFinite(num) ? num : fallback;
}
const lerp = (a,b,t)=> a + (b-a)*t;
const easeInOut = t => t<.5 ? 2*t*t : 1 - Math.pow(-2*t+2,2)/2;

/* ===================== 공통 Hover 헬퍼 ===================== */
function addHoverHandlers(el, pos, text){
  el.classList.add('entity-hit');
  el.style.pointerEvents = 'auto';
  el.addEventListener('mouseenter', ()=>{
    const {cx, cy} = svgToClient(pos.x, pos.y);
    openComment(cx, cy, text);
  });
  el.addEventListener('mousemove', ()=>{
    const {cx, cy} = svgToClient(pos.x, pos.y);
    setRippleCenter(cx, cy);
  });
  el.addEventListener('mouseleave', closeComment);
}
function addInvisibleHitCircle(parentG, pos, text, r=12){
  const hit = svg('circle', { cx:pos.x, cy:pos.y, r, fill:'transparent' });
  addHoverHandlers(hit, pos, text);
  parentG.appendChild(hit);
}


/* ===================== 그리드(항공) ===================== */
let GRAD_SEQ = 0;
let defsRoot = document.getElementById('defs-root');
if (!defsRoot) {
  defsRoot = document.createElementNS('http://www.w3.org/2000/svg','defs');
  defsRoot.setAttribute('id','defs-root');
  stage.insertBefore(defsRoot, stage.firstChild);
}
function makeGrid(){
  
  [20,40,60,80].forEach(r=>{
    const c = svg('circle',{cx:100,cy:100,r,fill:'none',stroke:'var(--grid)','stroke-width':0.3,opacity:0.3});
    gridCircles.appendChild(c);
  });
  for(let i=0;i<10;i++){
    const a=i*360/10, t=a*Math.PI/180, x=100+Math.cos(t)*80, y=100+Math.sin(t)*80;
    gridSpokes.appendChild(svg('line',{x1:100,y1:100,x2:x,y2:y,stroke:'var(--grid)','stroke-width':0.3,opacity:0.3, 'stroke-dasharray': '3 3','vector-effect': 'non-scaling-stroke'}));
  }
  [0,60,120,180,240,300].forEach(start=>{
    const gap=15, s=start+gap/2, e=start+60-gap/2;
    const sr=s*Math.PI/180, er=e*Math.PI/180;
    const x1=100+Math.cos(sr)*80, y1=100+Math.sin(sr)*80;
    const x2=100+Math.cos(er)*80, y2=100+Math.sin(er)*80;
    outerSegments.appendChild(svg('path',{
      d:`M ${x1} ${y1} A 80 80 0 0 1 ${x2} ${y2}`,
      fill:'none', stroke:'var(--grid-muted)', 'stroke-width':8, 'stroke-linecap':'round', opacity:0.8
    }));
  });
}

/* ===================== 호버 리플/코멘트 ===================== */
function setRippleCenter(px, py){
  hoverOverlay.style.setProperty('--cx', `${px}px`);
  hoverOverlay.style.setProperty('--cy', `${py}px`);
}
function openComment(px, py, text){
  setRippleCenter(px, py);
  hoverText.textContent = text || '';
  hoverOverlay.classList.add('active');
}
function closeComment(){
  hoverOverlay.classList.remove('active');
  hoverText.textContent = '';
}
let HOVER_GUARDS_WIRED = false;
function wireHoverGuardsOnce(){
  if (HOVER_GUARDS_WIRED) return;
  HOVER_GUARDS_WIRED = true;
  stage.addEventListener('mouseleave', closeComment);
  window.addEventListener('blur', closeComment);
  document.addEventListener('visibilitychange', ()=>{ if(document.hidden) closeComment(); });
  stage.addEventListener('touchend', closeComment, {passive:true});
  stage.addEventListener('pointercancel', closeComment);
  document.addEventListener('pointermove', (e)=>{
    const onHit = e.target && e.target.classList && e.target.classList.contains('entity-hit');
    if(!onHit) closeComment();
  });
}

/* ===================== 엔티티 ===================== */
function initEntities(){
  Object.keys(rawData).forEach(id=>{
    trails[id]=[];
    dwellState[id]={diamPx:10,lastMotion:null};
    dwellSizes[id]=10;
  });
}

function renderAerial(){
  clear(entitiesLayer);
  Object.entries(rawData).forEach(([id, ent])=>{
    const pos = interp(ent, currentTime);
    if(!pos) return;

    const isPerson = ent.type==='person';
    const isComp   = ent.type==='companion';
    const showPerson = isPerson && activeViews.outfitColor;
    const showComp   = isComp   && activeViews.companions;
    const frame = getFrame(ent, currentTime);

    const g = svg('g', { opacity: pos.opacity });
    entitiesLayer.appendChild(g);

    // Outfit / Companions
    if(showPerson || showComp){
      const gradId = `grad-${++GRAD_SEQ}`;
      const grad = svg('radialGradient', { id:gradId });
      [['0%',0],['50%',1],['100%',2]].forEach(([off,idx])=>{
        grad.appendChild(svg('stop', { offset:off, 'stop-color': ent.colors[idx] }));
      });
      defsRoot.appendChild(grad);

      const dot = svg('circle', { cx:pos.x, cy:pos.y, r:7, fill:`url(#${gradId})` });
      g.appendChild(dot);
      dot.appendChild(svg('animate',{ attributeName:'r', values:'7;9;7', dur:'1.5s', repeatCount:'indefinite' }));
      dot.appendChild(svg('animate',{ attributeName:'opacity', values:'1;0.7;1', dur:'1.5s', repeatCount:'indefinite' }));
      addHoverHandlers(dot, pos, ent.hoverText);
    }

    // Dwell
    if(activeViews.dwellTime && isPerson){
      const ring = svg('circle',{cx:pos.x, cy:pos.y, r:Math.max(6,dwellSizes[id]/2), fill:'none', stroke:ent.colors[0], 'stroke-width':0.5});
      g.appendChild(ring);
      addHoverHandlers(ring, pos, ent.hoverText);
      addInvisibleHitCircle(g, pos, ent.hoverText, 12);
    }

    // Behaviour
    if(activeViews.behaviour && isPerson && frame?.behavior){
      const t = svg('text',{x:pos.x, y:pos.y-8, fill:ent.colors[0], 'font-size':3.5, 'text-anchor':'middle'});
      t.textContent = frame.behavior; g.appendChild(t);
      addHoverHandlers(t, pos, ent.hoverText);
      addInvisibleHitCircle(g, pos, ent.hoverText, 10);
    }

    // Path
    if(activeViews.path && isPerson && trails[id]?.length>1){
      const d = trails[id].map((p,i)=> `${i===0?'M':'L'} ${p.x} ${p.y}`).join(' ');
      const path = svg('path',{d, fill:'none', stroke:ent.colors[0], 'stroke-width':0.8, opacity:0.6});
      g.appendChild(path);
      addHoverHandlers(path, pos, ent.hoverText);
      addInvisibleHitCircle(g, pos, ent.hoverText, 10);
    }
  });
}

/* ===================== Exploded (애니메이션: 중앙→상단, 아래로 펼침) ===================== */
function buildExplodedGrid(g){
  [20,40,60,80].forEach(r=>{
    g.appendChild(svg('circle',{cx:100,cy:100,r,fill:'none',stroke:'var(--grid)','stroke-width':0.25,opacity:0.35,'stroke-dasharray':'1 2'}));
  });
  for(let i=0;i<16;i++){
    const a=i*360/16, t=a*Math.PI/180, x=100+Math.cos(t)*80, y=100+Math.sin(t)*80;
    g.appendChild(svg('line',{x1:100,y1:100,x2:x,y2:y,stroke:'var(--grid)','stroke-width':0.25,opacity:0.35,'stroke-dasharray':'1 2'}));
  }
  [0,60,120,180,240,300].forEach(start=>{
    const gap=15, s=start+gap/2, e=start+60-gap/2;
    const sr=s*Math.PI/180, er=e*Math.PI/180;
    const x1=100+Math.cos(sr)*80, y1=100+Math.sin(sr)*80;
    const x2=100+Math.cos(er)*80, y2=100+Math.sin(er)*80;
    g.appendChild(svg('path',{ d:`M ${x1} ${y1} A 80 80 0 0 1 ${x2} ${y2}`, class:'exp-segment' }));
  });
}

/**
 * progress p: 0 → 1
 * - p=0  : 한 화면(Aerial) 중앙에 모든 레이어가 겹침(스케일Y=1, 오프셋=0)
 * - p→1  : 중앙 레이어(Outfit)가 위로 liftUp, 나머지 4개가 gap 간격으로 아래로 내려감
 * - 스케일Y는 1 → squash 로 보간(순수 Y축 압축, 회전/스큐 없음)
 */
function renderExploded(p){
  clear(entitiesLayer);

  // CSS 변수 → 숫자 (없으면 기본값)
  const squashTarget = readCssNumber('--exp-target-squash', 0.42);
  const gapTarget    = readCssNumber('--exp-gap',          26);
  const liftTarget   = readCssNumber('--exp-lift',         gapTarget); // 기본: gap와 동일

  const k = easeInOut(p);

  // Aerial 그리드 숨김/표시
  if (k > 0.02) stage.classList.add('exploded'); else stage.classList.remove('exploded');

  const layers = ['outfitColor','dwellTime','behaviour','path','companions'];
  const cx=100, cy=100;

  // 최종 배치 파라미터
  const liftUp = liftTarget;            // 최상단(중앙 레이어)이 올라갈 양
  const gap    = gapTarget;             // 레이어 간 간격
  const baseY  = -liftUp;               // 최상단 레이어 중심 Y
  const scaleY = lerp(1, squashTarget, k);

  layers.forEach((feature, idx)=>{
    // [-liftUp, -liftUp+gap, -liftUp+2*gap, ...] 로 배치 → 과도한 큰 빈칸 제거
    const targetOffset = baseY + idx * gap;
    const offsetY = lerp(0, targetOffset, k);

    const layerG = svg('g', {});
    layerG.setAttribute(
      'transform',
      `translate(0 ${offsetY}) translate(${cx} ${cy}) scale(1 ${scaleY}) translate(${-cx} ${-cy})`
    );
    entitiesLayer.appendChild(layerG);

    // 얇은 exploded 전용 그리드 (페이드 인)
    const gridG = svg('g', { opacity: lerp(0, 1, k) });
    buildExplodedGrid(gridG);
    layerG.appendChild(gridG);

    // --- 엔티티 그리기 (기존 그대로) ---
    const entsG = svg('g', {}); layerG.appendChild(entsG);

    Object.entries(rawData).forEach(([id, ent])=>{
      const pos = interp(ent, currentTime);
      if(!pos) return;
      const frame = getFrame(ent, currentTime);
      const isPerson = ent.type==='person';
      const isComp   = ent.type==='companion';

      if (feature==='outfitColor' && isPerson && activeViews.outfitColor){
        const gradId = `grad-ex-${++GRAD_SEQ}`;
        const grad = svg('radialGradient', { id:gradId });
        [['0%',0],['50%',1],['100%',2]].forEach(([off,i])=>{
          grad.appendChild(svg('stop',{offset:off,'stop-color':ent.colors[i]}));
        });
        defsRoot.appendChild(grad);
        const c = svg('circle',{cx:pos.x, cy:pos.y, r:6, fill:`url(#${gradId})`, opacity:1});
        entsG.appendChild(c);
        addHoverHandlers(c, pos, ent.hoverText);
      }

      if (feature==='dwellTime' && isPerson && activeViews.dwellTime){
        const r = Math.max(6, dwellSizes[id]/2);
        const ring = svg('circle',{cx:pos.x, cy:pos.y, r, fill:'none', stroke:ent.colors[0], 'stroke-width':2, opacity:1});
        entsG.appendChild(ring);
        addHoverHandlers(ring, pos, ent.hoverText);
        addInvisibleHitCircle(entsG, pos, ent.hoverText, 12);
      }

      if (feature==='behaviour' && isPerson && activeViews.behaviour && frame?.behavior){
        const t = svg('text',{x:pos.x, y:pos.y-8, fill:ent.colors[0], 'font-size':3.5, 'text-anchor':'middle', opacity:1});
        t.textContent = frame.behavior; entsG.appendChild(t);
        addHoverHandlers(t, pos, ent.hoverText);
        addInvisibleHitCircle(entsG, pos, ent.hoverText, 10);
      }

      if (feature==='path' && isPerson && activeViews.path && trails[id]?.length>1){
        const d = trails[id].map((p,i)=> `${i===0?'M':'L'} ${p.x} ${p.y}`).join(' ');
        const path = svg('path',{d, fill:'none', stroke:ent.colors[0], 'stroke-width':0.8, opacity:1});
        entsG.appendChild(path);
        addHoverHandlers(path, pos, ent.hoverText);
        addInvisibleHitCircle(entsG, pos, ent.hoverText, 10);
      }

      if (feature==='companions' && isComp && activeViews.companions){
        const c = svg('circle',{cx:pos.x, cy:pos.y, r:6, fill:ent.colors[2], opacity:1});
        entsG.appendChild(c);
        addHoverHandlers(c, pos, ent.hoverText);
      }
    });
  });
}
/* =========================================================
   부드러운 전환용 레이어/상태
   ========================================================= */
let kExplode = 0;                 // 0=aerial, 1=exploded
let targetK  = 0;
let rafId    = null;
let transitioning = false;

const root = document.documentElement;

const WRAPS = {
  aerial: null,     // <g class="aerial-wrap">
  exploded: null,   // <g class="exploded-wrap"> (안에 exp-layer 5개)
  layers: []        // [ {g, gridG, entsG}, ... ]
};

/* 한번만 만든다 */
function buildAerialOnce(){
  if (WRAPS.aerial) return;
  WRAPS.aerial = svg('g', { class:'aerial-wrap' });
  // 기존 aerial 그리드/엔티티 그룹을 aerial-wrap 안으로 옮겨준다
  const gridG = svg('g', {});           // 기본 그리드
  gridG.appendChild(gridCircles);       // 기존 요소를 이동
  gridG.appendChild(gridSpokes);
  gridG.appendChild(outerSegments);

  const entsG = entitiesLayer;          // 기존 entities 레이어 그대로 사용
  WRAPS.aerial.appendChild(gridG);
  WRAPS.aerial.appendChild(entsG);

  stage.appendChild(WRAPS.aerial);
}

function buildExplodedOnce(){
  if (WRAPS.exploded) return;

  WRAPS.exploded = svg('g', { class:'exploded-wrap' });
  stage.appendChild(WRAPS.exploded);

  WRAPS.layers.length = 0;
  const cx=100, cy=100;
  for (let i=0;i<5;i++){
    const g = svg('g', { class:'exp-layer', 'data-layer':String(i) });

    // 얇은 그리드(점선 원/스포크 + 세그먼트)
    const gridG = svg('g', {});
    buildExplodedGrid(gridG);
    g.appendChild(gridG);

    // 엔티티 표시 전용 그룹 (전환 중에도 DOM 유지)
    const entsG = svg('g', { class:'exp-ents' });
    g.appendChild(entsG);

    // 초깃값: aerial과 동일한 위치/스케일(=수직 압축 1)
    g.setAttribute('transform', `translate(${cx} ${cy}) scale(1 1) translate(${-cx} ${-cy})`);

    WRAPS.exploded.appendChild(g);
    WRAPS.layers.push({ g, gridG, entsG });
  }

  // 초기엔 감춰둠
  WRAPS.exploded.style.display = 'none';
}

/* 전환 시 transform만 갱신 */
function applyExplodedTransforms(k){
  const squashTarget = readCssNumber('--exp-target-squash', 0.42);
  const gap          = readCssNumber('--exp-gap', 26);
  const lift         = readCssNumber('--exp-lift', gap);

  const cx=100, cy=100;
  const baseY  = -lift;
  const scaleY = lerp(1, squashTarget, k);

  WRAPS.layers.forEach((L, idx)=>{
    const offsetY = (baseY + idx*gap) * k;   // k==0이면 0, k==1이면 목표 위치
    L.g.setAttribute(
      'transform',
      `translate(0 ${offsetY}) translate(${cx} ${cy}) scale(1 ${scaleY}) translate(${-cx} ${-cy})`
    );
    // 전환 동안 그리드는 서서히 나타남
    L.gridG.setAttribute('opacity', String(lerp(0, 1, k)));
  });
}

/* 엔티티를 한 번만 채워 넣고, 위치만 업데이트 */
function populateExplodedEntitiesOnce(){
  // 이미 채워져 있으면 스킵
  if (WRAPS.layers[0]?.entsG.childNodes.length) return;

  // 데이터별로 필요한 feature에 맞춰 5층 모두에 배치
  //   - outfitColor : 사람만
  //   - dwellTime   : 사람만(원)
  //   - behaviour   : 사람만(텍스트)
  //   - path        : 사람만(경로)
  //   - companions  : 동반자만
  const features = ['outfitColor','dwellTime','behaviour','path','companions'];

  Object.entries(rawData).forEach(([id, ent])=>{
    // id별 공용 hover 텍스트 핸들
    const addHover = (node, pos, text)=>{
      node.classList.add('entity-dot');
      node.addEventListener('mouseenter', ()=>{ const {cx,cy}=svgToClient(pos.x,pos.y); openComment(cx,cy,text); });
      node.addEventListener('mousemove',  ()=>{ const {cx,cy}=svgToClient(pos.x,pos.y); setRippleCenter(cx,cy); });
      node.addEventListener('mouseleave', closeComment);
    };

    features.forEach((feat, layerIdx)=>{
      const L = WRAPS.layers[layerIdx].entsG;
      const pos = interp(ent, currentTime) || {x:100,y:100};

      if (feat==='outfitColor' && ent.type==='person'){
        const gradId = `grad-ex-${id}`;
        if (!document.getElementById(gradId)){
          const grad = svg('radialGradient', { id:gradId });
          [['0%',0],['50%',1],['100%',2]].forEach(([off,i])=>{
            grad.appendChild(svg('stop',{offset:off,'stop-color':ent.colors[i]}));
          });
          defsRoot.appendChild(grad);
        }
        const dot = svg('circle',{cx:pos.x, cy:pos.y, r:6, fill:`url(#grad-ex-${id})`});
        L.appendChild(dot);
        addHover(dot, pos, ent.hoverText);
      }

      if (feat==='dwellTime' && ent.type==='person'){
        const ring = svg('circle',{cx:pos.x, cy:pos.y, r:8, fill:'none', stroke:ent.colors[0], 'stroke-width':2});
        L.appendChild(ring);
        addHover(ring, pos, ent.hoverText);
      }

      if (feat==='behaviour' && ent.type==='person'){
        const t = svg('text',{x:pos.x, y:pos.y-8, fill:ent.colors[0], 'font-size':3.5, 'text-anchor':'middle'});
        L.appendChild(t);
        addHover(t, pos, ent.hoverText);
      }

      if (feat==='path' && ent.type==='person'){
        const path = svg('path',{d:`M ${pos.x} ${pos.y}`, fill:'none', stroke:ent.colors[0], 'stroke-width':0.8});
        L.appendChild(path);
        addHover(path, pos, ent.hoverText);
      }

      if (feat==='companions' && ent.type==='companion'){
        const c = svg('circle',{cx:pos.x, cy:pos.y, r:6, fill:ent.colors[2]});
        L.appendChild(c);
        addHover(c, pos, ent.hoverText);
      }
    });
  });
}

/* 전환 애니메이션(양방향) */
function smoothToView(view){
  targetK = (view==='exploded') ? 1 : 0;
  if (rafId) cancelAnimationFrame(rafId);

  // 준비: 두 씬 모두 만들어 두고 보이게
  buildAerialOnce();
  buildExplodedOnce();
  populateExplodedEntitiesOnce();

  WRAPS.aerial.style.display   = '';
  WRAPS.exploded.style.display = '';

  transitioning = true;
  document.body.classList.add('body--transitioning');

  const startK = kExplode;
  const t0 = performance.now();
  const DUR = 600;  // 전환 시간(ms)

  const ease = (t)=> t<.5 ? 2*t*t : 1 - Math.pow(-2*t+2,2)/2;

  const step = (now)=>{
    const u = Math.min(1, (now - t0)/DUR);
    kExplode = startK + (targetK - startK) * ease(u);

    // 씬 노출/불투명도: 겹치지 않고 부드럽게
    WRAPS.aerial.style.opacity   = String(1 - kExplode);
    WRAPS.exploded.style.opacity = String(kExplode);

    // 레이어 기하 보간
    applyExplodedTransforms(kExplode);

    if (u < 1){
      rafId = requestAnimationFrame(step);
    }else{
      // 마무리: 목표 씬만 남기고 display 최적화
      kExplode = targetK;
      WRAPS.aerial.style.opacity   = kExplode===0 ? '1' : '0';
      WRAPS.exploded.style.opacity = kExplode===1 ? '1' : '0';
      WRAPS.aerial.style.display   = kExplode===0 ? ''   : 'none';
      WRAPS.exploded.style.display = kExplode===1 ? ''   : 'none';
      transitioning = false;
      document.body.classList.remove('body--transitioning');
    }
  };
  rafId = requestAnimationFrame(step);
}

/* 외부에서 호출하는 뷰 전환 함수(기존 setView 대체) */
function setView(v){
  viewMode = v;
  document.querySelectorAll('.view-toggle')
    .forEach(el=> el.classList.toggle('active', el.dataset.view===v));
  smoothToView(v);
}


/* ===================== 공용 렌더 (progress 기반) ===================== */
let explodeProgress = 0; // 0..1
let explodeTarget   = 0;
let explodeRAF = null;

function render(){
  if (explodeProgress <= 0.0001){
    stage.classList.remove('exploded');
    renderAerial();
  }else{
    renderExploded(explodeProgress);
  }
}

function animateExploded(to){
  explodeTarget = to;
  if (explodeRAF) cancelAnimationFrame(explodeRAF);
  const start = performance.now();
  const from  = explodeProgress;
  const D = 650; // ms

  const step = (t)=>{
    const k = Math.min(1, (t - start)/D);
    explodeProgress = lerp(from, explodeTarget, easeInOut(k));
    render();
    if (k < 1) explodeRAF = requestAnimationFrame(step);
  };
  explodeRAF = requestAnimationFrame(step);
}

/* ===================== 시간/드웰/트레일 ===== */
function tick(dt){
  Object.entries(rawData).forEach(([id, ent])=>{
    const fr = getFrame(ent, currentTime);
    const state = dwellState[id];
    const still = fr?.motion === 'STILL';
    if(state.lastMotion==='STILL' && fr?.motion==='MOVING') state.diamPx = 10;
    state.diamPx = still ? state.diamPx + 0.5*dt : 10;
    state.lastMotion = fr?.motion || null;
    dwellSizes[id] = state.diamPx;

    const p = interp(ent, currentTime);
    if(activeViews.path && ent.type==='person' && p){
      const arr = (trails[id] ||= []);
      const prev = arr[arr.length-1];
      if(!prev || Math.hypot(prev.x-p.x, prev.y-p.y) > 0.2){
        arr.push({x:p.x, y:p.y});
        if(arr.length>60) arr.shift();
      }
    }
  });
}

/* ===================== UI ===================== */
function setView(v){
  viewMode = v;
  document.querySelectorAll('.view-toggle').forEach(el=> el.classList.toggle('active', el.dataset.view===v));
  if(v==='exploded') animateExploded(1);
  else               animateExploded(0);
}
function bindUI(){
    // === Top-nav Hover Glow ===
// 한 번만 생성해서 body에 붙임
// Top-nav hover glow -----------------------------
const navGlow = document.getElementById('nav-glow');
document.querySelectorAll('.nav-item .nav-btn').forEach(btn=>{
  btn.addEventListener('mouseenter', ()=>{
    const r = btn.getBoundingClientRect();
    const cx = r.left + r.width/2;
    const cy = r.top  + r.height/2;
    navGlow.style.setProperty('--nx', `${cx}px`);
    navGlow.style.setProperty('--ny', `${cy}px`);
    navGlow.classList.add('show');
  });
  btn.addEventListener('mouseleave', ()=> navGlow.classList.remove('show'));
});



  document.querySelectorAll('.toggle').forEach(el=>{
    const key = el.dataset.key;
    if(activeViews[key]) el.classList.add('active');
    el.addEventListener('click', ()=>{
      activeViews[key]=!activeViews[key];
      el.classList.toggle('active',activeViews[key]);
      if (viewMode==='exploded' && activeViews[key]) selectedFeature = key;
      render();
    });
  });

  document.querySelectorAll('.view-toggle').forEach(el=>{
    const v = el.dataset.view; if(v===viewMode) el.classList.add('active');
    el.addEventListener('click', ()=> setView(v));
  });


}

/* ===================== 메인 루프 ===================== */
let lastTS = performance.now();
let secTimer = null;

function startPlayback(){
  setTimeout(()=>{
    showVideo = 'none';
    screen.classList.add('is-hidden');
    app.classList.remove('is-hidden');

    secTimer = setInterval(()=>{
      if(currentTime >= 180){
        clearInterval(secTimer);
        showVideo = 'closing';
        screenTitle.textContent = 'Closing Animation';
        screen.classList.remove('is-hidden');
        app.classList.add('is-hidden');
        return;
      }
      currentTime += 1;
      clockEl.textContent = formatTime(currentTime);
    },1000);

    lastTS = performance.now();
    requestAnimationFrame(loop);
  },3000);
}

function loop(ts){
  if(showVideo !== 'none') return;
  const dt = Math.max(0,(ts-lastTS)/1000); lastTS = ts;

  if(currentTime>=175 && currentTime<180){
    if(!isBlinking){ isBlinking=true; app.classList.add('blink'); if(!loop._blink){ loop._blink=setInterval(()=>app.classList.toggle('blink'),500);} }
  }else{
    isBlinking=false; app.classList.remove('blink'); if(loop._blink){ clearInterval(loop._blink); loop._blink=null; }
  }

  tick(dt);
  render();
  requestAnimationFrame(loop);
}

/* ===================== 부트스트랩 ===================== */
(function init(){
  screenTitle.textContent = 'Opening Animation';
  clockEl.textContent = formatTime(0);
  makeGrid();
  initEntities();
  bindUI();
  wireHoverGuardsOnce();
  setView('aerial');   // 시작은 Aerial
  startPlayback();
})();



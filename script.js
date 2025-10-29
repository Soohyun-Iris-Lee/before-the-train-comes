/* ===================== data ===================== */
const rawData = { /* ── merged with CSV frames; colors + hoverText preserved ── */
  'P01':{type:'person',colors:['#d3dcdd','#bcb93d','#eab4c9'],hoverText:'Came in a pair - they look calm, maybe used to this commute. Kept checking the time but not in a rushed way.',frames:[
    {time:0,angleDeg:140,radiusFactor:0.92,motion:'STILL',behavior:'arrive together'},{time:10,angleDeg:140,radiusFactor:0.92,motion:'STILL',behavior:'quick chat'},{time:20,angleDeg:140,radiusFactor:0.92,motion:'STILL',behavior:'checking time'},{time:30,angleDeg:140,radiusFactor:0.92,motion:'STILL',behavior:'quick chat'},{time:40,angleDeg:140,radiusFactor:0.92,motion:'STILL',behavior:'quick chat'},{time:50,angleDeg:140,radiusFactor:0.92,motion:'STILL',behavior:'looks at phone'},{time:60,angleDeg:140,radiusFactor:0.92,motion:'STILL',behavior:'looks at phone'},{time:70,angleDeg:140,radiusFactor:0.92,motion:'STILL',behavior:'listening to music'},{time:80,angleDeg:140,radiusFactor:0.92,motion:'STILL',behavior:'looks at phone'},{time:90,angleDeg:140,radiusFactor:0.92,motion:'STILL',behavior:'looks at phone'},{time:100,angleDeg:140,radiusFactor:0.92,motion:'STILL',behavior:'looks at phone'},{time:110,angleDeg:140,radiusFactor:0.92,motion:'STILL',behavior:'looks at phone'},{time:120,angleDeg:140,radiusFactor:0.92,motion:'STILL',behavior:'glances at train time'},{time:130,angleDeg:140,radiusFactor:0.92,motion:'STILL',behavior:'looks at phone'},{time:140,angleDeg:140,radiusFactor:0.92,motion:'STILL',behavior:'looks at phone'},{time:150,angleDeg:140,radiusFactor:0.92,motion:'STILL',behavior:'looks at phone'},{time:160,angleDeg:140,radiusFactor:0.92,motion:'MOVING',behavior:'gets up'},{time:170,angleDeg:65,radiusFactor:0.8,motion:'MOVING',behavior:'walks toward exit'},{time:180,angleDeg:65,radiusFactor:1.08,motion:'STILL',behavior:' '}
  ]},
  'P02':{type:'person',colors:['#e4c7d0','#a46269','#795664'],hoverText:'The planner of the two. Did the quick timetable check and nodded.',frames:[
    {time:0,angleDeg:135,radiusFactor:0.92,motion:'STILL',behavior:'arrive with partner'},{time:10,angleDeg:135,radiusFactor:0.92,motion:'STILL',behavior:'munching on sandwich'},{time:20,angleDeg:135,radiusFactor:0.92,motion:'STILL',behavior:'munching on sandwich'},{time:30,angleDeg:135,radiusFactor:0.92,motion:'STILL',behavior:'munching on sandwich'},{time:40,angleDeg:135,radiusFactor:0.92,motion:'MOVING',behavior:'gets up'},{time:50,angleDeg:80,radiusFactor:0.7,motion:'MOVING',behavior:'scans timetable'},{time:60,angleDeg:135,radiusFactor:0.92,motion:'STILL',behavior:'munching on sandwich'},{time:70,angleDeg:135,radiusFactor:0.92,motion:'STILL',behavior:'munching on sandwich'},{time:80,angleDeg:135,radiusFactor:0.92,motion:'STILL',behavior:'munching on sandwich'},{time:90,angleDeg:135,radiusFactor:0.92,motion:'STILL',behavior:'nods yes'},{time:100,angleDeg:135,radiusFactor:0.92,motion:'STILL',behavior:'drink water'},{time:110,angleDeg:135,radiusFactor:0.92,motion:'STILL',behavior:'glances at stroller'},{time:120,angleDeg:135,radiusFactor:0.92,motion:'STILL',behavior:'smiles at stroller'},{time:130,angleDeg:135,radiusFactor:0.92,motion:'STILL',behavior:'scrolls on phone'},{time:140,angleDeg:135,radiusFactor:0.92,motion:'STILL',behavior:'scrolls on phone'},{time:150,angleDeg:135,radiusFactor:0.92,motion:'STILL',behavior:'scrolls on phone'},{time:160,angleDeg:135,radiusFactor:0.92,motion:'MOVING',behavior:'gets up, checks baby'},{time:170,angleDeg:68,radiusFactor:0.8,motion:'MOVING',behavior:'leaves to train'},{time:180,angleDeg:68,radiusFactor:1.08,motion:'STILL',behavior:' '}
  ]},
  'P03':{type:'person',colors:['#55533e','#a4ac72','#fadf85'],hoverText:'Wandered a lot, could not sit still. Just curious about everything.',frames:[
    {time:0,angleDeg:240,radiusFactor:1.08,motion:'STILL',behavior:' '},{time:10,angleDeg:240,radiusFactor:1.08,motion:'STILL',behavior:' '},{time:20,angleDeg:240,radiusFactor:1.08,motion:'STILL',behavior:' '},{time:30,angleDeg:240,radiusFactor:1.08,motion:'STILL',behavior:' '},{time:40,angleDeg:240,radiusFactor:1.08,motion:'MOVING',behavior:' '},{time:50,angleDeg:50,radiusFactor:0.4,motion:'MOVING',behavior:'slow walk'},{time:60,angleDeg:40,radiusFactor:0.4,motion:'MOVING',behavior:'circling benches'},{time:70,angleDeg:20,radiusFactor:0.45,motion:'MOVING',behavior:'peeks outside'},{time:80,angleDeg:30,radiusFactor:0.92,motion:'STILL',behavior:'checks time'},{time:90,angleDeg:30,radiusFactor:0.92,motion:'STILL',behavior:'stretches legs'},{time:100,angleDeg:30,radiusFactor:0.92,motion:'STILL',behavior:'loops around'},{time:110,angleDeg:30,radiusFactor:0.92,motion:'STILL',behavior:'sips water'},{time:120,angleDeg:30,radiusFactor:0.92,motion:'STILL',behavior:'heads back'},{time:130,angleDeg:30,radiusFactor:0.92,motion:'MOVING',behavior:'grabs backpack'},{time:140,angleDeg:43,radiusFactor:1.08,motion:'STILL',behavior:' '},{time:150,angleDeg:43,radiusFactor:1.08,motion:'STILL',behavior:' '},{time:160,angleDeg:43,radiusFactor:1.08,motion:'STILL',behavior:' '},{time:170,angleDeg:43,radiusFactor:1.08,motion:'STILL',behavior:' '},{time:180,angleDeg:43,radiusFactor:1.08,motion:'STILL',behavior:' '}
  ]},
  'P04':{type:'person',colors:['#a28948','#733e2e','#7184b9'],hoverText:'Sat for a while then got coffee. Calm routine.',frames:[
    {time:0,angleDeg:210,radiusFactor:0.92,motion:'MOVING',behavior:'already seated'},{time:10,angleDeg:235,radiusFactor:1.08,motion:'STILL',behavior:' '},{time:20,angleDeg:235,radiusFactor:1.08,motion:'STILL',behavior:' '},{time:30,angleDeg:235,radiusFactor:1.08,motion:'STILL',behavior:' '},{time:40,angleDeg:235,radiusFactor:1.08,motion:'STILL',behavior:' '},{time:50,angleDeg:235,radiusFactor:1.08,motion:'STILL',behavior:' '},{time:60,angleDeg:235,radiusFactor:1.08,motion:'STILL',behavior:' '},{time:70,angleDeg:235,radiusFactor:1.08,motion:'STILL',behavior:' '},{time:80,angleDeg:235,radiusFactor:1.08,motion:'STILL',behavior:' '},{time:90,angleDeg:235,radiusFactor:1.08,motion:'MOVING',behavior:' '},{time:100,angleDeg:118,radiusFactor:0.58,motion:'STILL',behavior:'adjusts coat'},{time:110,angleDeg:118,radiusFactor:0.58,motion:'STILL',behavior:'stands slowly'},{time:120,angleDeg:118,radiusFactor:0.58,motion:'MOVING',behavior:'looks to board'},{time:130,angleDeg:100,radiusFactor:0.5,motion:'MOVING',behavior:'nods to self'},{time:140,angleDeg:350,radiusFactor:1.08,motion:'MOVING',behavior:' '},{time:150,angleDeg:230,radiusFactor:1.08,motion:'MOVING',behavior:' '},{time:160,angleDeg:350,radiusFactor:1.08,motion:'STILL',behavior:' '},{time:170,angleDeg:350,radiusFactor:1.08,motion:'STILL',behavior:' '},{time:180,angleDeg:350,radiusFactor:1.08,motion:'STILL',behavior:' '}
  ]},
  'P05':{type:'person',colors:['#5a3b4f','#edceb7','#ce6641'],hoverText:'Waiting for someone, kept checking the door and pacing. Big smile when partner showed up.',frames:[
    {time:0,angleDeg:65,radiusFactor:1.08,motion:'STILL',behavior:' '},{time:10,angleDeg:65,radiusFactor:1.08,motion:'MOVING',behavior:'scans doorway'},{time:20,angleDeg:320,radiusFactor:0.92,motion:'STILL',behavior:'scans doorway'},{time:30,angleDeg:320,radiusFactor:0.92,motion:'STILL',behavior:'sits briefly'},{time:40,angleDeg:320,radiusFactor:0.92,motion:'MOVING',behavior:'stands again'},{time:50,angleDeg:335,radiusFactor:0.93,motion:'STILL',behavior:'pacing slowly'},{time:60,angleDeg:335,radiusFactor:0.93,motion:'MOVING',behavior:'eyes on entrance'},{time:70,angleDeg:230,radiusFactor:1.08,motion:'STILL',behavior:' '},{time:80,angleDeg:230,radiusFactor:1.08,motion:'STILL',behavior:' '},{time:90,angleDeg:230,radiusFactor:1.08,motion:'STILL',behavior:' '},{time:100,angleDeg:230,radiusFactor:1.08,motion:'STILL',behavior:' '},{time:110,angleDeg:230,radiusFactor:1.08,motion:'STILL',behavior:' '},{time:120,angleDeg:230,radiusFactor:1.08,motion:'STILL',behavior:' '},{time:130,angleDeg:230,radiusFactor:1.08,motion:'STILL',behavior:' '},{time:140,angleDeg:230,radiusFactor:1.08,motion:'STILL',behavior:' '},{time:150,angleDeg:230,radiusFactor:1.08,motion:'STILL',behavior:' '},{time:160,angleDeg:230,radiusFactor:1.08,motion:'STILL',behavior:' '},{time:170,angleDeg:230,radiusFactor:1.08,motion:'STILL',behavior:' '},{time:180,angleDeg:230,radiusFactor:1.08,motion:'STILL',behavior:' '}
  ]},
  'P06':{type:'person',colors:['#192f46','#ab4539','#592828'],hoverText:'Got off the train, spotted P05 immediately. Quick hug, both smiling.',frames:[
    {time:0,angleDeg:352,radiusFactor:1.08,motion:'STILL',behavior:' '},{time:10,angleDeg:352,radiusFactor:1.08,motion:'STILL',behavior:' '},{time:20,angleDeg:352,radiusFactor:1.08,motion:'STILL',behavior:' '},{time:30,angleDeg:352,radiusFactor:1.08,motion:'STILL',behavior:' '},{time:40,angleDeg:352,radiusFactor:1.08,motion:'STILL',behavior:' '},{time:50,angleDeg:352,radiusFactor:1.08,motion:'MOVING',behavior:' '},{time:60,angleDeg:337,radiusFactor:0.93,motion:'MOVING',behavior:'hugs p5'},{time:70,angleDeg:232,radiusFactor:1.08,motion:'STILL',behavior:' '},{time:80,angleDeg:232,radiusFactor:1.08,motion:'STILL',behavior:' '},{time:90,angleDeg:232,radiusFactor:1.08,motion:'STILL',behavior:' '},{time:100,angleDeg:232,radiusFactor:1.08,motion:'STILL',behavior:' '},{time:110,angleDeg:232,radiusFactor:1.08,motion:'STILL',behavior:' '},{time:120,angleDeg:232,radiusFactor:1.08,motion:'STILL',behavior:' '},{time:130,angleDeg:232,radiusFactor:1.08,motion:'STILL',behavior:' '},{time:140,angleDeg:232,radiusFactor:1.08,motion:'STILL',behavior:' '},{time:150,angleDeg:232,radiusFactor:1.08,motion:'STILL',behavior:' '},{time:160,angleDeg:232,radiusFactor:1.08,motion:'STILL',behavior:' '},{time:170,angleDeg:232,radiusFactor:1.08,motion:'STILL',behavior:' '},{time:180,angleDeg:232,radiusFactor:1.08,motion:'STILL',behavior:' '}
  ]},
  'P07':{type:'person',colors:['#859bcc','#ffffff','#282e75'],hoverText:'Stayed almost the whole time. Looked relaxed, maybe waiting for someone.',frames:[
    {time:0,angleDeg:226,radiusFactor:1.08,motion:'STILL',behavior:' '},{time:10,angleDeg:226,radiusFactor:1.08,motion:'STILL',behavior:' '},{time:20,angleDeg:226,radiusFactor:1.08,motion:'STILL',behavior:' '},{time:30,angleDeg:226,radiusFactor:1.08,motion:'STILL',behavior:' '},{time:40,angleDeg:226,radiusFactor:1.08,motion:'STILL',behavior:' '},{time:50,angleDeg:226,radiusFactor:1.08,motion:'MOVING',behavior:' '},{time:60,angleDeg:213,radiusFactor:0.92,motion:'STILL',behavior:'shifts weight'},{time:70,angleDeg:213,radiusFactor:0.92,motion:'STILL',behavior:'glances left'},{time:80,angleDeg:213,radiusFactor:0.92,motion:'STILL',behavior:'glances right'},{time:90,angleDeg:213,radiusFactor:0.92,motion:'STILL',behavior:'adjusts strap'},{time:100,angleDeg:213,radiusFactor:0.92,motion:'STILL',behavior:'stretches neck'},{time:110,angleDeg:213,radiusFactor:0.92,motion:'STILL',behavior:'tiny step'},{time:120,angleDeg:213,radiusFactor:0.92,motion:'STILL',behavior:'stays put'},{time:130,angleDeg:213,radiusFactor:0.92,motion:'STILL',behavior:'scrolling phone'},{time:140,angleDeg:213,radiusFactor:0.92,motion:'STILL',behavior:'pockets hands'},{time:150,angleDeg:213,radiusFactor:0.92,motion:'STILL',behavior:'watching people'},{time:160,angleDeg:213,radiusFactor:0.92,motion:'STILL',behavior:'still waiting'},{time:170,angleDeg:213,radiusFactor:0.92,motion:'STILL',behavior:'still waiting'},{time:180,angleDeg:213,radiusFactor:0.92,motion:'STILL',behavior:'still waiting'}
  ]},
  'P08':{type:'person',colors:['#5550e9','#5f0f39','#1f4d51'],hoverText:'Two students, probably friends. Checked their phones a lot, laughed at something.',frames:[
    {time:0,angleDeg:260,radiusFactor:0.92,motion:'STILL',behavior:'students enter'},{time:10,angleDeg:260,radiusFactor:0.92,motion:'MOVING',behavior:'backpack shuffle'},{time:20,angleDeg:108,radiusFactor:0.38,motion:'STILL',behavior:'checks time'},{time:30,angleDeg:108,radiusFactor:0.38,motion:'MOVING',behavior:'points to seats'},{time:40,angleDeg:260,radiusFactor:0.92,motion:'STILL',behavior:'sits down'},{time:50,angleDeg:260,radiusFactor:0.92,motion:'STILL',behavior:'whispers chat'},{time:60,angleDeg:260,radiusFactor:0.92,motion:'STILL',behavior:'texting friend'},{time:70,angleDeg:260,radiusFactor:0.92,motion:'STILL',behavior:'checks door'},{time:80,angleDeg:260,radiusFactor:0.92,motion:'STILL',behavior:'small laugh'},{time:90,angleDeg:260,radiusFactor:0.92,motion:'STILL',behavior:'adjusts backpack'},{time:100,angleDeg:260,radiusFactor:0.92,motion:'STILL',behavior:'still waiting'},{time:110,angleDeg:260,radiusFactor:0.92,motion:'STILL',behavior:'glances at board'},{time:120,angleDeg:260,radiusFactor:0.92,motion:'STILL',behavior:'waves at someone'},{time:130,angleDeg:260,radiusFactor:0.92,motion:'STILL',behavior:'stands slightly'},{time:140,angleDeg:260,radiusFactor:0.92,motion:'STILL',behavior:'sits again'},{time:150,angleDeg:260,radiusFactor:0.92,motion:'STILL',behavior:'looks relaxed'},{time:160,angleDeg:260,radiusFactor:0.92,motion:'STILL',behavior:'scrolling phone'},{time:170,angleDeg:260,radiusFactor:0.92,motion:'MOVING',behavior:'friend near?'},{time:180,angleDeg:52,radiusFactor:1.08,motion:'STILL',behavior:'still waiting'}
  ]},
  'P09':{type:'person',colors:['#a89999','#aab5a6','#2d2726'],hoverText:'Student. Sat for a while, bathroom break, then came back. Very chill.',frames:[
    {time:0,angleDeg:265,radiusFactor:0.92,motion:'STILL',behavior:'walk in'},{time:10,angleDeg:265,radiusFactor:0.92,motion:'STILL',behavior:'sit down'},{time:20,angleDeg:265,radiusFactor:0.92,motion:'STILL',behavior:'backpack off'},{time:30,angleDeg:265,radiusFactor:0.92,motion:'STILL',behavior:'quick joke'},{time:40,angleDeg:265,radiusFactor:0.92,motion:'STILL',behavior:'stands up'},{time:50,angleDeg:265,radiusFactor:0.92,motion:'MOVING',behavior:'heads bathroom'},{time:60,angleDeg:175,radiusFactor:1.08,motion:'STILL',behavior:' '},{time:70,angleDeg:175,radiusFactor:1.08,motion:'STILL',behavior:' '},{time:80,angleDeg:175,radiusFactor:1.08,motion:'STILL',behavior:' '},{time:90,angleDeg:175,radiusFactor:1.08,motion:'STILL',behavior:' '},{time:100,angleDeg:175,radiusFactor:1.08,motion:'STILL',behavior:' '},{time:110,angleDeg:175,radiusFactor:1.08,motion:'STILL',behavior:' '},{time:120,angleDeg:175,radiusFactor:1.08,motion:'STILL',behavior:' '},{time:130,angleDeg:175,radiusFactor:1.08,motion:'STILL',behavior:' '},{time:140,angleDeg:175,radiusFactor:1.08,motion:'STILL',behavior:' '},{time:150,angleDeg:175,radiusFactor:1.08,motion:'STILL',behavior:' '},{time:160,angleDeg:175,radiusFactor:1.08,motion:'MOVING',behavior:' '},{time:170,angleDeg:269,radiusFactor:0.8,motion:'MOVING',behavior:'quick wave'},{time:180,angleDeg:55,radiusFactor:1.08,motion:'STILL',behavior:' '}
  ]},
  'Dog 1':{type:'companion',colors:['#8B4513','#8B4513','#8B4513'],hoverText:'; Welsh Corgi; Quiet, well-behaved. Barely moved, just followed with its eyes.',frames:[
    {time:0,angleDeg:228,radiusFactor:1.08,motion:'STILL',behavior:' '},{time:10,angleDeg:228,radiusFactor:1.08,motion:'STILL',behavior:' '},{time:20,angleDeg:228,radiusFactor:1.08,motion:'STILL',behavior:' '},{time:30,angleDeg:228,radiusFactor:1.08,motion:'STILL',behavior:' '},{time:40,angleDeg:228,radiusFactor:1.08,motion:'STILL',behavior:' '},{time:50,angleDeg:228,radiusFactor:1.08,motion:'MOVING',behavior:' '},{time:60,angleDeg:215,radiusFactor:0.92,motion:'STILL',behavior:'leans closer'},{time:70,angleDeg:215,radiusFactor:0.92,motion:'STILL',behavior:'quiet watch'},{time:80,angleDeg:215,radiusFactor:0.92,motion:'STILL',behavior:'small sniff'},{time:90,angleDeg:215,radiusFactor:0.92,motion:'STILL',behavior:'perks ears'},{time:100,angleDeg:215,radiusFactor:0.92,motion:'STILL',behavior:'perks ears'},{time:110,angleDeg:215,radiusFactor:0.92,motion:'STILL',behavior:'looks left'},{time:120,angleDeg:215,radiusFactor:0.92,motion:'STILL',behavior:'looks right'},{time:130,angleDeg:215,radiusFactor:0.92,motion:'STILL',behavior:'sits calmly'},{time:140,angleDeg:215,radiusFactor:0.92,motion:'STILL',behavior:'sits calmly'},{time:150,angleDeg:215,radiusFactor:0.92,motion:'STILL',behavior:'still waiting'},{time:160,angleDeg:215,radiusFactor:0.92,motion:'STILL',behavior:'still waiting'},{time:170,angleDeg:215,radiusFactor:0.92,motion:'STILL',behavior:'still waiting'},{time:180,angleDeg:215,radiusFactor:0.92,motion:'STILL',behavior:'still waiting'}
  ]},
  'Dog 2':{type:'companion',colors:['#A0522D','#A0522D','#A0522D'],hoverText:'Schnauzer; Waited patiently while owner got coffee. Used to this routine.',frames:[
    {time:0,angleDeg:212,radiusFactor:0.92,motion:'MOVING',behavior:'heel by owner'},{time:10,angleDeg:237,radiusFactor:1.08,motion:'STILL',behavior:' '},{time:20,angleDeg:237,radiusFactor:1.08,motion:'STILL',behavior:' '},{time:30,angleDeg:237,radiusFactor:1.08,motion:'STILL',behavior:' '},{time:40,angleDeg:237,radiusFactor:1.08,motion:'STILL',behavior:' '},{time:50,angleDeg:237,radiusFactor:1.08,motion:'STILL',behavior:' '},{time:60,angleDeg:237,radiusFactor:1.08,motion:'STILL',behavior:' '},{time:70,angleDeg:237,radiusFactor:1.08,motion:'STILL',behavior:' '},{time:80,angleDeg:237,radiusFactor:1.08,motion:'STILL',behavior:' '},{time:90,angleDeg:237,radiusFactor:1.08,motion:'MOVING',behavior:' '},{time:100,angleDeg:120,radiusFactor:0.58,motion:'STILL',behavior:'sits near'},{time:110,angleDeg:120,radiusFactor:0.58,motion:'STILL',behavior:'watches feet'},{time:120,angleDeg:120,radiusFactor:0.58,motion:'MOVING',behavior:'alert ears'},{time:130,angleDeg:102,radiusFactor:0.5,motion:'MOVING',behavior:'ready to go'},{time:140,angleDeg:352,radiusFactor:1.08,motion:'MOVING',behavior:' '},{time:150,angleDeg:232,radiusFactor:1.08,motion:'MOVING',behavior:' '},{time:160,angleDeg:352,radiusFactor:1.08,motion:'STILL',behavior:' '},{time:170,angleDeg:352,radiusFactor:1.08,motion:'STILL',behavior:' '},{time:180,angleDeg:352,radiusFactor:1.08,motion:'STILL',behavior:' '}
  ]},
  'Bike 1':{type:'companion',colors:['#7F5643','#7F5643','#7F5643'],hoverText:'Bike; Leaned against a wall. Signs of wear from constant use.',frames:[
    {time:0,angleDeg:242,radiusFactor:1.08,motion:'STILL',behavior:' '},{time:10,angleDeg:242,radiusFactor:1.08,motion:'STILL',behavior:' '},{time:20,angleDeg:242,radiusFactor:1.08,motion:'STILL',behavior:' '},{time:30,angleDeg:242,radiusFactor:1.08,motion:'STILL',behavior:' '},{time:40,angleDeg:242,radiusFactor:1.08,motion:'MOVING',behavior:' '},{time:50,angleDeg:52,radiusFactor:0.4,motion:'MOVING',behavior:'rolling along'},{time:60,angleDeg:42,radiusFactor:0.4,motion:'MOVING',behavior:'rolling along'},{time:70,angleDeg:22,radiusFactor:0.45,motion:'MOVING',behavior:'rolling along'},{time:80,angleDeg:32,radiusFactor:0.92,motion:'STILL',behavior:'parked briefly'},{time:90,angleDeg:32,radiusFactor:0.92,motion:'STILL',behavior:'parked briefly'},{time:100,angleDeg:32,radiusFactor:0.92,motion:'STILL',behavior:'hand on bar'},{time:110,angleDeg:32,radiusFactor:0.92,motion:'STILL',behavior:'parked briefly'},{time:120,angleDeg:32,radiusFactor:0.92,motion:'STILL',behavior:'parked briefly'},{time:130,angleDeg:32,radiusFactor:0.92,motion:'MOVING',behavior:'careful steer'},{time:140,angleDeg:45,radiusFactor:1.08,motion:'STILL',behavior:' '},{time:150,angleDeg:45,radiusFactor:1.08,motion:'STILL',behavior:' '},{time:160,angleDeg:45,radiusFactor:1.08,motion:'STILL',behavior:' '},{time:170,angleDeg:45,radiusFactor:1.08,motion:'STILL',behavior:' '},{time:180,angleDeg:45,radiusFactor:1.08,motion:'STILL',behavior:' '}
  ]},
  'Stroller 1':{type:'companion',colors:['#C24A00','#C24A00','#C24A00'],hoverText:'Stroller; The baby was quiet the whole time. Maybe sleeping.',frames:[
    {time:0,angleDeg:142,radiusFactor:0.92,motion:'STILL',behavior:'rolled beside mom'},{time:10,angleDeg:142,radiusFactor:0.92,motion:'STILL',behavior:'gentle rock'},{time:20,angleDeg:142,radiusFactor:0.92,motion:'STILL',behavior:'quiet fuss'},{time:30,angleDeg:142,radiusFactor:0.92,motion:'STILL',behavior:'gentle rock'},{time:40,angleDeg:142,radiusFactor:0.92,motion:'STILL',behavior:'still now'},{time:50,angleDeg:142,radiusFactor:0.92,motion:'STILL',behavior:'p1 checks time'},{time:60,angleDeg:142,radiusFactor:0.92,motion:'STILL',behavior:'soft coo'},{time:70,angleDeg:142,radiusFactor:0.92,motion:'STILL',behavior:'settles again'},{time:80,angleDeg:142,radiusFactor:0.92,motion:'STILL',behavior:'light sway'},{time:90,angleDeg:142,radiusFactor:0.92,motion:'STILL',behavior:'wheels locked'},{time:100,angleDeg:142,radiusFactor:0.92,motion:'STILL',behavior:'unlock wheels'},{time:110,angleDeg:142,radiusFactor:0.92,motion:'STILL',behavior:'slow roll'},{time:120,angleDeg:142,radiusFactor:0.92,motion:'STILL',behavior:'follow p2'},{time:130,angleDeg:142,radiusFactor:0.92,motion:'STILL',behavior:'steady roll'},{time:140,angleDeg:142,radiusFactor:0.92,motion:'STILL',behavior:'weaving gently'},{time:150,angleDeg:142,radiusFactor:0.92,motion:'STILL',behavior:'careful pace'},{time:160,angleDeg:142,radiusFactor:0.92,motion:'MOVING',behavior:'near platform'},{time:170,angleDeg:67,radiusFactor:0.8,motion:'MOVING',behavior:'short wait'},{time:180,angleDeg:67,radiusFactor:1.08,motion:'STILL',behavior:' '}
  ]}
};
/* ===================== 상태/DOM ===================== */
let currentTime = 0;
let showVideo = 'landing';
let tempScrubActive = false;

const activeViews = { outfitColor:true, dwellTime:false, behaviour:false, path:false, companions:false };
let viewMode = 'aerial';               // 'aerial' | 'exploded'
let selectedFeature = 'outfitColor';

const trails = {};
const dwellState = {};
const dwellSizes = {};
const trailSampleTime = {};
const ALERT_START = 137;
const ALERT_END = 170;
const alertLayer = document.getElementById('alert-layer');
let alertBlinkActive = false;
let alertAnim = null;

function startAlertBlink(){
  if (alertBlinkActive || !alertLayer) return;
  alertBlinkActive = true;

  // 보이도록 초기 상태만 켜두고(디스플레이/레이아웃 유지)
  alertLayer.classList.add('is-active');

  // 부드러운 페이드 인-아웃 무한 반복
  alertAnim = alertLayer.animate(
    [
      { opacity: 0 },
      { opacity: 1 },
      { opacity: 0 }
    ],
    {
      duration: 1600,                    // ⏱ 깜빡 주기(밀리초) — 더 느리게: 값 ↑
      iterations: Infinity,
      easing: 'cubic-bezier(.4,0,.2,1)' // ✅ 자연스러운 ease-in-out
    }
  );
}

function stopAlertBlink(){
  if (!alertBlinkActive) return;
  alertBlinkActive = false;

  if (alertAnim){
    alertAnim.cancel();     // 애니메이션 정지
    alertAnim = null;
  }
  // 상태 정리
  alertLayer.classList.remove('is-active');
  alertLayer.style.opacity = '0';
}

const app = document.getElementById('app');
const screen = document.getElementById('screen');
const screenTitle = document.getElementById('screen-title');
const screenInner = document.querySelector('.screen-inner');
const openingVideo = document.getElementById('opening-video');
const closingVideo = document.getElementById('closing-video');
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
const landing = document.getElementById('landing');            // ADD: landing overlay
const landingBtn = document.getElementById('landing-start');   // ADD: landing start button
const backgroundVideo = document.getElementById('bg-video');



// ADD: size control for companion icons
// ===== 전환 시간(각자) =====
const SWITCH_MS_STAGE = 260;  // 스테이지(그리드/레이어) 속도
const SWITCH_MS_BG    = 800;  // 배경(sound background) 속도 (더 빠르게/느리게)

function animateExploded(to){
  explodeTarget = to;
  if (explodeRAF) cancelAnimationFrame(explodeRAF);

  const start = performance.now();
  const from  = explodeProgress;

  const ease = t => t<.5 ? 2*t*t : 1 - Math.pow(-2*t+2,2)/2;
  const clamp01 = x => x < 0 ? 0 : (x > 1 ? 1 : x);

  const step = (now)=>{
    // 공통 시작시각 공유 + 진행도는 각자 duration으로 계산
    const uStage = clamp01((now - start) / SWITCH_MS_STAGE);
    const uBG    = clamp01((now - start) / SWITCH_MS_BG);

    const kStage = ease(uStage);    // 스테이지용 이징
    const kBG    = ease(uBG);       // 배경용 이징

    // 스테이지 진행도(0→1): 폭발 레이어/그리드
    explodeProgress = from + (explodeTarget - from) * kStage;

    // 배경 진행도(0→1): bg-wrap CSS 변수로 동기화(속도만 다름)
    const squashTarget = readCssNumber('--exp-target-squash', .22);
    const kForBgVars   = from + (explodeTarget - from) * kBG; 
    const scaleY       = lerp(1, squashTarget, kForBgVars);

    const rootStyle = document.documentElement.style;
    rootStyle.setProperty('--bg-k', String(kForBgVars));
    rootStyle.setProperty('--bg-scaleY', String(scaleY));

    render();

    // 둘 중 하나라도 아직 끝 안 났으면 계속
    if (uStage < 1 || uBG < 1){
      explodeRAF = requestAnimationFrame(step);
    } else {
      explodeRAF = null;
    }
  };

  explodeRAF = requestAnimationFrame(step);
}

const COMPANION_ICON_SIZE = 16;
// ADD: PNG matching for companion entities
const companionIconMap = {
  'Dog 1': 'companions/dog1.png',
  'Dog 2': 'companions/dog2.png',
  'Bike 1': 'companions/bike1.png',
  'Stroller 1': 'companions/stroller1.png'
};
function showLanding(){ // ADD: reveal landing overlay
  if(!landing) return;
  landing.classList.remove('is-hidden');
  landing.removeAttribute('aria-hidden');
}

function hideLanding(){ // ADD: hide landing overlay
  if(!landing) return;
  landing.classList.add('is-hidden');
  landing.setAttribute('aria-hidden', 'true');
}

function setupLanding(){ // ADD: wait for start button
  if(backgroundVideo){
    backgroundVideo.pause();
    backgroundVideo.currentTime = 0;
  }


  if(!landingBtn){
    showVideo = 'opening';
    if(screen) screen.classList.remove('is-hidden');
    startPlayback();
    return;
  }
  landingBtn.disabled = false;
  showVideo = 'landing';
  showLanding();
  landingBtn.focus(); // ADD: focus start button
  if(screen) screen.classList.add('is-hidden');
  landingBtn.addEventListener('click', ()=>{
    landingBtn.disabled = true;
    hideLanding();
    if(screen) screen.classList.remove('is-hidden');
    showVideo = 'opening';
    startPlayback();
  }, { once:true });
}

let openingAudioUnlockAttached = false; // ADD: track audio unlock binding
let openingAudioUnlockHandler = null;   // ADD: store unlock handler

function primeOpeningAudio(){ // ADD: unmute and attempt playback
  if(!openingVideo) return;
  clearOpeningAudioUnlock();
  openingVideo.muted = false;
  openingVideo.volume = 1;
  const attempt = openingVideo.play();
  if(attempt && typeof attempt.catch === 'function'){
    attempt.catch(()=>{});
  }
}

function bindOpeningAudioUnlock(){ // ADD: wait for user gesture to enable audio
  if(openingAudioUnlockAttached || !openingVideo) return;
  openingAudioUnlockAttached = true;
  openingAudioUnlockHandler = ()=>{
    window.removeEventListener('pointerdown', openingAudioUnlockHandler);
    window.removeEventListener('keydown', openingAudioUnlockHandler);
    openingAudioUnlockAttached = false;
    const handlerRef = openingAudioUnlockHandler;
    openingAudioUnlockHandler = null;
    primeOpeningAudio();
    if(handlerRef){
      // no-op, already removed
    }
  };
  window.addEventListener('pointerdown', openingAudioUnlockHandler);
  window.addEventListener('keydown', openingAudioUnlockHandler);
}

function clearOpeningAudioUnlock(){ // ADD: remove gesture listeners when done
  if(!openingAudioUnlockAttached) return;
  if(openingAudioUnlockHandler){
    window.removeEventListener('pointerdown', openingAudioUnlockHandler);
    window.removeEventListener('keydown', openingAudioUnlockHandler);
  }
  openingAudioUnlockAttached = false;
  openingAudioUnlockHandler = null;
}

function playBackgroundVideo(){ // ADD: helper to start background loop
  const videos = [backgroundVideo].filter(Boolean);
  if(!videos.length) return;
  videos.forEach(video=>{
    try{
      video.currentTime = 0;
    }catch(_){
      // ignore seek errors (e.g., unbuffered media)
    }
  });
  videos.forEach(video=>{
    const playPromise = video.play();
    if(playPromise && typeof playPromise.catch === 'function'){
      playPromise.catch(()=>{});
    }
  });
}

/* ===================== 유틸 ===================== */
function svg(tag, attrs){ const el=document.createElementNS('http://www.w3.org/2000/svg',tag); for(const k in attrs) el.setAttribute(k, attrs[k]); return el; }
function clear(node){ while(node.firstChild) node.removeChild(node.firstChild); }
function formatTime(sec){ const base=4*60+56; const total=base*60+sec; const h=Math.floor(total/3600), m=Math.floor((total%3600)/60), s=total%60; return `${String(h).padStart(2,'0')}:${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}`; }
function getFrame(ent, t){ const slot=Math.floor(t/10)*10; return ent.frames.find(f=>f.time===slot) || ent.frames.at(-1); }
/* EXTRA NOTE: helper returns the interpolated entity position and visibility */
function interp(ent, t){
  let a=null,b=null;
  for(let i=0;i<ent.frames.length-1;i++){
    if(ent.frames[i].time<=t && ent.frames[i+1].time>=t){
      a=ent.frames[i];
      b=ent.frames[i+1];
      break;
    }
  }
  if(!a){
    const start = ent.frames[0];
    return polarWithOpacity(start.angleDeg, start.radiusFactor);
  }
  if(!b){
    const end = ent.frames.at(-1);
    return polarWithOpacity(end.angleDeg, end.radiusFactor);
  }
  const r=(t-a.time)/(b.time-a.time);
  const angle = a.angleDeg + (b.angleDeg - a.angleDeg)*r;
  const rf    = a.radiusFactor + (b.radiusFactor - a.radiusFactor)*r;
  return polarWithOpacity(angle, rf);
}
function polar(angleDeg, radiusFactor, cx = 100, cy = 100, R = 80) {
  const theta = angleDeg * Math.PI / 180;   // 0° right, 90° up (with the -sin below)
  const r = radiusFactor * R;
  const x = cx + Math.cos(theta) * r;
  const y = cy - Math.sin(theta) * r;       // NOTE: minus makes 90° go UP on screen
  return { x, y };
}
function polarWithOpacity(angleDeg, radiusFactor){
  /* EXTRA: provide opacity flag for radiusFactor visibility constraint */
  const point = polar(angleDeg, radiusFactor);
  const opacity = radiusFactor > 1 ? 0 : 1;
  return { ...point, opacity, radiusFactor };
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
/* ===== 색 변환 & 오버레이 컬러 세팅 ===== */
function hexToRgba(c, a){
  if(!c) return `rgba(255,255,255,${a})`;
  if(c.startsWith('rgba')||c.startsWith('rgb')) return c;
  let r=255,g=255,b=255, s=c.replace('#','').trim();
  if(s.length===3){ r=parseInt(s[0]+s[0],16); g=parseInt(s[1]+s[1],16); b=parseInt(s[2]+s[2],16); }
  else if(s.length>=6){ r=parseInt(s.slice(0,2),16); g=parseInt(s.slice(2,4),16); b=parseInt(s.slice(4,6),16); }
  return `rgba(${r},${g},${b},${a})`;
}
function setHoverGradientColors(colors){
  const c1 = hexToRgba(colors?.[0], 0.95);
  const c2 = hexToRgba(colors?.[1], 0.60);
  const c3 = hexToRgba(colors?.[2], 0.00);
  const root = document.documentElement.style;
  root.setProperty('--hover-c1', c1);
  root.setProperty('--hover-c2', c2);
  root.setProperty('--hover-c3', c3);
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

/* 공통 Hover 헬퍼: ✅ colors 포함 */
function addHoverHandlers(el, pos, text, colors){
  el.classList.add('entity-hit');
  el.style.pointerEvents = 'auto';
  el.addEventListener('mouseenter', ()=>{
    const {cx, cy} = svgToClient(pos.x, pos.y);
    setHoverGradientColors(colors);
    openComment(cx, cy, text);
  });
  el.addEventListener('mousemove', ()=>{
    const {cx, cy} = svgToClient(pos.x, pos.y);
    setRippleCenter(cx, cy);
  });
  el.addEventListener('mouseleave', closeComment);
}
function addInvisibleHitCircle(parentG, pos, text, colors, r=12){
  const hit = svg('circle', { cx:pos.x, cy:pos.y, r, fill:'transparent' });
  addHoverHandlers(hit, pos, text, colors);
  parentG.appendChild(hit);
}

/* ===== 호버 가드 ===== */
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

 /* ===================== Grid 그리드(항공) ===================== */
let GRAD_SEQ = 0;
let defsRoot = document.getElementById('defs-root');
if (!defsRoot) {
  defsRoot = document.createElementNS('http://www.w3.org/2000/svg','defs');
  defsRoot.setAttribute('id','defs-root');
  stage.insertBefore(defsRoot, stage.firstChild);
}

function makeGrid(){
  // clear previous grid (prevents duplicates if called again)
  gridCircles.textContent = '';
  gridSpokes.textContent  = '';
  outerSegments.textContent = '';

  const cx = 100, cy = 100;
  const outerR = 80; // keep original outer radius / viewBox scale

  // (ring proportions) — leave as you set them
  const rings = [1, 20, 25, 40, 80];

  // Rings (dotted)
  rings.forEach(r=>{
    const c = svg('circle', {
      cx, cy, r,
      fill: 'none',
      stroke: 'var(--grid)',
      'stroke-width': 0.3,
      'stroke-linecap': 'round',
      opacity: 1,
      'stroke-dasharray': '0.3 0.7'
    });
    gridCircles.appendChild(c);
  });

  // Spokes: 10 slices (dotted) with the LEFT edge of slice #1 at NORTH
  const SLICE = 360/10;
  // Using y = cy + Math.sin(theta)*R → 90° is down, so north (up) is 270°
  const TARGET_DEG = 180;
  const centerOffset = TARGET_DEG + SLICE; // center of slice #1

  for (let i = 0; i < 10; i++) {
    const a = centerOffset + i * SLICE; // <-- apply the offset
    const t = a * Math.PI / 180;
    const x = cx + Math.cos(t) * outerR;
    const y = cy + Math.sin(t) * outerR;
    gridSpokes.appendChild(svg('line', {
      x1: cx, y1: cy, x2: x, y2: y,
      stroke: 'var(--grid)',
      'stroke-width': 0.3,
      'stroke-linecap': 'round',
      opacity: 1,
      'stroke-dasharray': '0.3 0.7'
    }));
  }

     // (bench placement) ---

  // Normalize degrees to [0, 360)
  const norm = a => (a % 360 + 360) % 360;

  // Draw CLOCKWISE arc along the outer circle, with a small end gap
  function arcDeg(aStart, aEnd, gap = 8){
    const sDeg = norm(aStart + gap);
    const eDeg = norm(aEnd   - gap);

    // clockwise delta
    const deltaCW = (eDeg - sDeg + 360) % 360;

    // SVG arc flags
    const largeArcFlag = deltaCW > 180 ? 1 : 0;
    const sweepFlag    = 1; // clockwise

    // start/end angles in radians
    const s = sDeg * Math.PI/180;
    const e = (sDeg + deltaCW) * Math.PI/180;

    const x1 = cx + Math.cos(s) * outerR, y1 = cy + Math.sin(s) * outerR;
    const x2 = cx + Math.cos(e) * outerR, y2 = cy + Math.sin(e) * outerR;

    outerSegments.appendChild(svg('path',{
      d:`M ${x1} ${y1} A ${outerR} ${outerR} 0 ${largeArcFlag} ${sweepFlag} ${x2} ${y2}`,
      fill:'none',
      stroke:'var(--grid-muted)', // keep your color
      'stroke-width':8,           // keep your stroke width
      'stroke-linecap':'round',
      opacity:1
    }));
  }

  
  // ✅ Rotate benches 72° clockwise
  const OFFSET = 72;

  // Use your angles exactly (before rotation)
  const benchArcs = [
    { start: -36 + OFFSET, end: 36 + OFFSET },      // Bench 1
    { start: 72 + OFFSET,  end: 108 + OFFSET },     // Bench 2
    { start: 144 + OFFSET, end: 216 + OFFSET },     // Bench 3
    { start: 252 + OFFSET, end: 288 + OFFSET },     // Bench 4
  ];

  const gap = 1; // matches your previous default gap in arcDeg

  benchArcs.forEach(b => {
    arcDeg(b.start, b.end, gap);

    
  });
}


/* ===================== 엔티티 ===================== */
function initEntities(){
  Object.keys(rawData).forEach(id=>{
    trails[id]=[];
    dwellState[id]={diamPx:10,lastMotion:null};
    dwellSizes[id]=10;
    trailSampleTime[id] = -Infinity;
  });
}

function renderAerial(){
  clear(entitiesLayer);

  // ⬇️ 그리기(페인트) 순서: bottom → top
  const PAINT_ORDER = ['path', 'companions', 'dwellTime', 'outfitColor', 'behaviour'];

  // 엔티티 한 번 순회해 프레임/좌표 캐싱
  const cache = Object.entries(rawData).map(([id, ent])=>{
    const pos   = interp(ent, currentTime);
    const frame = getFrame(ent, currentTime);
    return { id, ent, pos, frame };
  }).filter(o => o.pos && o.pos.opacity > 0);

  PAINT_ORDER.forEach(feature=>{
    const layerG = svg('g', {}); 
    entitiesLayer.appendChild(layerG);

    cache.forEach(({ id, ent, pos, frame })=>{
      const isPerson = ent.type === 'person';
      const isComp   = ent.type === 'companion';
      const show = {
        path:        activeViews.path && isPerson,
        companions:  activeViews.companions && isComp,
        dwellTime:   activeViews.dwellTime && isPerson,
        outfitColor: activeViews.outfitColor && isPerson,
        behaviour:   activeViews.behaviour && isPerson && frame?.behavior
      }[feature];

      if(!show) return;

      // 그룹별 공통 opacity(반지점 바깥 희미화 유지)
      const g = svg('g', pos.opacity < 1 ? { opacity: pos.opacity } : {});
      layerG.appendChild(g);

      if(feature === 'path'){
        const trail = trails[id];
        if(trail && trail.length > 1){
          const d = trail.map((p,i)=> `${i===0?'M':'L'} ${p.x} ${p.y}`).join(' ');
          const pathEl = svg('path',{
            d,
            fill:'none',
            stroke: ent.colors[0],
            'stroke-width': 3,
            'stroke-linecap': 'round',
            'stroke-linejoin': 'round',
            opacity: 0.6
          });
          g.appendChild(pathEl);
          addHoverHandlers(pathEl, pos, ent.hoverText, ent.colors);
          addInvisibleHitCircle(g, pos, ent.hoverText, ent.colors, 10);
        }
        return;
      }

      if(feature === 'companions'){
        const iconSrc = companionIconMap[id];
        if(iconSrc){
          const size = COMPANION_ICON_SIZE, half = size/2;
          const icon = svg('image', {
            x: pos.x - half,
            y: pos.y - half,
            width: size,
            height: size,
            class: 'companion-icon'
          });
          icon.setAttribute('href', iconSrc);
          icon.setAttributeNS('http://www.w3.org/1999/xlink', 'href', iconSrc);
          icon.setAttribute('preserveAspectRatio', 'xMidYMid meet');
          g.appendChild(icon);
          addHoverHandlers(icon, pos, ent.hoverText, ent.colors);
          addInvisibleHitCircle(g, pos, ent.hoverText, ent.colors, size/2);
        }
        return;
      }

      if(feature === 'dwellTime'){
        const ring = svg('circle', {
          cx: pos.x, cy: pos.y,
          r: Math.max(6, dwellSizes[id] / 2),
          fill: 'none',
          stroke: ent.colors[0],
          'stroke-width': 0.5
        });
        g.appendChild(ring);
        addHoverHandlers(ring, pos, ent.hoverText, ent.colors);
        addInvisibleHitCircle(g, pos, ent.hoverText, ent.colors, 12);
        return;
      }

      if(feature === 'outfitColor'){
        const gradId = `grad-${++GRAD_SEQ}`;
        const grad = svg('radialGradient', { id: gradId });
        [['0%',0],['50%',1],['100%',2]].forEach(([off,idx])=>{
          grad.appendChild(svg('stop', { offset: off, 'stop-color': ent.colors[idx] }));
        });
        defsRoot.appendChild(grad);

        const dot = svg('circle', { cx: pos.x, cy: pos.y, r: 7, fill: `url(#${gradId})` });
        g.appendChild(dot);
        dot.appendChild(svg('animate',{ attributeName:'r', values:'7;9;7', dur:'1.5s', repeatCount:'indefinite' }));
        dot.appendChild(svg('animate',{ attributeName:'opacity', values:'1;0.7;1', dur:'1.5s', repeatCount:'indefinite' }));
        addHoverHandlers(dot, pos, ent.hoverText, ent.colors);
        addInvisibleHitCircle(g, pos, ent.hoverText, ent.colors, 12);
        return;
      }

      if(feature === 'behaviour'){
        const t = svg('text', {
          x: pos.x, y: pos.y - 8,
          fill: ent.colors[0],
          'text-anchor': 'middle',
          'font-family': '"PP Mori", sans-serif',
          'font-weight': 400,
          'font-size': 4
        });
        t.textContent = frame.behavior;
        g.appendChild(t);
        addHoverHandlers(t, pos, ent.hoverText, ent.colors);
        addInvisibleHitCircle(g, pos, ent.hoverText, ent.colors, 10);
        return;
      }
    });
  });
}


/* ===================== Exploded (애니메이션: 중앙→상단, 아래로 펼침) ===================== */
function buildExplodedGrid(g){
  // Match makeGrid geometry + styling
  const cx = 100, cy = 100;
  const outerR = 80;
  const rings = [1, 20, 25, 40, 80];

  const SLICE = 360/10;
  const TARGET_DEG = 180;
  const centerOffset = TARGET_DEG + SLICE;

  // ----- RINGS (identical to makeGrid) -----
  rings.forEach(r=>{
    g.appendChild(svg('circle', {
      cx, cy, r,
      fill: 'none',
      stroke: 'var(--grid)',
      'stroke-width': 0.3,
      'stroke-linecap': 'round',
      'stroke-dasharray': '0.3 0.7',
      opacity: 1
    }));
  });

  // ----- SPOKES (10, identical rotation) -----
  for (let i = 0; i < 10; i++) {
    const a = centerOffset + i * SLICE;
    const t = a * Math.PI / 180;
    const x = cx + Math.cos(t) * outerR;
    const y = cy + Math.sin(t) * outerR;
    g.appendChild(svg('line', {
      x1: cx, y1: cy, x2: x, y2: y,
      stroke: 'var(--grid)',
      'stroke-width': 0.3,
      'stroke-linecap': 'round',
      'stroke-dasharray': '0.3 0.7',
      opacity: 1
    }));
  }

  // ----- BENCHES (same style as makeGrid) -----
  const norm = a => (a % 360 + 360) % 360;

  // Same arc drawer you used (clockwise, with gap)
  function arcDeg(aStart, aEnd, gap = 8){
    const sDeg = norm(aStart + gap);
    const eDeg = norm(aEnd   - gap);
    const deltaCW = (eDeg - sDeg + 360) % 360;
    const largeArcFlag = deltaCW > 180 ? 1 : 0;
    const sweepFlag = 1;

    const s = sDeg * Math.PI/180;
    const e = (sDeg + deltaCW) * Math.PI/180;

    const x1 = cx + Math.cos(s)*outerR, y1 = cy + Math.sin(s)*outerR;
    const x2 = cx + Math.cos(e)*outerR, y2 = cy + Math.sin(e)*outerR;

    g.appendChild(svg('path',{
      d:`M ${x1} ${y1} A ${outerR} ${outerR} 0 ${largeArcFlag} ${sweepFlag} ${x2} ${y2}`,
      fill:'none',
      stroke:'var(--grid-muted)',   // same color as makeGrid benches
      'stroke-width': 8,            // same thickness
      'stroke-linecap': 'round',
      opacity: 1
    }));
  }

  // Your bench angles (before rotation)
  const baseBenchArcs = [
    { start: -36, end: 36 },     // Bench 1 (long)
    { start: 72,  end: 108 },    // Bench 2 (short)
    { start: 144, end: 216 },    // Bench 3 (long)
    { start: 252, end: 288 },    // Bench 4 (short)
  ];

  // Use same offset you applied in makeGrid (change if needed)
  const OFFSET = 72;   // +36 = one spoke CW; -36 = one spoke CCW
  const GAP = 1;       // matches your latest makeGrid benches

  baseBenchArcs.forEach(b => {
    arcDeg(b.start + OFFSET, b.end + OFFSET, GAP);
  });
}

/**
 * progress p: 0 → 1
 * - p=0  : 한 화면(Aerial) 중앙에 모든 레이어가 겹침(스케일Y=1, 오프셋=0)
 * - p→1  : 중앙 레이어(Outfit)가 위로 liftUp, 나머지 4개가 gap 간격으로 아래로 내려감
 * - 스케일Y는 1 → squash 로 보간(순수 Y축 압축, 회전/스큐 없음)
 */
/* ===================== Exploded (위치/페인트 분리: outfit 맨 위, companions 맨 아래) ===================== */
function renderExploded(p){
  clear(entitiesLayer);

  const squashTarget = readCssNumber('--exp-target-squash', 0.42);
  const gapTarget    = readCssNumber('--exp-gap',          26);
  const liftTarget   = readCssNumber('--exp-lift',         gapTarget);
  const k = easeInOut(p);

  if (k > 0.02) stage.classList.add('exploded'); else stage.classList.remove('exploded');

  // 1) 페인트(그리기) 순서: 컴패니언을 먼저 그려서 항상 뒤(아래)에 깐다
  const PAINT_ORDER = ['companions','outfitColor','dwellTime','behaviour','path'];

  // 2) 위치 인덱스(위→아래): outfit=0 ... companions=4
  const POS_INDEX = {
    outfitColor: 0,
    dwellTime:   1,
    behaviour:   2,
    path:        3,
    companions:  4
  };

  const cx=100, cy=100;
  const liftUp = liftTarget;
  const gap    = gapTarget;
  const baseY  = -liftUp;
  const scaleY = lerp(1, squashTarget, k);

  PAINT_ORDER.forEach((feature)=>{
    const featureOn = {
      outfitColor: activeViews.outfitColor,
      dwellTime:   activeViews.dwellTime,
      behaviour:   activeViews.behaviour,
      path:        activeViews.path,
      companions:  activeViews.companions
    }[feature];

    // 위치 계산은 POS_INDEX로
    const posIdx   = POS_INDEX[feature] ?? 0;
    const targetOffset = baseY + posIdx * gap;
    const offsetY = lerp(0, targetOffset, k);

    const layerG = svg('g', {});
    layerG.setAttribute(
      'transform',
      `translate(0 ${offsetY}) translate(${cx} ${cy}) scale(1 ${scaleY}) translate(${-cx} ${-cy})`
    );
    entitiesLayer.appendChild(layerG);

    // 얇은 exploded 전용 그리드
    const gridG = svg('g', { opacity: String( lerp(0, 1, k) * (featureOn ? 1 : 0) ) });
    buildExplodedGrid(gridG);
    layerG.appendChild(gridG);

    const entsG = svg('g', {});
    layerG.appendChild(entsG);

    // ===== 엔티티 드로잉 =====
    Object.entries(rawData).forEach(([id, ent])=>{
      const pos = interp(ent, currentTime);
      if(!pos || pos.opacity <= 0) return;
      const frame = getFrame(ent, currentTime);
      const isPerson = ent.type === 'person';
      const isComp   = ent.type === 'companion';
      const entOpacity = pos.opacity ?? 1;

      // companions 레이어: 항상 맨 아래에 페인트 + 맨 아래 위치
      if (feature === 'companions'){
        if(!(isComp && activeViews.companions)) return;
        const iconSrc = companionIconMap[id];
        if(iconSrc){
          const size = COMPANION_ICON_SIZE, half = size/2;
          const icon = svg('image',{
            x:pos.x - half, y:pos.y - half, width:size, height:size,
            opacity:entOpacity, class:'companion-icon'
          });
          icon.setAttribute('href', iconSrc);
          icon.setAttributeNS('http://www.w3.org/1999/xlink','href', iconSrc);
          icon.setAttribute('preserveAspectRatio','xMidYMid meet');
          entsG.appendChild(icon);
          addHoverHandlers(icon, pos, ent.hoverText, ent.colors);
          addInvisibleHitCircle(entsG, pos, ent.hoverText, ent.colors, size/2);
        }
        return;
      }

      // 나머지 레이어는 사람 전용
      if(!isPerson || !featureOn) return;

      if (feature === 'outfitColor'){
        const gradId = `grad-ex-${++GRAD_SEQ}`;
        const grad = svg('radialGradient', { id:gradId });
        [['0%',0],['50%',1],['100%',2]].forEach(([off,i])=>{
          grad.appendChild(svg('stop',{offset:off,'stop-color':ent.colors[i]}));
        });
        defsRoot.appendChild(grad);
        const c = svg('circle',{cx:pos.x, cy:pos.y, r:6, fill:`url(#${gradId})`, opacity:entOpacity});
        entsG.appendChild(c);
        addHoverHandlers(c, pos, ent.hoverText, ent.colors);
        addInvisibleHitCircle(entsG, pos, ent.hoverText, ent.colors, 12);
      }

      if (feature === 'dwellTime'){
        const r = Math.max(6, dwellSizes[id]/2);
        const ring = svg('circle',{
          cx:pos.x, cy:pos.y, r,
          fill:'none', stroke:ent.colors[0], 'stroke-width':0.5, opacity:entOpacity
        });
        entsG.appendChild(ring);
        addHoverHandlers(ring, pos, ent.hoverText, ent.colors);
        addInvisibleHitCircle(entsG, pos, ent.hoverText, ent.colors, 12);
      }

      if (feature === 'behaviour' && frame?.behavior){
        const t = svg('text',{
          x:pos.x, y:pos.y-8,
          fill:ent.colors[0], 'font-size':3.5, 'text-anchor':'middle', opacity:entOpacity,
          'font-family':'"PP Mori", sans-serif', 'font-weight':400
        });
        t.textContent = frame.behavior;
        entsG.appendChild(t);
        addHoverHandlers(t, pos, ent.hoverText, ent.colors);
        addInvisibleHitCircle(entsG, pos, ent.hoverText, ent.colors, 10);
      }

      if (feature === 'path' && trails[id]?.length>1){
        const d = trails[id].map((p,i)=> `${i===0?'M':'L'} ${p.x} ${p.y}`).join(' ');
        const path = svg('path',{
          d, fill:'none', stroke:ent.colors[0],
          'stroke-width':3, 'stroke-linecap':'round', 'stroke-linejoin':'round',
          opacity:0.6 * (entOpacity ?? 1)
        });
        entsG.appendChild(path);
        addHoverHandlers(path, pos, ent.hoverText, ent.colors);
        addInvisibleHitCircle(entsG, pos, ent.hoverText, ent.colors, 10);
      }
    });
    
  });

  // 배경 래퍼 동기화(선택)
  const rootStyle = document.documentElement.style;
  rootStyle.setProperty('--bg-k', String(k));
  rootStyle.setProperty('--bg-scaleY', String(scaleY));
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
  const rootStyle = document.documentElement.style;
  rootStyle.setProperty('--bg-k', String(k));                 // 0→1
  rootStyle.setProperty('--bg-scaleY', String(scaleY));   
}

/* 엔티티를 한 번만 채워 넣고, 위치만 업데이트 */
function populateExplodedEntitiesOnce(){
  if (WRAPS.layers[0]?.entsG.childNodes.length) return;

  const features = ['companions','outfitColor','dwellTime','behaviour','path']; // ADD: companion layer first for lower stacking

  Object.entries(rawData).forEach(([id, ent])=>{
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
        addHoverHandlers(dot, pos, ent.hoverText, ent.colors);
      }

      if (feat==='dwellTime' && ent.type==='person'){
        const ring = svg('circle',{cx:pos.x, cy:pos.y, r:8, fill:'none', stroke:ent.colors[0], 'stroke-width':2});
        L.appendChild(ring);
        addHoverHandlers(ring, pos, ent.hoverText, ent.colors);
        addInvisibleHitCircle(L, pos, ent.hoverText, ent.colors, 12);
      }

      if (feat==='behaviour' && ent.type==='person'){
        const t = svg('text',{x:pos.x, y:pos.y-8, fill:ent.colors[0], 'font-size':3.5, 'text-anchor':'middle'});
        t.textContent = getFrame(ent, currentTime)?.behavior || '';
        L.appendChild(t);
        addHoverHandlers(t, pos, ent.hoverText, ent.colors);
        addInvisibleHitCircle(L, pos, ent.hoverText, ent.colors, 10);
      }

      if (feat==='path' && ent.type==='person'){
        const path = svg('path',{d:`M ${pos.x} ${pos.y}`, fill:'none', stroke:ent.colors[0], 'stroke-width':0.8});
        L.appendChild(path);
        addHoverHandlers(path, pos, ent.hoverText, ent.colors);
        addInvisibleHitCircle(L, pos, ent.hoverText, ent.colors, 10);
      }

      if (feat==='companions' && ent.type==='companion'){
        // ADD: prep companion PNG icon once
        const iconSrc = companionIconMap[id];
        if(iconSrc){
          const size = COMPANION_ICON_SIZE;
          const half = size/2;
          const icon = svg('image',{
            x:pos.x - half,
            y:pos.y - half,
            width:size,
            height:size,
            class:'companion-icon'
          });
          icon.setAttribute('href', iconSrc);
          icon.setAttributeNS('http://www.w3.org/1999/xlink','href', iconSrc);
          icon.setAttribute('preserveAspectRatio','xMidYMid meet');
          L.appendChild(icon);
          addHoverHandlers(icon, pos, ent.hoverText, ent.colors);
          addInvisibleHitCircle(L, pos, ent.hoverText, ent.colors, size/2);
        }
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
  const squashTarget = readCssNumber('--exp-target-squash', .22);

  const step = (t)=>{
    const u = Math.min(1, (t - start)/D);
    const eased = easeInOut(u);

    // k(0→1) 진행도
    explodeProgress = lerp(from, explodeTarget, eased);

    // 🔊 배경(video 래퍼)도 같은 타이밍/스케일로 동기화
    const scaleY = lerp(1, squashTarget, explodeProgress);
    const rootStyle = document.documentElement.style;
    rootStyle.setProperty('--bg-k', String(explodeProgress));
    rootStyle.setProperty('--bg-scaleY', String(scaleY));

    render();
    if (u < 1) explodeRAF = requestAnimationFrame(step);
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
      const lastSample = trailSampleTime[id] ?? -Infinity;
      const shouldSample = (currentTime - lastSample) >= 0.4 || !arr.length;
      if(shouldSample){
        const prev = arr[arr.length-1];
        if(!prev || Math.hypot(prev.x - p.x, prev.y - p.y) > 0.05){
          arr.push({ x: p.x, y: p.y });
          trailSampleTime[id] = currentTime;
          if(arr.length > 500) arr.shift();
        }
      }
    }
  });
}
 // video fade in/out //
function handleClosing(){
  if(showVideo === 'closing') return;
  stopAlertBlink();
  showVideo = 'closing';
  if(secTimer){ clearInterval(secTimer); secTimer = null; }
  screenTitle.textContent = 'Closing Animation';
  if(screenInner) screenInner.classList.add('is-hidden');
  if(openingVideo){
    openingVideo.pause();
    openingVideo.currentTime = 0;
    openingVideo.classList.add('is-hidden');
  }
  if(closingVideo){
    closingVideo.pause();
    closingVideo.currentTime = 0;
    closingVideo.classList.remove('is-hidden');
    closingVideo.classList.remove('is-visible');
    closingVideo.classList.add('is-fading-in');
    requestAnimationFrame(()=> closingVideo.classList.add('is-visible'));
    closingVideo.addEventListener('transitionend', ()=>{
      closingVideo.classList.remove('is-fading-in');
    }, { once:true });
    const closingPlay = closingVideo.play();
    if(closingPlay && typeof closingPlay.catch === 'function'){
      closingPlay.catch(()=>{});
    }
  }
  if(backgroundVideo){
    backgroundVideo.pause();
    backgroundVideo.currentTime = 0;
  }
  
  screen.classList.remove('is-hidden');
  screen.classList.remove('is-transparent');
  app.classList.add('is-hidden');
}

function fadeOutScreen(onComplete){
  if(!screen){
    if(typeof onComplete === 'function') onComplete();
    return;
  }
  if(screen.classList.contains('is-hidden')){
    if(typeof onComplete === 'function') onComplete();
    return;
  }

  screen.classList.remove('is-transparent');

  let finished = false;
  const cleanup = ()=>{
    if(finished) return;
    finished = true;
    screen.classList.add('is-hidden');
    screen.classList.remove('is-transparent');
    screen.removeEventListener('transitionend', onTransitionEnd);
    if(typeof onComplete === 'function') onComplete();
  };
  const onTransitionEnd = (event)=>{
    if(event.target !== screen || event.propertyName !== 'opacity') return;
    cleanup();
  };

  screen.addEventListener('transitionend', onTransitionEnd);
  requestAnimationFrame(()=> screen.classList.add('is-transparent'));
  setTimeout(cleanup, 700);
}

function runTimerTick(){
  if(currentTime >= 180){
    handleClosing();
    return;
  }
  currentTime = Math.min(180, currentTime + 1);
  clockEl.textContent = formatTime(Math.floor(currentTime));
  if(currentTime >= 180){
    handleClosing();
  }
}

/* ===================== UI ===================== */
function setView(v){
  viewMode = v;
  document.querySelectorAll('.view-toggle').forEach(el=>{
    el.classList.toggle('active', el.dataset.view===v)
  });
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

async function startPlayback(){
  hideLanding(); // ADD: hide landing once playback begins
  if(screen) screen.classList.remove('is-hidden'); // ADD: reveal screen for opening video
  showVideo = 'opening';
  const launchApp = ()=>{
    showVideo = 'none';
    if(screenInner) screenInner.classList.add('is-hidden');
    app.classList.remove('is-hidden');

    stopAlertBlink();
    currentTime = 0;
    clockEl.textContent = formatTime(0);
    if(openingVideo){
      openingVideo.pause();
    }
    if(closingVideo){
      closingVideo.pause();
      closingVideo.currentTime = 0;
      closingVideo.classList.remove('is-visible', 'is-fading-in');
      closingVideo.classList.add('is-hidden');
    }
    if(backgroundVideo){
      backgroundVideo.pause();
      backgroundVideo.currentTime = 0;
    }
  
    playBackgroundVideo(); // ADD: start ambient audio once opening is done

    if(secTimer){ clearInterval(secTimer); }
    secTimer = setInterval(runTimerTick,1000);

    lastTS = performance.now();
    requestAnimationFrame(loop);
  };

  if(screenInner) screenInner.classList.add('is-hidden');

  if(openingVideo){
    openingVideo.classList.remove('is-hidden');
    openingVideo.classList.remove('is-visible', 'is-fading-in');
    void openingVideo.offsetWidth; // force reflow so fade can restart
    const handleOpeningTransitionEnd = (event)=>{
      if(event.target !== openingVideo || event.propertyName !== 'opacity') return;
      openingVideo.classList.remove('is-fading-in');
      openingVideo.removeEventListener('transitionend', handleOpeningTransitionEnd);
    };
    openingVideo.addEventListener('transitionend', handleOpeningTransitionEnd);
    openingVideo.classList.add('is-fading-in');
    requestAnimationFrame(()=> openingVideo.classList.add('is-visible'));
    openingVideo.currentTime = 0;
    let finished = false;
    const finish = ()=>{
      if(finished) return;
      finished = true;
      clearOpeningAudioUnlock(); // ADD: clean up audio unlock listeners
      openingVideo.removeEventListener('transitionend', handleOpeningTransitionEnd);
      openingVideo.classList.remove('is-fading-in');
      openingVideo.pause();
      fadeOutScreen(()=>{
        openingVideo.currentTime = 0;
        openingVideo.classList.add('is-hidden');
        openingVideo.classList.remove('is-visible', 'is-fading-in');
        launchApp();
      });
    };
    const waitForVideoCompletion = ()=> new Promise(resolve=>{
      const cleanup = ()=>{
        openingVideo.removeEventListener('ended', onEnded);
        openingVideo.removeEventListener('error', onError);
      };
      const onEnded = ()=>{
        cleanup();
        resolve({ ok:true });
      };
      const onError = (event)=>{
        cleanup();
        resolve({ ok:false, event });
      };
      openingVideo.addEventListener('ended', onEnded);
      openingVideo.addEventListener('error', onError);
    });
    const videoCompletion = waitForVideoCompletion();
    openingVideo.addEventListener('playing', ()=>{ // ADD: unmute once playback starts
      openingVideo.muted = false;
      openingVideo.volume = 1;
    }, { once:true });
    const playPromise = openingVideo.play();
    if(playPromise && typeof playPromise.then === 'function'){
      playPromise.then(()=>{
        openingVideo.muted = false;
        openingVideo.volume = 1;
      }).catch(()=>{
        bindOpeningAudioUnlock(); // ADD: request user gesture if autoplay with sound is blocked
      });
    }else{
      openingVideo.muted = false;
      openingVideo.volume = 1;
    }
    bindOpeningAudioUnlock(); // ADD: fallback unlock in case autoplay muted
    const result = await videoCompletion;
    if(!result.ok){
      console.warn('Opening video error:', result.event);
    }
    finish();
    return;
  }

  launchApp();
}

function loop(ts){
  if(showVideo !== 'none') return;
  const dt = Math.max(0,(ts-lastTS)/1000); lastTS = ts;

  const shouldBlink = currentTime >= ALERT_START && currentTime < ALERT_END;
  if(shouldBlink){
    if(!alertBlinkActive) startAlertBlink();
  }else if(alertBlinkActive){
    stopAlertBlink();
  }

  // 나머지 렌더/타이머 유지
  if(tempScrubActive){
    render();
  }else{
    tick(dt);
    render();
  }
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
  setupLanding();
})();

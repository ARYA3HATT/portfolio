import { Project } from "@/data";

export default function ProjectVis({ project }: { project: Project }) {
  const { id, color } = project;

  if (id === "api-visualizer") return (
    <svg viewBox="0 0 400 185" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" className="w-full h-full">
      <rect width="400" height="185" fill="#080c1e"/>
      <g stroke="rgba(68,102,255,.08)" strokeWidth="1"><line x1="0" y1="37" x2="400" y2="37"/><line x1="0" y1="74" x2="400" y2="74"/><line x1="0" y1="111" x2="400" y2="111"/><line x1="0" y1="148" x2="400" y2="148"/><line x1="80" y1="0" x2="80" y2="185"/><line x1="160" y1="0" x2="160" y2="185"/><line x1="240" y1="0" x2="240" y2="185"/><line x1="320" y1="0" x2="320" y2="185"/></g>
      <g opacity=".75">
        <rect x="25" y="105" width="16" height="65" fill="#4466ff" rx="1"><animate attributeName="height" values="65;95;50;80;65" dur="2.8s" repeatCount="indefinite"/><animate attributeName="y" values="105;75;120;90;105" dur="2.8s" repeatCount="indefinite"/></rect>
        <rect x="50" y="85" width="16" height="85" fill="#4466ff" rx="1"><animate attributeName="height" values="85;55;105;70;85" dur="3.2s" repeatCount="indefinite"/><animate attributeName="y" values="85;115;65;100;85" dur="3.2s" repeatCount="indefinite"/></rect>
        <rect x="75" y="55" width="16" height="115" fill="#5577ff" rx="1"><animate attributeName="height" values="115;140;80;120;115" dur="2.5s" repeatCount="indefinite"/><animate attributeName="y" values="55;30;75;50;55" dur="2.5s" repeatCount="indefinite"/></rect>
        <rect x="100" y="95" width="16" height="75" fill="#4466ff" rx="1"><animate attributeName="height" values="75;50;95;60;75" dur="3.5s" repeatCount="indefinite"/><animate attributeName="y" values="95;120;75;110;95" dur="3.5s" repeatCount="indefinite"/></rect>
        <rect x="125" y="40" width="16" height="130" fill="#6688ff" rx="1"><animate attributeName="height" values="130;100;150;110;130" dur="3s" repeatCount="indefinite"/><animate attributeName="y" values="40;70;20;60;40" dur="3s" repeatCount="indefinite"/></rect>
        <rect x="150" y="80" width="16" height="90" fill="#4466ff" rx="1"><animate attributeName="height" values="90;120;65;95;90" dur="2.7s" repeatCount="indefinite"/><animate attributeName="y" values="80;50;100;70;80" dur="2.7s" repeatCount="indefinite"/></rect>
      </g>
      <polyline fill="none" stroke="#00ccaa" strokeWidth="1.8" strokeLinecap="round" opacity=".7" points="25,128 75,100 125,78 175,108 225,58 275,88 325,68 375,82"><animate attributeName="points" values="25,128 75,100 125,78 175,108 225,58 275,88 325,68 375,82;25,110 75,130 125,60 175,88 225,78 275,68 325,98 375,62;25,128 75,100 125,78 175,108 225,58 275,88 325,68 375,82" dur="4s" repeatCount="indefinite"/></polyline>
      <circle cx="225" cy="58" r="4" fill="#00ccaa" opacity=".9"><animate attributeName="cy" values="58;78;58" dur="4s" repeatCount="indefinite"/></circle>
      <rect x="270" y="12" width="118" height="44" rx="2" fill="rgba(0,0,0,.5)" stroke="rgba(68,102,255,.2)" strokeWidth="1"/>
      <text x="280" y="27" fontFamily="monospace" fontSize="9" fill="rgba(68,102,255,.8)">p99: 234ms</text>
      <text x="280" y="40" fontFamily="monospace" fontSize="9" fill="rgba(0,204,170,.7)">p50:  87ms</text>
    </svg>
  );

  if (id === "adaptive-engine") return (
    <svg viewBox="0 0 400 185" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" className="w-full h-full">
      <rect width="400" height="185" fill="#08060f"/>
      <g stroke="rgba(120,60,255,.07)" strokeWidth="1"><line x1="0" y1="46" x2="400" y2="46"/><line x1="0" y1="92" x2="400" y2="92"/><line x1="0" y1="138" x2="400" y2="138"/><line x1="100" y1="0" x2="100" y2="185"/><line x1="200" y1="0" x2="200" y2="185"/><line x1="300" y1="0" x2="300" y2="185"/></g>
      <path d="M10,155 C40,155 55,148 70,135 C90,118 100,100 115,82 C130,62 145,42 165,32 C185,22 200,20 230,20 C260,20 270,22 300,24" fill="none" stroke="#9955ff" strokeWidth="2" opacity=".7"><animate attributeName="opacity" values=".5;.85;.5" dur="3s" repeatCount="indefinite"/></path>
      <line x1="165" y1="10" x2="165" y2="175" stroke="rgba(200,100,255,.35)" strokeWidth="1" strokeDasharray="4,3"/>
      <circle cx="165" cy="57" r="5" fill="#bb55ff" opacity=".9"><animate attributeName="cx" values="165;180;165" dur="3s" repeatCount="indefinite"/><animate attributeName="cy" values="57;45;57" dur="3s" repeatCount="indefinite"/></circle>
      <text x="168" y="28" fontFamily="monospace" fontSize="9" fill="rgba(180,100,255,.75)">&#952; = 0.73</text>
      <rect x="220" y="50" width="168" height="56" rx="2" fill="rgba(0,0,0,.45)" stroke="rgba(120,60,255,.2)" strokeWidth="1"/>
      <text x="228" y="68" fontFamily="monospace" fontSize="8" fill="rgba(170,100,255,.75)">P(&#952;) = c + (1-c)</text>
      <text x="228" y="82" fontFamily="monospace" fontSize="8" fill="rgba(170,100,255,.75)">  / (1 + e^(-a(&#952;-b)))</text>
      <text x="228" y="96" fontFamily="monospace" fontSize="7" fill="rgba(120,60,255,.5)">3PL IRT &#183; MFI Selection</text>
      <circle cx="80" cy="140" r="3.5" fill="rgba(120,60,255,.5)"><animate attributeName="opacity" values="0;.8;0" dur="2.2s" begin="0s" repeatCount="indefinite"/></circle>
      <circle cx="115" cy="110" r="3.5" fill="rgba(150,80,255,.6)"><animate attributeName="opacity" values="0;.9;0" dur="2.2s" begin=".55s" repeatCount="indefinite"/></circle>
      <circle cx="140" cy="75" r="3.5" fill="rgba(180,100,255,.7)"><animate attributeName="opacity" values="0;1;0" dur="2.2s" begin="1.1s" repeatCount="indefinite"/></circle>
      <circle cx="165" cy="50" r="3.5" fill="#cc77ff"><animate attributeName="opacity" values="0;1;0" dur="2.2s" begin="1.65s" repeatCount="indefinite"/></circle>
      <text x="10" y="178" fontFamily="monospace" fontSize="7" fill="rgba(120,60,255,.45)">SEM = 0.28 &#183; CI [0.54, 0.92] &#183; Adaptive Test Complete</text>
    </svg>
  );

  if (id === "anomaly-detection") return (
    <svg viewBox="0 0 400 185" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" className="w-full h-full">
      <rect width="400" height="185" fill="#0d0800"/>
      <polyline fill="none" stroke="#ff6600" strokeWidth="1.5" opacity=".5" points="0,92 40,78 80,98 120,73 160,92 200,83 240,90 280,76 320,94 360,80 400,88"><animate attributeName="points" values="0,92 40,78 80,98 120,73 160,92 200,83 240,90 280,76 320,94 360,80 400,88;0,88 40,98 80,78 120,93 160,76 200,90 240,83 280,94 320,80 360,88 400,86;0,92 40,78 80,98 120,73 160,92 200,83 240,90 280,76 320,94 360,80 400,88" dur="4s" repeatCount="indefinite"/></polyline>
      <line x1="248" y1="175" x2="248" y2="15" stroke="#ff2244" strokeWidth="1.5" strokeDasharray="5,4" opacity=".55"/>
      <circle cx="248" cy="38" r="22" fill="none" stroke="rgba(255,30,60,.4)" strokeWidth="1"><animate attributeName="r" values="18;28;18" dur="2s" repeatCount="indefinite"/></circle>
      <circle cx="248" cy="38" r="6" fill="#ff2244" opacity=".8"/>
      <text x="256" y="28" fontFamily="monospace" fontSize="9" fill="#ff4466">ANOMALY</text>
      <text x="256" y="40" fontFamily="monospace" fontSize="8" fill="rgba(255,68,102,.55)">t=14:32:07</text>
      <rect x="8" y="8" width="96" height="32" rx="2" fill="rgba(255,100,0,.08)" stroke="rgba(255,100,0,.25)" strokeWidth="1"/>
      <text x="16" y="22" fontFamily="monospace" fontSize="9" fill="#ff8844">F1 Score</text>
      <text x="16" y="34" fontFamily="monospace" fontSize="11" fill="#ffaa44" fontWeight="bold">0.8113</text>
    </svg>
  );

  if (id === "trader-sentiment") return (
    <svg viewBox="0 0 400 185" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" className="w-full h-full">
      <rect width="400" height="185" fill="#060a12"/>
      <rect x="28" y="88" width="13" height="52" fill="rgba(0,200,100,.42)" rx="1"/><rect x="50" y="68" width="13" height="72" fill="rgba(0,200,100,.42)" rx="1"/><rect x="72" y="84" width="13" height="44" fill="rgba(220,50,50,.38)" rx="1"/><rect x="94" y="98" width="13" height="58" fill="rgba(220,50,50,.38)" rx="1"/><rect x="116" y="62" width="13" height="78" fill="rgba(0,200,100,.42)" rx="1"/><rect x="138" y="78" width="13" height="50" fill="rgba(0,200,100,.42)" rx="1"/><rect x="160" y="92" width="13" height="56" fill="rgba(220,50,50,.38)" rx="1"/><rect x="182" y="52" width="13" height="80" fill="rgba(0,200,100,.5)" rx="1"/><rect x="204" y="68" width="13" height="68" fill="rgba(0,200,100,.42)" rx="1"/>
      <polyline fill="none" stroke="rgba(100,150,255,.5)" strokeWidth="1.5" points="28,115 72,95 116,80 160,110 204,68 248,92"/>
      <g transform="translate(308,90)"><path d="M-52,0 A52,52 0 0,1 52,0" fill="none" stroke="rgba(255,255,255,.07)" strokeWidth="9"/><path d="M-52,0 A52,52 0 0,1 18,-32" fill="none" stroke="#ff6600" strokeWidth="9" strokeLinecap="round" opacity=".65"/><text x="0" y="22" textAnchor="middle" fontFamily="monospace" fontSize="10" fill="#ff9944">FEAR</text><text x="0" y="5" textAnchor="middle" fontFamily="monospace" fontSize="17" fill="#ffaa44" fontWeight="bold">32</text><line x1="0" y1="0" x2="14" y2="-29" stroke="#ffaa44" strokeWidth="2" strokeLinecap="round" opacity=".75"/></g>
    </svg>
  );

  if (id === "voice-recognition") return (
    <svg viewBox="0 0 400 185" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" className="w-full h-full">
      <rect width="400" height="185" fill="#060d08"/>
      <g fill="rgba(0,200,100,.55)">
        <rect x="18" y="82" width="7" height="22" rx="2"><animate attributeName="height" values="22;62;16;44;22" dur="1.1s" repeatCount="indefinite"/><animate attributeName="y" values="82;62;86;70;82" dur="1.1s" repeatCount="indefinite"/></rect>
        <rect x="32" y="72" width="7" height="42" rx="2"><animate attributeName="height" values="42;82;26;62;42" dur=".85s" repeatCount="indefinite"/><animate attributeName="y" values="72;52;80;62;72" dur=".85s" repeatCount="indefinite"/></rect>
        <rect x="46" y="62" width="7" height="62" rx="2"><animate attributeName="height" values="62;102;42;82;62" dur="1.35s" repeatCount="indefinite"/><animate attributeName="y" values="62;42;72;52;62" dur="1.35s" repeatCount="indefinite"/></rect>
        <rect x="60" y="76" width="7" height="34" rx="2"><animate attributeName="height" values="34;72;22;50;34" dur="1.05s" repeatCount="indefinite"/><animate attributeName="y" values="76;56;82;68;76" dur="1.05s" repeatCount="indefinite"/></rect>
        <rect x="74" y="68" width="7" height="50" rx="2"><animate attributeName="height" values="50;92;36;70;50" dur="1.25s" repeatCount="indefinite"/><animate attributeName="y" values="68;48;76;58;68" dur="1.25s" repeatCount="indefinite"/></rect>
        <rect x="88" y="80" width="7" height="26" rx="2"><animate attributeName="height" values="26;58;16;42;26" dur=".95s" repeatCount="indefinite"/><animate attributeName="y" values="80;62;86;72;80" dur=".95s" repeatCount="indefinite"/></rect>
      </g>
      <rect x="218" y="62" width="24" height="40" rx="12" fill="none" stroke="#00cc66" strokeWidth="2.5" opacity=".8"/>
      <path d="M210,98 Q210,122 230,122 Q250,122 250,98" fill="none" stroke="#00cc66" strokeWidth="2.5" opacity=".75"/>
      <line x1="230" y1="122" x2="230" y2="138" stroke="#00cc66" strokeWidth="2.5" opacity=".65"/>
      <rect x="270" y="55" width="118" height="72" rx="2" fill="rgba(0,0,0,.35)" stroke="rgba(0,200,100,.12)" strokeWidth="1"/>
      <text x="280" y="74" fontFamily="monospace" fontSize="9" fill="rgba(0,200,100,.7)">Class A  94.2%</text>
      <rect x="280" y="78" width="83" height="4" rx="1" fill="rgba(0,200,100,.55)"/>
      <text x="280" y="98" fontFamily="monospace" fontSize="9" fill="rgba(255,100,100,.6)">Class B   5.8%</text>
      <rect x="280" y="102" width="5" height="4" rx="1" fill="rgba(255,100,100,.45)"/>
      <text x="280" y="120" fontFamily="monospace" fontSize="8" fill="rgba(0,200,100,.4)">Acc: 97.3%</text>
    </svg>
  );

  if (id === "crypto-visualizer") return (
    <svg viewBox="0 0 400 185" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" className="w-full h-full">
      <rect width="400" height="185" fill="#090510"/>
      <circle cx="105" cy="92" r="52" fill="none" stroke="rgba(153,51,255,.12)" strokeWidth="1"><animate attributeName="r" values="46;60;46" dur="3s" repeatCount="indefinite"/></circle>
      <circle cx="105" cy="92" r="36" fill="none" stroke="rgba(153,51,255,.1)" strokeWidth="1"/>
      <rect x="83" y="88" width="44" height="30" rx="4" fill="none" stroke="#9933ff" strokeWidth="2" opacity=".75"/>
      <path d="M93,88 L93,74 Q93,60 105,60 Q117,60 117,74 L117,88" fill="none" stroke="#9933ff" strokeWidth="2" opacity=".65"/>
      <circle cx="105" cy="105" r="5" fill="rgba(153,51,255,.85)"/>
      <line x1="105" y1="110" x2="105" y2="118" stroke="#9933ff" strokeWidth="2" opacity=".65"/>
      <text x="105" y="134" textAnchor="middle" fontFamily="monospace" fontSize="8" fill="rgba(153,51,255,.5)">RSA-2048</text>
      <g fontFamily="monospace" fontSize="8" fill="rgba(153,51,255,.3)">
        <text x="168" y="38"><animate attributeName="opacity" values="0;.5;0" dur="2s" repeatCount="indefinite"/>10110101 11001010</text>
        <text x="168" y="56"><animate attributeName="opacity" values="0;.4;0" dur="2.5s" begin=".3s" repeatCount="indefinite"/>01101110 10100111</text>
      </g>
      <rect x="285" y="52" width="98" height="78" rx="2" fill="rgba(0,0,0,.4)" stroke="rgba(100,50,200,.22)" strokeWidth="1"/>
      <text x="334" y="72" textAnchor="middle" fontFamily="monospace" fontSize="8" fill="rgba(150,80,255,.6)">AES-256</text>
      <g stroke="rgba(100,50,200,.2)" strokeWidth="1"><rect x="295" y="80" width="17" height="17" rx="1" fill="rgba(100,50,200,.1)"/><rect x="316" y="80" width="17" height="17" rx="1" fill="rgba(100,50,200,.14)"/><rect x="337" y="80" width="17" height="17" rx="1" fill="rgba(100,50,200,.1)"/><rect x="358" y="80" width="17" height="17" rx="1" fill="rgba(100,50,200,.08)"/></g>
    </svg>
  );

  if (id === "network-scanner") return (
    <svg viewBox="0 0 400 185" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" className="w-full h-full">
      <rect width="400" height="185" fill="#060a08"/>
      <g transform="translate(138,92)">
        <circle cx="0" cy="0" r="72" fill="none" stroke="rgba(0,255,136,.07)" strokeWidth="1"/>
        <circle cx="0" cy="0" r="52" fill="none" stroke="rgba(0,255,136,.06)" strokeWidth="1"/>
        <circle cx="0" cy="0" r="32" fill="none" stroke="rgba(0,255,136,.09)" strokeWidth="1"/>
        <circle cx="0" cy="0" r="8" fill="rgba(0,255,136,.4)"/>
        <line x1="0" y1="0" x2="68" y2="0" stroke="rgba(0,255,136,.45)" strokeWidth="1.5" strokeLinecap="round"><animateTransform attributeName="transform" type="rotate" from="0" to="360" dur="3s" repeatCount="indefinite"/></line>
        <circle cx="46" cy="-22" r="5" fill="rgba(0,255,136,.7)"><animate attributeName="opacity" values="0;1;0" dur="3s" begin=".5s" repeatCount="indefinite"/></circle>
      </g>
      <rect x="244" y="28" width="146" height="122" rx="2" fill="rgba(0,0,0,.5)" stroke="rgba(0,255,136,.08)" strokeWidth="1"/>
      <text x="252" y="46" fontFamily="monospace" fontSize="8" fill="rgba(0,255,136,.45)">$ nmap -sV 192.168.1.1</text>
      <text x="252" y="61" fontFamily="monospace" fontSize="8" fill="rgba(0,200,100,.65)">22/tcp   open  ssh</text>
      <text x="252" y="75" fontFamily="monospace" fontSize="8" fill="rgba(0,200,100,.65)">80/tcp   open  http</text>
      <text x="252" y="89" fontFamily="monospace" fontSize="8" fill="rgba(255,100,0,.55)">443/tcp  open  https</text>
      <text x="252" y="103" fontFamily="monospace" fontSize="8" fill="rgba(0,200,100,.65)">3306/tcp open  mysql</text>
      <text x="252" y="131" fontFamily="monospace" fontSize="8" fill="rgba(0,255,136,.35)">Done: 1 IP in 0.23s</text>
    </svg>
  );

  // trip-it + fallback
  return (
    <svg viewBox="0 0 400 185" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" className="w-full h-full">
      <rect width="400" height="185" fill="#060810"/>
      <g stroke="rgba(68,153,255,.05)" strokeWidth="1"><line x1="0" y1="46" x2="220" y2="46"/><line x1="0" y1="92" x2="220" y2="92"/><line x1="44" y1="0" x2="44" y2="185"/><line x1="88" y1="0" x2="88" y2="185"/><line x1="132" y1="0" x2="132" y2="185"/><line x1="176" y1="0" x2="176" y2="185"/></g>
      <path d="M38,148 Q68,78 118,88 Q158,98 178,58 Q198,28 218,48" fill="none" stroke="#4499ff" strokeWidth="2" strokeDasharray="5,4" opacity=".55"><animate attributeName="strokeDashoffset" values="100;0" dur="3s" repeatCount="indefinite"/></path>
      <circle cx="38" cy="148" r="6" fill="rgba(68,153,255,.8)"/>
      <circle cx="118" cy="88" r="5" fill="rgba(68,153,255,.7)"><animate attributeName="r" values="5;7;5" dur="2s" repeatCount="indefinite"/></circle>
      <circle cx="218" cy="48" r="7" fill="rgba(68,200,100,.8)"/>
      <rect x="238" y="18" width="150" height="150" rx="2" fill="rgba(0,0,0,.5)" stroke="rgba(68,153,255,.12)" strokeWidth="1"/>
      <text x="248" y="36" fontFamily="monospace" fontSize="8" fill="rgba(68,153,255,.55)">MY ITINERARY</text>
      <text x="248" y="58" fontFamily="monospace" fontSize="8" fill="rgba(200,200,200,.65)">Day 1 &#8212; Arrival</text>
      <text x="248" y="72" fontFamily="monospace" fontSize="7" fill="rgba(120,120,120,.55)">09:00  Check-in hotel</text>
      <text x="248" y="85" fontFamily="monospace" fontSize="7" fill="rgba(120,120,120,.55)">14:00  City tour</text>
      <text x="248" y="102" fontFamily="monospace" fontSize="8" fill="rgba(200,200,200,.65)">Day 2 &#8212; Explore</text>
      <text x="248" y="116" fontFamily="monospace" fontSize="7" fill="rgba(120,120,120,.55)">10:00  Museum visit</text>
      <text x="248" y="155" fontFamily="monospace" fontSize="8" fill="rgba(68,153,255,.4)">3 days &#183; 7 stops planned</text>
    </svg>
  );
}

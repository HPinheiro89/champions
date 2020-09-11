import React from "react";
import "./styles.css";
import Champ from "./components/Champ";

const champs = [
  {
    name: "Nocturne",
    image:
      "https://vignette.wikia.nocookie.net/leagueoflegends/images/e/e5/Nocturne_OriginalLoading.jpg/revision/latest/scale-to-width-down/340?cb=20200425022321",
    title: '"The Eternal Nightmare"',
    nation: "Runeterra",
    role: "Assassin"
    },
  {
    name: "Vi",
    image:
      "https://images.wikia.com/leagueoflegends/images/8/85/Vi_OriginalLoading.jpg",
    title: '"The Piltover Enforcer"',
    nation: "Piltover",
    role: "Fighter"
  },
  {
    name: "Jinx",
    image:
      "https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/archive/1/18/20191214212841%21Skin_Loading_Screen_Classic_Jinx.jpg",
    title: '"The Loose Canon"',
    nation: "Zaun",
    role: "Marksman"
  },
  {
    name: "Leona",
    image:
      "https://gamepedia.cursecdn.com/lolesports_gamepedia_en/archive/7/79/20191214230353%21Skin_Loading_Screen_Classic_Leona.jpg",
      title: '"The Radiant Dawn"',
      nation: "Targon",
      role: "Tank"
  },
  {
    name: "Tahm Kench",
    image:
      "https://static.tvtropes.org/pmwiki/pub/images/tahm_kench_originalloading25.jpg",
      title: '"The River King"',
      nation: "Runeterra",
      role: "Support"
  },
  {
    name: "Skarner",
    image:
      "https://lolskin.weblog.vc/img/forex/loading/Skarner_0.webp?1599258431",
      title: '"The Crystal Vanguard"',
      nation: "Shurima",
      role: "Fighter"
  },
  {
    name: "Sona",
    image:
      "https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Sona_0.jpg",
      title: '"Maven of The Strings"',
      nation: "Demacia",
      role: "Support"
  },
  {
    name: "Darius",
    image:
      "https://vignette.wikia.nocookie.net/leagueoflegends/images/4/41/Darius.Klasyczna.portret.jpg/revision/latest/scale-to-width-down/340?cb=20160413093841&path-prefix=pl",
      title: '"The Hand of Noxus"',
      nation: "Noxus",
      role: "Fighter"
  },
  {
    name: "Maokai",
    image:
      "https://gamepedia.cursecdn.com/lolesports_gamepedia_en/3/38/Skin_Loading_Screen_Classic_Maokai.jpg",
      title: '"The Twisted Treant"',
      nation: "Shadow Isles",
      role: "Tank"
  }
];

function App() {
    const [isShown, setIsShown] = useState(false);
  
    return (
      <div className="App">
        <button
          onMouseEnter={() => setIsShown(true)}
          onMouseLeave={() => setIsShown(false)}
        >
          Hover over me!
        </button>
        {isShown && <div>I'll appear when you hover over the button.</div>}
      </div>
    );
  }
  
  export default App;

/* export default function App() {
  return (
    <div className="grid">
      {champs.map((c, index) => (
        <div key={`c.name-${index}`} className="grid-item">
          <Champ name={c.name} image={c.image}/>
        </div>
      ))}
    </div>
  );
} */


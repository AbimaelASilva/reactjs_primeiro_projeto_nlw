import "./styles.css";

import Header from "./components/Header";
import Section from "./components/Section";
import ListItem from "./components/ListItem";

export default function App() {
  const gamesListData = [
    {
      urlLink: "https://www.twitch.tv/directory/game/League%20of%20Legends",
      urlImage: "https://static-cdn.jtvnw.net/ttv-boxart/21779-188x250.jpg",
      description: "Imagem do jogo League of Legends",
    },

    {
      urlLink: "https://www.twitch.tv/directory/game/VALORANT",
      urlImage: "https://static-cdn.jtvnw.net/ttv-boxart/516575-188x250.jpg",
      description: "Imagem do jogo Valorant",
    },

    {
      urlLink: "https://www.twitch.tv/directory/game/Minecraft",
      urlImage:
        "https://static-cdn.jtvnw.net/ttv-boxart/27471_IGDB-188x250.jpg",
      description: "Imagem do jogo Minecraft",
    },

    {
      urlLink: "https://www.twitch.tv/directory/game/Teamfight%20Tactics",
      urlImage: "https://static-cdn.jtvnw.net/ttv-boxart/513143-188x250.jpg",
      description: "Imagem do jogo TFT",
    },
  ];

  const channelsListData = [
    {
      urlLink: "https://www.twitch.tv/maykbrito",
      urlImage:
        "https://static-cdn.jtvnw.net/jtv_user_pictures/9ce11a2b-ec84-44b1-9c76-b8d29df5fef0-profile_image-150x150.png",
      description: "Imagem de Mayk Brito",
    },
    {
      urlLink: "https://www.twitch.tv/alanzoka",
      urlImage:
        "https://static-cdn.jtvnw.net/jtv_user_pictures/64d44235-1dee-4bca-95da-bee1ee96eea3-profile_image-150x150.png",
      description: "Imagem de Alanzoka",
    },
    {
      urlLink: "https://www.twitch.tv/cellbit",
      urlImage:
        "https://static-cdn.jtvnw.net/jtv_user_pictures/0595cdd0-65a7-4fa3-996d-323cf3a54be1-profile_image-150x150.png",
      description: "Imagem de Cellbit",
    },
  ];
  const socialListData = [
    {
      urlLink: "https://www.twitch.tv",
      urlImage: "/assets/twitch.svg",
      description: "Imagem de Mayk Brito",
    },
    {
      urlLink: "https://www.twitter.tv/alanzoka",
      urlImage: "/assets/twitter.svg",
      description: "Imagem de Alanzoka",
    },
    {
      urlLink: "https://www.instagram.com",
      urlImage: "/assets/instagram.svg",
      description: "YouTube",
    },
    {
      urlLink: "https://www.youtube.com/",
      urlImage: "/assets/youtube.svg",
      description: "YouTube",
    },
  ];

  return (
    <div className="App">
      <Header />
      <main>
        <Section
          title="Meus jogos"
          subtitle="Os games que eu mais curto jogar!"
          className="games-list"
        >
          <ListItem
            urlLink="https://www.twitch.tv/directory/game/League%20of%20Legends"
            urlImage="https://static-cdn.jtvnw.net/ttv-boxart/21779-188x250.jpg"
            description="Imagem do jogo League of Legendsssss"
          />
          {gamesListData.map((game) => (
            <ListItem
              urlLink={game.urlLink}
              urlImage={game.urlImage}
              description={game.description}
            />
          ))}
        </Section>
        <Section
          title="Canais e Streamers"
          subtitle="Lista de canais e transmissões que não perco!"
          className="channel-list"
        >
          {channelsListData.map((game) => (
            <ListItem
              urlLink={game.urlLink}
              urlImage={game.urlImage}
              description={game.description}
            />
          ))}
        </Section>
        <Section title="Minhas redes" subtitle="Se conecte comigo agora mesmo!">
          {socialListData.map((game) => (
            <ListItem
              urlLink={game.urlLink}
              urlImage={game.urlImage}
              description={game.description}
            />
          ))}
        </Section>
      </main>
    </div>
  );
}

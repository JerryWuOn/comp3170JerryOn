import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>My News Feed</h1>
      <Avatar
        image="https://picsum.photos/160/80"
        header="Animals never eat pizza that they do not like"
        name="Jerry"
        link="https://www.britannica.com/plant/carrot"
        tagline="Penguins are interesting animals"
        information="1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishin"
      />
      <Avatar
        image="https://picsum.photos/160/80"
        header="Facts about why we eat spaghetti"
        name="Kiiroitori"
        link="https://www.britannica.com/plant/potato"
        tagline="Penguins are interesting animals"
        information="And their ravenous appetite keeps countless insect pests in check. The spiders serve to protect plants and trees by eating the bugs that would feed on them, especially in forests and grassland areas, according to study lead author Martin Nyffeler of the University of Basel in Switzerland"
      />
      <Avatar
        image="https://picsum.photos/160/80"
        header="Ceaser salad is actually a smoothie"
        name="Yves"
        link="https://www.britannica.com/plant/tomato#:~:text=tomato%2C%20(Solanum%20lycopersicum)%2C,C%20and%20the%20phytochemical%20lycopene."
        tagline="Penguins are interesting animals"
        information="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ipsum dolor sit amet consectetur adipiscing elit. Tincidunt arcu non sodales neque sodales ut etiam. Praesent elementum facilisis leo vel fringilla. Aliquet lectus proin nibh nisl condimentum id venenatis a condimentum."
      />
    </div>
  );
}

function Avatar(item) {
  return (
    <div className="profile-container">
      <div className="container-styles">
        <div className="profile-img">
          <img src={item.image} alt="" />
        </div>
        <div>
          <a className="header" href={item.link} target="_blank">
            <p>{item.header}</p>
          </a>
          <p className="profile">By:{item.name}</p>
        </div>
      </div>
      <div className="information">
        <p> {item.information}</p>
      </div>
    </div>
  );
}

import teamInfo from './CollegeBasketballTeams.json'; // Import JSON data

import './App.css';

function Welcome() {
  return (
    <>
      <div>
        <h1>March Maddness Data</h1>
        <br></br>
        <p>
          With March Madness in full swing, our website serves as the ultimate
          hub for NCAA Basketball fans looking to learn more about the teams
          competing in the tournament. This platform provides detailed
          information about all colleges in NCAA Basketball, including their
          team history, key players, and past tournament performances. Whether
          you're filling out a bracket, following your favorite school, or just
          exploring the rich traditions of college basketball, our site makes it
          easy to access the stats and facts you need. Stay updated with the
          latest insights and get to know the teams that make March Madness one
          of the most exciting events in sports!
        </p>
        <br></br>
        <h1>List of Teams: </h1>
      </div>
    </>
  );
}

function Team({
  school,
  name,
  city,
  state,
}: {
  school: string;
  name: string;
  city: string;
  state: string;
}) {
  return (
    <>
      <h2>School: {school}</h2>
      <h3>Name of Mascot: {name}</h3>
      <h3>
        Location: {city}, {state}
      </h3>
      <br></br>
      <br></br>
    </>
  );
}

function TeamList() {
  return (
    <>
      {teamInfo.teams.map((singleTeam, index) => (
        <Team key={index} {...singleTeam} />
      ))}
    </>
  );
}

function App() {
  return (
    <>
      <Welcome />
      <TeamList />
    </>
  );
}

export default App;

import sponsor from "../../assets/pictures/sponsors.jpg";

function Home() {
    return (
      <home>
        <div className="row tab-pane custom-bg-color m-1 ">
          <div className="col-md-5 mx-auto  ">
            <h2 className="m-2">2022 Championship Results</h2>
            <div className="table-responsive">
              <table className="table table-striped table-hover p-4">
                <thead>
                  <tr>
                    <th>Rank</th>
                    <th>Team</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Husky Robotics</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Lion Force</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>Autobots</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <h2 className="m-2">Sponsors</h2>
            {pictures()}
          </div>
          <div className="col-md-5 mx-auto">
            <h1 className="display-4">Welcome to the Robotics Championship</h1>
            <p>
              {" "}
              The Robotics Championship is an electrifying convergence of
              innovation, engineering prowess, and boundless creativity. It
              stands as a testament to human ingenuity as teams from across the
              globe unite to showcase their autonomous machines, often years in
              the making, in fierce competition. The event not only celebrates
              the spirit of technology but also fosters collaboration, learning,
              and problem-solving on a grand scale.
            </p>
            <h2>Community</h2>
            <p>
              Beyond the battle arena, the Robotics Championship is the nucleus
              of a vibrant global community. Comprising young and seasoned minds
              alike, this community is driven by a shared passion for robotics
              and the relentless pursuit of pushing technological boundaries.
              It's a place where students, engineers, and enthusiasts find
              common ground, exchanging ideas and forging lifelong friendships.
              This sense of belonging extends beyond the event, nurturing a
              network that supports innovation throughout the year, with the
              goal of advancing the field of robotics.
            </p>
            <h2>Competition</h2>
            <p>
              The heart of the Robotics Championship beats in the competition
              arena, where autonomous robots come to life. Teams meticulously
              design, build, and program their robots to accomplish a series of
              challenging tasks. These tasks often simulate real-world
              scenarios, from navigating obstacle courses to executing precise
              maneuvers. But it's not just about raw performance; teams are
              judged on their ability to adapt, troubleshoot, and fine-tune
              their creations under intense pressure. The competition is a
              symphony of engineering brilliance, strategy, and teamwork. As the
              robots race, grapple, and strategize, they captivate the audience
              and demonstrate the incredible potential of human-machine
              collaboration. The Robotics Championship is a thrilling testament
              to the future of technology and the boundless possibilities that
              await in the world of robotics.
            </p>
          </div>
          <div className="col-md-6">
            <div className="embed-responsive embed-responsive-16by9">
              <iframe
                className="p-2"
                width="100%"
                height={315}
                src="https://www.youtube.com/embed/Jd29kzjclV0?si=aTXUKOLg6Cjs-ZjJ"
                title="YouTube video player"
                frameBorder={0}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media;
                  gyroscope; picture-in-picture; web-share"
                allowFullScreen=""
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="embed-responsive embed-responsive-16by9">
              <iframe
                className="p-2"
                width="100%"
                height={315}
                src="https://www.youtube.com/embed/Mw2-b3eukQc?si=yY6uwpIKngtxmQxR"
                title="YouTube video player"
                frameBorder={0}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen=""
              />
            </div>
          </div>
        </div>
      </home>
    );

  function pictures() {
    return <img
      src={sponsor}
      alt="The sponsors"
      className="img-fluid m-2" />;
  }
  }
  export default Home;
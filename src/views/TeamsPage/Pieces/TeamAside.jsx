function TeamAside(){
    return(
        <div className='col-md-11'>
        <h2 className="m-2">2022 Championship Schedule</h2>
        <div className="table-responsive myTable">
          <table className="table table-striped table-hover p-2">
                    <thead>
                      <tr>
                        <th>Date</th>
                        <th>Team</th>
                        <th />
                        <th>Team</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Husky Robotics</td>
                        <td>09/22/2023</td>
                        <td>vs</td>
                        <td>Lion Force</td>
                      </tr>
                      <tr>
                        <td>09/29/2023</td>
                        <td>Lion Force</td>
                        <td>vs</td>
                        <td>Autobots</td>
                      </tr>
                      
                      <tr>
                        <td>10/6/2023</td>
                        <td>Autobots</td>
                        <td>vs</td>
                        <td>Husky Robotics</td>
                      </tr>
                      <tr>
                        <td>10/13/2023</td>
                        <td>Final Team</td>
                        <td>vs</td>
                        <td>Final Team</td>
                      </tr>
                    </tbody>
          </table>
        </div>
      </div>
    );
}
export default TeamAside
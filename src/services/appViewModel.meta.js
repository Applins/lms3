import LocalStorageService from '../services/localStorageService.service';
let appViewmodel={
  app:{
      header:{
        logo:"/assets/pictures/robot.svg",
        title:"Robotics Championship"
      },
      endpoint: null
  },
  entities:{
    "teams":{
        entity: "teams",
        entitySingle: "team",
        api:null,
        options:{
          sortCol:"name",
          sortDir:"asc",
          filterStr:"",
          filterCol:"name",
          limit:50,
          offset:0
        },
        list:{
          listTitle:"Robotics Teams",
          tableClasses: "table table-dark table-hover mt-2",
          thClasses:"bg-black bg-gradient",
          columns:[
            {
              label:"Name",
              name:"name" 
            },
            {
              label:"Coach Name",
              name:"coachName"
            },
            {
              label:"Motto",
              name:"motto"    
            },
            {
              label:"Notes",
              name:"notes"
            }    
          ]
        },
        lookups:{
          "coaches":[
            {
              label:"Mark Musk",
              value: 1
            },
            {
              label: "Mufasa Lion",
              value: 2
            },
            {
              label:"Optimus Prime",
              value:3
            }
          ]
        },
        data:[
          {
              id: 1,
              name: 'Husky Robotics',
              coachName: 'Mark Musk',
              coachPhone: '801-555-2525',
              coachEmail: 'muskyhusky@gmail.com',
            },
            {
              id: 2,
              name: 'Lion Force',
              coachName: 'Mufasa Lion',
              coachPhone: '915-357-1257',
              coachEmail: 'mufafafa@gmail.com',
            },
            {
              id: 3,
              name: 'Autobots',
              coachName: 'Optimus Prime',
              coachPhone: '101-110-0011',
              coachEmail: 'optimus@prime.com',
            },
            {
              id: 4,
              name: 'Tiger Tech',
              coachName: 'Samantha Smith',
              coachPhone: '123-456-7890',
              coachEmail: 'samantha@example.com',
            },
            {
              id: 5,
              name: 'Dragon Robotics',
              coachName: 'Michael Johnson',
              coachPhone: '987-654-3210',
              coachEmail: 'michael@example.com',
            },
            {
              id: 6,
              name: 'Thunderbots',
              coachName: 'Sarah Lee',
              coachPhone: '555-555-5555',
              coachEmail: 'sarah@example.com',
            },
            {
              id: 7,
              name: 'Eagle Engineers',
              coachName: 'Christopher Brown',
              coachPhone: '777-777-7777',
              coachEmail: 'chris@example.com',
            },
            {
              id: 8,
              name: 'Phoenix Force',
              coachName: 'Jessica Davis',
              coachPhone: '111-222-3333',
              coachEmail: 'jessica@example.com',
            }
            
        ],
    },
    "players":{
      api:null,
      data:null
    }
  },
  getApi: function(entity){
    return new LocalStorageService(this.entities[entity], entity);
}
}

export default appViewmodel;

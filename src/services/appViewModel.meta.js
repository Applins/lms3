import LocalStorageService from '../services/localStorageService.service';
import mockTeamData  from './mockTeamData.data';

let appViewmodel = {
  api: null,
  data: mockTeamData,
  header: {
    logo: '/assets/pictures/robot.svg',
    title: 'Robotics Championship',
  },
  list: {
    entity: 'teams',
    api: null,
    entitySingle: 'team',
    listTitle: 'Robotic Teams',
    tableClasses: 'table',
    thClasses: 'bg-white',
  },
  getApi: function (apiType) {
    if (!this.api) {
      return (this.api = new LocalStorageService(this.data, apiType));
    }
    return this.api;
  },
};

export default appViewmodel;

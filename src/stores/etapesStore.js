import { observable, action } from "mobx";

export class EtapesStore {
  @observable
  etapeStats = {
    id: 0,
    name: "testname",
    km: 44,
    knooppunten: 20,
    cities: 4
  };

  @action setEtapeStats = stats => console.log(stats);
}

export default new EtapesStore();

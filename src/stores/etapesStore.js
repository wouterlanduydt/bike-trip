import { observable, action, computed } from "mobx";
import etapes from "../assets/data/etapes";

export class EtapesStore {
  @observable etapeStats = {};

  @observable etapesData = etapes;

  @computed
  get total() {
    return this.etapesData.reduce((prev, cur) => ({
      name: "Totaal",
      km: Math.round((prev.km + cur.km) * 100) / 100,
      knooppunten: prev.knooppunten + cur.knooppunten,
      cities: prev.cities + cur.cities
    }));
  }

  @action setEtapeStats = stats => (this.etapeStats = stats);
  @action showTotal = () => (this.etapeStats = this.total);
}

export default new EtapesStore();

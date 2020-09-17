export default class AgencyModel {
    constructor(item) {
      this.name = item && item.name ? item.name : null;
      this.category = item && item.category ? item.category : null;
      this.address = item && item.address ? item.address : null;
      this.email = item && item.email ? item.email : null
      this.telephone = item && item.telephone ? item.telephone : null
    }
  
    toJson() {
      return JSON.parse(JSON.stringify(this));
    }
  }
  
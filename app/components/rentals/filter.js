import Component from "@glimmer/component";

export default class RentalsFilterComponent extends Component {
  get results() {
    let { rentals, query } = this.args;

    if (query) {
      const search = query.toLowerCase();
      rentals = rentals.filter(
        (rental) =>
          rental.title.toLowerCase().includes(search) ||
          rental.city.toLowerCase().includes(search)
      );
    }

    return rentals;
  }
}

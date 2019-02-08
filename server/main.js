import { Meteor } from "meteor/meteor";

Meteor.startup(() => {
  import { Items } from "/imports/api/items";

  if (Items.find().count() === 0) {
    let i;
    for (i = 0; i < 10; i++) {
      Items.insert(
        faker.helpers.createCard() // random contact card containing many pro);
      );
    }
  }

  Meteor.publish("ItemsList", function() {
    // Meteor._sleepForMs(3000); //sample lazy loading

    const self = this;
    const data = Items.find();
    if (data) return data;
    return self.ready();
  });
});

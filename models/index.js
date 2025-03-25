const Sequelize = require("sequelize");
const sequelize = require("../config/database");
const Admin = require("./admin.model")(sequelize, Sequelize);
const Customer = require("./customer.model")(sequelize, Sequelize);
const Customer_card = require("./customer_card.model")(sequelize, Sequelize);
const Payment_method = require("./payment_method.model")(sequelize, Sequelize);
const Delivery_method = require("./delivery_method.model")(sequelize,Sequelize);
const Discount_coupon = require("./discount_coupon.model")(sequelize,Sequelize);
const Booking = require("./booking.model")(sequelize, Sequelize);
const Status = require("./status.model")(sequelize,Sequelize);
const Cart = require("./cart.model")(sequelize,Sequelize);
const Lang = require("./lang.model")(sequelize,Sequelize);
const Gender = require("./gender.model")(sequelize,Sequelize);
const Country = require("./country.model")(sequelize,Sequelize);
const Region = require("./region.model")(sequelize,Sequelize);
const District = require("./district.model")(sequelize,Sequelize);
const Flat = require("./flat.model")(sequelize,Sequelize);
const Customer_address = require("./customer_address.model")(sequelize,Sequelize);
const Venue = require("./venue.model")(sequelize,Sequelize);
const Venue_photo = require("./venue_photo.model")(sequelize,Sequelize);
const Venue_type = require("./venue_type.model")(sequelize,Sequelize);
const Venue_venuetype = require("./venue_venuetype.model")(sequelize,Sequelize);
const Seat_type = require("./seat_type.model")(sequelize,Sequelize);
const Seat = require("./seat.model")(sequelize,Sequelize);
const Sector = require("./sector.model")(sequelize,Sequelize);
const Event_type = require("./event_type.model")(sequelize,Sequelize);
const Human_category = require("./human_category.model")(sequelize,Sequelize);
const Event = require("./event.model")(sequelize,Sequelize);
const Ticket_status = require("./ticket_status.model")(sequelize,Sequelize);
const Ticket_type = require("./ticket_type.model")(sequelize,Sequelize);
const Ticket = require("./ticket.model")(sequelize,Sequelize);
const Cart_item = require("./cart_item.model")(sequelize,Sequelize);

Booking.associate(sequelize.models);
Delivery_method.associate(sequelize.models);
Payment_method.associate(sequelize.models);
Discount_coupon.associate(sequelize.models);
Cart.associate(sequelize.models);
Status.associate(sequelize.models);
Customer.associate(sequelize.models);
Customer_card.associate(sequelize.models);
Lang.associate(sequelize.models);
Gender.associate(sequelize.models);
Region.associate(sequelize.models);
District.associate(sequelize.models);
Flat.associate(sequelize.models);
Country.associate(sequelize.models);
Customer_address.associate(sequelize.models);
Venue.associate(sequelize.models);
Venue_photo.associate(sequelize.models);
Venue_type.associate(sequelize.models);
Venue_venuetype.associate(sequelize.models);
Seat_type.associate(sequelize.models);
Seat.associate(sequelize.models);
Sector.associate(sequelize.models);
Event_type.associate(sequelize.models);
Human_category.associate(sequelize.models);
Event.associate(sequelize.models);
Ticket_status.associate(sequelize.models);
Ticket_type.associate(sequelize.models);
Ticket.associate(sequelize.models);
Cart_item.associate(sequelize.models);


module.exports = {
  sequelize,
  Admin,
  Customer,
  Payment_method,
  Delivery_method,
  Discount_coupon,
  Booking,
  Status,
  Cart,
  Lang,
  Gender,
  Customer_card,
  Country,
  Region,
  District,
  Flat,
  Customer_address,
  Venue,
  Venue_photo,
  Venue_type,
  Venue_venuetype,
  Seat_type,
  Seat,
  Sector,
  Event_type,
  Human_category,
  Event,
  Ticket_status,
  Ticket_type,
  Ticket,
  Cart_item,
};

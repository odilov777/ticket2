const express = require("express");
const dotenv = require("dotenv");
const { sequelize } = require("./models");
const adminRoute = require("./routes/adminRoute");
const customerRoutes = require("./routes/customerRoute");
const customer_cardRoute = require("./routes/customer_cardRoute");
const payment_methodRoute = require("./routes/payment_methodRoute");
const delivery_mothodRoute = require("./routes/delivery_mothodRoute");
const discount_couponRoute = require("./routes/discount_couponRoute");
const bookingRoute = require("./routes/bookingRoute");
const statusRoute = require("./routes/statusRoute");
const cartRoute = require("./routes/cartRoute");
const langRoute = require("./routes/langRoute");
const genderRoute = require("./routes/genderRoute");
const countryRoute = require("./routes/countryRoute");
const regionRoute = require("./routes/regionRoute");
const districtRoute = require("./routes/districtRoute");
const flatRoute = require("./routes/flatRoute");
const customer_addressRoute = require("./routes/customer_addressRoute");
const venueRoute = require("./routes/venueRoute");
const venue_photoRoute = require("./routes/venue_photoRoute");
const venue_typeRoute = require("./routes/venue_typeRoute");
const venue_venuetypeRoute = require("./routes/venue_venuetypeRoute");
const sectorRoute = require("./routes/sectorRoute");
const seat_typeRoute = require("./routes/seat_typeRoute");
const seatRoute = require("./routes/seatRoute");
const event_typeRoute = require("./routes/event_typeRoute");
const human_categoryRoute = require("./routes/human_categoryRoute");
const eventRoute = require("./routes/eventRoute");
const ticket_statusRoute = require("./routes/ticket_statusRoute");
const ticket_typeRoute = require("./routes/ticket_typeRoute");
const ticketRoute = require("./routes/ticketRoute");
const cart_itemRoute = require("./routes/cart_itemRoute");
const setupSwagger = require("./swagger/swagger");
const cors = require("cors");
dotenv.config();

const app = express();

app.use(express.json());
app.use(
    cors({
        origin: "*",
    })
)

app.use("/api", adminRoute)
app.use("/api", customerRoutes)
app.use("/api", payment_methodRoute)
app.use("/api", delivery_mothodRoute)
app.use("/api", discount_couponRoute)
app.use("/api", bookingRoute)
app.use("/api", statusRoute)
app.use("/api", cartRoute)
app.use("/api", langRoute)
app.use("/api", genderRoute)
app.use("/api", customer_cardRoute)
app.use("/api", countryRoute)
app.use("/api", regionRoute)
app.use("/api", districtRoute)
app.use("/api", flatRoute)
app.use("/api", customer_addressRoute)
app.use("/api", venueRoute)
app.use("/api", venue_photoRoute)
app.use("/api", venue_typeRoute)
app.use("/api", venue_venuetypeRoute)
app.use("/api", sectorRoute)
app.use("/api", seat_typeRoute)
app.use("/api", seatRoute)
app.use("/api", event_typeRoute)
app.use("/api", human_categoryRoute)
app.use("/api", eventRoute)
app.use("/api", ticket_statusRoute)
app.use("/api", ticket_typeRoute)
app.use("/api", ticketRoute)
app.use("/api", cart_itemRoute)

setupSwagger(app);

const PORT = process.env.PORT || 3000;

sequelize.sync().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    })
})

import mongoose from 'mongoose';

const orderSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    orderItems: [
      {
        name: { type: String, required: true },
        qty: { type: Number, required: true },
        image: { type: String, required: true },
        price: { type: Number, required: true },
        product: {
          type: mongoose.Schema.Types.ObjectId,
          required: true,
          ref: 'Product',
        },
      },
    ],
    shippingAddress: {
      // address, city, postalCode, country
      address: { type: String, required: true },
      city: { type: String, required: true },
      postalCode: { type: String, required: true },
      country: { type: String, required: true },
    },
    // paymentMethod, paymentResult
    paymentMethod: {
      type: String,
      required: true,
    },
    paymentResult: {
      // id, status, update_time, email_address
      id: { type: String },
      status: { type: String },
      update_time: { type: String },
      email_address: { type: String },
    },
    itemsPrice: {
      type: Number,
      required: true,
      default: 0.0, // prices are formated as decimals
    },
    taxPrice: {
      type: Number,
      required: true,
      default: 0.0, // prices are formated as decimals
    },
    shippingPrice: {
      type: Number,
      required: true,
      default: 0.0, // prices are formated as decimals
    },
    totalPrice: {
      type: Number,
      required: true,
      default: 0.0, // prices are formated as decimals
    },
    isPaid: {
      type: Boolean,
      required: true,
      default: false,
    },
    paidAt: {
      // date
      type: Date,
    },
    isDelivered: {
      type: Boolean,
      required: true,
      default: false,
    },
    deliveredAt: {
      // date
      type: Date,
    },
  },
  {
    timestamps: true, // createdAt, updatedAt
  }
);

const Order = mongoose.model('Order', orderSchema);

export default Order;

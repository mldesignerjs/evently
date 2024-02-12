import { Document, Schema, model, models } from 'mongoose'

export interface IOrder extends Document {
    stripeId: string
    totalAmount: string
    createdAt: Date
    buyer: {
        _id: string
        firstName: string
        lastName: string
    }
    event: {
        _id: string
        title: string
    }
}

export type IOrderItem = {
    _id: string
    totalAmount: string
    createdAt: Date
    buyer: string
    eventId: string
    eventTitle: string
}

const OrderSchema = new Schema({
    createdAt: {
        type: Date,
        default: Date.now,
    },
    stripeId: {
        type: String,
        required: true,
        unique: true,
    },
    totalAmount: {
        type: String,
    },
    event: {
        type: Schema.Types.ObjectId,
        ref: 'Event',
    },
    buyer: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
})

const Order = models.Order || model('Order', OrderSchema)

export default Order

import { Router } from 'express'
import * as controller from '../controllers/order'

const orders = Router({mergeParams: true});

orders.route('/')
  .get(controller.get)
  .post(controller.create)

orders.route('/:orderId')
  .get(controller.get)
  .put(controller.update)
  .delete(controller.remove)

orders.route('/:orderId/done')
  .put(controller.update)

export default orders
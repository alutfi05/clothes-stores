const { order, customer, clothe } = require("../models");

class OrderController {
    static async getOrders(req, res) {
        try {
            let orders = await order.findAll({
                include: [customer, clothe],
                order: [["id", "asc"]],
            });

            res.render("orderViews/order.ejs", {
                title: "Orders List Page",
                location: "orders",
                orders,
            });
        } catch (error) {
            res.json(error);
        }
    }

    static createPage(req, res) {
        res.render("orderViews/createPage.ejs", {
            title: "Order Create Page",
            location: "orders",
        });
    }

    static async create(req, res) {
        try {
            const { customerId, clotheId } = req.body;

            let createOrder = await order.create({
                customerId: +customerId,
                clotheId: +clotheId,
            });

            res.redirect("/orders");
        } catch (error) {
            res.json(error);
        }
    }

    static async delete(req, res) {
        try {
            const id = +req.params.orderId;

            let deleteOrder = await order.destroy({ where: { id } });

            deleteOrder === 1
                ? res.redirect("/orders")
                : res.json({ message: `Order id ${id} not found!` });
        } catch (error) {
            res.json(error);
        }
    }

    static async updatePage(req, res) {
        try {
            const id = +req.params.orderId;

            let findOrderById = await order.findByPk(id);

            res.render("orderViews/updatePage.ejs", {
                title: "Order Update Page",
                location: "orders",
                findOrderById,
            });
        } catch (error) {
            res.json(error);
        }
    }

    static async update(req, res) {
        try {
            const id = +req.params.orderId;
            const { customerId, clotheId } = req.body;

            let updateOrder = await order.update(
                { customerId, clotheId },
                { where: { id } }
            );

            updateOrder[0] === 1
                ? res.redirect("/orders")
                : res.json({ message: `Order id ${id} not found!` });
        } catch (error) {
            res.json(error);
        }
    }
}

module.exports = OrderController;

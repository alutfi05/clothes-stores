const { customer, clothe, order } = require("../models");

class CustomerController {
    static async getCustomers(req, res) {
        try {
            let customers = await customer.findAll({
                include: [clothe],
                order: [["id", "asc"]],
            });

            res.render("customerViews/customer.ejs", {
                title: "Customers List Page",
                location: "customers",
                customers,
            });
        } catch (error) {
            res.json(error);
        }
    }

    static createPage(req, res) {
        res.render("customerViews/createPage.ejs", {
            title: "Customer Create Page",
            location: "customers",
        });
    }

    static async create(req, res) {
        try {
            const { name, email, phoneNumber, city, address, postalCode } =
                req.body;

            let createCustomer = await customer.create({
                name,
                email,
                phoneNumber,
                city,
                address,
                postalCode,
            });

            res.redirect("/customers");
        } catch (error) {
            res.json(error);
        }
    }

    static async delete(req, res) {
        try {
            const id = +req.params.customerId;

            let deleteCustomer = await customer.destroy({ where: { id } });

            deleteCustomer === 1
                ? res.redirect("/customers")
                : res.json({ message: `Customer id ${id} not found!` });
        } catch (error) {
            res.json(error);
        }
    }

    static async updatePage(req, res) {
        try {
            const id = +req.params.customerId;

            let findCustomerById = await customer.findByPk(id);

            res.render("customerViews/updatePage.ejs", {
                title: "Customer Update Page",
                location: "customers",
                findCustomerById,
            });
        } catch (error) {
            res.json(error);
        }
    }

    static async update(req, res) {
        try {
            const id = +req.params.customerId;
            const { name, email, phoneNumber, city, address, postalCode } =
                req.body;

            let updateCustomer = await customer.update(
                { name, email, phoneNumber, city, address, postalCode },
                { where: { id } }
            );

            updateCustomer[0] === 1
                ? res.redirect("/customers")
                : res.json({ message: `Customer id ${id} not found!` });
        } catch (error) {
            res.json(error);
        }
    }

    static async details(req, res) {
        try {
            const id = +req.params.customerId;

            let result = await order.findAll({
                where: { customerId: id },
                include: [customer, clothe],
            });

            let clothes = result.map((el) => {
                return el.clothe.dataValues;
            });

            let resultOrder = {
                ...result[0].customer.dataValues,
                clothes,
            };

            res.render("customerViews/detail.ejs", {
                title: "Detail Customer By Clothes",
                location: "customers",
                resultOrder,
            });
        } catch (error) {
            res.json(error);
        }
    }
}

module.exports = CustomerController;

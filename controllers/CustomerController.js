const { customer, clothe } = require("../models");

class CustomerController {
    static async getCustomers(req, res) {
        try {
            let customers = await customer.findAll({
                // include: [clothe],
                order: [["id", "asc"]],
            });

            // res.render("customerViews/customer.ejs", { customers });
            res.json(customers);
        } catch (error) {
            res.json(error);
        }
    }

    static createPage(req, res) {
        res.render("customerViews/createPage.ejs");
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

            res.render("customerViews/updatePage.ejs", { findCustomerById });
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
}

module.exports = CustomerController;

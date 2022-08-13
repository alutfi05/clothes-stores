const { clothe, category, customer, order } = require("../models");

class ClotheController {
    static async getClothes(req, res) {
        try {
            let clothes = await clothe.findAll({
                include: [category, customer],
                order: [["id", "asc"]],
            });

            res.render("clotheViews/clothe.ejs", {
                title: "Clothes List Page",
                location: "clothes",
                clothes,
            });
        } catch (error) {
            res.json(error);
        }
    }

    static createPage(req, res) {
        res.render("clotheViews/createPage.ejs", {
            title: "Clothe Add Page",
            location: "clothes",
        });
    }

    static async create(req, res) {
        try {
            const { name, image, price, stock, categoryId } = req.body;

            let createClothe = await clothe.create({
                name,
                image,
                price,
                stock,
                categoryId,
            });

            res.redirect("/clothes");
        } catch (error) {
            res.json(error);
        }
    }

    static async delete(req, res) {
        try {
            const id = +req.params.clotheId;

            let deleteClothe = await clothe.destroy({ where: { id } });

            deleteClothe === 1
                ? res.redirect("/clothes")
                : res.json({ message: `Clothe id ${id} not found!` });
        } catch (error) {
            res.json(error);
        }
    }

    static async updatePage(req, res) {
        try {
            const id = +req.params.clotheId;

            let findClotheById = await clothe.findByPk(id);

            res.render("clotheViews/updatePage.ejs", {
                title: "Clothe Update Page",
                location: "clothes",
                findClotheById,
            });
        } catch (error) {
            res.json(error);
        }
    }

    static async update(req, res) {
        try {
            const id = +req.params.clotheId;
            const { name, image, price, stock, categoryId } = req.body;

            let updateClothe = await clothe.update(
                { name, image, price, stock, categoryId },
                { where: { id } }
            );

            updateClothe[0] === 1
                ? res.redirect("/clothes")
                : res.json({ message: `Clothe id ${id} not found!` });
        } catch (error) {
            res.json(error);
        }
    }

    static async details(req, res) {
        try {
            const id = +req.params.clotheId;

            let result = await order.findAll({
                where: { clotheId: id },
                include: [clothe, customer],
            });

            let customers = result.map((el) => {
                return el.customer.dataValues;
            });

            let resultOrder = {
                ...result[0].clothe.dataValues,
                customers,
            };

            res.render("clotheViews/detail.ejs", {
                title: "Detail Clothe By Customers",
                location: "clothes",
                resultOrder,
            });
        } catch (error) {
            res.json(error);
        }
    }
}

module.exports = ClotheController;

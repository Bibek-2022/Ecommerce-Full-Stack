import express from "express";
import {
  categoryValidation,
  updateCategoryValidation,
} from "../middlewares/validationMiddleware.js";
import {
  createCategory,
  getCategories,
  getCategoriesByID,
  updateCategoriesByID,
} from "../models/adminUser/CategoryModel.js";
import slugify from "slugify";

const router = express.Router();

router.get("/:_id?", async (res, req, next) => {
  try {
    const { _id } = req.params;
    const result = _id ? await getCategoriesByID(_id) : await getCategories();
    res.json({
      status: "success",
      message: "Here are the categories",
      result,
    });
  } catch (error) {
    next(error);
  }
});

// add the catogery
router.post("/", categoryValidation, async (req, res, next) => {
  try {
    req.body.slug = slugify(req.body.name, {
      lower: true,
      trim: true,
    });
    const result = await createCategory(req.body);

    console.log(result);
    result?._id
      ? res.json({
          status: "success",
          message: "New Category has been added",
        })
      : res.json({
          status: "error",
          message: "Unable to create the category please try again",
        });
  } catch (error) {
    error.status = 500;

    if (error.message.includes("E11000 duplicate key error collection")) {
      error.status = 200;
      error.message = "This category has already exist. use the different name";
    }
    next(error);
  }
});

router.put("/", updateCategoryValidation, async (req, res, next) => {
  try {
    console.log(req.body);
    const result = await updateCategoriesByID(req.body);

    result?._id
      ? res.json({ status: success, message: "Category has been updated" })
      : res.json({ status: success, message: "Category has not been updated" });
  } catch (error) {
    next(error);
  }
});
export default router;

const HasTag = require("../models/hashtags");

class HasTagRepository {

  async create(data) {
    try {
      const tag = await HasTag.create(data);
      return tag;
    } catch (error) {
      console.log(error);
    }
  }

  async bulkcreate(data) {
    try {
      const tag = await HasTag.insertMany(data);
      return tag
    } catch (error) {
      console.log(error);
    }
  }

  async get(id){
    try {
        const tag = await HasTag.findById(id);
        return tag;
      } catch (error) {
        console.log(error);
      }
  }

  async destroy(id){
    try {
        const response = await HasTag.findByIdAndRemove(data);
        return response
      } catch (error) {
        console.log(error);
      }
  }

  async findByName(list) {
    try {
      const tag = await HasTag.find({
        title : list
      });
      return tag;
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = HasTagRepository

const User = require('../model/User');
module.exports = {
  async index(req, res){
    const users = await User.findAll();
    return res.json(users);
  },
  async getUserById(req, res){
   
      const { id } = req.params;
      
      const user = await User.findByPk(id);
      console.debug(id);

      if(!user){
        return res.status(400).json({error: 'User not found!'});
        
      }
      else{
        return res.json(user);
      }
  },
  async store(req, res) {
    const { name, email, password } = req.body;
    const user = await User.create({name: name, email: email, password: password});
    return res.json(user);
  }
};

const DataUser = require('../model/DataUser');
const User = require('../model/User');

module.exports = {
    async index(req, res){
      const { user_id } = req.params;      
      const user = await User.findByPk(user_id, {
        include: { association: 'data_users' }
      });
      if(!user){
        return res.status(400).json({error: 'User not found!'});
      }
      else{
        return res.json(user);
      }
    },
    async store(req, res){

      const { user_id } = req.params;
      const { image, bio, site } = req.body;


      const user  = await User.findByPk(user_id);
      

      if(!user){
        return res.status(400).json({error: 'User not found!'});   
           
      }
      else{
        const dataUsers = await DataUser.create({user_id: user_id, image: image, bio: bio, site: site});
        
        return res.json(dataUsers);
      }

    }

};

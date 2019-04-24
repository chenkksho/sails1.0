/**
 * ComController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

  hi:function (req,res) {
    var params=req.allParams()
    if (params.usr) {
    res.send(params.usr+"被点击了")    
    }else{
    res.send("emmmm....")      
    }
  }

};


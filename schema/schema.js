const graphql = require('graphql');

const _ = require('lodash');
const User = require('../models/user');
const Company = require('../models/company');

const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLSchema
} = graphql;

// const users =[
//     {id:'45',firstname:'rehan',age:56},
//     {id:'5',firstname:'ahmed',age:6},
//     {id:'455',firstname:'syed',age:5},
//     {id:'1',firstname:'syed',age:5},
// ];



// const company =[
//     {id:'45',name:'wfs22423rehan',description:'dsfgbdfbgsx'},
//     {id:'5',name:'134234ahmed',description:'sgdfg segdrg'},
    
// ];


const UserType = new GraphQLObjectType({
    name:'User',
    fields:{
        id:{type:GraphQLString},
        firstname:{type:GraphQLString},
        age:{type:GraphQLInt},
        

    }
});

const CompanyType = new GraphQLObjectType({
    name:'Company',
    fields:{
        id:{type:GraphQLString},
        name:{type:GraphQLString},
        description:{type:GraphQLString},
        

    }
});


const RootQuery = new GraphQLObjectType({
    name:'RootQueryType',
    fields:{
        user:{
            type:UserType,
            args:{id:{type:GraphQLString}},
            resolve(parentValue,args){
                return _.find(users, { id: args.id });

            }
        },
        company:{
            type:CompanyType,
            args:{id:{type:GraphQLString}},
            resolve(parentValue,args){
                return _.find(company, { id: args.id });

            }

        }

    }
});

const Mutation = new GraphQLObjectType({
    name:'Mutation',
    fields:{
        addUser:{
            type:UserType,
            args:{
                firstname:{type:GraphQLString},
                age:{type:GraphQLInt}
            },
            resolve(parentValue,args){
                let abc = new User({
                    firstname:args.firstname,
                    age:args.age
                });
                return abc.save()
            }

        }
    }
})

module.exports= new GraphQLSchema({
    query:RootQuery,
    mutation:Mutation
});
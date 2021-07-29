const { AuthenticationError } = require("apollo-server-express");
const { User } = require("../models");


const resolvers = {
    Query: {
        me: async (parent, args, context) => {
            if (context.user) {
                const userData = await user.findOne({ _id: context.user._id })
                    .select('-__v -password')

                return userData;
            }
        }
    },

    Mutation: {
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });

            if (!user) {
                throw new AuthenticationError('Incorrect Credentials!');
            }

            const correctPassword = await user.isCorrectPassword(password);

            if (!correctPassword) {
                throw new AuthenticationError('Incorrect Credentials!');
            }
            const token = signToken(user);
            return { token, user };
        },
        addUser:,
        saveBook:,
        removeBook:
    }
};
  
module.exports = resolvers;
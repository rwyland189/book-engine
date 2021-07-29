

const resolvers = {
    Query: {
        me: async (parent, args, context) => {
            if (context.user) {
                const userData = await user.findOne({ _id: context.user._id })
                    .select('-__v -password')

                return userData;
            }
        }
    }
};
  
module.exports = resolvers;
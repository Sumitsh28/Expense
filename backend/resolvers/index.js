import { mergeResolvers } from "@graphql-tools/merge";
import UserResolver from "./user.resolver.js";
import TransactionResolver from "./transactions.resolver.js";

const mergeResolver = mergeResolvers([UserResolver, TransactionResolver]);

export default mergeResolver;

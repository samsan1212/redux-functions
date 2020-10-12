import type { ActionTypeCreator } from "./type";

function toType(prefix: string): ActionTypeCreator {
    return (actionName: string) => `${prefix}::${actionName}`
};

export default toType;

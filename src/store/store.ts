// External imports
import { createStore, createTypedHooks } from 'easy-peasy';

// Internal imports
import AuthModel, {AuthModelType} from "./models/auth"
import AccountModel, {AccountModelType} from "./models/account"

const typedHooks = createTypedHooks<StoreModel>();
export const useStoreActions = typedHooks.useStoreActions;
export const useStoreDispatch = typedHooks.useStoreDispatch;
export const useStoreState = typedHooks.useStoreState;

interface StoreModel {
    auth: AuthModelType,
    account: AccountModelType
}

const store = createStore<StoreModel>({
  auth: AuthModel,
  account: AccountModel
});

export default store
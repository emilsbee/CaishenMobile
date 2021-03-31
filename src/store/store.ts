// External imports
import { createStore, createTypedHooks } from 'easy-peasy';

// Internal imports
import AuthModel, {AuthModelType} from "./models/auth"

const typedHooks = createTypedHooks<StoreModel>();
export const useStoreActions = typedHooks.useStoreActions;
export const useStoreDispatch = typedHooks.useStoreDispatch;
export const useStoreState = typedHooks.useStoreState;

interface StoreModel {
    auth: AuthModelType
}

const store = createStore<StoreModel>({
  auth: AuthModel
});

export default store
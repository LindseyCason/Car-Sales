import { initialState } from "../initialData"
import { ADD_FEATURE, REMOVE_FEATURE } from "../actions"


const reducer = (state = initialState, action)=>{

    switch(action.type){
        case ADD_FEATURE:
        // const { price } = action.payload    
            return{
                ...state,
                additionalPrice: (state.additionalPrice += action.payload.price),
                car: {
                    ...state.car,
                    features: [...state.car.features, action.payload]
                }
            }
        case REMOVE_FEATURE:
        const { price, id } = action.payload;

            return{
                ...state,
                additionalPrice: (state.additionalPrice -= price),
                car: {...state.car, 
                features: state.car.features.filter(feature =>
                    feature.id !== id
                    //keeping all of the ones that we do not want to remove.
                )}
            }    
    
            default:
                return state;
        }
};

export default reducer;
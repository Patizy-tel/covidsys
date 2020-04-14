import {
    GENDERMALE,
    GENDERFEMALE,
    MALENEGATIVE,
    MALEPOSITIVE,
    BULUAYO_NEGATIVE,
    BULUAYO_POSITIVE,
    MIDLANDS_NEGATIVE,
    MIDLANDS_POSITIVE,
    HARARE_NEGATIVE,
    HARARE_POSITIVE,
    MANICALAND_NEGATIVE,
    MANICALAND_POSITIVE,
    MASHONALAND_CENTRAL_NEGATIVE,
    MASHONALAND_CENTRAL_POSITIVE,
    MASHONALAND_EAST_NEGATIVE,
    MASHONALAND_EAST_POSITIVE,
    MASHONALAND_WEST_POSITIVE,
    MASHONALAND_WEST_NEGATIVE,
    MASVINGO_NEGATIVE,
    MASVINGO_POSITIVE,
    MATABELELAND_NORTH_NEGATIVE,
    MATABELELAND_NORTH_POSITIVE,
    MATABELELAND_SOUTH_NEGATIVE,
    MATABELELAND_SOUTH_POSITIVE
} from "../types";



const initialState = {
    gendermale: 24,
    genderfemale: 20,
    malepositive: 20,
    malenegative: 10,
    buluwayopositive: 10,
    buluwayonegative: 10,
    h1:23,
    h2:33,
    mid1: 10,
    mid2: 10,
    mic1: 10,
    mic2: 10,
    mas1: 10,
    mas2: 10,
    matn1: 10,
    matn2: 10,
    matc1: 10,
    matc2: 10,
    mashn1: 10,
    mashn2: 10,
    mashe1: 10,
    mashe2: 10,
    mashw1: 10,
    mashw2: 10,
}

export default function (state = initialState, action) {
    switch (action.type) {
        case GENDERMALE:
            return {
                ...state,

                gendermale: action.payload
            };

        case GENDERFEMALE:
            return {
                ...state,

                genderfemale: action.payload
            };



        case MALENEGATIVE:
            return {
                ...state,

                malenegative: action.payload
            };

        case MALEPOSITIVE:
            return {
                ...state,

                malepositive: action.payload
            };
        case BULUAYO_NEGATIVE:
            return {
                ...state,

                bulawayonegative: action.payload
            };

        case BULUAYO_POSITIVE:
            return {
                ...state,

                bulawayopositive: action.payload
            };
        case MIDLANDS_POSITIVE:
            return {
                ...state,

                mid1: action.payload
            };

        case MIDLANDS_NEGATIVE:
            return {
                ...state,

                mid2: action.payload
            };
        case MANICALAND_POSITIVE:
            return {
                ...state,

                mic1: action.payload
            };

        case MANICALAND_NEGATIVE:
            return {
                ...state,

                mic2: action.payload
            };
        case MASVINGO_POSITIVE:
            return {
                ...state,

                mas1: action.payload
            };

        case MASVINGO_NEGATIVE:
            return {
                ...state,

                mas2: action.payload
            };
        case MATABELELAND_NORTH_POSITIVE:
            return {
                ...state,

                matn1: action.payload
            };

        case MATABELELAND_NORTH_NEGATIVE:
            return {
                ...state,

                matn2: action.payload
            };
        case MATABELELAND_SOUTH_POSITIVE:
            return {
                ...state,

                mats1: action.payload
            };

        case MATABELELAND_SOUTH_NEGATIVE:
            return {
                ...state,

                mats2: action.payload
            };
        case MASHONALAND_CENTRAL_NEGATIVE:
            return {
                ...state,

                matc2: action.payload
            };

        case MASHONALAND_CENTRAL_POSITIVE:
            return {
                ...state,

                matc1: action.payload
            };
        case MASHONALAND_EAST_POSITIVE:
            return {
                ...state,

                mashe1: action.payload
            };

        case MASHONALAND_EAST_NEGATIVE:
            return {
                ...state,

                mashe2: action.payload
            };
        case MASHONALAND_WEST_POSITIVE:
            return {
                ...state,

                mashw1: action.payload
            };

        case MASHONALAND_WEST_NEGATIVE:
            return {
                ...state,

                mashw2: action.payload
            };

            case HARARE_POSITIVE:
                return {
                    ...state,
    
                    h1: action.payload
                };
    
                case HARARE_NEGATIVE:
                    return {
                        ...state,
        
                        h2: action.payload
                    };
        






        default:
            return state;
    }
}
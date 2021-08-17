import { Entity } from "../modules/Entity";

export interface EntityState<T extends Entity = Entity> {
    byId : {
       [id:number] : T;
    }
    selectedId? : number;
    loadingOne : boolean;
    loadingList : boolean;
}

export const initialEntityState = {
    byId : {},
    loadingOne : false,
    loadingList : false,
}

export const getIds = (entities : Entity[]) =>{
    return entities.map((e) => e.id)
}

export const select = (state:EntityState , id: number) =>{
    return {
        ...state,
        selectedId : id,
        loadingOne : true
    }
}

export const addOne = (state:EntityState , entity : Entity) =>{
    return {
        ...state,
        byId : {...state.byId , [entity.id] : entity}
    }
}

export const addMany = (state:EntityState , entities : Entity[]) =>{
    if(entities.length === 0){
        return state;
    }
    const entityMap = entities.reduce((prev , entity) => {
        return {...prev , [entity.id] : entity}
    } , {});

    return {
        ...state,
        byId : {...state.byId , ...entityMap},
    }
}
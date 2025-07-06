import Konva from "konva";
import { getContext, setContext } from "svelte";

const stageKey = Symbol('konva-stage');

export function setStageContext(getStage: () => Konva.Stage) {
    setContext(stageKey, getStage);
}

export function getStageContext() {
    
    const getStage = getContext<() => Konva.Stage>(stageKey);
    if(!getStage) {
        throw new Error('A layer must have a Stage as a parent.')
    }
    const stage = getStage();
    return stage;
}
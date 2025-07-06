<script lang="ts">
    import Konva from 'konva';
	import { onDestroy, type Snippet } from "svelte";
	import { getStageContext, setLayerContext } from './konva-context';
    import { type KonvaEventHooks, registerEvents } from './events';

    let {children, ...props}: { children?: Snippet} & Konva.LayerConfig & KonvaEventHooks = $props();

    const stage = getStageContext();
    const node = new Konva.Layer(props);
    stage.add(node);
    registerEvents(props, node);
    setLayerContext(node);

    Object.keys(props).filter(prop => !prop.startsWith('on')).forEach(prop => {
        $effect(() => {
            node.setAttr(prop, props[prop]);
        })
    });

    onDestroy(() => {
        node.destroy();
    });
</script>

{@render children?.()}

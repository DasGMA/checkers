export default function renderEdges(gridSize) {
    const right = () => {
        const edgesMap = {};
        const num = Math.sqrt(gridSize) - 1;
        for (let i = num; i < gridSize; i += Math.sqrt(gridSize)) {
            if (!edgesMap[i]) {
                edgesMap[i] = i;
            }
        }
        return edgesMap;
    }

    const left = () => {
        const edgesMap = {};
        for (let i = 0; i < gridSize; i += Math.sqrt(gridSize)) {
            if (!edgesMap[i]) {
                edgesMap[i] = i;
            }
        }
        return edgesMap;
    }

    return { right: right(), left: left() }
}
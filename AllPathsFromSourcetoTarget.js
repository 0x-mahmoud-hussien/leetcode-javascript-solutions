
// https://leetcode.com/problems/all-paths-from-source-to-target?envType=problem-list-v2&envId=graph
var allPathsSourceTarget = function(graph) {
    const n = graph.length;
    const result = [];

    function dfs(vertex, path) {
        path.push(vertex);

        if(vertex === n - 1) {
            result.push([...path]);
        } else {
            for(let neighbor of graph[vertex]) {
                dfs(neighbor, path);
            }
        }
        path.pop();
    }
    dfs(0, []);
    return result;
}

const graph1 = [[1,2],[3],[3],[]];
console.log(allPathsSourceTarget(graph1));

const graph2 = [[4,3,1],[3,2,4],[3],[4],[]];
console.log(allPathsSourceTarget(graph2));
import React from 'react';
import ReactFlow, {
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
} from 'reactflow';
import { BaseComponentProps } from '@/interfaces';
import 'reactflow/dist/style.css';
import './navbar.scss';
import stepHtppRequest from './steps/httpRequest';

interface NodeProps {
  id: string;
  position: { x: number; y: number };
  data: { label: string; updateNode: any, params: { [n: string]: any } };
  type?: string;
}

  const initialNodes: NodeProps[] = [
    { id: '1', position: { x: 0, y: 0 }, data: { label: '1', updateNode: () => '', params: {} } },
    { id: '2', position: { x: 0, y: 100 }, data: { label: '2', updateNode: () => '', params: {} } },
  ];
  
  const initialEdges = [{ id: 'dfkjdfglkdfjglkjkj', source: '1', target: '3' }];

const Navbar: React.FC<BaseComponentProps> = (_: BaseComponentProps) => {
  const nodeTypes = React.useMemo(() => ({ recipe: stepHtppRequest, httpRequest: stepHtppRequest }), []);  
  
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const nodesRefs = React.useRef<NodeProps[]>(nodes);

  const onConnect = React.useCallback(
    (params: any) => {
      setEdges((eds) => addEdge(params, eds))
    }, [setEdges]
  );

  const test = React.useCallback((index: string, value: string, property: string) => {
    setNodes((nds: any) => {
      const aux = nds.map((node: any) => {
        if (node.id === index) {
          node.data = {
            ...node.data,
            [property]: value,
          };
        }
  
        return node;
      });
      return aux;
    });    
  }, [setNodes])

  React.useEffect(() => {
    nodesRefs.current = nodes;
  }, [nodes])

  const addNode = () => {
    const aux = [...nodesRefs.current]
    aux.push({ 
      id: (nodes.length + 1).toString(), 
      data: { label: 'Node', params: {}, updateNode: test }, 
      type: 'recipe',
      position: { x: 0, y: 0 } 
    })
    setNodes(aux)
  }

  
  return (
    <div className="navbarWrap">
      <div>
        <> {JSON.stringify(nodes)}</>
        
      </div>
      <button onClick={addNode}>Node</button>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        nodeTypes={nodeTypes}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
      >
        <Controls />
        <Background />
      </ReactFlow>
    </div>
  )
};

export default Navbar;

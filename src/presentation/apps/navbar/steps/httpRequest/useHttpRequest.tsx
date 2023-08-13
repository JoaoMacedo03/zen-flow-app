import React from "react";

const InitialState = {
  name: null,
  params: {}
};

const httpType = {
  GET:'GET',
  POST:'POST',
  PUT:'PUT',
  PATCH:'PATCH',
  DELETE:'DELETE',
}

const httpTypeRequiredBody = [ httpType.POST, httpType.PATCH, httpType.PUT]

export default function useHttpRequest({ data, id }: any) {
    const [expanded, setExpanded] = React.useState(false);
    const [state, setState] = React.useState(data || InitialState);
    const refCard = React.useRef<any>(null);

    const items = [
      { name: 'GET', value: httpType.GET },
      { name: 'POST', value: httpType.POST },
      { name: 'PUT', value: httpType.PUT },
      { name: 'PATCH', value: httpType.PATCH },
      { name: 'DELETE', value: httpType.DELETE },
    ];

    const handleExpandClick = () => {
      setExpanded(!expanded);
    };
  
    const handleChange = (value: any, property: string) => {
      setState((state: any) => ({ ...state, [property]: value}));
      data.updateNode(id, value, property);
    };
  
    const handleChangeParams = (value: any, property: string) => {
      setState((newState: any) => {
        const { params } = newState;
        params[property] = value;
        const newData = {
          ...newState,
          params
        }
        data.updateNode(id, params, 'params');
        return newData;
      });
    };

    return { expanded, state, refCard, items, handleExpandClick, handleChange, handleChangeParams, httpTypeRequiredBody };
}
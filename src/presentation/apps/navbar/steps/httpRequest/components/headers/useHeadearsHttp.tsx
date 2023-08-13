import React from "react";

export default function useHeadearsHttp({ onChange, value }: any) {
    const [headers, setHeaders] = React.useState<{ [n: string]: string | number | null }>({});
    const [valueKey, setValueKey] = React.useState<string | number | null>(null);
    const [key, setKey] = React.useState<string>('');
  
    const addHeader = () => {
      setHeaders((obj) => ({ ...obj, [key]: valueKey }))
      setValueKey('');
      setKey('');
    }
  
    const deleteHeader = (newKey: string) => {
      const data: { [n: string]: string | number | null  } = {};
      for (const header of Object.keys(headers)) {
          if (newKey !== header) data[header] = headers[header] as string | number | null;
      }
  
      setHeaders(data);
    }
  
    const handleValue = (data: string | number | null) => {
      setValueKey(data);
    }
  
    const handleKey = (data: string) => {
      setKey(data)
    }
  
    React.useEffect(() => {
      onChange(headers);
    }, [headers])
  
    React.useEffect(() => {
      setHeaders(value || {});
    }, [])
    
    return { handleValue, handleKey, deleteHeader, addHeader, headers, valueKey, key}
}

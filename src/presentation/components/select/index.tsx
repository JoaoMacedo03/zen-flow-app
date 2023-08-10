import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

interface IOptions<T> {
    label: string;
    items: T[];
    keyValue: string;
    keyTitle: string;
    onChange: (value: any) => void
}

export default function GroupedSelect<T>({ label, items, keyValue, keyTitle, onChange }: IOptions<T>) {
  return (
      <FormControl sx={{ width: '100%' }}>
        <InputLabel htmlFor="grouped-native-select">{label}</InputLabel>
        <Select native defaultValue="" id="grouped-native-select" label="Grouping" onChange={({ target: { value }}) => onChange(value) }>
          <option aria-label="None" value="" />
          {
            items.map((item: any) => <option key={item[keyValue]} value={item[keyValue] }>{item[keyTitle]as string}</option>)
          }
        </Select>
      </FormControl>
  );
}
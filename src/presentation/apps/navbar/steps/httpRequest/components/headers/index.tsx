import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import Icon from '@mdi/react';
import { mdiPlus, mdiDelete } from '@mdi/js';
import useHeadearsHttp from './useHeadearsHttp';

interface IOptions {
    onChange: (value: { [n: string]: string | number | null } ) => void;
    value: null | { [n: string]: string | number | null }
}

export default function HeadearsHttp({ onChange, value }: IOptions) {
  const { handleValue, handleKey, deleteHeader, addHeader, headers, valueKey, key } = useHeadearsHttp({ onChange, value });

  return (
    <Box sx={{ width: '100%', bgcolor: 'background.paper', m:0 }}>
      <Box sx={{ my: 0, mx: 0 }}>
        <Grid container alignItems="center">
          <Grid item xs>
            <Typography gutterBottom variant="h6" component="div">
              Headers
            </Typography>
          </Grid>
        </Grid>
      </Box>
      <Divider />
      <Box sx={{ m: 0 }}>
        {
            Object.keys(headers).map((key) => (
                <Box component="form" noValidate autoComplete="off" key={key} sx={{ marginTop: '15px' }}>
                    <Grid container spacing={1} >
                        <Grid item  xs={5}>
                             <TextField InputProps={{ readOnly: true, }} disabled id="outlined-basic" label="Chave" size="small" variant="outlined" fullWidth value={key} />
                        </Grid>
                        <Grid item  xs={6}>
                            <TextField InputProps={{ readOnly: true, }}  disabled  id="outlined-basic" label="Valor" size="small" variant="outlined" fullWidth value={headers[key]} />
                        </Grid>
                        <Grid item xs={1}>
                           <Button sx={{ color: 'red' }}  onClick={() => deleteHeader(key)}><Icon path={mdiDelete} size={1} /></Button>
                        </Grid>
                    </Grid>
                </Box>))
        }

                <Box component="form" noValidate autoComplete="off" sx={{ marginTop: '15px' }}>
                    <Grid container spacing={1} >
                        <Grid item  xs={5}>
                             <TextField id="outlined-basic" label="Chave" variant="outlined" size="small" fullWidth value={key} onChange={({ target:{ value:  newValue} }) => handleKey(newValue)} />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField id="outlined-basic" label="Valor" variant="outlined" size="small" fullWidth value={valueKey} onChange={({ target:{ value:  newValue} }) => handleValue(newValue)}/>
                        </Grid>
                        <Grid item xs={1}>
                           <Button disabled={!key} onClick={() => addHeader()}><Icon path={mdiPlus} size={1} /></Button>
                        </Grid>
                    </Grid>
                </Box>

            </Box>
        </Box>
  );
}

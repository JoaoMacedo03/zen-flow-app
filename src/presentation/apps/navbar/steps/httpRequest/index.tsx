import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Handle, Position } from 'reactflow';
import Icon from '@mdi/react';
import { mdiApi, mdiDelete } from '@mdi/js';
import SelectCustom from '@/presentation/components/select';
import { Grid, TextField } from '@mui/material';
import { NodeResizer } from '@reactflow/node-resizer';
import EditorVscode from '@/presentation/components/editorVscode';
import HeadearsHttp from './components/headers';
import useHttpRequest from './useHttpRequest';

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function stepHtppRequest({ data, id }: any) {
  const { refCard, handleChange, expanded, handleExpandClick, handleChangeParams, items, state, httpTypeRequiredBody } = useHttpRequest({ data, id });

  return (
    <>
      <NodeResizer isVisible={true} minWidth={180} color='green'/>    
      <Handle type="target" position={Position.Top} />
      <Card sx={{ width: '100%', height: '100%' }} ref={refCard}>
        <CardContent>
          <Grid container spacing={2}>
            <Grid item xs={2}>
              <Icon path={mdiApi} size={2} />
            </Grid>
            <Grid item xs={10}>
              <TextField 
                fullWidth
                label="Nome"
                id="outlined-basic"
                onChange={(evt) => handleChange(evt.target.value, 'name')}
                value={state.name}
              />
            </Grid>
          </Grid>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <Icon path={mdiDelete} size={1} />
          </IconButton>
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <SelectCustom label='Tipo' keyTitle='name' keyValue='id' items={items}  onChange={(value) => handleChangeParams(value, 'type')}></SelectCustom>
              </Grid>
              <Grid item xs={12}>
                <TextField 
                  fullWidth
                  label="Url"
                  id="outlined-basic"
                  onChange={({ target }) => handleChangeParams(target.value, 'url')}
                  value={state.params?.url}
                />
              </Grid>
              <Grid item xs={12}>
                <HeadearsHttp onChange={(value) => handleChangeParams(value, 'headers')} value={state.params?.headers} />
              </Grid>
              { httpTypeRequiredBody.includes(state.params?.type) && (
                <Grid item xs={12} sx={{ height: '500px', width: '400px'}}>
                  <EditorVscode label="Corpo"  value={state.params?.body || ''}  onChange={(value) => handleChangeParams(value, 'body')}/>                   
                </Grid>)
              }
            </Grid>
          </CardContent>
        </Collapse>
      </Card>
      <Handle type="source" position={Position.Bottom} />
    </>
  );
}